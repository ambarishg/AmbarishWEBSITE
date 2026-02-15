import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';
import SIGNASSBanner from '../../docs/SIGNASS.jpg';
import SIGNASSSceneOne from '../../docs/SIGNASS-01.png';
import SIGNASSSceneTwo from '../../docs/SIGNASS-02.jpeg';
const contributionHighlights = [
  'Session Chair for the Domain-Aware AI/ML for Real-World Signal Processing: Healthcare and Communication Perspectives track, keeping the dialogue aligned to deployment realities, ethical guardrails, and measurable signal outcomes.',
  'Industry panelist throughout the panel, addressing the themes captured in the official questionnaire where I am listed as “Mr. Ambarish Ganguly (Industry)” and covering data preparation effort, generative AI use cases, and reliability/security trade-offs.'
];

const Signass2006 = () => {
  useSEO(seo.signass2006);

  const pageBg = useColorModeValue('gray.50', '#030712');
  const cardBg = useColorModeValue('white', 'rgba(15,23,42,0.92)');
  const borderColor = useColorModeValue('rgba(148,163,184,0.3)', 'rgba(148,163,184,0.45)');
  const emphasis = useColorModeValue('brand.500', 'brand.300');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const imageBg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={pageBg} minH="100vh">
      <Box
        bgGradient="linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,64,175,0.55))"
        borderBottom="1px solid"
        borderColor={borderColor}
        boxShadow="0 25px 45px -30px rgba(15,23,42,0.95)"
      >
        <Container maxW="6xl" py={{ base: 12, md: 20 }}>
          <Stack spacing={{ base: 4, md: 8 }} maxW="3xl">
            
            <Heading
              size={{ base: 'xl', md: '3xl' }}
              color="white"
              lineHeight={1.2}
              textShadow="0 12px 25px rgba(15,23,42,0.7)"
            >
              SIGNASS 2026 reflections
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" lineHeight={1.7}>
              The 2026 conference convened industry, healthcare, and academic practitioners to reflect on
              applied signal processing. This page highlights the Session Chair role and links it to the
              separate panel discussion summary below where the panelists reflected on real-world signal
              intelligence challenges.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 6, md: 10 }}>
        <Box
          borderRadius="3xl"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
          boxShadow="0 20px 60px -35px rgba(15,118,201,0.65)"
        >
          <Image src={SIGNASSBanner} alt="SIGNASS 2026 conference banner" objectFit="cover" w="full" h={{ base: '220px', md: '320px' }} />
        </Box>
      </Container>

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <Stack spacing={10}>
          <Stack
            spacing={6}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={cardBg}
            p={{ base: 5, md: 8 }}
            boxShadow="0 18px 48px -30px rgba(15,118,201,0.65)"
          >
            <Stack spacing={3}>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.3}>
                A sustained focus on deployment-ready signal intelligence
              </Heading>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                The Domain-Aware AI/ML for Real-World Signal Processing panel blended insights across healthcare,
                communication, and the power sector. As Session Chair I guided the agenda toward responsible
                outcomes, and as Panelist I addressed practical questions about data quality, generative AI,
                and trust documented in the official panel questionnaire.
              </Text>
            </Stack>
            <Divider borderColor={borderColor} />
            <Stack spacing={3}>
              <Text fontWeight="semibold" color={emphasis}>
                Contributions
              </Text>
              {contributionHighlights.map((highlight) => (
                <Text key={highlight} color={bodyColor} lineHeight={1.6}>
                  <CheckIcon color={emphasis} mr={2} />
                  {highlight}
                </Text>
              ))}
            
            </Stack>
          </Stack>

          <Stack
            spacing={4}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={cardBg}
            p={{ base: 5, md: 8 }}
          >
            <Heading size={{ base: 'md', md: 'lg' }}>Panel discussion summary</Heading>
            <Text color={bodyColor} lineHeight={1.6}>
              The panel focused on Domain-Aware AI/ML for real-world signal processing across healthcare, communication,
              and power systems. Conversation tracks explored commercial signal-driven solutions, the trade-offs
              between data preparation and modeling, uses of generative AI for signal synthesis and anomaly detection,
              considerations for reliability/security with a human-in-the-loop, and how academia can better support
              industry over the next 5-10 years.
            </Text>
            <List spacing={1.5} color={bodyColor}>
              <ListItem>
                <ListIcon as={CheckIcon} color={emphasis} />
                Commercial adoption, sector-specific acceleration, and signal-driven AI solutions formed the opening theme.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={emphasis} />
                The “signal-to-system” reality check emphasised the disproportionate effort spent on cleaning and preprocessing.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={emphasis} />
                Generative AI discussions highlighted signal synthesis, anomaly detection, and automation pipelines in industry.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={emphasis} />
                Reliability, security, governance, and trust prompted reflections on human oversight for mission-critical systems.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={emphasis} />
                The closing theme surfaced future expectations from academia, especially around deployment readiness of domain-aware AI.
              </ListItem>
            </List>
          </Stack>

          <Stack
            spacing={4}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={cardBg}
            p={{ base: 5, md: 8 }}
            boxShadow="0 18px 48px -30px rgba(15,118,201,0.45)"
          >
            <Heading size={{ base: 'md', md: 'lg' }}>Scenes from SIGNASS 2026</Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1.7fr' }} gap={4}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={borderColor}
                bg={imageBg}
                minH={{ base: '260px', md: '280px' }}
              >
                <Image src={SIGNASSSceneOne} alt="SIGNASS snapshot 1" objectFit="contain" w="full" h="full" />
              </Box>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={borderColor}
                bg={imageBg}
                minH={{ base: '320px', md: '360px' }}
              >
                <Image src={SIGNASSSceneTwo} alt="SIGNASS snapshot 2" objectFit="cover" w="full" h="full" />
              </Box>
            </Grid>
            <Text color={bodyColor} fontSize="sm">
              Above: panels exploring power, healthcare, and communication perspectives on signal analysis and responsible AI.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signass2006;
