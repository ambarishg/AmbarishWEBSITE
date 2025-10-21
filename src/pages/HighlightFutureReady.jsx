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
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';

const HERO_IMAGE =
  'https://news.microsoft.com/en-in/wp-content/uploads/sites/145/2023/01/Future-ready-champions-of-code-hero.jpg';

const hero = {
  title: 'Future Ready Champions of Code - Microsoft Hackathon Winner',
  subtitle:
    'How a nationwide Azure skilling program culminated in a hackathon victory with an AI-powered Agriculture Hub.',
  tags: ['Azure AI', 'Hackathon', 'Agritech', 'Microsoft India'],
  primaryCta: {
    label: 'Read the Microsoft announcement',
    href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
  },
  secondaryCta: {
    label: 'Review the technical recap',
    to: '/blogs/future-ready-champions'
  }
};

const pillars = [
  {
    eyebrow: 'Program Overview',
    title: 'Skilling + innovation at national scale.',
    description:
      "Microsoft's Future Ready Champions of Code blended certification pathways with a nationwide hackathon to help 100,000+ developers build solutions for India's growth.",
    bullets: [
      'Launched December 2022 with Microsoft Cloud certification journeys.',
      'Hackathon themes: industry innovation, smart cities, sustainable software.',
      'Partners included AICTE, NASSCOM, ICT Academy, Foundit, and Microsoft customers.'
    ]
  },
  {
    eyebrow: 'Winning Solution',
    title: 'Azure Agriculture Hub for inclusive growth.',
    description:
      'Our Tata Consultancy Services team created a farmer-first assistant that fuses Azure AI with agronomy knowledge to deliver actionable insights.',
    bullets: [
      'Aggregated weather, market, and agronomy data through Azure Cognitive Services and Azure Maps.',
      'Multilingual conversational experiences powered by Azure OpenAI to guide farmers in daily decision-making.',
      'Data-driven crop planning, yield forecasts, and supply-chain coordination for cooperatives and government programs.'
    ]
  },
  {
    eyebrow: 'Impact',
    title: 'Recognised by Microsoft India as the top innovation.',
    description:
      'The Agriculture Hub secured first place, underscoring how AI can improve sustainability, productivity, and equitable access to technology.',
    bullets: [
      'Invited to the Future Ready Technology Summit in Bengaluru (5 January 2023).',
      "Amplified Microsoft's commitment to skilling 7.3M+ learners in India with in-demand cloud capabilities."
    ]
  }
];

const implementationSteps = [
  'Complete Microsoft Cloud certification pathways to build a resilient Azure foundation.',
  'Ideate around national priorities: agriculture, public services, smart infrastructure, sustainability.',
  'Prototype cloud-native solutions using Azure AI, Data, IoT, and developer services.',
  'Validate impact and scalability with mentors from Microsoft and industry partners.',
  'Showcase solutions at forums like the Future Ready Technology Summit to drive adoption.'
];

const stats = [
  {
    value: '100K+',
    label: 'Developers skilled through Future Ready Champions of Code'
  },
  {
    value: 'Top honour',
    label: 'Winning solution at the Future Ready Technology Summit'
  },
  {
    value: '7.3M+ learners',
    label: 'Broader Microsoft skilling ambition in India'
  }
];

const resources = [
  {
    label: 'Microsoft press release',
    href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
  },
  {
    label: 'Detailed blog recap',
    href: '/blogs/future-ready-champions'
  },
  {
    label: 'Connect to collaborate',
    href: '/#contact'
  }
];

const HighlightFutureReady = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(120deg, rgba(59,134,245,0.12) 0%, rgba(255,215,0,0.15) 100%)',
    'linear-gradient(120deg, rgba(59,134,245,0.3) 0%, rgba(250,204,21,0.25) 100%)'
  );
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.85)');
  const imageBorder = useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.25)');
  const pillarBorderColor = useColorModeValue('brand.500', 'brand.300');
  const statValueColor = useColorModeValue('brand.700', 'brand.200');
  const implementationHeadingColor = useColorModeValue('brand.600', 'brand.300');
  const quoteHighlightColor = useColorModeValue('brand.700', 'brand.200');
  const quoteAttributionColor = useColorModeValue('brand.600', 'brand.300');
  const quoteBorderColor = useColorModeValue('brand.400', 'brand.500');

  return (
    <Box as="article">
      <Box
        bg={heroBg}
        py={{ base: 16, md: 20 }}
        borderBottom="1px solid"
        borderColor="outline"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-16"
          right="-16"
          width="52"
          height="52"
          bg="linear-gradient(135deg, rgba(59,134,245,0.35) 0%, rgba(255,215,0,0.25) 100%)"
          borderRadius="full"
          filter="blur(32px)"
          opacity={0.7}
        />
        <Box
          position="absolute"
          bottom="-20"
          left="-24"
          width="56"
          height="56"
          bg="linear-gradient(135deg, rgba(34,211,238,0.25) 0%, rgba(59,130,246,0.3) 100%)"
          borderRadius="full"
          filter="blur(36px)"
          opacity={0.5}
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Grid
            templateColumns={{ base: '1fr', lg: '7fr 5fr' }}
            gap={{ base: 10, lg: 14 }}
            alignItems="center"
          >
            <Stack spacing={{ base: 6, lg: 8 }} align="flex-start">
              <Tag size="lg" colorScheme="brand" variant="subtle" px={4} py={2} borderRadius="full">
                Microsoft India Showcase
              </Tag>
              <Heading size={{ base: 'xl', md: '2xl' }} maxW="3xl" lineHeight={1.05}>
                {hero.title}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" color="subtleText">
                {hero.subtitle}
              </Text>
              <Wrap spacing={2}>
                {hero.tags.map((tag) => (
                  <WrapItem key={tag}>
                    <Badge colorScheme="brand" variant="subtle" px={3} py={1} borderRadius="full">
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                <Button
                  as="a"
                  href={hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="brand"
                  size="lg"
                  rightIcon={<ExternalLinkIcon />}
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
                >
                  {hero.secondaryCta.label}
                </Button>
              </Stack>
            </Stack>
            <AspectRatio ratio={16 / 10}>
              <Image
                src={HERO_IMAGE}
                fallbackSrc="https://via.placeholder.com/960x540.png?text=Future+Ready+Champions+of+Code"
                alt="Future Ready Champions of Code celebration"
                borderRadius="2xl"
                border="1px solid"
                borderColor={imageBorder}
                objectFit="cover"
                boxShadow="xl"
              />
            </AspectRatio>
          </Grid>
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={{ base: 6, md: 8 }}
            mt={{ base: 12, md: 16 }}
          >
            {stats.map((stat) => (
              <Box
                key={stat.label}
                p={{ base: 4, md: 6 }}
                border="1px solid"
                borderColor="outline"
                borderRadius="xl"
                bg={cardBg}
                boxShadow="md"
              >
                <Text fontSize="2xl" fontWeight="semibold" color={statValueColor}>
                  {stat.value}
                </Text>
                <Text fontSize="sm" mt={1} color="subtleText">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <Grid templateColumns={{ base: '1fr', md: '7fr 5fr' }} gap={{ base: 12, md: 16 }}>
          <GridItem>
            {pillars.map((pillar) => (
              <Box
                key={pillar.title}
                mb={{ base: 12, md: 16 }}
                layerStyle="card"
                p={{ base: 6, md: 8 }}
                borderLeftWidth="4px"
                borderLeftColor={pillarBorderColor}
                boxShadow="lg"
              >
                <SectionHeading
                  eyebrow={pillar.eyebrow}
                  title={pillar.title}
                  description={pillar.description}
                />
                <Stack spacing={3} mt={6}>
                  {pillar.bullets.map((bullet) => (
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
              <Box layerStyle="card" p={{ base: 4, md: 6 }} boxShadow="xl">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={HERO_IMAGE}
                    fallbackSrc="https://via.placeholder.com/960x540.png?text=Future+Ready+Champions+of+Code"
                    alt="Future Ready Champions of Code celebration"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={imageBorder}
                    objectFit="cover"
                  />
                </AspectRatio>
              </Box>
              <Box layerStyle="subtleCard" p={{ base: 6, md: 8 }} boxShadow="md">
                <Heading size="sm" color={implementationHeadingColor} mb={4}>
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
              <Box
                layerStyle="subtleCard"
                p={{ base: 6, md: 8 }}
                borderLeft="4px solid"
                borderColor={quoteBorderColor}
                boxShadow="md"
              >
                <Text fontStyle="italic" color={quoteHighlightColor}>
                  "Future Ready Champions of Code shows how inclusive skilling and purposeful innovation can
                  accelerate digital transformation for every community."
                </Text>
                <Text mt={4} fontWeight="semibold" color={quoteAttributionColor}>
                  Program Mentorship Cohort
                </Text>
                <Text fontSize="sm" color="subtleText">
                  Microsoft India &amp; Tata Consultancy Services
                </Text>
              </Box>
            </Stack>
          </GridItem>
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <SectionHeading
          eyebrow="Resources"
          title="Keep the momentum going."
          description="Explore the official announcement, revisit the technical recap, and connect to partner on future innovation."
        />
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={10}>
          {resources.map((resource) => {
            const isExternal = resource.href.startsWith('http');
            const linkProps = isExternal
              ? { as: 'a', href: resource.href, target: '_blank', rel: 'noopener noreferrer' }
              : { as: RouterLink, to: resource.href };
            return (
              <Button
                key={resource.href}
                colorScheme="brand"
                variant={isExternal ? 'outline' : 'solid'}
                size="lg"
                rightIcon={isExternal ? <ExternalLinkIcon /> : <ArrowForwardIcon />}
                {...linkProps}
              >
                {resource.label}
              </Button>
            );
          })}
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
          boxShadow="md"
        >
          <Box>
            <Heading size="sm" color={quoteAttributionColor} mb={2}>
              Explore more highlights
            </Heading>
            <Text color="subtleText" maxW="lg">
              Discover additional award-winning initiatives across AI, energy, and sustainability.
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

export default HighlightFutureReady;
