import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const channelLink = 'https://www.youtube.com/@ambarishg';

const sections = [
  {
    category: 'Applied Machine Learning',
    summary:
      'Code-first explorations that translate AI concepts into delivery-ready assets, keeping practitioners current while helping students build a demonstrable portfolio.',
    playlists: [
      {
        title: 'Generative AI',
        description:
          'Blueprints for prompt engineering, evaluation, and orchestration that show how to operationalise GenAI safely - ideal for leaders piloting new use cases and students experimenting with frontier tools.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVVNnNCZOnnDqHlI7nLDotnW'
      },
      {
        title: 'Machine Learning',
        description:
          'Model selection, feature engineering, and deployment stories that bridge classical ML with modern MLOps so teams can deliver faster and learners understand lifecycle trade-offs.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVXy_x4sijpwqJwgaW1-7GFZ'
      },
      {
        title: 'Python for Data & AI',
        description:
          'Practical Python fluency with notebooks, libraries, and workflow tips that help professionals coach teams and students progress from syntax to production habits.',
        href: 'https://www.youtube.com/watchv=flz1QiY4wV4&list=PL3mYo8cDslVUVl0S537VZTIBYM_tCJrgM'
      },
      {
        title: 'Pandas in Practice',
        description:
          'Data wrangling recipes that shorten delivery cycles for analysts while giving new entrants the pattern library they need for internships and capstone projects.',
        href: 'https://www.youtube.com/watchv=PFMpiQvu8j0&list=PL3mYo8cDslVX8aRx-CectIIorzMHPy2nB'
      }
    ]
  },
  {
    category: 'Core Data & AI Foundations',
    summary:
      'Structured fundamentals that keep senior professionals sharp and give students the conceptual depth required before stepping into advanced AI roles.',
    playlists: [
      
      {
        title: 'Descriptive Statistics',
        description:
          'Practical coverage of summarisation techniques, visualization choices, and bias checks - ideal for professionals directing data storytelling and students learning to frame analyses.',
        href: 'https://www.youtube.com/watchv=2rk-dpfOGTU&list=PL3mYo8cDslVVHiZsJh9c-VYVwkQ_hpqmB'
      },
      {
        title: 'Probability & Distributions',
        description:
          'Explainability-first sessions on random variables, distributions, and uncertainty so delivery teams can defend model assumptions while students master exam-grade problem solving.',
        href: 'https://www.youtube.com/watchv=F9FpJmC1MGQ&list=PL3mYo8cDslVXgsuTPwKMWqRMwBPk2U06T'
      },
      {
        title: 'Confidence Intervals',
        description:
          'Concise lessons that connect interval math to real stakeholder questions, equipping managers to interpret risk while students practise data-driven storytelling.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVWtlUj3NzIitFvpsm5MEiuV'
      },
      {
        title: 'Principal Component Analysis',
        description:
          'Visual, code-driven treatment of dimensionality reduction that shows how to balance interpretability and performance - valuable for solution architects and learners alike.',
        href: 'https://www.youtube.com/watchv=StuJaa5O2Rc&list=PL3mYo8cDslVUuYu3zuEdvRjMg40eYCifn'
      }
    ]
  },
  {
    category: 'Platform & Architecture Leadership',
    summary:
      'Architectural primers that help decision makers govern cloud-scale systems and give students a window into production-grade design.',
    playlists: [
      {
        title: 'Architectures',
        description:
          'Reference patterns for cloud-native, data-centric, and resilient architectures - positioning leaders to make informed trade-offs and students to understand enterprise design language.',
        href: 'https://www.youtube.com/watchv=ymkPWP0gqfw&list=PL3mYo8cDslVULABKlF7c0eUUeLor1AU05'
      },
      {
        title: 'Distributed Systems',
        description:
          'Foundational concepts on microservices, orchestration, and resilience that help engineering managers coach teams while students experience systems thinking early.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVV2Dl_0PvMTIWy8KMIKH24Q'
      },
      {
        title: 'Apache Spark Deep Dive',
        description:
          'Performance tuning, structured streaming, and governance techniques so data leaders can run reliable platforms and students can grasp big-data engineering beyond theory.',
        href: 'https://www.youtube.com/watchv=dSZ8-Ounnvs&list=PL3mYo8cDslVXl78NB5oILULGWQ0hZXXwG'
      },
      {
        title: 'Docker, Kubernetes, Microservices',
        description:
          'Containerisation and orchestration playbooks that align platform teams on DevOps practices and give students deployable templates for projects.',
        href: 'https://www.youtube.com/watchv=YWrZyPaFW50&list=PL3mYo8cDslVVIwa1IyWuGTFEl2bTuurOW'
      },
      {
        title: 'AWS SageMaker',
        description:
          'Cross-cloud ML engineering covering training, deployment, and monitoring so leaders can compare platforms and learners can expand beyond Azure.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVXFr-u5bHtVnLc2hDwxiJR_'
      }
    ]
  },
  {
    category: 'Certification Accelerators',
    summary:
      'Guided learning paths that turn exam objectives into production-focused skills, helping delivery leads stay ahead while giving students a blueprint for industry credentials.',
    playlists: [
      {
        title: 'AI-102 Azure AI Engineer Associate',
        description:
          'Scenario-led walkthroughs of Azure AI services, responsible AI practices, and deployment options so professionals can lead platform rollouts while students gain exam-ready confidence.',
        href: 'https://www.youtube.com/watchv=2U2X87QWlFE&list=PL3mYo8cDslVXoTPtKArA-TjEPc7_ciTeT'
      },
      {
        title: 'Databricks Data Engineering (DP-203)',
        description:
          'End-to-end data engineering patterns covering Lakehouse design, Delta, and orchestration. Practitioners get repeatable delivery templates; students learn how modern data stacks operate.',
        href: 'https://www.youtube.com/watchv=U8_gdFR810c&list=PL3mYo8cDslVUIZnP-wimuEgFkHMbdmd9M'
      },
      {
        title: 'Apache Spark Developer Associate',
        description:
          'Hands-on preparation for Databricks certification, pairing Spark internals with optimization playbooks that matter when you own production clusters or are preparing for your first big-data role.',
        href: 'https://www.youtube.com/watchv=ia_GNojUntk&list=PL3mYo8cDslVWwOPjAuJt86-4J8Dp7iQuI'
      },
      {
        title: 'DP-100 Azure Data Scientist',
        description:
          'Podcast-style briefings on MLOps, ML pipelines, and responsible AI to help leaders align teams on Microsoft\'s reference architecture while students internalize exam domains.',
        href: 'https://www.youtube.com/watchv=P_AmyuJ9SYg&list=PL3mYo8cDslVWltH4208DYzomtcrDqWlSS'
      }
    ]
  },
  
  {
    category: 'Applied Analytics & Inspiration',
    summary:
      'Domain narratives that demonstrate how data and AI leadership delivers measurable impact and keep learners motivated with contextual examples.',
    playlists: [
      {
        title: 'Cricket Analytics',
        description:
          'Sports analytics casework translating match data into strategic insight - great for leaders showcasing storytelling techniques and students practising full-stack analysis.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVVaoSmpGVv-fvgUX_tVALHb'
      },
      {
        title: 'Talks & Panels',
        description:
          'Conference sessions and community keynotes that surface lessons from real transformation programs, giving both executives and students context on leadership in action.',
        href: 'https://www.youtube.com/playlistlist=PL3mYo8cDslVW4Ck2XTOczig7zuimhZpWL'
      }
    ]
  }
];

const AGAcademy = () => {
  useSEO(seo.agAcademy);
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,134,245,0.12) 0%, rgba(14,116,244,0.18) 100%)',
    'linear-gradient(135deg, rgba(59,134,245,0.25) 0%, rgba(14,116,244,0.35) 100%)'
  );
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.85)');

  return (
    <Box as="article">
      <Box bg={heroBg} py={{ base: 16, md: 20 }} borderBottom="1px solid" borderColor="outline">
        <Container maxW="6xl">
          <Stack spacing={6} align="flex-start">
            <Badge colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Data & AI Leadership Broadcast
            </Badge>
            <Heading size="2xl" maxW="3xl" lineHeight={1.1}>
              Ambarish Ganguly Academy on YouTube
            </Heading>
            <Text fontSize="lg" maxW="3xl" color="subtleText">
              A channel designed for transformation leaders and ambitious students who want applied Data and AI
              expertise with enterprise context. Each playlist converts decades of delivery experience into practical
              guidance, labs, and narratives you can use immediately.
            </Text>
            <Button
              as="a"
              href={channelLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="brand"
              rightIcon={<ExternalLinkIcon />}
            >
              Visit the YouTube channel
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="6xl">
          <SectionHeading
            eyebrow="Learning Journeys"
            title="Curated playlists for professionals and students building Data & AI impact."
            description="Explore the full library to strengthen delivery leadership, close certification gaps, and build the fundamentals that power modern analytics careers."
          />

          <Stack spacing={{ base: 12, md: 16 }} mt={{ base: 10, md: 12 }}>
            {sections.map((section) => (
              <Stack key={section.category} spacing={6}>
                <Stack spacing={3}>
                  <Heading size="lg">{section.category}</Heading>
                  <Text color="subtleText" maxW="4xl">
                    {section.summary}
                  </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
                  {section.playlists.map((playlist) => (
                    <Stack
                      key={playlist.title}
                      spacing={4}
                      layerStyle="card"
                      bg={cardBg}
                      p={{ base: 6, md: 8 }}
                      borderRadius="2xl"
                      justify="space-between"
                    >
                      <Stack spacing={3}>
                        <Heading size="sm">{playlist.title}</Heading>
                        <Text color="subtleText">{playlist.description}</Text>
                      </Stack>
                      <Button
                        as="a"
                        href={playlist.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        colorScheme="brand"
                        rightIcon={<ExternalLinkIcon />}
                        alignSelf="flex-start"
                      >
                        Watch the playlist
                      </Button>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AGAcademy;
