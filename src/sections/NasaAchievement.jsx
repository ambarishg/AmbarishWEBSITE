import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import nasaLogo from '../../docs/nasa-logo.svg';

const highlights = [
  {
    title: 'Citizen scientist recognition',
    description:
      'Featured by NASA for citizen science contributions, reinforcing a body of work that connects analytical rigor with public-interest outcomes.'
  },
  {
    title: 'First-place NASA-sponsored win',
    description:
      "Won DrivenData's Random Walk of the Penguins challenge, sponsored by NASA, with a forecasting solution built for Antarctic conservation."
  },
  {
    title: 'Forecasting built for scale',
    description:
      'Handled 648 penguin site and species combinations using imputation discipline and an ensemble of XGBoost, Random Forest, ARIMA, ETS, and Prophet models.'
  }
];

const facts = [
  { value: '1st', label: 'Place in the penguin challenge' },
  { value: '648', label: 'Site-species time series modeled' },
  { value: '5', label: 'Forecasting models in the ensemble' }
];

const recognitionRail = [
  'NASA citizen science profile feature',
  'DrivenData first-place performance in a NASA-sponsored challenge',
  'Conservation forecasting built for real-world analytical scale'
];

const NasaAchievement = () => {
  const panelBg = useColorModeValue(
    'radial-gradient(circle at top right, rgba(125,211,252,0.22), transparent 22%), radial-gradient(circle at bottom left, rgba(59,130,246,0.2), transparent 24%), linear-gradient(145deg, #030b18 0%, #07172d 32%, #0d2d53 68%, #0c4d7f 100%)',
    'radial-gradient(circle at top right, rgba(125,211,252,0.18), transparent 22%), radial-gradient(circle at bottom left, rgba(59,130,246,0.18), transparent 24%), linear-gradient(145deg, #020814 0%, #071221 32%, #0a2240 68%, #0d4570 100%)'
  );
  const borderColor = useColorModeValue('rgba(255,255,255,0.2)', 'rgba(191,219,254,0.22)');
  const textMuted = useColorModeValue('rgba(240,249,255,0.92)', 'rgba(226,232,240,0.84)');
  const softText = useColorModeValue('rgba(226,232,240,0.78)', 'rgba(226,232,240,0.76)');
  const cardBg = useColorModeValue('rgba(255,255,255,0.09)', 'rgba(255,255,255,0.05)');
  const cardBorder = useColorModeValue('rgba(255,255,255,0.14)', 'rgba(255,255,255,0.08)');
  const kickerBg = useColorModeValue('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.08)');
  const logoPanelBg = useColorModeValue('rgba(255,255,255,0.09)', 'rgba(255,255,255,0.05)');
  const factBg = useColorModeValue('rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)');

  return (
    <Box id="nasa" py={{ base: 14, md: 18 }}>
      <Container maxW="7xl">
        <Box
          borderRadius={{ base: '32px', md: '40px' }}
          overflow="hidden"
          position="relative"
          bg={panelBg}
          border="1px solid"
          borderColor={borderColor}
          boxShadow="0 45px 120px -52px rgba(1, 12, 28, 0.98)"
        >
          <Box
            position="absolute"
            inset="1px"
            borderRadius={{ base: '31px', md: '39px' }}
            border="1px solid"
            borderColor="rgba(255,255,255,0.08)"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            top="-90px"
            right="-60px"
            w="300px"
            h="300px"
            bg="rgba(255,255,255,0.12)"
            filter="blur(110px)"
            borderRadius="full"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="-140px"
            left="-70px"
            w="280px"
            h="280px"
            bg="rgba(125,211,252,0.16)"
            filter="blur(120px)"
            borderRadius="full"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            top="20%"
            left="52%"
            w="520px"
            h="1px"
            bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)"
            transform="rotate(-18deg)"
            opacity={0.6}
            pointerEvents="none"
          />

          <Box
            position="relative"
            px={{ base: 6, md: 10, xl: 12 }}
            py={{ base: 10, md: 12, xl: 14 }}
            bg="linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
          >
            <Grid templateColumns={{ base: '1fr', xl: '1.3fr 0.7fr' }} gap={{ base: 10, xl: 10 }}>
              <Stack spacing={7}>
                <Stack spacing={5}>
                  <Badge
                    alignSelf="flex-start"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    bg={kickerBg}
                    color="white"
                    fontSize="xs"
                    letterSpacing="0.24em"
                    textTransform="uppercase"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.16)"
                  >
                    NASA Recognition
                  </Badge>
                  <Stack spacing={4}>
                    <Text
                      color={softText}
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="0.32em"
                    >
                      Research Recognition
                    </Text>
                    <Heading
                      color="white"
                      fontSize={{ base: '2.6rem', md: '4.2rem', xl: '5rem' }}
                      fontWeight="800"
                      lineHeight={0.95}
                      letterSpacing="-0.05em"
                      maxW="4xl"
                    >
                      NASA-backed conservation work grounded in careful analysis
                    </Heading>
                    <Text color={textMuted} fontSize={{ base: 'lg', md: 'xl' }} lineHeight={1.8} maxW="3xl">
                      From citizen science recognition to a first-place NASA-sponsored forecasting
                      win, this work reflects a combination of technical care, public-interest
                      relevance, and measurable results.
                    </Text>
                  </Stack>
                </Stack>

                <Grid templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }} gap={{ base: 6, lg: 8 }}>
                  <Box
                    borderRadius="3xl"
                    border="1px solid"
                    borderColor={cardBorder}
                    bg={cardBg}
                    p={{ base: 6, md: 7 }}
                    backdropFilter="blur(16px)"
                    boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
                  >
                    <Stack spacing={4}>
                      <Text color={softText} fontSize="xs" textTransform="uppercase" letterSpacing="0.24em">
                        Challenge Context
                      </Text>
                      <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.9}>
                        The Random Walk of the Penguins challenge focused on forecasting Adelie,
                        Chinstrap, and Gentoo penguin populations across remote Antarctic sites. The
                        solution combined careful missing-data repair with a multi-model ensemble to
                        support more reliable conservation decisions.
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    borderRadius="3xl"
                    border="1px solid"
                    borderColor={cardBorder}
                    bg={cardBg}
                    p={{ base: 6, md: 7 }}
                    backdropFilter="blur(16px)"
                    boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
                  >
                    <Stack spacing={4}>
                      <Text color={softText} fontSize="xs" textTransform="uppercase" letterSpacing="0.24em">
                        External References
                      </Text>
                      {recognitionRail.map((item, index) => (
                        <HStack key={item} spacing={4} align="flex-start">
                          <Text color="#7dd3fc" fontWeight="800" minW="1.5rem">
                            0{index + 1}
                          </Text>
                          <Text color={textMuted} lineHeight={1.8}>
                            {item}
                          </Text>
                        </HStack>
                      ))}
                    </Stack>
                  </Box>
                </Grid>

                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
                  {facts.map((fact) => (
                    <Box
                      key={fact.label}
                      borderRadius="2xl"
                      border="1px solid"
                      borderColor="rgba(255,255,255,0.12)"
                      bg={factBg}
                      px={{ base: 5, md: 6 }}
                      py={{ base: 5, md: 6 }}
                      backdropFilter="blur(14px)"
                    >
                      <Text color="white" fontSize={{ base: '2.2rem', md: '2.8rem' }} fontWeight="800" lineHeight={1}>
                        {fact.value}
                      </Text>
                      <Text color={textMuted} fontSize="sm" mt={3} lineHeight={1.6}>
                        {fact.label}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>

                <Flex gap={3} wrap="wrap">
                  <Button
                    as="a"
                    href="https://science.nasa.gov/people/ambarish-ganguly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="white"
                    color="#0b3b67"
                    _hover={{ bg: 'rgba(255,255,255,0.92)' }}
                  >
                    View NASA profile
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/highlights/random-walk-of-the-penguins"
                    variant="outline"
                    color="white"
                    borderColor="rgba(255,255,255,0.44)"
                    _hover={{ bg: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.62)' }}
                  >
                    Read the case study
                  </Button>
                </Flex>
              </Stack>

              <Stack spacing={6}>
                <Box
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.14)"
                  bg={logoPanelBg}
                  px={{ base: 6, md: 7 }}
                  py={{ base: 7, md: 8 }}
                  backdropFilter="blur(14px)"
                  boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
                >
                  <Stack spacing={6} align="center" textAlign="center">
                    <Box
                      w={{ base: '132px', md: '162px' }}
                      h={{ base: '132px', md: '162px' }}
                      borderRadius="full"
                      bg="rgba(255,255,255,0.96)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="0 28px 60px -34px rgba(0,0,0,0.45)"
                    >
                      <Image src={nasaLogo} alt="NASA logo" maxW={{ base: '92px', md: '112px' }} />
                    </Box>
                    <Stack spacing={2}>
                      <Text
                        fontSize="xs"
                        letterSpacing="0.26em"
                        textTransform="uppercase"
                        color={softText}
                      >
                        NASA Profile
                      </Text>
                      <Heading color="white" fontSize={{ base: '1.4rem', md: '1.7rem' }} lineHeight={1.15}>
                        Citizen science and conservation impact with institutional recognition
                      </Heading>
                    </Stack>
                  </Stack>
                </Box>

                <Box
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.14)"
                  bg={logoPanelBg}
                  px={{ base: 6, md: 7 }}
                  py={{ base: 6, md: 7 }}
                  backdropFilter="blur(14px)"
                >
                  <Stack spacing={4}>
                    <Text color={softText} fontSize="xs" textTransform="uppercase" letterSpacing="0.24em">
                      Signature Outcome
                    </Text>
                    <Heading color="white" fontSize={{ base: '1.35rem', md: '1.6rem' }} lineHeight={1.2}>
                      Conservation forecasting work recognised for both method and impact
                    </Heading>
                    <Text color={textMuted} lineHeight={1.8}>
                      The section is intended to show the work plainly: the challenge context, the
                      modelling approach, and the recognition that followed.
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 5 }} mt={{ base: 10, md: 12 }}>
              {highlights.map((item) => (
                <Box
                  key={item.title}
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  bg={cardBg}
                  p={{ base: 5, md: 6 }}
                  backdropFilter="blur(14px)"
                  boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
                >
                  <Stack spacing={3}>
                    <HStack spacing={3} align="center">
                      <Box w="10px" h="10px" borderRadius="full" bg="#7dd3fc" flexShrink={0} />
                      <Heading
                        as="h3"
                        fontFamily="body"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight="800"
                        letterSpacing="-0.02em"
                        lineHeight={1.25}
                        color="white"
                      >
                        {item.title}
                      </Heading>
                    </HStack>
                    <Text color={textMuted} lineHeight={1.75}>
                      {item.description}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NasaAchievement;
