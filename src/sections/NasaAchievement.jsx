import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
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

const NasaAchievement = () => {
  const panelBg = useColorModeValue(
    'linear-gradient(135deg, #05172c 0%, #0b3460 48%, #14609b 100%)',
    'linear-gradient(135deg, #03111f 0%, #082947 48%, #0f4f81 100%)'
  );
  const borderColor = useColorModeValue('rgba(255,255,255,0.22)', 'rgba(191,219,254,0.24)');
  const textMuted = useColorModeValue('rgba(240,249,255,0.92)', 'rgba(226,232,240,0.84)');
  const cardBg = useColorModeValue('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.06)');
  const cardBorder = useColorModeValue('rgba(255,255,255,0.16)', 'rgba(255,255,255,0.1)');
  const kickerBg = useColorModeValue('rgba(255,255,255,0.14)', 'rgba(255,255,255,0.1)');
  const logoPanelBg = useColorModeValue('rgba(255,255,255,0.14)', 'rgba(255,255,255,0.07)');
  const factBg = useColorModeValue('rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)');

  return (
    <Box id="nasa" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <Box
          borderRadius={{ base: '28px', md: '36px' }}
          overflow="hidden"
          position="relative"
          bg={panelBg}
          border="1px solid"
          borderColor={borderColor}
          boxShadow="0 35px 80px -45px rgba(3, 27, 49, 0.95)"
        >
          <Box
            position="absolute"
            top="-90px"
            right="-60px"
            w="260px"
            h="260px"
            bg="rgba(255,255,255,0.14)"
            filter="blur(90px)"
            borderRadius="full"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="-120px"
            left="-60px"
            w="240px"
            h="240px"
            bg="rgba(125,211,252,0.16)"
            filter="blur(100px)"
            borderRadius="full"
            pointerEvents="none"
          />
          <Box
            position="relative"
            px={{ base: 6, md: 10 }}
            py={{ base: 10, md: 12 }}
            bg="linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))"
          >
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              align={{ base: 'flex-start', lg: 'stretch' }}
              justify="space-between"
              gap={{ base: 8, lg: 12 }}
            >
              <Stack spacing={6} maxW="3xl">
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
                  <Heading
                    color="white"
                    fontSize={{ base: '2rem', md: '3rem' }}
                    lineHeight={1.05}
                    letterSpacing="-0.03em"
                    maxW="2xl"
                  >
                    NASA recognition with real analytical depth
                  </Heading>
                  <Text color={textMuted} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.75} maxW="2xl">
                    From citizen science recognition to a first-place NASA-sponsored forecasting
                    win, this work reflects analytical depth applied to environmental impact at a
                    real operational scale.
                  </Text>
                </Stack>
                <Text color={textMuted} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                  The Random Walk of the Penguins challenge focused on forecasting Adelie,
                  Chinstrap, and Gentoo penguin populations across remote Antarctic sites. The
                  solution combined careful missing-data repair with a multi-model ensemble to
                  support more reliable conservation decisions.
                </Text>
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3}>
                  {facts.map((fact) => (
                    <Box
                      key={fact.label}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="rgba(255,255,255,0.14)"
                      bg={factBg}
                      px={4}
                      py={4}
                    >
                      <Text color="white" fontSize="2xl" fontWeight="extrabold" lineHeight={1}>
                        {fact.value}
                      </Text>
                      <Text color={textMuted} fontSize="sm" mt={2} lineHeight={1.5}>
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

              <Stack
                spacing={5}
                align="center"
                justify="center"
                minW={{ base: 'auto', lg: '260px' }}
                alignSelf="stretch"
                borderRadius="3xl"
                border="1px solid"
                borderColor="rgba(255,255,255,0.14)"
                bg={logoPanelBg}
                px={{ base: 6, md: 8 }}
                py={{ base: 6, md: 8 }}
                backdropFilter="blur(12px)"
              >
                <Box
                  w={{ base: '124px', md: '148px' }}
                  h={{ base: '124px', md: '148px' }}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.94)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 24px 50px -30px rgba(0,0,0,0.45)"
                >
                  <Image src={nasaLogo} alt="NASA logo" maxW={{ base: '86px', md: '104px' }} />
                </Box>
                <Stack spacing={2} align="center">
                  <Text
                    fontSize="sm"
                    letterSpacing="0.22em"
                    textTransform="uppercase"
                    color={textMuted}
                    textAlign="center"
                  >
                    Research credibility
                  </Text>
                  <Text color="white" fontWeight="semibold" fontSize="lg" textAlign="center">
                    Citizen science and conservation impact
                  </Text>
                </Stack>
              </Stack>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 5 }} mt={{ base: 10, md: 12 }}>
              {highlights.map((item) => (
                <Box
                  key={item.title}
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  bg={cardBg}
                  p={{ base: 5, md: 6 }}
                  backdropFilter="blur(12px)"
                  boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
                >
                  <Stack spacing={3}>
                    <HStack spacing={3} align="center">
                      <Box w="10px" h="10px" borderRadius="full" bg="#7dd3fc" flexShrink={0} />
                      <Heading size="sm" color="white">
                        {item.title}
                      </Heading>
                    </HStack>
                    <Text color={textMuted} lineHeight={1.7}>
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
