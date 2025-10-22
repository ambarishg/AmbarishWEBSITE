import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';

const highlight = {
  eyebrow: 'National Innovation Challenge',
  title: 'DST Geospatial Hackathon 2023 Winner',
  subtitle:
    'Delivering the Socio Economic Hub -- a multi-level geospatial intelligence platform that equips national stakeholders with actionable insights from village to parliament.',
  tags: [
    'Geospatial Analytics',
    'Survey of India',
    'IIIT Hyderabad',
    'Microsoft',
    'Socio Economic Hub'
  ]
};

const quickFacts = [
  {
    label: 'Organisers',
    value: 'Survey of India, IIIT Hyderabad, and Microsoft'
  },
  {
    label: 'Challenge Duration',
    value: '4-month journey spanning ideation, hackathon build, and national finals'
  },
  {
    label: 'Solution',
    value: 'Socio Economic Hub with indicators across village, assembly, and parliamentary levels'
  },
  {
    label: 'Post-win Impact',
    value: 'One-on-one roadmap discussion with Survey of India on nation-scale rollout'
  }
];

const narrative = [
  {
    eyebrow: 'The Journey',
    title: 'Sustained execution across a national, multi-phase hackathon',
    description:
      'Advancing through the DST Geospatial Hackathon demanded resilient focus over months of evaluation, with each stage testing problem framing, architecture, and the ability to translate geospatial data into national value.',
    points: [
      'Navigated ideation, build, and final selection rounds that spanned more than four months.',
      'Collaborated closely with organisers from the Survey of India, IIIT Hyderabad, and Microsoft to align intent and technology.',
      'Grounded the submission in measurable socio-economic outcomes, staying anchored to the nation good mandate.'
    ]
  },
  {
    eyebrow: 'Solution Spotlight',
    title: 'Socio Economic Hub: layered insights for every administrative tier',
    description:
      'The winning platform fuses diverse socio-economic indicators, enabling leaders to drill from village detail to constituency-wide trends without losing context or fidelity.',
    points: [
      'Aggregates village-level inputs and rolls them up dynamically to assembly and parliamentary constituencies.',
      'Applies Spatial Data Conflation to overlay administrative boundaries and reconcile multiple datasets.',
      'Provides a repeatable blueprint for programmes that need transparent, data-backed decision support across regions.'
    ]
  },
  {
    eyebrow: 'From Recognition to Adoption',
    title: 'Partnering with Survey of India on the next horizon',
    description:
      'Winning unlocked direct collaboration with national institutions, transforming a competition outcome into a platform journey.',
    points: [
      'Engaged in a post-win, one-on-one dialogue with the Survey of India to chart how the hub can scale nationally.',
      'Absorbed the entrepreneurial energy at IIIT Hyderabad, reinforcing the role of innovation ecosystems in nation building.',
      'Committed to stewarding the hub beyond the hackathon, aligning future enhancements with government priorities.'
    ]
  }
];

const HighlightDSTGeospatial = () => {
  const badgeColor = useColorModeValue('brand.600', 'brand.300');
  const subtleText = useColorModeValue('gray.600', 'gray.400');
  const accentBorder = useColorModeValue('brand.500', 'brand.300');

  return (
    <Box as="article" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <Breadcrumb
          mb={8}
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
              Highlights
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>DST Geospatial Hackathon Winner</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid templateColumns={{ base: '1fr', lg: '7fr 5fr' }} gap={{ base: 10, lg: 16 }}>
          <GridItem>
            <Stack spacing={{ base: 6, md: 8 }}>
              <Tag
                size="md"
                colorScheme="brand"
                variant="subtle"
                px={4}
                py={2}
                w="fit-content"
                borderRadius="full"
              >
                {highlight.eyebrow}
              </Tag>
              <Heading size={{ base: 'xl', md: '2xl' }}>{highlight.title}</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={subtleText} maxW="3xl">
                {highlight.subtitle}
              </Text>
              <WrapTags tags={highlight.tags} badgeColor={badgeColor} />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack
              spacing={4}
              p={{ base: 6, md: 7 }}
              borderRadius="2xl"
              boxShadow="xl"
              layerStyle="card"
            >
              <Heading size="sm" color={badgeColor} letterSpacing="0.06em" textTransform="uppercase">
                Quick facts
              </Heading>
              <Stack spacing={4}>
                {quickFacts.map((fact) => (
                  <Box key={fact.label}>
                    <Text
                      fontSize="sm"
                      color={subtleText}
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      {fact.label}
                    </Text>
                    <Text fontWeight="semibold" mt={1}>
                      {fact.value}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </GridItem>
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <Stack spacing={{ base: 10, md: 12 }}>
          {narrative.map((section) => (
            <Box
              key={section.title}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              borderLeftWidth="4px"
              borderLeftColor={accentBorder}
              boxShadow="lg"
            >
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <Stack spacing={3} mt={6}>
                {section.points.map((point) => (
                  <Text key={point} color={subtleText}>
                    {point}
                  </Text>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const WrapTags = ({ tags, badgeColor }) => {
  if (!tags.length) {
    return null;
  }
  const tagBg = useColorModeValue('brand.50', 'rgba(59, 130, 246, 0.12)');
  return (
    <SimpleGrid columns={{ base: 2, sm: tags.length >= 4 ? 3 : 2 }} spacing={2} maxW="xl">
      {tags.map((tag) => (
        <Tag key={tag} size="sm" variant="subtle" colorScheme="brand" bg={tagBg} color={badgeColor}>
          {tag}
        </Tag>
      ))}
    </SimpleGrid>
  );
};

export default HighlightDSTGeospatial;
