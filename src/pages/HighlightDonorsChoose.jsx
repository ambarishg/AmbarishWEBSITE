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
  title: 'DonorsChoose.org Recommendation Project - Dual Award Winner',
  subtitle:
    "Stage 1 Exploratory Data Analysis champion and Stage 2 recommendation engine awardee in Kaggle's Data Science for Good challenge.",
  tags: ['Kaggle', 'Recommendation Systems', 'Education Impact', 'Data Science for Good']
};

const background = [
  "Founded in 2000 by a Bronx history teacher, DonorsChoose.org has empowered donors to supply U.S. classrooms with $685M in resources, becoming the nation's leading platform for public education support.",
  'Over three million people and partners have already funded 1.1 million classroom projects. Yet teachers still spend more than a billion dollars of personal funds each year, so connecting donors with inspiring requests remains mission critical.',
  'For the second Kaggle Data Science for Good challenge, DonorsChoose.org partnered with Google.org to share five years of anonymized donation data and asked the community to help match donors with the projects that would spark their next gift. Winning solutions were deployed in email marketing campaigns to amplify classroom impact.'
];

const stageHighlights = [
  {
    title: 'Stage 1 - Exploratory Data Analysis Winner',
    description:
      'Delivered an exhaustive exploratory analysis that surfaced temporal giving patterns, donor retention insights, and feature engineering opportunities across a vast classroom funding dataset.'
  },
  {
    title: 'Stage 2 - Recommendation Engine Award',
    description:
      'Built item-item and user-centric recommenders that personalised donor outreach and boosted campaign performance.',
    bullets: [
      'Crafted text-only recommendations using project titles and teacher essays to capture mission context.',
      'Blended text and structured features - category, subcategory, grade, resource category, school state, and teacher prefix - for context-aware scoring.',
      'Benchmarked non-text features alone, ultimately delivering the highest accuracy for donor-project pairing.',
      'Augmented the solution with user-user recommendations leveraging donor histories and contribution amounts.'
    ]
  }
];

const quickFacts = [
  { label: 'Organisation', value: 'DonorsChoose.org' },
  { label: 'Challenge', value: 'Kaggle Data Science for Good - Recommendation Systems' },
  { label: 'Awards', value: 'Stage 1 Exploratory Data Analysis Winner & Stage 2 Recommendation Award' },
  { label: 'Impact', value: 'Activated within donor email journeys to inspire additional classroom funding' }
];

const takeaways = [
  'Exploratory depth created stakeholder trust and directly informed downstream modelling choices.',
  'Feature-rich similarity metrics outperformed text-only approaches when recommending classroom projects.',
  'Reusability mattered - notebooks, diagnostics, and narratives equipped DonorsChoose.org to operationalise the work quickly.'
];

const HighlightDonorsChoose = () => {
  useSEO(seo.highlightDonorsChoose);
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
              <BreadcrumbLink>DonorsChoose.org</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Stack spacing={6} align="flex-start">
            <Tag
              size="lg"
              colorScheme="brand"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
            >
              Kaggle Dual Award
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
                title="Fueling classrooms with targeted donor outreach."
                description={background[0]}
              />
              <Text color={subtleText}>{background[1]}</Text>
              <Text color={subtleText}>{background[2]}</Text>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="Award Moments"
                title="Winning both the exploratory and recommendation stages."
                description="Two complementary submissions earned top honours by combining rigorous analysis with production-ready recommendations."
              />
              <Stack spacing={6}>
                {stageHighlights.map((stage) => (
                  <Box key={stage.title} layerStyle="card" p={{ base: 6, md: 7 }}>
                    <Heading size="sm" mb={3} color={useColorModeValue('brand.600', 'brand.300')}>
                      {stage.title}
                    </Heading>
                    <Text color={subtleText}>{stage.description}</Text>
                    {stage.bullets ? (
                      <Stack spacing={3} mt={5}>
                        {stage.bullets.map((item) => (
                          <Stack key={item} direction="row" spacing={3} align="flex-start">
                            <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                            <Text color={subtleText}>{item}</Text>
                          </Stack>
                        ))}
                      </Stack>
                    ) : null}
                  </Box>
                ))}
              </Stack>

              <Divider borderColor="outline" />

              <SectionHeading
                eyebrow="What Stood Out"
                title="Insights that helped DonorsChoose.org act fast."
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

export default HighlightDonorsChoose;
