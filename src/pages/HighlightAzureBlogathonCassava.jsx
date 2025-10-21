import {
  AspectRatio,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import cassavaCaseStudy from '../../blogs/Cassava.pdf?url';
import cassavaImage from '../../images/AG.jpg';

const hero = {
  title: 'Azure Blogathon Champion | Cassava Disease Detection',
  subtitle:
    'How Ambarish turned a cassava leaf disease challenge into an award-winning Azure solution blending AI, container apps, and responsible data practices.',
  tags: ['Azure Blogathon', 'Computer Vision', 'Container Apps', 'Azure Cosmos DB'],
  primaryCta: {
    label: 'Read the winning submission (PDF)',
    href: cassavaCaseStudy
  },
  secondaryCta: {
    label: 'Explore more case studies',
    to: '/highlights'
  }
};

const architecture = [
  'Azure Custom Vision models trained on cassava leaf imagery captured across five disease classes plus healthy baselines.',
  'Azure Container Apps host the inference layer, delivering auto-scaling APIs without server management overhead.',
  'Azure Container Registry stores signed images, providing a trusted supply chain from development to production.',
  'Azure Cosmos DB captures inference outputs so agronomists can monitor disease trends and plan interventions.',
  'Azure Key Vault secures API keys and connection strings, while managed identities enforce least-privilege access.',
  'GitHub Actions orchestrates CI/CD, container builds, and deployment rollouts into Azure Container Apps.',
  'Azure Storage retains imagery for auditing, retraining, and quality assurance workflows.'
];

const highlights = [
  {
    eyebrow: 'Farmer-first innovation',
    title: 'Diagnosing cassava diseases before yield collapses',
    points: [
      'Cassava sustains 800M+ people; early detection prevents viral outbreaks from decimating harvests.',
      'The solution supports offline image capture and asynchronous uploads so connectivity gaps do not block diagnosis.',
      'Localized guidance helps growers understand severity, containment, and follow-up actions in plain language.'
    ]
  },
  {
    eyebrow: 'Azure engineering excellence',
    title: 'Production-ready AI in weeks, not months',
    points: [
      'Container Apps and Custom Vision abstract away undifferentiated heavy lifting, letting the team focus on agronomy.',
      'Layered observability—Application Insights and Cosmos DB metrics—surface drift or anomalies for continuous improvement.',
      'Helm templates and GitHub Actions pipelines codify infrastructure, supporting rapid replication across regions.'
    ]
  },
  {
    eyebrow: 'Sustainable community impact',
    title: 'Scaled knowledge sharing beyond the competition',
    points: [
      'Published architectures became reference material for hackathon participants and Azure community learning circles.',
      'Mentored universities and cooperatives on adapting the approach to other crops including paddy and bananas.',
      'Captured lessons on data governance, bias mitigation, and human-in-the-loop validation to encourage responsible AI.'
    ]
  }
];

const WrapTags = ({ tags, color }) => {
  if (!tags.length) {
    return null;
  }
  const bg = useColorModeValue('brand.50', 'rgba(59, 130, 246, 0.12)');
  return (
    <SimpleGrid columns={{ base: 2, sm: tags.length >= 4 ? 4 : 2 }} spacing={2} maxW="xl">
      {tags.map((tag) => (
        <Tag key={tag} size="sm" variant="subtle" colorScheme="brand" bg={bg} color={color}>
          {tag}
        </Tag>
      ))}
    </SimpleGrid>
  );
};

const HighlightAzureBlogathonCassava = () => {
  const linkColor = useColorModeValue('brand.600', 'brand.300');
  const subtleText = useColorModeValue('gray.600', 'gray.400');
  const badgeColor = useColorModeValue('brand.600', 'brand.300');
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(17, 24, 39, 0.85)');

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
              Case Studies
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Cassava Disease Detection</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid templateColumns={{ base: '1fr', lg: '7fr 5fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
          <GridItem>
            <Stack spacing={{ base: 6, md: 8 }}>
              <Tag size="md" colorScheme="brand" variant="subtle" px={4} py={2} w="fit-content" borderRadius="full">
                Azure Blogathon Champion
              </Tag>
              <Heading size={{ base: 'xl', md: '2xl' }}>{hero.title}</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={subtleText} maxW="3xl">
                {hero.subtitle}
              </Text>
              <WrapTags tags={hero.tags} color={badgeColor} />
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} align={{ base: 'stretch', sm: 'center' }}>
                <Button
                  as="a"
                  href={hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="brand"
                  size="lg"
                  rightIcon={<ExternalLinkIcon />}
                  px={6}
                  py={6}
                  whiteSpace="normal"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  as={RouterLink}
                  to={hero.secondaryCta.to}
                  variant="outline"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<ArrowForwardIcon />}
                  px={6}
                  py={6}
                  whiteSpace="normal"
                >
                  {hero.secondaryCta.label}
                </Button>
              </Stack>
            </Stack>
          </GridItem>
          
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Solution Architecture"
          title="Enterprise-grade Azure blueprint for agritech innovation"
          description="A modular architecture balances rapid prototyping with production reliability so farmers receive consistent, trustworthy predictions."
        />
        <Stack spacing={3} mt={8}>
          {architecture.map((item) => (
            <Stack key={item} direction="row" spacing={3} align="flex-start">
              <Icon viewBox="0 0 20 20" color="brand.400" boxSize={5} mt={1}>
                <path fill="currentColor" d="M10 2a8 8 0 1 1-8 8 8.01 8.01 0 0 1 8-8Zm3.71 5.29-4.4 4.39-2.02-2.01-1.4 1.41 3.43 3.42 5.81-5.8Z" />
              </Icon>
              <Text color={subtleText}>{item}</Text>
            </Stack>
          ))}
        </Stack>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <Stack spacing={{ base: 10, md: 12 }}>
          {highlights.map((section) => (
            <Box
              key={section.title}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              borderLeftWidth="4px"
              borderLeftColor={useColorModeValue('brand.500', 'brand.300')}
              boxShadow="xl"
            >
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={null}
              />
              <Stack spacing={3} mt={6}>
                {section.points.map((point) => (
                  <Stack direction="row" spacing={3} align="flex-start" key={point}>
                    <Icon viewBox="0 0 20 20" color="brand.400" boxSize={5} mt={1}>
                      <path fill="currentColor" d="M8.5 13.5 5 10l1.4-1.4 2.1 2.1 5.1-5.1L15 7.1z" />
                    </Icon>
                    <Text color={subtleText}>{point}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HighlightAzureBlogathonCassava;

