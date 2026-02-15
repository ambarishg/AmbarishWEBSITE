import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';
import ACMJUImage from '../../docs/ACM-JU.jpg';
import SIGNASSImage from '../../docs/SIGNASS.jpg';
import { Link as RouterLink } from 'react-router-dom';

const lectureHighlights = [
  'Advanced retrieval-augmented generation architectures with agent orchestration and safety guardrails.',
  'Industry-use case narratives spanning utilities, healthcare, and communication analytics.',
  'Hands-on discussion tailored for the ACM Jadavpur University Student Chapter community.'
];

const SignassDetails = [
  'Session Chair, SIGNAL ANALYSIS FOR SMART SYSTEMS 2026 track.',
  'Panel Discussion on Domain-Aware AI/ML for Real-World Signal Processing: Healthcare and Communication.',
  'Collaboration with researchers exploring sensors, embedded analytics, and responsible deployment at scale.'
];

const SpeakingConferences = () => {
  useSEO(seo.speakingConferences);

  const pageBg = useColorModeValue('gray.50', '#030712');
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.18) 100%)',
    'linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(15,23,42,0.9) 100%)'
  );
  const cardBg = useColorModeValue('white', 'rgba(15,23,42,0.92)');
  const borderColor = useColorModeValue('rgba(148,163,184,0.3)', 'rgba(148,163,184,0.45)');
  const emphasis = useColorModeValue('brand.500', 'brand.300');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bg={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="6xl" py={{ base: 12, md: 20 }}>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Tag
              alignSelf="flex-start"
              size="md"
              letterSpacing="0.4em"
              borderRadius="full"
              bg="transparent"
              color={emphasis}
            >
              Speaking &amp; Conferences
            </Tag>
            <Stack spacing={4} maxW="3xl">
              <Heading size={{ base: 'xl', md: '3xl' }} color={bodyColor} lineHeight={1.25}>
                Speaking &amp; Conferences
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={bodyColor} lineHeight={1.8}>
                Recent invitations blend academic forums and industry summits, focusing on responsible
                retrieval-augmented generation, agent orchestration, and domain-aware signal intelligence.
                The highlights below showcase momentum across university communities and flagship sessions
                through February 2026.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
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
              <Tag
                size="sm"
                alignSelf="flex-start"
                letterSpacing="0.3em"
                textTransform="uppercase"
                bg={emphasis}
                color="white"
                borderRadius="full"
              >
                Campus Lecture
              </Tag>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.2}>
                Advanced RAG, Agents &amp; Industry Use Cases
              </Heading>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                Delivered to the ACM Jadavpur University Student Chapter on 30 January 2026, this session
                traced how retrieval-augmented generation, autonomous agents, and hosted metadata layers
                accelerate decision intelligence for utilities, healthcare, and smart cities.
              </Text>
            </Stack>
            <Box borderRadius="2xl" overflow="hidden">
              <Image src={ACMJUImage} alt="ACM Jadavpur University session" objectFit="cover" w="full" />
            </Box>
            <Stack spacing={2}>
              <Text fontWeight="semibold" color={emphasis}>
                What the session covered
              </Text>
              <List spacing={1.5}>
                {lectureHighlights.map((item) => (
                  <ListItem key={item}>
                    <ListIcon as={CheckIcon} color={emphasis} />
                    <Text as="span" color={bodyColor}>
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Text color="gray.500" fontSize="sm">
                Audience: ACM Jadavpur University Student Chapter members and invited researchers.
              </Text>
            </Stack>
          </Stack>

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
              <Tag
                size="sm"
                alignSelf="flex-start"
                letterSpacing="0.3em"
                textTransform="uppercase"
                bg={emphasis}
                color="white"
                borderRadius="full"
              >
                SIGNASS 2026
              </Tag>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.2}>
                International Conference on Signal Analysis for Smart Systems
              </Heading>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                The conference convenes researchers and industry teams to explore signal analysis innovations
                for smart systems, spanning sensors, embedded analytics, and deployment disciplines, with the
                2026 edition hosted at the Galleria Mall Conference Center, Agarpara, Kolkata from 12-14 February.
              </Text>
            </Stack>
            <Box borderRadius="2xl" overflow="hidden">
              <Image src={SIGNASSImage} alt="SIGNASS 2026 conference" objectFit="cover" w="full" />
            </Box>
            <Divider borderColor={borderColor} />
            <Stack spacing={2}>
              <Text fontWeight="semibold" color={emphasis}>
                Key contributions
              </Text>
              <List spacing={1.5}>
                {SignassDetails.map((point) => (
                  <ListItem key={point}>
                    <ListIcon as={CheckIcon} color={emphasis} />
                    <Text as="span" color={bodyColor}>
                      {point}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Text color="gray.500" fontSize="sm">
                Venue: Galleria Mall Conference Center, 81 Nilgunj Road, Agarpara (Kolkata).
              </Text>
              <Button
                as={Link}
                href="https://www.nit.ac.in/SIGNASS/"
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                colorScheme="brand"
              >
                View SIGNASS 2026 programme
              </Button>
              <Button
                as={RouterLink}
                to="/speaking-conferences/signass-2006"
                variant="outline"
                colorScheme="brand"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
              >
                Explore SIGNASS 2006 reflections
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SpeakingConferences;
