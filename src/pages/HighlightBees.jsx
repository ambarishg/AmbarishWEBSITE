import {
  AspectRatio,
  Badge,
  Box,
  Button,
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

const hero = {
  title: 'Bees Health Detection on Azure',
  subtitle:
    'A computer-vision pipeline that helps beekeepers detect disease early—featured by Microsoft India for advancing sustainability with AI.',
  tags: ['Custom Vision', 'Agritech', 'Computer Vision', 'Azure AI']
};

const sections = [
  {
    eyebrow: 'Challenge',
    title: 'Why monitor bees with AI?',
    description:
      'Global bee populations are under threat from mites and hive beetles. Manual inspections disrupt hives, so we built a vision system to analyse bees as they leave the colony.',
    bullets: [
      'Detect deformed wings, mites, and ant infestations from external imagery.',
      'Automate monitoring to reduce labour and hive disturbance.',
      'Deliver actionable insights for beekeepers and agricultural boards.'
    ]
  },
  {
    eyebrow: 'Solution Overview',
    title: 'Azure Custom Vision at the core',
    description:
      'The project uses Azure Custom Vision to classify images into healthy bees, ant problems, and varroa/hive beetle infections. A curated dataset and iterative training drove high accuracy.',
    bullets: [
      'Balanced dataset sourced from Kaggle, augmented to mimic field conditions.',
      'Quick and advanced training iterations to fine-tune precision and recall.',
      'Published iteration exposed via REST API for downstream integration.'
    ]
  },
  {
    eyebrow: 'Impact',
    title: 'Recognised by Microsoft India',
    description:
      'The initiative was showcased for demonstrating how cloud AI can protect vital pollinators and promote sustainable agriculture.',
    bullets: [
      'Enables early intervention before colony collapse.',
      'Scales across multiple hives through automated workflows.',
      'Inspires other conservation-focused AI projects.'
    ]
  }
];

const implementationSteps = [
  'Provision Azure Custom Vision training and prediction resources.',
  'Create a multiclass classification project with health-specific tags.',
  'Upload curated images, apply consistent labelling, and augment strategically.',
  'Iterate on training, monitoring precision/recall, then publish the best model.',
  'Consume the prediction API from Node.js and edge clients for real-time inference.'
];

const links = [
  {
    label: 'Watch the Microsoft India showcase',
    href: 'https://www.youtube.com/watch?v=d92H_wPyrUE&t=16s'
  },
  {
    label: 'Read the detailed build log',
    href: '/blogs/bees-health-detection'
  },
  {
    label: 'View the GitHub reference implementation',
    href: 'https://github.com/ambarishg/beeshealthdetection'
  }
];

const HighlightBees = () => {
  const heroGradient = useColorModeValue(
    'linear-gradient(120deg, rgba(255, 215, 0, 0.18) 0%, rgba(59, 134, 245, 0.15) 100%)',
    'linear-gradient(120deg, rgba(250, 204, 21, 0.35) 0%, rgba(37, 99, 235, 0.3) 100%)'
  );
  const videoBorder = useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.3)');

  return (
    <Box as="article">
      <Box bg={heroGradient} py={{ base: 16, md: 20 }} borderBottom="1px solid" borderColor="outline">
        <Container maxW="6xl">
          <Stack spacing={6} align="flex-start">
            <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
              Microsoft India Showcase
            </Tag>
            <Heading size="2xl" maxW="3xl" lineHeight={1.05}>
              {hero.title}
            </Heading>
            <Text fontSize="lg" maxW="3xl" color="subtleText">
              {hero.subtitle}
            </Text>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              {hero.tags.map((tag) => (
                <Badge key={tag} colorScheme="brand" variant="subtle">
                  {tag}
                </Badge>
              ))}
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              {links.slice(0, 1).map((link) => (
                <Button
                  key={link.href}
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="brand"
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={{ base: 12, md: 16 }}>
          <GridItem>
            {sections.map((section) => (
              <Box key={section.title} mb={{ base: 12, md: 16 }}>
                <SectionHeading
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.description}
                />
                <Stack spacing={3} mt={6}>
                  {section.bullets.map((bullet) => (
                    <Stack key={bullet} direction="row" spacing={3} align="flex-start">
                      <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                      <Text color="subtleText">{bullet}</Text>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </GridItem>

          <GridItem>
            <Stack spacing={8}>
              <Box layerStyle="card" p={{ base: 6, md: 8 }}>
                <Heading size="sm" color={useColorModeValue('brand.600', 'brand.300')} mb={4}>
                  Implementation Playbook
                </Heading>
                <Stack spacing={3} color="subtleText" fontSize="sm">
                  {implementationSteps.map((step) => (
                    <Stack key={step} direction="row" spacing={3} align="flex-start">
                      <Icon as={CheckCircleIcon} color="brand.400" boxSize={4} mt={1} />
                      <Text>{step}</Text>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Box layerStyle="subtleCard" p={{ base: 4, md: 6 }}>
                <Heading size="sm" mb={4} color={useColorModeValue('brand.600', 'brand.300')}>
                  Video Showcase
                </Heading>
                <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden" border="1px solid" borderColor={videoBorder}>
                  <iframe
                    src="https://www.youtube.com/embed/d92H_wPyrUE?start=16"
                    title="Bees Health Detection on Azure"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </Stack>
          </GridItem>
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Resources"
          title="Continue exploring the Bees health initiative."
          description="Dive deeper into the technical build, the open-source code, and more highlights across sustainability and AI."
        />

        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} mt={10}>
          {links.map((link) => (
            <Tag
              key={link.href}
              as={link.href.startsWith('/') ? RouterLink : 'a'}
              to={link.href.startsWith('/') ? link.href : undefined}
              href={!link.href.startsWith('/') ? link.href : undefined}
              target={!link.href.startsWith('/') ? '_blank' : undefined}
              rel={!link.href.startsWith('/') ? 'noopener noreferrer' : undefined}
              colorScheme="brand"
              variant="outline"
              px={5}
              py={3}
              borderRadius="full"
              display="inline-flex"
              alignItems="center"
              gap={2}
            >
              {link.label}
              <ArrowForwardIcon />
            </Tag>
          ))}
        </Stack>

        <Box
          mt={{ base: 16, md: 20 }}
          layerStyle="subtleCard"
          p={{ base: 6, md: 8 }}
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
          gap={6}
        >
          <Box>
            <Heading size="sm" color={useColorModeValue('brand.600', 'brand.300')} mb={2}>
              Explore more highlights
            </Heading>
            <Text color="subtleText" maxW="lg">
              See additional award-winning projects across energy, AI, and community impact.
            </Text>
          </Box>
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
        </Box>
      </Container>
    </Box>
  );
};

export default HighlightBees;
