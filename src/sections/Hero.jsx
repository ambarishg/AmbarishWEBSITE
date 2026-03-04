import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { hero } from '../data/profile.js';
import heroAvatar from '../../images/AG.jpg';

const Hero = () => {
  const accent = useColorModeValue('brand.600', 'brand.300');
  const badgeBg = useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 134, 245, 0.18)');
  const badgeColor = useColorModeValue('brand.700', 'brand.200');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('rgba(59, 134, 245, 0.15)', 'rgba(59, 134, 245, 0.35)');
  const secondarySkillBg = useColorModeValue('rgba(15, 23, 42, 0.04)', 'rgba(255, 255, 255, 0.08)');
  const secondarySkillColor = useColorModeValue('gray.500', 'gray.400');
  const primarySkills = new Set(hero.primarySkills ?? hero.skills.slice(0, 4));

  return (
    <Box
      id="hero"
      position="relative"
      pt={{ base: 24, md: 28 }}
      pb={{ base: 20, md: 28 }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bg={useColorModeValue('rgba(255,255,255,0.65)', 'rgba(15,23,42,0.65)')}
      />
      <Box
        position="absolute"
        top={{ base: '-6rem', md: '-8rem' }}
        left={{ base: '-10rem', md: '-8rem' }}
        w={{ base: '26rem', md: '32rem' }}
        h={{ base: '26rem', md: '32rem' }}
        bg="linear-gradient(135deg, rgba(59, 124, 223, 0.75), rgba(59, 134, 245, 0.55))"
        opacity={0.35}
        filter="blur(90px)"
        rounded="full"
      />
      <Box
        position="absolute"
        bottom={{ base: '-6rem', md: '-8rem' }}
        right={{ base: '-8rem', md: '-6rem' }}
        w={{ base: '18rem', md: '24rem' }}
        h={{ base: '18rem', md: '24rem' }}
        bg={useColorModeValue('rgba(15, 23, 42, 0.75)', 'rgba(59, 134, 245, 0.08)')}
        opacity={0.6}
        filter="blur(90px)"
        rounded="full"
      />
      <Container maxW="7xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="flex-start">
          <Stack spacing={6} align="flex-start">
            <Tag
              size="sm"
              variant="subtle"
              bg={badgeBg}
              color={badgeColor}
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Data & AI Transformation Leader
            </Tag>
            <Heading
              as="h1"
              size="2xl"
              lineHeight={1.1}
              letterSpacing="-0.5px"
              color={useColorModeValue('brand.800', 'brand.100')}
            >
              {hero.name}
            </Heading>
            {hero.title && (
              <Heading
                as="h2"
                size="lg"
                fontWeight="semibold"
                lineHeight={1.4}
                color={useColorModeValue('gray.600', 'gray.200')}
              >
                {hero.title}
              </Heading>
            )}
            {hero.valueStatement && (
              <Text fontSize="lg" color={textColor} maxW="32rem" lineHeight={1.7}>
                {hero.valueStatement}
              </Text>
            )}
            <Wrap spacing={3}>
              <WrapItem>
                <Button
                  as={Link}
                  href={`mailto:${hero.contact.email}`}
                  leftIcon={<FaEnvelope />}
                  colorScheme="brand"
                >
                  Email
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  as={Link}
                  href={hero.contact.linkedin}
                  leftIcon={<FaLinkedin />}
                  variant="outline"
                  colorScheme="brand"
                  isExternal
                >
                  LinkedIn
                </Button>
              </WrapItem>
            </Wrap>
            <Wrap spacing={3}>
              {hero.skills.map((skill) => (
                <WrapItem key={skill}>
                  <Tag
                    size="sm"
                    px={3}
                    py={1}
                    bg={
                      primarySkills.has(skill)
                        ? 'rgba(59, 134, 245, 0.12)'
                        : secondarySkillBg
                    }
                    color={primarySkills.has(skill) ? accent : secondarySkillColor}
                  >
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Stack spacing={5} align="flex-start">
            <Avatar
              boxSize={{ base: '210px', md: '270px' }}
              src={heroAvatar}
              name={hero.name}
              bg={useColorModeValue('brand.900', 'brand.900')}
              color="white"
              boxShadow="0 35px 70px rgba(15, 23, 42, 0.3)"
              filter="contrast(1.05) saturate(1.08) brightness(1.05)"
            />
            <Box
              w="full"
              layerStyle="card"
              p={{ base: 5, md: 6 }}
              bg={cardBg}
              borderColor={cardBorder}
              boxShadow="floating"
            >
              <Stack spacing={3}>
                {hero.headlineHighlights.map((item) => {
                  const isNASAHighlight = item.includes('NASA Citizen Scientist');
                  const isBeesShowcase = item.includes('Bees health detection solution');
                  const isFutureReady = item.includes('Future Ready Champions of Code');
                  return (
                    <Flex key={item} align="flex-start" gap={3}>
                      <Icon as={CheckCircleIcon} color={accent} boxSize={4} mt={1} />
                      <Stack spacing={1}>
                        <Text color="text" fontSize="md" lineHeight="tall">
                          {item}
                        </Text>
                        {isNASAHighlight ? (
                          <Link
                            as={RouterLink}
                            to="/highlights/random-walk-of-the-penguins"
                            color={accent}
                            fontWeight="semibold"
                            fontSize="sm"
                          >
                            Read the Random Walk case study →
                          </Link>
                        ) : null}
                        {isBeesShowcase ? (
                          <Link
                            as={RouterLink}
                            to="/highlights/bees-health-detection"
                            color={accent}
                            fontWeight="semibold"
                            fontSize="sm"
                          >
                            Watch the Azure showcase →
                          </Link>
                        ) : null}
                        {isFutureReady ? (
                          <Link
                            as={RouterLink}
                            to="/highlights/future-ready-champions"
                            color={accent}
                            fontWeight="semibold"
                            fontSize="sm"
                          >
                            Explore the Future Ready win →
                          </Link>
                        ) : null}
                      </Stack>
                    </Flex>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
