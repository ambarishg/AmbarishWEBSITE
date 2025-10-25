import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { achievements } from '../data/profile.js';

const normalizeCategory = (category) => (category ? category.trim() : '');

const formatFocusAreasHeadline = (categories) => {
  const filtered = categories.map(normalizeCategory).filter(Boolean);
  if (!filtered.length) {
    return '';
  }
  if (filtered.length === 1) {
    return filtered[0];
  }
  if (filtered.length === 2) {
    return `${filtered[0]} | ${filtered[1]}`;
  }
  return `${filtered[0]} | ${filtered[1]} | More`;
};

const linkForHighlight = (description) => {
  if (description.includes('Random Walk of the Penguins')) {
    return {
      label: 'View Random Walk case study',
      to: '/highlights/random-walk-of-the-penguins'
    };
  }
  if (description.includes('Bees health detection solution')) {
    return {
      label: 'Watch the Azure showcase',
      to: '/highlights/bees-health-detection'
    };
  }
  if (description.includes('Future Ready Champions of Code')) {
    return {
      label: 'View hackathon story',
      to: '/highlights/future-ready-champions'
    };
  }
  if (description.includes('DonorsChoose.org Recommendation Challenge')) {
    return {
      label: 'View DonorsChoose.org story',
      to: '/highlights/donors-choose-recommendation'
    };
  }
  if (description.includes('Kiva Crowd Funding Data Challenge')) {
    return {
      label: 'View Kiva analytics story',
      to: '/highlights/kiva-crowdfunding-analysis'
    };
  }
  if (description.includes('Recommendation engine for careers with an Enterprise Architecture')) {
    return {
      label: 'View Azure Blogathon case study',
      to: '/highlights/azure-blogathon-champion'
    };
  }
  if (description.includes('Cassava Leaf Disease Detection')) {
    return {
      label: 'View Cassava case study',
      to: '/highlights/azure-blogathon-cassava'
    };
  }
  if (description.includes('Kaggle Weekly Kernel Award on African Conflicts Data Visualization')) {
    return {
      label: 'View African Conflicts visualisation',
      to: '/highlights/african-conflicts-visualisation'
    };
  }
  if (description.includes('Center for Policing Equity (CPE) Hackathon Winner')) {
    return {
      label: 'View policing equity insights',
      to: '/highlights/cpe-equity-visualisation'
    };
  }
  if (description.includes('DST Geospatial Hackathon 2023 Winner')) {
    return {
      label: 'View Socio Economic Hub story',
      to: '/highlights/dst-geospatial-hackathon'
    };
  }
  return null;
};

const Highlights = () => {
  const pageBg = useColorModeValue('gray.50', '#0f172a');
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.18) 100%)',
    'linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.9) 100%)'
  );
  const heroBorder = useColorModeValue('rgba(148,163,184,0.25)', 'rgba(148,163,184,0.25)');
  const surface = useColorModeValue('white', 'rgba(15,23,42,0.92)');
  const cardBorder = useColorModeValue('rgba(148,163,184,0.3)', 'rgba(148,163,184,0.35)');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const badgeBg = useColorModeValue('rgba(59,130,246,0.12)', 'rgba(59,130,246,0.2)');
  const badgeColor = useColorModeValue('brand.600', 'brand.200');
  const highlightBg = useColorModeValue('rgba(59,130,246,0.06)', 'rgba(59,130,246,0.16)');
  const highlightBorder = useColorModeValue('rgba(59,130,246,0.2)', 'rgba(59,130,246,0.35)');
  const itemIconBg = useColorModeValue('rgba(59,130,246,0.15)', 'rgba(59,130,246,0.3)');
  const itemIconColor = useColorModeValue('brand.600', 'brand.200');
  const dividerColor = useColorModeValue('rgba(226,232,240,0.8)', 'rgba(74,85,104,0.6)');

  const focusAreaSummary = formatFocusAreasHeadline(achievements.map((group) => group.category));
  const heroHeading = focusAreaSummary || 'Impact highlights';

  const totalHighlights = achievements.reduce((sum, group) => {
    const itemCount = group.items.reduce((count, item) => {
      const description = typeof item === 'string' || item === null ? item : item.description;
      return description ? count + 1 : count;
    }, 0);
    return sum + itemCount;
  }, 0);

  const allTags = new Set();
  achievements.forEach((group) => {
    group.items.forEach((item) => {
      if (typeof item === 'object' && item !== null && Array.isArray(item.tags)) {
        item.tags.forEach((tag) => allTags.add(tag));
      }
    });
  });
  const featuredTags = Array.from(allTags).slice(0, 8);

  const stats = [
    {
      label: 'Focus areas',
      value: achievements.length,
      description: 'Strategic domains stewarding measurable impact.'
    },
    {
      label: 'Stories captured',
      value: totalHighlights,
      description: 'Award wins, platform launches, and community narratives.'
    },
    {
      label: 'Distinct themes',
      value: allTags.size,
      description: 'Disciplines represented across the portfolio.'
    }
  ];

  return (
    <Box bg={pageBg} minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box bg={heroBg} borderBottom="1px solid" borderColor={heroBorder}>
        <Container maxW="6xl" py={{ base: 14, md: 24 }}>
          <Stack spacing={{ base: 10, md: 14 }}>
            <Breadcrumb fontSize="sm" separator="/" color={subtle}>
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Highlights</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 10, lg: 14 }}
              align={{ base: 'flex-start', lg: 'center' }}
            >
              <Stack spacing={{ base: 5, md: 6 }} flex="1" maxW={{ base: 'full', lg: '3xl' }}>
                <Tag
                  alignSelf="flex-start"
                  size="lg"
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  bg={badgeBg}
                  color={badgeColor}
                  letterSpacing="0.3em"
                  textTransform="uppercase"
                  fontWeight="semibold"
                >
                  Impact Portfolio
                </Tag>
                <Heading size={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight={{ base: 1.15, md: 1.05 }}>
                  {heroHeading}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={bodyColor} lineHeight={1.75}>
                  Explore how award-winning analytics, responsible AI, and collaborative engineering deliver outcomes
                  across conservation, education, national missions, and developer ecosystems.
                </Text>
                <Text
                  bgGradient="linear(to-r, brand.400, brand.200)"
                  bgClip="text"
                  fontWeight="semibold"
                  letterSpacing="0.08em"
                >
                  Momentum across Generative AI, intelligent agents, climate resilience, and industry transformation.
                </Text>
                {featuredTags.length ? (
                  <Wrap spacing={2}>
                    {featuredTags.map((tag) => (
                      <Tag
                        key={tag}
                        size="sm"
                        variant="subtle"
                        bg={badgeBg}
                        color={badgeColor}
                        borderRadius="full"
                        px={3}
                        py={1}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Wrap>
                ) : null}
              </Stack>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 4, md: 5 }}
                flex="1"
                w="full"
                maxW={{ base: 'full', lg: 'lg' }}
              >
                {stats.map((stat) => (
                  <Box
                    key={stat.label}
                    bg={surface}
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    border="1px solid"
                    borderColor={cardBorder}
                    boxShadow="0 24px 55px -40px rgba(37,99,235,0.55)"
                  >
                    <Text
                      textTransform="uppercase"
                      fontSize="xs"
                      letterSpacing="0.28em"
                      color={subtle}
                      fontWeight="semibold"
                    >
                      {stat.label}
                    </Text>
                    <Heading size="lg" color={headingColor} mt={3}>
                      {stat.value}
                    </Heading>
                    <Text mt={3} color={subtle} fontSize="sm" lineHeight={1.6}>
                      {stat.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, lg: 12 }}>
          {achievements.map((group) => (
            <Stack
              key={group.category}
              spacing={6}
              bg={surface}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor={cardBorder}
              boxShadow="0 28px 60px -40px rgba(37,99,235,0.55)"
              transition="transform 0.25s ease"
              _hover={{ transform: 'translateY(-6px)' }}
            >
              <Stack spacing={3}>
                <Tag
                  size="sm"
                  width="fit-content"
                  textTransform="uppercase"
                  letterSpacing="0.28em"
                  bg="transparent"
                  color={subtle}
                >
                  Focus Area
                </Tag>
                <Heading size={{ base: 'lg', md: 'xl' }} color={headingColor} lineHeight={1.2}>
                  {normalizeCategory(group.category)}
                </Heading>
                {group.description ? (
                  <Text color={bodyColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight={1.7}>
                    {group.description}
                  </Text>
                ) : null}
              </Stack>
              <Divider borderColor={dividerColor} />
              <Stack spacing={5}>
                {group.items.map((item) => {
                  const description =
                    typeof item === 'string' || item === null ? item : item.description;
                  if (!description) {
                    return null;
                  }
                  const tags =
                    typeof item === 'object' && item !== null && Array.isArray(item.tags)
                      ? item.tags
                      : [];
                  const link = linkForHighlight(description);

                  return (
                    <Box
                      key={description}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={highlightBorder}
                      bg={highlightBg}
                      p={{ base: 4, md: 5 }}
                    >
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={{ base: 3, md: 4 }}
                        align={{ base: 'flex-start', sm: 'center' }}
                      >
                        <Box
                          bg={itemIconBg}
                          borderRadius="full"
                          p={2.5}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={CheckCircleIcon} color={itemIconColor} boxSize={5} />
                        </Box>
                        <Stack spacing={3} flex="1" w="full">
                          <Text color={bodyColor} fontWeight="semibold" lineHeight={1.6}>
                            {description}
                          </Text>
                          {tags.length ? (
                            <Wrap spacing={2}>
                              {tags.map((tag) => (
                                <Tag
                                  key={`${description}-${tag}`}
                                  size="sm"
                                  variant="subtle"
                                  bg={badgeBg}
                                  color={badgeColor}
                                  borderRadius="full"
                                >
                                  {tag}
                                </Tag>
                              ))}
                            </Wrap>
                          ) : null}
                          {link ? (
                            <Button
                              as={RouterLink}
                              to={link.to}
                              rightIcon={<ArrowForwardIcon />}
                              size="sm"
                              borderRadius="full"
                              px={5}
                              fontWeight="semibold"
                              alignSelf={{ base: 'flex-start', sm: 'flex-end' }}
                              bgGradient="linear(to-r, brand.500, brand.300)"
                              color="white"
                              boxShadow="0 18px 32px -24px rgba(59,130,246,0.65)"
                              letterSpacing="0.04em"
                              _hover={{
                                bgGradient: 'linear(to-r, brand.400, brand.200)',
                                transform: 'translateY(-1px)'
                              }}
                              _active={{
                                transform: 'translateY(0)'
                              }}
                            >
                              {link.label}
                            </Button>
                          ) : null}
                        </Stack>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Highlights;
