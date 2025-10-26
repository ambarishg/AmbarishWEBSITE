import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const meta = {
  title: 'Kaggle Weekly Kernel Award: African Conflicts Data Visualization',
  subtitle:
    'An interactive exploration of nearly two decades of conflict and protest data across Africa, celebrated for its clarity and storytelling.',
  tags: ['Kaggle', 'Geospatial Analytics', 'Data Visualization', 'Conflict Mapping']
};

const context = [
  'The Armed Conflict Location and Event Data Project (ACLED) publishes richly detailed political violence and protest data across the African continent.',
  'Events cover multiple dimensions: actors involved, geographic precision, fatalities, and evolving protest dynamics from 1997 onward.',
  'Turning this catalogue into intuitive insights demands careful spatial visualisation, temporal framing, and narrative structure.'
];

const visualizationHighlights = [
  {
    title: 'Leaflet-powered geographic storytelling',
    description:
      'Built layered maps that allow readers to trace conflict intensity, hotspots, and temporal shifts with intuitive zoom and filter controls.'
  },
  {
    title: 'Temporal patterns surfaced through EDA',
    description:
      'Showcased annual and monthly event trends, revealing how specific regions experience surges in political unrest and how those patterns evolve.'
  },
  {
    title: 'Actor-wise insights',
    description:
      'Disaggregated events by perpetrator and target groups to highlight the complex human dimensions behind the data points.'
  }
];

const recognitionNotes = [
  'Awarded the Kaggle Weekly Kernel Award for August 18, 2017.',
  'Praised by Kaggle for combining ? - insight-sharing and gorgeous interactive maps."',
  'Highlighted how open data and accessible visualisation can inform humanitarian dialogue.'
];

const quickFacts = [
  { label: 'Dataset', value: 'ACLED - Armed Conflict Location & Event Data' },
  { label: 'Time Span', value: '1997 onwards (Africa-wide coverage)' },
  { label: 'Toolkit', value: 'R Notebook, Leaflet, Geospatial EDA' },
  { label: 'Recognition', value: 'Kaggle Weekly Kernel Award' }
];

const takeaways = [
  'Story-first visualisations help stakeholders grasp complex socio-political datasets quickly.',
  'Open humanitarian datasets benefit from reproducible notebooks that others can extend.',
  'Thoughtful geospatial UX elevates the practical value of conflict analytics.'
];

const HighlightAfricanConflicts = () => {
  useSEO(seo.highlightAfricanConflicts);
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,134,245,0.12) 0%, rgba(14,116,244,0.18) 100%)',
    'linear-gradient(135deg, rgba(59,134,245,0.25) 0%, rgba(14,116,244,0.35) 100%)'
  );
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.85)');
  const subtleText = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="article">
      <Box bg={heroBg} py={{ base: 16, md: 20 }} borderBottom="1px solid" borderColor="outline">
        <Container maxW="6xl">
          <Breadcrumb
            mb={6}
            fontSize="sm"
            separator="/"
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/highlights">
                Case Studies
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>African Conflicts Visualisation</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Stack spacing={6} align="flex-start">
            <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Kaggle Weekly Kernel Award
            </Tag>
            <Heading size="2xl" maxW="3xl" lineHeight={1.1}>
              {meta.title}
            </Heading>
            <Text fontSize="lg" maxW="3xl" color={subtleText}>
              {meta.subtitle}
            </Text>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              {meta.tags.map((tag) => (
                <Badge key={tag} variant="subtle" colorScheme="brand">
                  {tag}
                </Badge>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <Grid templateColumns={{ base: '1fr', lg: '7fr 5fr' }} gap={{ base: 12, lg: 16 }}>
          <GridItem>
            <Stack spacing={{ base: 8, md: 10 }}>
              <SectionHeading
                eyebrow="Mission Context"
                title="Bringing transparency to conflict and protest data."
                description={context[0]}
              />
              <Text color={subtleText}>{context[1]}</Text>
              <Text color={subtleText}>{context[2]}</Text>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Visualisation Approach"
                title="Maps and narratives that make complex data human."
                description="Interactive artefacts helped policymakers, researchers, and citizens navigate conflict dynamics with confidence."
              />
              <Stack spacing={6}>
                {visualizationHighlights.map((item) => (
                  <Box key={item.title} layerStyle="card" p={{ base: 6, md: 7 }}>
                    <Heading size="sm" mb={3} color={useColorModeValue('brand.600', 'brand.300')}>
                      {item.title}
                    </Heading>
                    <Text color={subtleText}>{item.description}</Text>
                  </Box>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Recognition"
                title="Celebrated by the Kaggle community."
                description="The kernel earned the Weekly Kernel Award for its balance of insight and design."
              />
              <Stack spacing={3} mt={6}>
                {recognitionNotes.map((note) => (
                  <Stack key={note} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{note}</Text>
                  </Stack>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="What Stood Out"
                title="Lessons for future humanitarian analytics."
              />
              <Stack spacing={3} mt={6}>
                {takeaways.map((item) => (
                  <Stack key={item} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{item}</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </GridItem>

          <GridItem>
            <Box layerStyle="subtleCard" p={{ base: 6, md: 8 }} borderRadius="3xl" bg={cardBg}>
              <Heading size="sm" color={useColorModeValue('brand.600', 'brand.300')} mb={4}>
                Quick facts
              </Heading>
              <Stack spacing={4} fontSize="sm" color={subtleText}>
                {quickFacts.map((fact) => (
                  <Box key={fact.label}>
                    <Text textTransform="uppercase" letterSpacing="0.08em">
                      {fact.label}
                    </Text>
                    <Text fontWeight="semibold">{fact.value}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Box
        py={{ base: 12, md: 14 }}
        bg={useColorModeValue('rgba(236,243,255,0.5)', 'rgba(13,20,33,0.8)')}
      >
        <Container maxW="6xl">
          <Stack
            layerStyle="card"
            bg={cardBg}
            spacing={6}
            p={{ base: 6, md: 8 }}
            align="flex-start"
            borderRadius="3xl"
          >
            <Heading size="md">Explore more highlights</Heading>
            <Text color={subtleText}>
              Browse the broader portfolio of award-winning AI, data, and community initiatives that showcase impact
              across industries.
            </Text>
            <Tag
              as={RouterLink}
              to="/highlights"
              colorScheme="brand"
              variant="solid"
              px={5}
              py={3}
              borderRadius="full"
            >
              Back to Highlights
            </Tag>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HighlightAfricanConflicts;
