import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { hero } from '../data/profile.js';
import heroAvatar from '../../images/AG.jpg';

const Hero = () => {
  const accent = useColorModeValue('brand.600', 'brand.300');
  const badgeBg = useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 134, 245, 0.18)');
  const badgeColor = useColorModeValue('brand.700', 'brand.200');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const metricBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const panelBg = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(15,23,42,0.7)');
  const panelBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const labelColor = useColorModeValue('gray.500', 'gray.400');

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
        <Grid templateColumns={{ base: '1fr', lg: '1.3fr 0.9fr' }} gap={{ base: 12, lg: 16 }} alignItems="flex-start">
          <Stack spacing={6} align="flex-start">
            <Tag
              size="md"
              bg={badgeBg}
              color={badgeColor}
              px={4}
              py={1.5}
              letterSpacing="0.3em"
              textTransform="uppercase"
              fontWeight="medium"
            >
              Data & AI Leadership
            </Tag>
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl' }}
              lineHeight={1.02}
              letterSpacing="-0.04em"
              color={useColorModeValue('brand.800', 'brand.100')}
            >
              {hero.name}
            </Heading>
            {hero.title ? (
              <Heading
                as="h2"
                size="lg"
                fontWeight="medium"
                lineHeight={1.35}
                color={useColorModeValue('gray.600', 'gray.200')}
                maxW="4xl"
              >
                {hero.title}
              </Heading>
            ) : null}
            {hero.valueStatement ? (
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="34rem" lineHeight={1.85}>
                {hero.valueStatement}
              </Text>
            ) : null}
            <HStack
              spacing={{ base: 0, md: 8 }}
              flexDirection={{ base: 'column', md: 'row' }}
              align="stretch"
              w="full"
              maxW="40rem"
              borderTop="1px solid"
              borderColor={metricBorder}
              pt={6}
            >
              {hero.authorityMetrics?.map((item) => (
                <Stack key={item.label} spacing={1} minW={{ md: '160px' }}>
                  <Text fontSize="2xl" fontWeight="bold" color={accent} lineHeight={1}>
                    {item.value}
                  </Text>
                  <Text
                    fontSize="xs"
                    color={labelColor}
                    lineHeight={1.6}
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                  >
                    {item.label}
                  </Text>
                </Stack>
              ))}
            </HStack>
            <HStack spacing={3} flexWrap="wrap">
              <Button
                as={Link}
                href={`mailto:${hero.contact.email}`}
                leftIcon={<FaEnvelope />}
                colorScheme="brand"
              >
                Email
              </Button>
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
            </HStack>
          </Stack>

          <Stack spacing={5} align="stretch">
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
              p={{ base: 5, md: 6 }}
              bg={panelBg}
              border="1px solid"
              borderColor={panelBorder}
              borderRadius="3xl"
              backdropFilter="blur(16px)"
            >
              <Stack spacing={4}>
                <Text
                  fontSize="xs"
                  fontWeight="medium"
                  letterSpacing="0.22em"
                  textTransform="uppercase"
                  color={labelColor}
                >
                  Executive Profile
                </Text>
                <Heading size="md" lineHeight={1.35}>
                  Enterprise transformation leadership with technical judgment close to the work.
                </Heading>
                <Text color="subtleText" lineHeight={1.85}>
                  Trusted across utilities, energy, public-interest AI, and platform modernisation where executive clarity and delivery credibility both matter.
                </Text>
                <Divider borderColor={panelBorder} />
                <Stack spacing={3}>
                  <Link as={RouterLink} to="/experience" color={accent} fontWeight="semibold">
                    View executive experience →
                  </Link>
                  <Link as={RouterLink} to="/highlights" color={accent} fontWeight="semibold">
                    Review selected case studies →
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
