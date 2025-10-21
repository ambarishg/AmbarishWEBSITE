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
  title: 'Agriculture Hub | Future Ready Champions of Code Winner',
  subtitle:
    'Ambarish Ganguly led the creation of Agriculture Hub, a nationwide platform recognised by Microsoft India for empowering farmers through Azure AI.',
  tags: ['Agriculture Hub', 'Azure AI', 'Hackathon Winner', 'Microsoft India'],
  primaryCta: {
    label: 'Read the Microsoft announcement',
    href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
  },
  secondaryCta: null
};

const agricultureHub = {
  vision:
    'Agriculture Hub is envisioned as a one-stop destination that enables farmers across India to cultivate healthier crops, improve yields, and elevate their livelihoods through accessible digital intelligence.',
  components: [
    'A responsive web experience that unifies every capability in a single farmer-friendly destination.',
    'Paddy Disease Detection that pinpoints paddy crop diseases before they cause significant losses.',
    'Cassava Disease Detection that distinguishes between multiple viral leaf infections and healthy plants.',
    'Bees Disease Detection that assesses hive health by analysing bees for visible indicators of infection.'
  ],
  architecture: [
    'Flask powers the user interface, delivering a lightweight, mobile-ready experience for field conditions.',
    'Azure Container Apps hosts the workload, providing elastic scale and managed security in production.',
    'Azure Container Registry stores signed container images that can be promoted through environments.',
    'Azure Custom Vision models detect crop and hive diseases from farmer-submitted imagery.',
    'Managed identities and Azure Key Vault protect application secrets and runtime credentials.',
    'Continuous delivery is automated through GitHub Actions integrated with Azure Container Apps.',
    'Azure Blob Storage preserves uploaded images for auditing, retraining, and longitudinal analysis.',
    'Prediction outcomes are persisted in Azure Cosmos DB to power dashboards and agronomy insights.',
    'Field-ready access is delivered through a responsive front end optimised for both web and mobile use.'
  ],
  diseaseDetection: [
    {
      name: 'Paddy Disease Detection',
      summary:
        'Rice cultivation demands constant vigilance; Agriculture Hub automates disease identification with computer vision so agronomists can intervene before losses approach the 70 percent thresholds seen in manual programmes.'
    },
    {
      name: 'Cassava Disease Detection',
      summary:
        'Cassava sustains food security for small-holder farmers across Sub-Saharan Africa; the hub analyses images across four viral categories plus healthy leaves to support early diagnosis and yield protection.'
    },
    {
      name: 'Bees Disease Detection',
      summary:
        'Because every third bite of food depends on pollinators, the solution evaluates bee imagery to flag deformities from threats such as varroa mites, hive beetles, and ant infestations without disrupting the hive.'
    }
  ]
};

const sectionSpacing = { base: 16, md: 24 };

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
      'Ambarish created a farmer-first assistant that fuses Azure AI with agronomy knowledge to deliver actionable insights.',
    bullets: [
      'Aggregated weather, market, and agronomy data through Azure Cognitive Services.',
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

const resources = [
  {
    label: 'Microsoft press release',
    href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
  },
  {
    label: 'Azure Blogathon champion case study',
    href: '/highlights/azure-blogathon-champion'
  },
  {
    label: 'Connect to collaborate',
    href: '/#contact'
  }
];

const impactStats = [
  {
    value: '100K+',
    label: 'Developers upskilled through Future Ready Champions of Code'
  },
  {
    value: 'National winner',
    label: 'Agriculture Hub recognised on stage at the Future Ready Technology Summit'
  },
  {
    value: '7.3M+ learners',
    label: "Microsoft's broader skilling ambition in India supported by the programme"
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
  const highlightPanelBg = useColorModeValue('rgba(59,134,245,0.08)', 'rgba(30,64,175,0.28)');
  const highlightPanelBorder = useColorModeValue('rgba(59,134,245,0.18)', 'rgba(147,197,253,0.35)');
  const quoteAttributionColor = useColorModeValue('brand.600', 'brand.300');

  return (
    <Box as="article">
      <Box
        bg={heroBg}
        position="relative"
        overflow="hidden"
        borderBottom="1px solid"
        borderColor="outline"
        py={{ base: 16, md: 20 }}
      >
        <Box
          position="absolute"
          top={{ base: '-10rem', md: '-12rem' }}
          left={{ base: '-14rem', md: '-10rem' }}
          w={{ base: '24rem', md: '28rem' }}
          h={{ base: '24rem', md: '28rem' }}
          bg="linear-gradient(135deg, rgba(59,134,245,0.35) 0%, rgba(255,215,0,0.25) 100%)"
          borderRadius="full"
          filter="blur(90px)"
          opacity={0.85}
        />
        <Box
          position="absolute"
          bottom={{ base: '-12rem', md: '-10rem' }}
          right={{ base: '-14rem', md: '-12rem' }}
          w={{ base: '26rem', md: '32rem' }}
          h={{ base: '26rem', md: '32rem' }}
          bg="linear-gradient(135deg, rgba(14,165,233,0.25) 0%, rgba(59,130,246,0.3) 100%)"
          borderRadius="full"
          filter="blur(95px)"
          opacity={0.6}
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Grid templateColumns={{ base: '1fr', lg: '7fr 5fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
            <GridItem>
              <Stack spacing={{ base: 6, lg: 8 }} maxW={{ base: 'full', md: 'lg' }}>
                <Tag
                  size="lg"
                  variant="solid"
                  colorScheme="brand"
                  w="fit-content"
                  borderRadius="full"
                  px={4}
                  py={2}
                  letterSpacing="0.06em"
                >
                  Microsoft India Showcase
                </Tag>
                <Heading size={{ base: 'xl', md: '2xl' }} lineHeight={1.1}>
                  {hero.title}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="subtleText">
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
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={3}
                  align={{ base: 'stretch', sm: 'center' }}
                  flexWrap="wrap"
                >
                  <Button
                    as="a"
                    href={hero.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="brand"
                    size="lg"
                    px={6}
                    py={6}
                    whiteSpace="normal"
                    rightIcon={<ExternalLinkIcon />}
                  >
                    {hero.primaryCta.label}
                  </Button>
                  {hero.secondaryCta ? (
                    <Button
                      as={RouterLink}
                      to={hero.secondaryCta.to}
                      variant="outline"
                      size="lg"
                      colorScheme="brand"
                      px={6}
                      py={6}
                      whiteSpace="normal"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      {hero.secondaryCta.label}
                    </Button>
                  ) : null}
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <Stack spacing={sectionSpacing}>
          <Box>
            <SectionHeading
              eyebrow="Agriculture Hub"
              title="Digital co-pilot for India's farmers"
              description="Ambarish Ganguly's Agriculture Hub brings disease detection, crop guidance, and hive monitoring into a single Azure-powered experience."
            />
            <Text fontSize={{ base: 'md', md: 'lg' }} color="subtleText" mt={6} maxW="4xl">
              {agricultureHub.vision}
            </Text>

            <Grid
              templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
              gap={{ base: 8, lg: 12 }}
              mt={{ base: 10, md: 14 }}
            >
              <GridItem>
                <Box
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow="lg"
                  borderLeftWidth="4px"
                  borderLeftColor={pillarBorderColor}
                >
                  <Heading
                    size="sm"
                    color={quoteAttributionColor}
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                  >
                    Core Components
                  </Heading>
                  <Stack spacing={3} mt={5}>
                    {agricultureHub.components.map((component) => (
                      <Stack direction="row" spacing={3} align="flex-start" key={component}>
                        <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                        <Text color="subtleText">{component}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow="lg"
                  borderLeftWidth="4px"
                  borderLeftColor={pillarBorderColor}
                >
                  <Heading
                    size="sm"
                    color={quoteAttributionColor}
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                  >
                    Azure Architecture
                  </Heading>
                  <Stack spacing={3} mt={5}>
                    {agricultureHub.architecture.map((item) => (
                      <Stack direction="row" spacing={3} align="flex-start" key={item}>
                        <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                        <Text color="subtleText">{item}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 4, md: 6 }}>
            {impactStats.map((stat) => (
              <Box
                key={stat.label}
                p={{ base: 6, md: 7 }}
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="lg"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  insetX={0}
                  top={0}
                  h="4px"
                  bgGradient="linear(to-r, brand.400, brand.200)"
                />
                <Stack spacing={2}>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" color={quoteAttributionColor}>
                    {stat.value}
                  </Text>
                  <Text color="subtleText">{stat.label}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            bg={highlightPanelBg}
            borderRadius="3xl"
            p={{ base: 6, md: 10 }}
            border="1px solid"
            borderColor={highlightPanelBorder}
            boxShadow="xl"
          >
            <Stack spacing={{ base: 6, md: 8 }}>
              <SectionHeading
                eyebrow="Disease Detection Portfolio"
                title="Intelligence across crops and pollinators"
                description="Specialised computer vision assistants help farmers and apiarists take preventive action before threats escalate."
              />
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
                {agricultureHub.diseaseDetection.map((capability) => (
                  <Box
                    key={capability.name}
                    p={{ base: 6, md: 7 }}
                    bg={cardBg}
                    borderRadius="2xl"
                    boxShadow="lg"
                    borderLeftWidth="4px"
                    borderLeftColor={pillarBorderColor}
                  >
                    <Heading size="sm" mb={3}>
                      {capability.name}
                    </Heading>
                    <Text color="subtleText">{capability.summary}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>

          <Box>
            <SectionHeading
              eyebrow="Future Ready Champions"
              title="From nationwide skilling to award-winning delivery"
              description="Agriculture Hub stands on the shoulders of the Future Ready Champions of Code programme, pairing disciplined skilling with purposeful innovation to generate measurable farmer impact."
            />
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 8, md: 10 }} mt={{ base: 8, md: 10 }}>
              {pillars.map((pillar) => (
                <Box
                  key={pillar.title}
                  position="relative"
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow="xl"
                  borderLeftWidth="4px"
                  borderLeftColor={pillarBorderColor}
                >
                  <Box
                    position="absolute"
                    insetX={0}
                    top={0}
                    h="3px"
                    bgGradient="linear(to-r, brand.400, brand.200)"
                  />
                  <SectionHeading
                    eyebrow={pillar.eyebrow}
                    title={pillar.title}
                    description={pillar.description}
                  />
                  <Stack spacing={3} mt={6}>
                    {pillar.bullets.map((bullet) => (
                      <Stack direction="row" spacing={3} align="flex-start" key={bullet}>
                        <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                        <Text color="subtleText">{bullet}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="outline" />

          <Box>
            <SectionHeading
              eyebrow="Resources"
              title="Keep the momentum going."
          description="Explore the official announcement and connect to partner on future innovation."
            />
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              mt={8}
              align={{ base: 'stretch', md: 'center' }}
              flexWrap="wrap"
            >
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
                    px={6}
                    py={6}
                    whiteSpace="normal"
                    rightIcon={isExternal ? <ExternalLinkIcon /> : <ArrowForwardIcon />}
                    {...linkProps}
                  >
                    {resource.label}
                  </Button>
                );
              })}
            </Stack>
          </Box>

          <Box
            layerStyle="subtleCard"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            gap={6}
          >
            <Box>
              <Heading size="md" mb={2} color={quoteAttributionColor}>
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
              fontSize="md"
              cursor="pointer"
            >
              Back to Highlights
            </Tag>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HighlightFutureReady;
