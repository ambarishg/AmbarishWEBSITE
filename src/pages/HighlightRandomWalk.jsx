import {
  Badge,
  Box,
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
import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const meta = {
  title: 'Random Walk of the Penguins - Winning NASA-Sponsored Forecast',
  subtitle:
    "How a blended ensemble, disciplined data repair, and close collaboration delivered the top spot in DrivenData's Antarctic conservation challenge.",
  tags: ['Time Series Forecasting', 'Ecology', 'XGBoost', 'ARIMA', 'NASA Award'],
  links: [
    {
      label: 'Competition on DrivenData',
      href: 'https://www.drivendata.org/competitions/47/penguins/'
    },
    {
      label: 'Official DrivenData Recap',
      href: 'http://blog.drivendata.org/2017/08/28/random-walk-of-the-penguins/'
    }
  ]
};

const phases = [
  {
    heading: 'Mission',
    body: `Oceanites, NASA, and Stony Brook University needed reliable forecasts for Adelie, Chinstrap, and Gentoo penguin colonies. Most field stations capture only sporadic counts, so conservation teams asked the data science community to fill the gaps and project populations through 2017.`
  },
  {
    heading: 'Data reality',
    body: `The dataset included 648 species - site combinations, stretching back to 1875 with wildly inconsistent sampling. Long stretches of missing data, sudden spikes driven by weather and krill cycles, and differing colony behaviours required a customised signal reconstruction plan before any forecasting model could be trusted.`
  },
  {
    heading: 'Outcome',
    body: `The ensemble solution delivered the lowest leaderboard error, earning first prize. Beyond the medal, the organisers received production-ready notebooks, validation artefacts, and explainers that helped translate quantitative insights into conservation decisions.`
  }
];

const imputationSteps = [
  'Spline (Stineman) or linear interpolation to rebuild gentle trends without overfitting extreme events.',
  'Last Observation Carried Forward to respect recent momentum where surveys paused mid-growth.',
  'Next Observation Carried Backward to support early-period gaps and cold-start series.',
  'Targeted zero fill when ecologists confirmed that no birds were present during harsh winters.'
];

const models = [
  'XGBoost to capture non-linear interactions between lag features and location descriptors.',
  'Random Forest to provide variance reduction and interpretability on feature importance.',
  'ARIMA for sites exhibiting clear autoregressive structure with limited exogenous factors.',
  'ETS for trend/seasonal decomposition when data behaved multiplicatively.',
  'Prophet for annual seasonality, breeding-cycle effects, and calibrated uncertainty intervals.'
];

const insights = [
  'Data empathy is non-negotiable - ecological limits must constrain every imputation step.',
  'Model plurality keeps forecasts honest; no single algorithm dominates across 648 colonies.',
  'Narrative reporting matters. Visual walkthroughs and uncertainty bands help scientists adopt machine learning outputs.'
];

const HighlightRandomWalk = () => {
  useSEO(seo.highlightRandomWalk);
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
            <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Winner - NASA-Sponsored Challenge
            </Tag>
            <Heading size="2xl" maxW="3xl" lineHeight={1.1}>
              {meta.title}
            </Heading>
            <Text fontSize="lg" maxW="3xl" color="subtleText">
              {meta.subtitle}
            </Text>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              {meta.tags.map((tag) => (
                <Badge key={tag} variant="subtle" colorScheme="brand">
                  {tag}
                </Badge>
              ))}
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              {meta.links.map((link) => (
                <Tag
                  key={link.href}
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="brand"
                  variant="outline"
                  px={4}
                  py={2}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                >
                  {link.label}
                  <Icon as={ArrowForwardIcon} boxSize={4} />
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={{ base: 12, md: 16 }}>
          <GridItem>
            <SectionHeading
              eyebrow="Project Context"
              title="Forecasting penguin populations to protect the Southern Ocean."
              description="The goal: supply ecologists with defensible colony projections for 2014 - 2017 so they could prioritise conservation funding across remote Antarctic sites."
            />

            <Stack spacing={10} mt={12}>
              {phases.map((phase) => (
                <Box key={phase.heading} layerStyle="card" p={{ base: 6, md: 8 }}>
                  <Heading size="sm" mb={3} color={useColorModeValue('brand.600', 'brand.300')}>
                    {phase.heading}
                  </Heading>
                  <Text color="subtleText" lineHeight={1.7}>
                    {phase.body}
                  </Text>
                </Box>
              ))}
            </Stack>
          </GridItem>

          <GridItem>
            <Box layerStyle="subtleCard" p={{ base: 6, md: 8 }}>
              <Heading size="sm" color={useColorModeValue('brand.600', 'brand.300')} mb={4}>
                Quick facts
              </Heading>
              <Stack spacing={4} fontSize="sm" color="subtleText">
                <Text>
                  <strong>Organisers:</strong> Oceanites, Black Bawks Data Science, Dr. Heather
                  Lynch (Stony Brook), NASA
                </Text>
                <Text>
                  <strong>Species covered:</strong> Adelie, Chinstrap, Gentoo
                </Text>
                <Text>
                  <strong>Series:</strong> 648 site - species combinations (1875 - 2013)
                </Text>
                <Text>
                  <strong>Forecast horizon:</strong> 2014 - 2017
                </Text>
                <Text>
                  <strong>Role:</strong> Lead data scientist & winning competitor
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Data Repair"
          title="Building trustworthy time series before forecasting."
          description="Four staged imputers enforced ecological plausibility and ensured downstream models received stable signals."
        />
        <Stack spacing={3} mt={6}>
          {imputationSteps.map((step) => (
            <Stack key={step} direction="row" spacing={3} align="flex-start">
              <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
              <Text color="subtleText">{step}</Text>
            </Stack>
          ))}
        </Stack>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Model Ensemble"
          title="Five complementary forecasters, one coherent story."
          description="Each algorithm contributed unique strengths; ensembling their outputs produced resilient forecasts across all colonies."
        />
        <Stack spacing={3} mt={6}>
          {models.map((item) => (
            <Stack key={item} direction="row" spacing={3} align="flex-start">
              <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
              <Text color="subtleText">{item}</Text>
            </Stack>
          ))}
        </Stack>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Impact"
          title="From leaderboard win to conservation decisions."
          description="Beyond the top rank, the project delivered reproducible artefacts and stakeholder-ready visualisations that help policy makers act."
        />
        <Stack spacing={3} mt={6}>
          {insights.map((insight) => (
            <Stack key={insight} direction="row" spacing={3} align="flex-start">
              <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
              <Text color="subtleText">{insight}</Text>
            </Stack>
          ))}
        </Stack>
      </Container>

      <Box py={{ base: 12, md: 14 }} bg={useColorModeValue('rgba(236,243,255,0.5)', 'rgba(13,20,33,0.8)')}>
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
            <Text color="subtleText">
              Discover the full list of accolades, publications, and community recognitions that trace the arc of
              applied AI work across energy, utilities, and sustainability.
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

export default HighlightRandomWalk;
