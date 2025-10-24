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
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVNnNCZOnnDqHlI7nLDotnW'
      },
      {
        title: 'Machine Learning',
        description:
          'Model selection, feature engineering, and deployment stories that bridge classical ML with modern MLOps so teams can deliver faster and learners understand lifecycle trade-offs.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVXsNh6Ue24VyF0DG1R64Trh'
      },
      {
        title: 'Python for Data & AI',
        description:
          'Practical Python fluency with notebooks, libraries, and workflow tips that help professionals coach teams and students progress from syntax to production habits.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVuNaV90NH9Qq35iPb4TJcz'
      },
      {
        title: 'Pandas in Practice',
        description:
          'Data wrangling recipes that shorten delivery cycles for analysts while giving new entrants the pattern library they need for internships and capstone projects.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWriSnAA7K7o3KAkdvDBUC1'
      }
    ]
  },
  {
    category: 'Core Data & AI Foundations',
    summary:
      'Structured fundamentals that keep senior professionals sharp and give students the conceptual depth required before stepping into advanced AI roles.',
    playlists: [
      {
        title: 'Statistics Essentials',
        description:
          'From descriptive to inferential statistics, the series connects formulas to decision frameworks so leaders can challenge analytics output and students can build rigorous intuition.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWW3dVHwNdMChz_HMz_Z_2i'
      },
      {
        title: 'Descriptive Statistics',
        description:
          'Practical coverage of summarisation techniques, visualization choices, and bias checks - ideal for professionals directing data storytelling and students learning to frame analyses.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWXWkwmo7aX6ixkmK_14R9C'
      },
      {
        title: 'Probability & Distributions',
        description:
          'Explainability-first sessions on random variables, distributions, and uncertainty so delivery teams can defend model assumptions while students master exam-grade problem solving.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVXgsuTPwKMWqRMwBPk2U06T'
      },
      {
        title: 'Confidence Intervals',
        description:
          'Concise lessons that connect interval math to real stakeholder questions, equipping managers to interpret risk while students practise data-driven storytelling.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWbjgiyt8lT4yf4El9pHqol'
      },
      {
        title: 'Principal Component Analysis',
        description:
          'Visual, code-driven treatment of dimensionality reduction that shows how to balance interpretability and performance - valuable for solution architects and learners alike.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVULqYbUVEk8VzUDJMhpI0QK'
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
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVH2PevkvFovvyZh-MwFQ9Z'
      },
      {
        title: 'Distributed Systems',
        description:
          'Foundational concepts on microservices, orchestration, and resilience that help engineering managers coach teams while students experience systems thinking early.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVUDIIacFZoitNJ6rxVrAcEb'
      },
      {
        title: 'Apache Spark Deep Dive',
        description:
          'Performance tuning, structured streaming, and governance techniques so data leaders can run reliable platforms and students can grasp big-data engineering beyond theory.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVV_uc6qWarqvWBlL3hZLoxj'
      },
      {
        title: 'Docker, Kubernetes, Microservices',
        description:
          'Containerisation and orchestration playbooks that align platform teams on DevOps practices and give students deployable templates for projects.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVzr4LGBsTELoW5hQ3y-jkh'
      },
      {
        title: 'AWS SageMaker',
        description:
          'Cross-cloud ML engineering covering training, deployment, and monitoring so leaders can compare platforms and learners can expand beyond Azure.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVULx8FwLcbKTaagTaLEtm4s'
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
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVIJxDq92wQt1ayP2Ti6Wdq'
      },
      {
        title: 'Databricks Data Engineering (DP-203)',
        description:
          'End-to-end data engineering patterns covering Lakehouse design, Delta, and orchestration. Practitioners get repeatable delivery templates; students learn how modern data stacks operate.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVW_gvWAmdygEI7z7GrvELeO'
      },
      {
        title: 'Apache Spark Developer Associate',
        description:
          'Hands-on preparation for Databricks certification, pairing Spark internals with optimization playbooks that matter when you own production clusters or are preparing for your first big-data role.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWVATwj230Q1YQs_9nPrAba'
      },
      {
        title: 'DP-100 Azure Data Scientist',
        description:
          'Podcast-style briefings on MLOps, ML pipelines, and responsible AI to help leaders align teams on Microsoft\'s reference architecture while students internalize exam domains.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVWY7_rUhlKymW2iVYq548iQ'
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
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVVaoSmpGVv-fvgUX_tVALHb'
      },
      {
        title: 'Talks & Panels',
        description:
          'Conference sessions and community keynotes that surface lessons from real transformation programs, giving both executives and students context on leadership in action.',
        href: 'https://www.youtube.com/playlist?list=PL3mYo8cDslVW4Ck2XTOczig7zuimhZpWL'
      }
    ]
  }
];

const AGAcademy = () => {
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
