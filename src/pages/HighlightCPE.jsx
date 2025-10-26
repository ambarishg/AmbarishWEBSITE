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
  title: 'Center for Policing Equity Hackathon Winning Visualisation',
  subtitle:
    'Award-winning geospatial analytics that combines police operations with community demographics to rebuild trust and expose racial disparities.',
  tags: ['Hackathon', 'Geospatial Analytics', 'Equity', 'Data Visualization']
};

const mission = [
  'The Center for Policing Equity (CPE) brings together research scientists, race and equity experts, data virtuosos, and community trainers to build systems that feel fair to every community.',
  'Data and science are the tools, while law enforcement and communities partner with CPE to bridge communication gaps rooted in suffering and generational mistrust.',
  'Through the National Justice Database - the largest standardized collection of police behavioral data in the United States - departments share unprecedented records in exchange for disparity diagnostics and trust-building roadmaps.'
];

const problemStatement = [
  'Create a data experience that measures justice by highlighting racial disparities in policing outcomes.',
  'Blend police incident records with census, deployment, and socioeconomic indicators despite inconsistent data standards.',
  'Turn messy shapefiles and disjoint datasets into clear, precinct-level intelligence that leaders can act on.'
];

const solutionHighlights = [
  {
    title: 'Unified geospatial data pipeline',
    description:
      'Engineered intensive cleaning and geospatial joins to align police incidents with district and tract boundaries alongside census and socioeconomic profiles.'
  },
  {
    title: 'Side-by-side equity visualisations',
    description:
      'Built paired maps and charts that compare deployment, race, and income variables, revealing where disparities persist beyond crime or poverty levels.'
  },
  {
    title: 'Actionable narrative for reform',
    description:
      'Delivered a narrative that guides agencies toward precincts requiring tailored interventions instead of uniform policy prescriptions.'
  }
];

const recognition = [
  'Named the winning submission for the Center for Policing Equity hackathon.',
  'Acknowledged for demonstrating how automation can bring transparency to complex public safety datasets.',
  'Published as a comprehensive Kaggle notebook to help peers extend the methodology.'
];

const quickFacts = [
  { label: 'Partner', value: 'Center for Policing Equity (CPE)' },
  { label: 'Data Sources', value: 'Police incidents, census statistics, socioeconomic indicators, shapefiles' },
  { label: 'Toolkit', value: 'Geospatial EDA, automated joins, interactive visualisation' },
  { label: 'Outcome', value: 'Hackathon-winning notebook on Kaggle' },
  { label: 'Notebook', value: 'https://www.kaggle.com/ambarish/very-detailed-analysis-of-cpe-and-automation' }
];

const takeaways = [
  'Equity-focused analytics must account for confounding variables beyond crime rates to earn community trust.',
  'Automating messy shapefile integration is critical for repeatable, precinct-level policing insights.',
  'Open-sourcing methodologies accelerates reform by letting agencies and researchers build on a shared baseline.'
];

const methodology = [
  {
    title: 'Layered geospatial harmonisation',
    description:
      'Combined police district shapefiles with US Census data and introduced census tract shapefiles to anchor demographic intelligence to operational geography.'
  },
  {
    title: 'Automated data standardisation',
    description:
      'Normalised disparate police incident feeds alongside census and socioeconomic indicators despite the absence of federal reporting standards.'
  },
  {
    title: 'Precision-weighted attribution',
    description:
      'Calculated proportional overlaps between census tracts and police districts so every population, income, and education metric reflects the jurisdiction it serves.'
  }
];

const weightingSteps = [
  'Identify census tracts that span multiple police districts to determine proportional coverage.',
  'Assign weights (for example, 60% for District 1 and 40% for District 2) based on the shared geographic area.',
  'Multiply population and socioeconomic figures by those weights so comparisons across districts stay defensible.'
];

const analysisInsights = [
  'Black population concentrations overlap with high poverty and low median income zones, highlighting socioeconomic drivers behind reported crime disparities.',
  'Visual comparisons show crime attributed to Black residents often exceeds their share of the population, revealing where uniform policies fall short.',
  'Layering education attainment, poverty, and income indicators equips public safety and community partners with targeted levers for prevention.'
];

const anomalySpotlights = [
  {
    location: 'Hennepin County, Minnesota',
    insight:
      'Maps reveal districts where crime associated with Black residents far outweighs their population share, underscoring the need for contextualised interventions.'
  },
  {
    location: 'Travis County, Texas',
    insight:
      'Contrasting race and income combinations across adjacent districts demonstrates why uniform countywide policies can miss neighbourhood-level inequities.'
  },
  {
    location: 'Downtown Marion County, Indiana',
    insight:
      'Precinct-level overlays show divergent crime distributions within a compact urban core, proving equitable strategies must extend beyond city aggregates.'
  }
];

const HighlightCPE = () => {
  useSEO(seo.highlightCPE);
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
              <BreadcrumbLink>Center for Policing Equity</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Stack spacing={6} align="flex-start">
            <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Hackathon Winner
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
                title="Data science for fair and just public safety."
                description={mission[0]}
              />
              <Text color={subtleText}>{mission[1]}</Text>
              <Text color={subtleText}>{mission[2]}</Text>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Problem Statement"
                title="Measuring justice across uneven data landscapes."
                description="The challenge asked teams to diagnose racial disparities despite fragmented policing datasets."
              />
              <Stack spacing={3} mt={6}>
                {problemStatement.map((item) => (
                  <Stack key={item} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{item}</Text>
                  </Stack>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Methodology"
                title="Combining shapefiles, census intelligence, and police records."
                description="Automation aligned district boundaries with demographic context to unlock actionable insights."
              />
              <Stack spacing={6} mt={6}>
                {methodology.map((item) => (
                  <Box key={item.title} layerStyle="card" p={{ base: 6, md: 7 }}>
                    <Heading size="sm" mb={3} color={useColorModeValue('brand.600', 'brand.300')}>
                      {item.title}
                    </Heading>
                    <Text color={subtleText}>{item.description}</Text>
                  </Box>
                ))}
                <Box layerStyle="card" p={{ base: 6, md: 7 }}>
                  <Heading size="sm" mb={3} color={useColorModeValue('brand.600', 'brand.300')}>
                    Weighted attribution in practice
                  </Heading>
                  <Text color={subtleText}>
                    When a census tract spans multiple districts, the analysis apportions population and socioeconomic data before comparisons are made.
                  </Text>
                  <Stack spacing={3} mt={4}>
                    {weightingSteps.map((step) => (
                      <Stack key={step} direction="row" spacing={3} align="flex-start">
                        <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                        <Text color={subtleText}>{step}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Winning Approach"
                title="Visual analytics that expose disparities."
                description="The notebook turns messy shapefiles and agency data into transparent, precinct-level insight."
              />
              <Stack spacing={6}>
                {solutionHighlights.map((item) => (
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
                eyebrow="Equity Insights"
                title="What the layered analysis uncovered."
                description="Synthesised race, income, education, and deployment signals to shape reform priorities."
              />
              <Stack spacing={3} mt={6}>
                {analysisInsights.map((item) => (
                  <Stack key={item} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{item}</Text>
                  </Stack>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Spotlight Maps"
                title="Where disparities intensify."
                description="Select jurisdictions from the notebook illustrate why tailored interventions matter."
              />
              <Stack spacing={4} mt={6}>
                {anomalySpotlights.map((spotlight) => (
                  <Box key={spotlight.location} layerStyle="card" p={{ base: 5, md: 6 }}>
                    <Heading size="sm" mb={2} color={useColorModeValue('brand.600', 'brand.300')}>
                      {spotlight.location}
                    </Heading>
                    <Text color={subtleText}>{spotlight.insight}</Text>
                  </Box>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Recognition"
                title="Celebrated for advancing equity in policing."
              />
              <Stack spacing={3} mt={6}>
                {recognition.map((item) => (
                  <Stack key={item} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{item}</Text>
                  </Stack>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading eyebrow="What Stood Out" title="Lessons for equity analytics." />
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

export default HighlightCPE;
