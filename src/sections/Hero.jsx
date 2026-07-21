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
  const badgeBg = useColorModeValue('rgba(201, 150, 31, 0.12)', 'rgba(201, 150, 31, 0.18)');
  const badgeColor = useColorModeValue('accent.800', 'accent.100');
  const textColor = useColorModeValue('#4f5b6c', '#d0dae7');
  const metricBorder = useColorModeValue('rgba(38,61,96,0.14)', 'rgba(208,220,240,0.12)');
  const panelBg = useColorModeValue('rgba(255,252,247,0.84)', 'rgba(9,19,36,0.72)');
  const panelBorder = useColorModeValue('rgba(38,61,96,0.14)', 'rgba(208,220,240,0.14)');
  const labelColor = useColorModeValue('rgba(79,91,108,0.82)', 'rgba(195,206,220,0.84)');
  const frameBg = useColorModeValue(
    'linear-gradient(160deg, rgba(255,255,255,0.75), rgba(245,237,225,0.48))',
    'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(201,150,31,0.08))'
  );
  const heroSurface = useColorModeValue('rgba(255,250,244,0.68)', 'rgba(8,18,34,0.52)');

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
            <HStack spacing={3} flexWrap="wrap">
              <Tag
                size="md"
                bg={badgeBg}
                color={badgeColor}
                px={4}
                py={1.5}
                letterSpacing="0.28em"
                textTransform="uppercase"
                fontWeight="semibold"
              >
                Senior Executive Profile
              </Tag>
              <Tag
                size="md"
                bg={useColorModeValue('rgba(38,61,96,0.06)', 'rgba(255,255,255,0.06)')}
                color={useColorModeValue('brand.800', 'gray.100')}
                px={4}
                py={1.5}
                letterSpacing="0.18em"
                textTransform="uppercase"
                fontWeight="semibold"
              >
                27 Years Experience
              </Tag>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: '4rem', md: '5.6rem', lg: '6.7rem' }}
              lineHeight={0.88}
              color={useColorModeValue('brand.900', 'white')}
              maxW="5xl"
              letterSpacing="-0.045em"
            >
              {hero.name}
            </Heading>
            {hero.title ? (
              <Heading
                as="h2"
                fontFamily="body"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="600"
                lineHeight={1.55}
                letterSpacing="0.01em"
                textTransform="uppercase"
                color={useColorModeValue('rgba(38,49,69,0.84)', 'rgba(236,242,248,0.86)')}
                maxW="4xl"
              >
                {hero.title}
              </Heading>
            ) : null}
            {hero.valueStatement ? (
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="38rem" lineHeight={1.95}>
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
                    Executive leadership with technical judgment that stays close to delivery reality.
                  </Heading>
                  <Text color="subtleText" lineHeight={1.85}>
                    Built across utilities, energy, public-interest AI, and platform modernisation, with a consistent ability to connect boardroom priorities to architecture, execution, and measurable outcomes.
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
                  A portfolio shaped for enterprise trust.
                </Heading>
                <Text color="subtleText" lineHeight={1.85}>
                  Experience, case studies, and external recognition are presented with enough context for senior stakeholders to assess judgment, range, and delivery depth quickly.
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
