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
  const linkAccent = useColorModeValue('brand.600', 'brand.300');
  const gradient = useColorModeValue(
    'linear(to-br, brand.500, brand.300)',
    'linear(to-br, brand.300, brand.500)'
  );
  const overlay = useColorModeValue('brand.50', 'rgba(59, 130, 246, 0.12)');
  const headingColor = useColorModeValue('brand.800', 'brand.100');

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
        top={{ base: '-4rem', md: '-6rem' }}
        left={{ base: '-10rem', md: '-8rem' }}
        w={{ base: '24rem', md: '32rem' }}
        h={{ base: '24rem', md: '32rem' }}
        bgGradient={gradient}
        opacity={0.35}
        filter="blur(80px)"
        rounded="full"
      />
      <Box
        position="absolute"
        bottom={{ base: '-6rem', md: '-8rem' }}
        right={{ base: '-8rem', md: '-6rem' }}
        w={{ base: '18rem', md: '24rem' }}
        h={{ base: '18rem', md: '24rem' }}
        bg={overlay}
        opacity={0.6}
        filter="blur(90px)"
        rounded="full"
      />
      <Container maxW="7xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, lg: 16 }}>
          <Stack spacing={6} justify="center">
            <Stack spacing={4}>
              <Tag
                size="lg"
                colorScheme="brand"
                variant="subtle"
                bg={useColorModeValue('rgba(59, 134, 245, 0.12)', 'rgba(59, 134, 245, 0.18)')}
                w="fit-content"
                px={5}
                py={2}
              >
                Data & AI Transformation Leader
              </Tag>
              <Heading as="h1" size="2xl" lineHeight={1.05} maxW="32rem" color={headingColor}>
                {hero.name}
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="subtleText">
                {hero.title}
              </Text>
              <Text fontSize="md" color="caption">
                {hero.location}
              </Text>
            </Stack>

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

            <Wrap spacing={2}>
              {hero.skills.map((skill) => (
                <WrapItem key={skill}>
                  <Tag size="md" variant="subtle" colorScheme="brand" px={4} py={1.5}>
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Flex align="center" justify="center">
            <Stack spacing={8} w="full">
              <Flex direction="column" gap={4} layerStyle="card" p={{ base: 6, md: 8 }}>
                {hero.headlineHighlights.map((item) => {
                  const isNASAHighlight = item.includes('NASA Citizen Scientist');
                  const isBeesShowcase = item.includes('Bees health detection solution');
                  const isFutureReady = item.includes('Future Ready Champions of Code');
                  return (
                    <Flex key={item} align="flex-start" gap={4}>
                      <Icon
                        as={CheckCircleIcon}
                        color={accent}
                        boxSize={5}
                        mt={1}
                        sx={{ flexShrink: 0 }}
                      />
                      <Stack spacing={2}>
                        <Text color="text" fontSize="md">
                          {item}
                        </Text>
                        {isNASAHighlight ? (
                          <Link
                            as={RouterLink}
                            to="/highlights/random-walk-of-the-penguins"
                            color={linkAccent}
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
                            color={linkAccent}
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
                            color={linkAccent}
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
              </Flex>
              <Flex layerStyle="subtleCard" align="center" gap={4} p={{ base: 5, md: 6 }}>
                <Avatar
                  size="xl"
                  src={heroAvatar}
                  name={hero.name}
                  bg="brand.500"
                  color="white"
                  showBorder
                  borderColor={accent}
                  boxShadow="lg"
                />
                <Box>
                  <Text fontWeight="semibold" color="text">
                    26+ years of experience
                  </Text>
                  <Text color="subtleText" fontSize="sm">
                    Driving utility transformation through data and AI
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
