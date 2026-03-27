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
import { achievements } from '../data/profile.js';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

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
    return `${filtered[0]} & ${filtered[1]}`;
  }
  if (filtered.length === 3) {
    return `${filtered[0]}, ${filtered[1]}, ${filtered[2]}`;
  }
  const [first, second, third] = filtered;
  const remaining = filtered.length - 3;
  return `${first}, ${second}, ${third} + ${remaining} more`;
};

const toAnchorId = (category, index) => {
  const base = normalizeCategory(category)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return base ? `kaggle-${base}` : `kaggle-focus-${index + 1}`;
};

const isKaggleItem = (item) => {
  if (!item || typeof item !== 'object') {
    return false;
  }
  if (Array.isArray(item.spotlights) && item.spotlights.includes('kaggle')) {
    return true;
  }
  const tags = Array.isArray(item.tags) ? item.tags.map((tag) => tag.toLowerCase()) : [];
  return tags.includes('kaggle');
};

const KaggleAchievements = () => {
  useSEO(seo.kaggleAchievements);

  const pageBg = useColorModeValue('gray.50', '#0f172a');
  const heroBg = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(242,246,255,0.94) 100%)',
    'linear-gradient(180deg, rgba(15,23,42,0.84) 0%, rgba(15,23,42,0.96) 100%)'
  );
  const surface = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(15,23,42,0.78)');
  const cardBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.500', 'gray.400');
  const badgeBg = useColorModeValue('rgba(15,23,42,0.04)', 'rgba(255,255,255,0.06)');
  const badgeColor = useColorModeValue('gray.700', 'gray.100');
  const statLabel = useColorModeValue('gray.500', 'gray.400');
  const dividerColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const linkColor = useColorModeValue('brand.700', 'brand.200');
  const linkHoverColor = useColorModeValue('brand.600', 'brand.300');
  const accentLine = useColorModeValue('rgba(59,130,246,0.22)', 'rgba(96,165,250,0.32)');
  const accentSoft = useColorModeValue('rgba(59,130,246,0.06)', 'rgba(96,165,250,0.12)');
  const accentWarm = useColorModeValue('rgba(15,23,42,0.03)', 'rgba(255,255,255,0.04)');

  const kaggleGroups = achievements
    .map((group, groupIndex) => {
      const items = Array.isArray(group.items) ? group.items : [];
      const filteredItems = items
        .filter(isKaggleItem)
        .map((item) => {
          const description = typeof item.description === 'string' ? item.description : '';
          if (!description) {
            return null;
          }
          const tags = Array.isArray(item.tags) ? item.tags : [];
          return {
            description,
            tags,
            link: item.link || null
          };
        })
        .filter(Boolean);

      if (!filteredItems.length) {
        return null;
      }

      const aggregatedTags = new Set();
      filteredItems.forEach((item) => {
        item.tags.forEach((tag) => aggregatedTags.add(tag));
      });

      return {
        id: toAnchorId(group.category, groupIndex),
        label: normalizeCategory(group.category) || `Focus Area ${groupIndex + 1}`,
        description: group.description,
        items: filteredItems,
        tags: Array.from(aggregatedTags)
      };
    })
    .filter(Boolean);

  const totalHighlights = kaggleGroups.reduce((sum, group) => sum + group.items.length, 0);
  const categoryHeadline = formatFocusAreasHeadline(kaggleGroups.map((group) => group.label));
  const aggregatedTags = Array.from(
    kaggleGroups.reduce((all, group) => {
      group.tags.forEach((tag) => all.add(tag));
      return all;
    }, new Set())
  );

  return (
    <Box bg={pageBg} minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box bg={heroBg} borderBottom="1px solid" borderColor={cardBorder} py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Stack spacing={{ base: 8, md: 10 }}>
            <Breadcrumb fontSize="sm" color={subtle}>
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
                <BreadcrumbLink>Kaggle Achievements</BreadcrumbLink>
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
                Kaggle
              </Tag>
              <Heading size={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight={1.1} letterSpacing="-0.03em">
                Kaggle Impact Portfolio
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={bodyColor} lineHeight={1.85} maxW="2xl">
                A selective view of Kaggle recognition spanning analytical depth, public storytelling, and applied data science leadership.
              </Text>
            </Stack>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
              <Box border="1px solid" borderColor={cardBorder} borderRadius="2xl" bg={surface} px={{ base: 5, md: 6 }} py={{ base: 6, md: 7 }} backdropFilter="blur(16px)">
                <Stack spacing={2}>
                  <Text fontSize="xs" fontWeight="medium" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                    Focus Areas
                  </Text>
                  <Heading size="lg" color={headingColor}>
                    {kaggleGroups.length}
                  </Heading>
                  <Text fontSize="sm" color={bodyColor} lineHeight={1.7}>
                    Distinct domains of competition, community, and analytical recognition.
                  </Text>
                </Stack>
              </Box>
              <Box border="1px solid" borderColor={cardBorder} borderRadius="2xl" bg={surface} px={{ base: 5, md: 6 }} py={{ base: 6, md: 7 }} backdropFilter="blur(16px)">
                <Stack spacing={2}>
                  <Text fontSize="xs" fontWeight="medium" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                    Selected Highlights
                  </Text>
                  <Heading size="lg" color={headingColor}>
                    {totalHighlights}
                  </Heading>
                  <Text fontSize="sm" color={bodyColor} lineHeight={1.7}>
                    A concise portfolio of awards, kernel features, and challenge outcomes.
                  </Text>
                </Stack>
              </Box>
              <Box border="1px solid" borderColor={cardBorder} borderRadius="2xl" bg={surface} px={{ base: 5, md: 6 }} py={{ base: 6, md: 7 }} backdropFilter="blur(16px)">
                <Stack spacing={2}>
                  <Text fontSize="xs" fontWeight="medium" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                    Portfolio Span
                  </Text>
                  <Heading size="lg" color={headingColor}>
                    {categoryHeadline || aggregatedTags.length}
                  </Heading>
                  <Text fontSize="sm" color={bodyColor} lineHeight={1.7}>
                    Coverage across {categoryHeadline ? categoryHeadline.toLowerCase() : 'multiple analytical domains'}.
                  </Text>
                </Stack>
              </Box>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 12, md: 16 }}>
        <Stack spacing={{ base: 8, md: 10 }}>
          {kaggleGroups.map((group, index) => {
            const variant = index % 3;
            const primaryItems = group.items.slice(0, 2);

            return (
              <Box
                key={group.id}
                id={group.id}
                bg={surface}
                borderRadius="3xl"
                p={{ base: 6, md: 8 }}
                border="1px solid"
                borderColor={cardBorder}
                backdropFilter="blur(16px)"
                position="relative"
                overflow="hidden"
              >
                {variant === 0 ? (
                  <>
                    <Box position="absolute" left={0} top={0} bottom={0} w="4px" bg={accentLine} />
                    <Grid templateColumns={{ base: '1fr', lg: '1.05fr 1.45fr' }} gap={{ base: 8, lg: 12 }}>
                      <Stack spacing={4}>
                        <Text fontSize="xs" color={subtle} textTransform="uppercase" fontWeight="medium" letterSpacing="0.18em">
                          Portfolio Area
                        </Text>
                        <Heading size="md" color={headingColor} lineHeight={1.25}>
                          {group.label}
                        </Heading>
                        {group.description ? (
                          <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                            {group.description}
                          </Text>
                        ) : null}
                        <HStack spacing={8} pt={2} flexWrap="wrap">
                          <Stack spacing={1}>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Recognitions
                            </Text>
                            <Text color={headingColor} fontWeight="semibold">
                              {group.items.length}
                            </Text>
                          </Stack>
                          <Stack spacing={1}>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Signals
                            </Text>
                            <Text color={headingColor} fontWeight="semibold">
                              {group.tags.length}
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
                            <Stack key={`${group.id}-${item.description}`} spacing={2}>
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
                        {group.items.length > 2 ? (
                          <Text color={subtle} fontSize="sm">
                            +{group.items.length - 2} additional recognitions
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
                            {group.label}
                          </Heading>
                          {group.description ? (
                            <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                              {group.description}
                            </Text>
                          ) : null}
                        </Stack>
                        <Stack spacing={4} justify="space-between">
                          <Box>
                            <Text fontSize="3xl" fontWeight="semibold" color={headingColor}>
                              {group.items.length}
                            </Text>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Highlighted wins
                            </Text>
                          </Box>
                          <Box>
                            <Text fontSize="3xl" fontWeight="semibold" color={headingColor}>
                              {group.tags.length}
                            </Text>
                            <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                              Capability tags
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
                          <Box key={`${group.id}-${item.description}`} borderTop="1px solid" borderColor={dividerColor} pt={4}>
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
                    {group.items.length > 2 ? (
                      <Text color={subtle} fontSize="sm">
                        +{group.items.length - 2} additional recognitions
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
                          {group.label}
                        </Heading>
                      </Box>
                      <Box bg={accentWarm} borderRadius="2xl" p={5}>
                        <Stack spacing={4}>
                          {group.description ? (
                            <>
                              <Stack spacing={1}>
                                <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                  Description
                                </Text>
                                <Text color={bodyColor} fontSize="sm" lineHeight={1.8}>
                                  {group.description}
                                </Text>
                              </Stack>
                              <Divider borderColor={dividerColor} />
                            </>
                          ) : null}
                          <HStack spacing={6}>
                            <Stack spacing={1}>
                              <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                Highlights
                              </Text>
                              <Text color={headingColor} fontWeight="semibold">
                                {group.items.length}
                              </Text>
                            </Stack>
                            <Stack spacing={1}>
                              <Text fontSize="xs" color={statLabel} textTransform="uppercase" letterSpacing="0.18em">
                                Signals
                              </Text>
                              <Text color={headingColor} fontWeight="semibold">
                                {group.tags.length}
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
                          <Box key={`${group.id}-${item.description}`} pl={{ base: 0, md: 6 }} borderLeft={{ base: 'none', md: '1px solid' }} borderColor={dividerColor}>
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
                      {group.items.length > 2 ? (
                        <Text color={subtle} fontSize="sm">
                          +{group.items.length - 2} additional recognitions
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

      <Container maxW="4xl" mt={{ base: 16, md: 20 }}>
        <Stack
          bg={surface}
          borderRadius="3xl"
          p={{ base: 6, md: 8 }}
          spacing={4}
          border="1px solid"
          borderColor={cardBorder}
          align="flex-start"
        >
          <Heading size="md" color={headingColor}>
            Continue exploring case studies
          </Heading>
          <Text color={bodyColor}>
            Dive into the full highlights catalogue for deep dives on NASA challenges, Microsoft showcases, and
            geospatial impact programmes.
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
  );
};

export default KaggleAchievements;
