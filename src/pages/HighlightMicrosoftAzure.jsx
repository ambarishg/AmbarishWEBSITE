import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';
import { achievements } from '../data/profile.js';

const KEYWORDS = [
  'azure',
  'microsoft',
  'azure openai',
  'azure ai',
  'azure ml',
  'azure machine learning',
  'azure kubernetes',
  'azure service bus',
  'microsoft phi3',
  'future ready'
];

const normalizeCategory = (category) => (category ? category.trim() : '');

const toAnchorId = (category, index) => {
  const base = normalizeCategory(category)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return base ? `focus-${base}` : `focus-area-${index + 1}`;
};

const normaliseItem = (item) => {
  if (typeof item === 'string') {
    return { description: item, tags: [], link: null };
  }
  if (!item || typeof item !== 'object') {
    return null;
  }
  const { description = '', tags = [], link = null } = item;
  return {
    description,
    tags: Array.isArray(tags) ? tags : [],
    link: link && typeof link === 'object' ? link : null
  };
};

const matchesAzure = (value) => {
  if (!value) {
    return false;
  }
  const lower = value.toLowerCase();
  return KEYWORDS.some((keyword) => lower.includes(keyword));
};

const MicrosoftAzureHighlights = () => {
  useSEO(seo.highlightMicrosoftAzure);

  const pageBg = useColorModeValue('gray.50', '#0f172a');
  const heroBg = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(236,243,255,0.92) 100%)',
    'linear-gradient(180deg, rgba(15,23,42,0.84) 0%, rgba(15,23,42,0.96) 100%)'
  );
  const heroBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const surface = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(15,23,42,0.78)');
  const cardBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.500', 'gray.400');
  const badgeBg = useColorModeValue('rgba(15,23,42,0.04)', 'rgba(255,255,255,0.06)');
  const badgeColor = useColorModeValue('gray.700', 'gray.100');
  const dividerColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const statLabel = useColorModeValue('gray.500', 'gray.400');
  const linkColor = useColorModeValue('brand.700', 'brand.200');
  const linkHoverColor = useColorModeValue('brand.600', 'brand.300');
  const accentLine = useColorModeValue('rgba(59,130,246,0.22)', 'rgba(96,165,250,0.32)');
  const accentSoft = useColorModeValue('rgba(59,130,246,0.06)', 'rgba(96,165,250,0.12)');
  const accentWarm = useColorModeValue('rgba(15,23,42,0.03)', 'rgba(255,255,255,0.04)');

  const focusAreas = achievements
    .map((group, index) => {
      const azureItems = group.items
        .map(normaliseItem)
        .filter(
          (item) =>
            item &&
            (matchesAzure(item.description) ||
              item.tags.some((tag) => matchesAzure(tag)))
        );

      if (!azureItems.length) {
        return null;
      }

      const aggregatedTags = Array.from(
        new Set(
          azureItems.flatMap((item) => item.tags.filter((tag) => tag && tag.trim().length))
        )
      );

      return {
        category: group.category,
        description: group.description,
        anchorId: toAnchorId(group.category, index),
        items: azureItems,
        aggregatedTags
      };
    })
    .filter(Boolean);

  const totalStories = focusAreas.reduce((sum, area) => sum + area.items.length, 0);
  const allTags = new Set(
    focusAreas.flatMap((area) => area.aggregatedTags.filter((tag) => tag && tag.trim().length))
  );

  const stats = [
    {
      label: 'Focus Areas',
      value: focusAreas.length,
      description: 'Leadership themes carried through Microsoft and Azure work.'
    },
    {
      label: 'Selected Stories',
      value: totalStories,
      description: 'Recognised initiatives across community, product, and applied AI programmes.'
    },
    {
      label: 'Capability Breadth',
      value: allTags.size,
      description: 'Azure-aligned signals spanning AI, data, and cloud delivery.'
    }
  ];

  return (
    <Box bg={pageBg} minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box bg={heroBg} borderBottom="1px solid" borderColor={heroBorder}>
        <Container maxW="6xl" py={{ base: 14, md: 24 }}>
          <Stack spacing={{ base: 8, md: 10 }}>
            <Breadcrumb fontSize="sm" separator="/" color={subtle}>
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
                <BreadcrumbLink>Microsoft &amp; Azure</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Stack spacing={{ base: 4, md: 5 }} maxW="4xl">
              <Tag
                size="md"
                alignSelf="flex-start"
                bg={badgeBg}
                color={badgeColor}
                borderRadius="full"
                px={4}
                py={1.5}
                fontWeight="medium"
                letterSpacing="0.3em"
                textTransform="uppercase"
              >
                Azure
              </Tag>
              <Heading
                size={{ base: '2xl', md: '3xl' }}
                color={headingColor}
                lineHeight={1.1}
                letterSpacing="-0.03em"
              >
                Azure Impact Portfolio
              </Heading>
              <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.85} maxW="2xl">
                A selective view of Microsoft-recognised work across Azure, applied AI, and platform-led innovation.
              </Text>
            </Stack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  bg={surface}
                  px={{ base: 5, md: 6 }}
                  py={{ base: 6, md: 7 }}
                  backdropFilter="blur(16px)"
                >
                  <Stack spacing={2}>
                    <Text fontSize="xs" fontWeight="medium" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                      {stat.label}
                    </Text>
                    <Heading size="lg" color={headingColor}>
                      {stat.value}
                    </Heading>
                    <Text fontSize="sm" color={bodyColor} lineHeight={1.7}>
                      {stat.description}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" mt={{ base: 8, md: 12 }}>
        <Stack spacing={{ base: 8, md: 10 }}>
          {focusAreas.map((area, index) => {
            const variant = index % 3;
            const primaryItems = area.items.slice(0, 2);

            return (
              <Box
                key={area.anchorId}
                id={area.anchorId}
                borderRadius="3xl"
                border="1px solid"
                borderColor={cardBorder}
                bg={surface}
                p={{ base: 6, md: 8 }}
                backdropFilter="blur(16px)"
                position="relative"
                overflow="hidden"
              >
                {variant === 0 ? (
                  <>
                    <Box position="absolute" left={0} top={0} bottom={0} w="4px" bg={accentLine} />
                    <Grid templateColumns={{ base: '1fr', lg: '1.1fr 1.4fr' }} gap={{ base: 8, lg: 12 }}>
                      <Stack spacing={4}>
                        <Text fontSize="xs" color={subtle} textTransform="uppercase" fontWeight="medium" letterSpacing="0.18em">
                          Portfolio Area
                        </Text>
                        <Heading size="md" color={headingColor} lineHeight={1.25}>
                          {normalizeCategory(area.category)}
                        </Heading>
                        {area.description ? (
                          <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                            {area.description}
                          </Text>
                        ) : null}
                        <HStack spacing={8} pt={2} flexWrap="wrap">
                          <Stack spacing={1}>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Stories
                            </Text>
                            <Text color={headingColor} fontWeight="semibold">
                              {area.items.length}
                            </Text>
                          </Stack>
                          <Stack spacing={1}>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Technologies
                            </Text>
                            <Text color={headingColor} fontWeight="semibold">
                              {area.aggregatedTags.length}
                            </Text>
                          </Stack>
                        </HStack>
                      </Stack>
                      <Stack spacing={5}>
                        {primaryItems.map((item) => {
                          const linkProps = item.link
                            ? item.link.to
                              ? { as: RouterLink, to: item.link.to }
                              : item.link.href
                              ? {
                                  as: 'a',
                                  href: item.link.href,
                                  target: item.link.target || '_blank',
                                  rel: item.link.rel || 'noopener noreferrer'
                                }
                              : null
                            : null;

                          return (
                            <Stack key={`${area.anchorId}-${item.description}`} spacing={2}>
                              <Text color={headingColor} fontWeight="semibold" lineHeight={1.7}>
                                {item.description}
                              </Text>
                              {linkProps ? (
                                <Link
                                  {...linkProps}
                                  color={linkColor}
                                  fontWeight="semibold"
                                  display="inline-flex"
                                  alignItems="center"
                                  gap={2}
                                  w="fit-content"
                                  _hover={{ textDecoration: 'none', color: linkHoverColor }}
                                >
                                  {item.link.label}
                                  <ArrowForwardIcon />
                                </Link>
                              ) : null}
                            </Stack>
                          );
                        })}
                        {area.items.length > 2 ? (
                          <Text color={subtle} fontSize="sm">
                            +{area.items.length - 2} additional recognitions
                          </Text>
                        ) : null}
                      </Stack>
                    </Grid>
                  </>
                ) : null}

                {variant === 1 ? (
                  <Stack spacing={6}>
                    <Box bg={accentSoft} borderRadius="2xl" px={{ base: 5, md: 6 }} py={{ base: 5, md: 6 }}>
                      <Grid templateColumns={{ base: '1fr', md: '1.4fr 0.8fr' }} gap={{ base: 6, md: 8 }}>
                        <Stack spacing={3}>
                          <Text fontSize="xs" color={subtle} textTransform="uppercase" fontWeight="medium" letterSpacing="0.18em">
                            Strategic Theme
                          </Text>
                          <Heading size="md" color={headingColor} lineHeight={1.25}>
                            {normalizeCategory(area.category)}
                          </Heading>
                          {area.description ? (
                            <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                              {area.description}
                            </Text>
                          ) : null}
                        </Stack>
                        <Stack spacing={4} justify="space-between">
                          <Box>
                            <Text fontSize="3xl" fontWeight="semibold" color={headingColor}>
                              {area.items.length}
                            </Text>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Selected stories
                            </Text>
                          </Box>
                          <Box>
                            <Text fontSize="3xl" fontWeight="semibold" color={headingColor}>
                              {area.aggregatedTags.length}
                            </Text>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Technology signals
                            </Text>
                          </Box>
                        </Stack>
                      </Grid>
                    </Box>

                    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={{ base: 5, md: 6 }}>
                      {primaryItems.map((item) => {
                        const linkProps = item.link
                          ? item.link.to
                            ? { as: RouterLink, to: item.link.to }
                            : item.link.href
                            ? {
                                as: 'a',
                                href: item.link.href,
                                target: item.link.target || '_blank',
                                rel: item.link.rel || 'noopener noreferrer'
                              }
                            : null
                          : null;

                        return (
                          <Box key={`${area.anchorId}-${item.description}`} borderTop="1px solid" borderColor={dividerColor} pt={4}>
                            <Stack spacing={2}>
                              <Text color={headingColor} fontWeight="semibold" lineHeight={1.7}>
                                {item.description}
                              </Text>
                              {linkProps ? (
                                <Link
                                  {...linkProps}
                                  color={linkColor}
                                  fontWeight="semibold"
                                  display="inline-flex"
                                  alignItems="center"
                                  gap={2}
                                  w="fit-content"
                                  _hover={{ textDecoration: 'none', color: linkHoverColor }}
                                >
                                  {item.link.label}
                                  <ArrowForwardIcon />
                                </Link>
                              ) : null}
                            </Stack>
                          </Box>
                        );
                      })}
                    </Grid>
                    {area.items.length > 2 ? (
                      <Text color={subtle} fontSize="sm">
                        +{area.items.length - 2} additional recognitions
                      </Text>
                    ) : null}
                  </Stack>
                ) : null}

                {variant === 2 ? (
                  <Grid templateColumns={{ base: '1fr', lg: '0.9fr 1.5fr' }} gap={{ base: 8, lg: 10 }}>
                    <Stack spacing={4} justify="space-between">
                      <Box>
                        <Text fontSize="xs" color={subtle} textTransform="uppercase" fontWeight="medium" letterSpacing="0.18em">
                          Capability Domain
                        </Text>
                        <Heading size="md" color={headingColor} lineHeight={1.25} mt={3}>
                          {normalizeCategory(area.category)}
                        </Heading>
                      </Box>
                      <Box bg={accentWarm} borderRadius="2xl" p={5}>
                        <Stack spacing={4}>
                          <Stack spacing={1}>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Description
                            </Text>
                            <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                              {area.description}
                            </Text>
                          </Stack>
                          <Divider borderColor={dividerColor} />
                          <HStack spacing={6}>
                            <Stack spacing={1}>
                              <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                Stories
                              </Text>
                              <Text color={headingColor} fontWeight="semibold">
                                {area.items.length}
                              </Text>
                            </Stack>
                            <Stack spacing={1}>
                              <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                Technologies
                              </Text>
                              <Text color={headingColor} fontWeight="semibold">
                                {area.aggregatedTags.length}
                              </Text>
                            </Stack>
                          </HStack>
                        </Stack>
                      </Box>
                    </Stack>

                    <Stack spacing={5}>
                      {primaryItems.map((item, itemIndex) => {
                        const linkProps = item.link
                          ? item.link.to
                            ? { as: RouterLink, to: item.link.to }
                            : item.link.href
                            ? {
                                as: 'a',
                                href: item.link.href,
                                target: item.link.target || '_blank',
                                rel: item.link.rel || 'noopener noreferrer'
                              }
                            : null
                          : null;

                        return (
                          <Box
                            key={`${area.anchorId}-${item.description}`}
                            pl={{ base: 0, md: 6 }}
                            borderLeft={{ base: 'none', md: '1px solid' }}
                            borderColor={dividerColor}
                          >
                            <Stack spacing={2}>
                              <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                Highlight {itemIndex + 1}
                              </Text>
                              <Text color={headingColor} fontWeight="semibold" lineHeight={1.7}>
                                {item.description}
                              </Text>
                              {linkProps ? (
                                <Link
                                  {...linkProps}
                                  color={linkColor}
                                  fontWeight="semibold"
                                  display="inline-flex"
                                  alignItems="center"
                                  gap={2}
                                  w="fit-content"
                                  _hover={{ textDecoration: 'none', color: linkHoverColor }}
                                >
                                  {item.link.label}
                                  <ArrowForwardIcon />
                                </Link>
                              ) : null}
                            </Stack>
                          </Box>
                        );
                      })}
                      {area.items.length > 2 ? (
                        <Text color={subtle} fontSize="sm">
                          +{area.items.length - 2} additional recognitions
                        </Text>
                      ) : null}
                    </Stack>
                  </Grid>
                ) : null}
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default MicrosoftAzureHighlights;
