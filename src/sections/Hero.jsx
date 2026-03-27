import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaLinkedin, FaStarOfLife } from 'react-icons/fa';
import { hero } from '../data/profile.js';
import heroAvatar from '../../images/AG.jpg';

const Hero = () => {
  const accent = useColorModeValue('brand.700', 'accent.200');
  const badgeBg = useColorModeValue('rgba(201, 150, 31, 0.1)', 'rgba(201, 150, 31, 0.18)');
  const badgeColor = useColorModeValue('accent.700', 'accent.100');
  const textColor = useColorModeValue('#4f5b6c', '#d0dae7');
  const metricBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.12)');
  const panelBg = useColorModeValue('rgba(255,250,242,0.72)', 'rgba(9,19,36,0.72)');
  const panelBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const labelColor = useColorModeValue('rgba(79,91,108,0.82)', 'rgba(195,206,220,0.84)');
  const frameBg = useColorModeValue(
    'linear-gradient(160deg, rgba(255,255,255,0.6), rgba(255,245,229,0.35))',
    'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(201,150,31,0.08))'
  );
  const heroSurface = useColorModeValue('rgba(255,250,244,0.58)', 'rgba(8,18,34,0.52)');

  return (
    <Box
      id="hero"
      position="relative"
      pt={{ base: 24, md: 28 }}
      pb={{ base: 18, md: 24 }}
      overflow="hidden"
    >
      <Box position="absolute" inset={0} bg={heroSurface} />
      <Box
        position="absolute"
        insetX={{ base: 6, md: 10 }}
        top={{ base: 8, md: 10 }}
        bottom={{ base: 2, md: 4 }}
        borderRadius={{ base: '32px', md: '40px' }}
        border="1px solid"
        borderColor={panelBorder}
        bg={frameBg}
        backdropFilter="blur(14px)"
      />
      <Container maxW="7xl" position="relative">
        <Grid templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }} gap={{ base: 12, lg: 12 }} alignItems="center">
          <Stack spacing={6} align="flex-start">
            <Tag
              size="md"
              bg={badgeBg}
              color={badgeColor}
              px={4}
              py={1.5}
              letterSpacing="0.28em"
              textTransform="uppercase"
              fontWeight="medium"
            >
              Data & AI Leadership
            </Tag>
            <Heading
              as="h1"
              fontSize={{ base: '3.5rem', md: '5.2rem', lg: '6.1rem' }}
              lineHeight={0.94}
              color={useColorModeValue('brand.900', 'white')}
              maxW="5xl"
            >
              {hero.name}
            </Heading>
            {hero.title ? (
              <Heading
                as="h2"
                fontFamily="body"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="medium"
                lineHeight={1.45}
                letterSpacing="-0.02em"
                color={useColorModeValue('rgba(38,49,69,0.84)', 'rgba(236,242,248,0.86)')}
                maxW="4xl"
              >
                {hero.title}
              </Heading>
            ) : null}
            {hero.valueStatement ? (
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="36rem" lineHeight={1.9}>
                {hero.valueStatement}
              </Text>
            ) : null}
            <HStack spacing={3} flexWrap="wrap">
              {hero.primarySkills?.map((skill) => (
                <Tag
                  key={skill}
                  px={3.5}
                  py={2}
                  bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(255,255,255,0.05)')}
                  border="1px solid"
                  borderColor={metricBorder}
                  color={useColorModeValue('brand.800', 'gray.100')}
                >
                  {skill}
                </Tag>
              ))}
            </HStack>
            <HStack
              spacing={{ base: 0, md: 8 }}
              flexDirection={{ base: 'column', md: 'row' }}
              align="stretch"
              w="full"
              maxW="42rem"
              borderTop="1px solid"
              borderColor={metricBorder}
              pt={6}
            >
              {hero.authorityMetrics?.map((item) => (
                <Stack key={item.label} spacing={1} minW={{ md: '160px' }}>
                  <Text fontSize="2xl" fontWeight="800" color={accent} lineHeight={1}>
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
              <Button as={Link} href={`mailto:${hero.contact.email}`} leftIcon={<FaEnvelope />} rightIcon={<FaArrowRight />}>
                Email
              </Button>
              <Button as={Link} href={hero.contact.linkedin} leftIcon={<FaLinkedin />} variant="outline" isExternal>
                LinkedIn
              </Button>
            </HStack>
          </Stack>

          <Stack spacing={5} align="stretch">
            <Box
              p={{ base: 5, md: 6 }}
              borderRadius="36px"
              bg={panelBg}
              border="1px solid"
              borderColor={panelBorder}
              backdropFilter="blur(16px)"
              boxShadow="0 30px 80px -45px rgba(15, 23, 42, 0.55)"
            >
              <Stack spacing={5}>
                <Box position="relative" alignSelf="center">
                  <Box
                    position="absolute"
                    inset="-14px"
                    borderRadius="full"
                    bg={useColorModeValue('rgba(201,150,31,0.18)', 'rgba(201,150,31,0.12)')}
                    filter="blur(18px)"
                  />
                  <Avatar
                    position="relative"
                    boxSize={{ base: '220px', md: '290px' }}
                    src={heroAvatar}
                    name={hero.name}
                    bg={useColorModeValue('brand.900', 'brand.900')}
                    color="white"
                    boxShadow="0 35px 70px rgba(15, 23, 42, 0.3)"
                    filter="contrast(1.05) saturate(1.08) brightness(1.05)"
                  />
                </Box>
                <Stack spacing={3}>
                  <HStack justify="space-between" align="center">
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      letterSpacing="0.24em"
                      textTransform="uppercase"
                      color={labelColor}
                    >
                      Executive Profile
                    </Text>
                    <HStack spacing={2} color={useColorModeValue('accent.600', 'accent.200')}>
                      <Icon as={FaStarOfLife} boxSize={2.5} />
                      <Icon as={FaStarOfLife} boxSize={2} />
                      <Icon as={FaStarOfLife} boxSize={2.5} />
                    </HStack>
                  </HStack>
                  <Heading size="lg" lineHeight={1.1}>
                    Enterprise transformation leadership with technical judgment close to the work.
                  </Heading>
                  <Text color="subtleText" lineHeight={1.85}>
                    Work across utilities, energy, public-interest AI, and platform modernisation, with attention to both executive direction and delivery detail.
                  </Text>
                </Stack>
              </Stack>
            </Box>
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
                  Quick Access
                </Text>
                <Heading size="md" lineHeight={1.2}>
                  A portfolio positioned for enterprise trust.
                </Heading>
                <Text color="subtleText" lineHeight={1.85}>
                  The site is organised to make it easy to review experience, case studies, and external references without unnecessary framing.
                </Text>
                <Divider borderColor={panelBorder} />
                <Stack spacing={3}>
                  <Link as={RouterLink} to="/experience" color={accent} fontWeight="semibold">
                    {'View executive experience ->'}
                  </Link>
                  <Link as={RouterLink} to="/highlights" color={accent} fontWeight="semibold">
                    {'Review selected case studies ->'}
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
