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
  title: 'Kiva Crowd Funding Data Challenge - Data Analysis Award',
  subtitle:
    'Winning Kaggle Data Science for Good analysis that advanced poverty-level insights for inclusive lending.',
  tags: ['Kaggle', 'Data Science for Good', 'Financial Inclusion', 'Poverty Mapping']
};

const background = [
  'Kiva.org extends microloans to financially excluded communities worldwide, unlocking access to capital for over two million borrowers with more than $1B in lending volume.',
  'To direct funding where it can help most, Kiva needs localized poverty estimates for each borrower community. Yet the available borrower information is sparse, making reliable poverty inference a data science challenge.',
  "Kaggle's inaugural Data Science for Good challenge invited the community to analyse Kiva's lending data, incorporate public datasets, and propose actionable insights instead of leaderboard submissions."
];

const approach = [
  'Explored the two-year lending dataset to surface geographic, sector, and borrower trends that correlate with poverty indicators.',
  "Blended Kiva loan attributes with external socioeconomic data to craft a naive poverty metric that could be refined by Kiva's analysts.",
  'Delivered transparent kernel documentation so Kiva teams and fellow competitors could reuse data preparation, feature engineering, and exploratory visuals.'
];

const impact = [
  'Recognised by Kiva judges with the Data Analysis Award for catalysing poverty-level understanding in target regions.',
  'Equipped Kiva with richer borrower context, supporting smarter capital allocation and storytelling for lenders.',
  'Encouraged open sharing of code and datasets, strengthening the collaborative ethos behind Data Science for Good.'
];

const quickFacts = [
  { label: 'Organisation', value: 'Kiva.org' },
  { label: 'Challenge', value: 'Kaggle Data Science for Good - Kiva Crowdfunding' },
  { label: 'Award', value: 'Data Analysis Award for Kiva Data Analysis w/ Naive Poverty Metric' },
  { label: 'Focus', value: 'Poverty scoring, financial inclusion, exploratory analytics' }
];

const HighlightKiva = () => {
  useSEO(seo.highlightKiva);
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
              <BreadcrumbLink>Kiva Data Analysis Award</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Stack spacing={6} align="flex-start">
            <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Data Science for Good
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
                eyebrow="Challenge Context"
                title="Mapping borrower poverty with limited data."
                description={background[0]}
              />
              <Text color={subtleText}>{background[1]}</Text>
              <Text color={subtleText}>{background[2]}</Text>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Analytical Approach"
                title="From exploratory insights to a transparent poverty metric."
              />
              <Stack spacing={3} mt={6}>
                {approach.map((item) => (
                  <Stack key={item} direction="row" spacing={3} align="flex-start">
                    <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                    <Text color={subtleText}>{item}</Text>
                  </Stack>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Impact"
                title="Helping Kiva channel capital where it matters most."
              />
              <Stack spacing={3} mt={6}>
                {impact.map((item) => (
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
            <Text color={subtleText}>
              Discover additional award-winning analytics and AI programs driving impact across energy, education, and
              sustainability.
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

export default HighlightKiva;
