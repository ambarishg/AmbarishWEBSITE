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
import FDPJISImage from '../../docs/FDP_JIS.jpg';
import GlobalAzureImage from '../../docs/global_azure.jpg';
import SIGNASSImage from '../../docs/SIGNASS.jpg';
import { Link as RouterLink } from 'react-router-dom';

const lectureHighlights = [
  'Advanced retrieval-augmented generation architectures with agent orchestration and safety guardrails.',
  'Industry-use case narratives spanning utilities, healthcare, and communication analytics.',
  'Hands-on discussion tailored for the ACM Jadavpur University Student Chapter community.'
];

const SignassDetails = [
  'Session Chair for Track 4: Imaging, Computer Vision, and Multimedia Signal Processing at SIGNASS 2026.',
  'Panel Discussion on Domain-Aware AI/ML for Real-World Signal Processing: Healthcare and Communication.',
  'Collaboration with researchers exploring sensors, embedded analytics, and responsible deployment at scale.'
];

const globalAzureDetails = [
  'Talk focus: transforming industrial operations with an Industrial Knowledge Fabric.',
  'Live demo showcased how connected enterprise data can drive actionable operational insights.',
  'The published video description includes the supporting code referenced during the session.'
];

const jisFacultyDevelopmentDetails = [
  'Covered AI agents, tools, MCP, and the practical building blocks behind agent-based systems.',
  'Walked through the Agent Framework, MCP tool integration, middleware, and multi-agent architectures.',
  'Included Agent Governance guidance, Microsoft Agent Governance Toolkit discussion, and a live Jupyter Notebook demo.'
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
                The highlights below showcase momentum across university communities and flagship sessions.
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
                Decoding Computer Vision
              </Tag>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.2}>
                Decoding Computer Vision: From Pixels to Diagnostic Intelligence
              </Heading>
              <Text fontSize="sm" color="gray.400">
                July 30 2026
              </Text>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                A concise technical session on CNN fundamentals, the CNN pipeline, and applications to diagnostic AI in healthcare.
              </Text>
            </Stack>

            <Stack spacing={2}>
              <Text fontWeight="semibold" color={emphasis}>
                Session overview
              </Text>
              <List spacing={1.5}>
                <ListItem>
                  <ListIcon as={CheckIcon} color={emphasis} />
                  <Text as="span" color={bodyColor} fontWeight="semibold">1. Through the Machine's Eye:</Text>
                  <Text as="div" color={bodyColor}>Explored how convolutional filters, feature maps, pooling, and hierarchical representations transform raw pixels into meaningful features — building intuition for why CNNs power modern vision.</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color={emphasis} />
                  <Text as="span" color={bodyColor} fontWeight="semibold">2. The CNN Assembly Line:</Text>
                  <Text as="div" color={bodyColor}>Walked through the full CNN pipeline — from input and convolution to activations, pooling, and final prediction — visualizing each stage as an assembly line of learned features.</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color={emphasis} />
                  <Text as="span" color={bodyColor} fontWeight="semibold">3. Building Diagnostic AI:</Text>
                  <Text as="div" color={bodyColor}>Connected CNN fundamentals to medical imaging applications, discussing detection, classification, end-to-end pipelines, and the importance of explainability and trustworthy AI in healthcare.</Text>
                </ListItem>
              </List>

              <Text fontWeight="semibold" color={emphasis} mt={3}>
                Key takeaways
              </Text>
              <List spacing={1.2}>
                <ListItem><ListIcon as={CheckIcon} color={emphasis} /><Text as="span" color={bodyColor}>Understand CNNs from first principles rather than as black boxes.</Text></ListItem>
                <ListItem><ListIcon as={CheckIcon} color={emphasis} /><Text as="span" color={bodyColor}>Hierarchical feature extraction enables robust image recognition.</Text></ListItem>
                <ListItem><ListIcon as={CheckIcon} color={emphasis} /><Text as="span" color={bodyColor}>Appreciate end-to-end deep learning workflows for vision.</Text></ListItem>
                <ListItem><ListIcon as={CheckIcon} color={emphasis} /><Text as="span" color={bodyColor}>Practical translation of techniques to diagnostic AI with emphasis on explainability.</Text></ListItem>
              </List>

              
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
                JIS University FDP
              </Tag>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.2}>
                AI Agents, MCP, Agent Governance and Multi-Agent Architecture
              </Heading>
              <Text fontSize="sm" color="gray.400">
                July 7, 2026
              </Text>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                Conducted as part of the Faculty Development Program at JIS University Kolkata, this
                session explored AI agents from fundamentals through implementation. It covered agents,
                tools, MCP, agent middleware, and multi-agent architectures, with a strong emphasis on
                governance and practical learning through live Jupyter Notebook demonstrations.
              </Text>
            </Stack>
            <Box borderRadius="2xl" overflow="hidden">
              <Image src={FDPJISImage} alt="Faculty Development Program session at JIS University Kolkata" objectFit="cover" w="full" />
            </Box>
            <Stack spacing={2}>
              <Text fontWeight="semibold" color={emphasis}>
                Session highlights
              </Text>
              <List spacing={1.5}>
                {jisFacultyDevelopmentDetails.map((item) => (
                  <ListItem key={item}>
                    <ListIcon as={CheckIcon} color={emphasis} />
                    <Text as="span" color={bodyColor}>
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Text color="gray.500" fontSize="sm">
                Inspired by Pamela Fox&apos;s &quot;Building your first agent in Python&quot; workshop from Microsoft.
              </Text>
              <Button
                as={Link}
                href="https://techcommunity.microsoft.com/blog/azuredevcommunityblog/learn-how-to-build-agents-and-workflows-in-python/4502144"
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                colorScheme="brand"
              >
                View workshop slides
              </Button>
              <Button
                as={Link}
                href="https://github.com/ambarishg/agent_framework_new"
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                variant="outline"
                colorScheme="brand"
              >
                Open Jupyter notebooks
              </Button>
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
                Global Azure Kolkata
              </Tag>
              <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={1.2}>
                Transforming Industrial Operations with an Industrial Knowledge Fabric
              </Heading>
              <Text color={bodyColor} fontSize="md" lineHeight={1.7}>
                Presented at Global Azure Kolkata, this session focused on how an Industrial Knowledge
                Fabric can unify data from multiple sources to support faster, better operational
                decisions. The session drew strong audience engagement, valuable follow-up discussions,
                and a positive response from attendees and organizers alike.
              </Text>
            </Stack>
            <Box borderRadius="2xl" overflow="hidden">
              <Image src={GlobalAzureImage} alt="Global Azure Kolkata speaking session" objectFit="cover" w="full" />
            </Box>
            <Stack spacing={2}>
              <Text fontWeight="semibold" color={emphasis}>
                Session highlights
              </Text>
              <List spacing={1.5}>
                {globalAzureDetails.map((item) => (
                  <ListItem key={item}>
                    <ListIcon as={CheckIcon} color={emphasis} />
                    <Text as="span" color={bodyColor}>
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Button
                as={Link}
                href="https://lnkd.in/gFg8qn_k"
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                colorScheme="brand"
              >
                Watch the talk and demo
              </Button>
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
              <Text fontSize="sm" color="gray.400">
                February 12–14, 2026 </Text>
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
                Venue: 81 Nilgunj Road, Agarpara (Kolkata).
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
              <Button
                as={RouterLink}
                to="/speaking-conferences/linkedin-header"
                variant="outline"
                colorScheme="brand"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
              >
                View LinkedIn header page
              </Button>
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
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SpeakingConferences;
