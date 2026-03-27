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
import microsoftLogo from '../../docs/Microsoft-logo.svg';

const highlights = [
  {
    title: 'Sustainability with computer vision',
    description:
      'The solution detects visible indicators such as deformed wings, mites, and infestation patterns without disrupting the hive.'
  },
  {
    title: 'Built on Azure Custom Vision',
    description:
      'The pipeline used curated image data, iterative training, and published prediction endpoints to support practical deployment.'
  },
  {
    title: 'Showcased by Microsoft India',
    description:
      'The work was highlighted as an example of how Azure AI can contribute to agriculture, conservation, and applied innovation.'
  }
];

const facts = [
  { value: 'Azure', label: 'Custom Vision at the core' },
  { value: 'AI', label: 'Early disease detection for hives' },
  { value: 'Microsoft', label: 'India showcase recognition' }
];

const BeesAzureStory = () => {
  const panelBg = useColorModeValue(
    'linear-gradient(135deg, #332106 0%, #845904 42%, #0f4c81 100%)',
    'linear-gradient(135deg, #231605 0%, #5f4106 42%, #0b375d 100%)'
  );
  const borderColor = useColorModeValue('rgba(255,255,255,0.2)', 'rgba(253,230,138,0.22)');
  const textMuted = useColorModeValue('rgba(255,250,235,0.92)', 'rgba(254,240,138,0.88)');
  const cardBg = useColorModeValue('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.06)');
  const cardBorder = useColorModeValue('rgba(255,255,255,0.16)', 'rgba(255,255,255,0.1)');
  const kickerBg = useColorModeValue('rgba(255,255,255,0.14)', 'rgba(255,255,255,0.09)');
  const logoPanelBg = useColorModeValue('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.07)');
  const factBg = useColorModeValue('rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)');

  return (
    <Box id="bees" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <Box
          borderRadius={{ base: '28px', md: '36px' }}
          overflow="hidden"
          position="relative"
          bg={panelBg}
          border="1px solid"
          borderColor={borderColor}
          boxShadow="0 35px 80px -45px rgba(41, 26, 3, 0.9)"
        >
          <Box
            position="absolute"
            top="-80px"
            right="-40px"
            w="260px"
            h="260px"
            bg="rgba(250,204,21,0.18)"
            filter="blur(90px)"
            borderRadius="full"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="-110px"
            left="-50px"
            w="240px"
            h="240px"
            bg="rgba(96,165,250,0.14)"
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
                  Azure AI Showcase
                </Badge>
                <Stack spacing={4}>
                  <Heading
                    color="white"
                    fontSize={{ base: '2rem', md: '3rem' }}
                    lineHeight={1.05}
                    letterSpacing="-0.03em"
                    maxW="2xl"
                  >
                    Bees health detection built on Azure
                  </Heading>
                  <Text color={textMuted} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.75} maxW="2xl">
                    A computer-vision solution designed to help detect bee disease earlier,
                    reduce invasive inspections, and support pollinator health.
                  </Text>
                </Stack>
                <Text color={textMuted} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                  The story combines sustainability and applied AI: Azure Custom Vision was used
                  to classify healthy bees, ant problems, and varroa or hive beetle infections,
                  creating a usable blueprint for conservation-focused field intelligence.
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
                    href="https://www.youtube.com/watch?v=d92H_wPyrUE&t=16s"
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="white"
                    color="#805700"
                    _hover={{ bg: 'rgba(255,255,255,0.92)' }}
                  >
                    Watch Microsoft showcase
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/highlights/bees-health-detection"
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
                  <Image src={microsoftLogo} alt="Microsoft logo" maxW={{ base: '82px', md: '96px' }} />
                </Box>
                <Stack spacing={2} align="center">
                  <Text
                    fontSize="sm"
                    letterSpacing="0.22em"
                    textTransform="uppercase"
                    color={textMuted}
                    textAlign="center"
                  >
                    Applied sustainability
                  </Text>
                  <Text color="white" fontWeight="semibold" fontSize="lg" textAlign="center">
                    Azure AI for pollinator health
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
                      <Box w="10px" h="10px" borderRadius="full" bg="#facc15" flexShrink={0} />
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

export default BeesAzureStory;
