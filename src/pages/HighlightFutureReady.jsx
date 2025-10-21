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
                 
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 8, md: 10 }} mb={16}>
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
        <Divider borderColor="outline" />

        {/* Resources Section */}
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

        {/* Explore More Highlights Footer */}
        <Box
          mt={{ base: 16, md: 20 }}
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
      </Container>
    </Box>
  );
};

export default HighlightFutureReady;
