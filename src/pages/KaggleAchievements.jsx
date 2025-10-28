import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
import { CheckCircleIcon } from '@chakra-ui/icons';
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
    'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.18) 100%)',
    'linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.9) 100%)'
  );
  const surface = useColorModeValue('white', 'rgba(15,23,42,0.92)');
  const cardBorder = useColorModeValue('rgba(148,163,184,0.3)', 'rgba(148,163,184,0.35)');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.500', 'gray.400');
  const highlightBg = useColorModeValue('rgba(59,130,246,0.06)', 'rgba(37,99,235,0.2)');
  const highlightBorder = useColorModeValue('rgba(59,130,246,0.3)', 'rgba(59,130,246,0.4)');
  const itemIconBg = useColorModeValue('rgba(59,130,246,0.12)', 'rgba(37,99,235,0.3)');
  const itemIconColor = useColorModeValue('brand.600', 'brand.300');

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
  const headlineSuffix = categoryHeadline
    ? categoryHeadline.toLowerCase()
    : 'multiple impact focus areas';

  return (
    <Box bg={pageBg} minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box bg={heroBg} borderBottom="1px solid" borderColor={cardBorder} py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Stack spacing={{ base: 6, md: 8 }}>
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
            <Stack spacing={{ base: 4, md: 5 }}>
                <Heading size={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight={1.1}>
                  Kaggle Impact Portfolio
                </Heading>
              
              <Text fontSize={{ base: 'md', md: 'lg' }} color={bodyColor} lineHeight={1.7}>
                A curated view of competition wins, community kernels, and analysis features that elevated
                Ambarish Ganguly across Kaggle&apos;s global data science community.
              </Text>
              <Text fontSize="sm" color={subtle} letterSpacing="0.08em" textTransform="uppercase">
                {totalHighlights} highlight{totalHighlights === 1 ? '' : 's'} across{' '}
                {kaggleGroups.length} focus area{kaggleGroups.length === 1 ? '' : 's'}.
              </Text>
              {aggregatedTags.length ? (
                <Wrap spacing={2}>
                  {aggregatedTags.slice(0, 8).map((tag) => (
                    <Tag key={tag} size="sm" variant="subtle" bg={surface} color={subtle} borderRadius="full">
                      {tag}
                    </Tag>
                  ))}
                  {aggregatedTags.length > 8 ? (
                    <Tag
                      key="more-tags"
                      size="sm"
                      variant="subtle"
                      bg="transparent"
                      color={subtle}
                      borderRadius="full"
                      border="1px dashed"
                      borderColor={cardBorder}
                    >
                      +{aggregatedTags.length - 8} more
                    </Tag>
                  ) : null}
                </Wrap>
              ) : null}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, lg: 12 }}>
          {kaggleGroups.map((group) => (
            <Stack
              key={group.id}
              id={group.id}
              spacing={6}
              bg={surface}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor={cardBorder}
              boxShadow="0 28px 60px -40px rgba(37,99,235,0.55)"
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
                  {group.label}
                </Heading>
                {group.description ? (
                  <Text color={bodyColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight={1.7}>
                    {group.description}
                  </Text>
                ) : null}
                <Text color={subtle} fontSize="sm" lineHeight={1.6}>
                  {group.items.length} Kaggle recognition{group.items.length === 1 ? '' : 's'} documented.
                </Text>
                {group.tags.length ? (
                  <Wrap spacing={2}>
                    {group.tags.slice(0, 4).map((tag) => (
                      <Tag
                        key={`${group.id}-${tag}`}
                        size="sm"
                        variant="subtle"
                        bg={highlightBg}
                        color={subtle}
                        borderRadius="full"
                      >
                        {tag}
                      </Tag>
                    ))}
                    {group.tags.length > 4 ? (
                      <Tag
                        key={`${group.id}-more`}
                        size="sm"
                        variant="subtle"
                        bg="transparent"
                        color={subtle}
                        borderRadius="full"
                        border="1px dashed"
                        borderColor={highlightBorder}
                      >
                        +{group.tags.length - 4} more
                      </Tag>
                    ) : null}
                  </Wrap>
                ) : null}
              </Stack>
              <Divider borderColor={cardBorder} />
              <Stack spacing={5}>
                {group.items.map((item) => {
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
                      key={`${group.id}-${item.description}`}
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
                            {item.description}
                          </Text>
                          {item.tags.length ? (
                            <Wrap spacing={2}>
                              {item.tags.map((tag) => (
                                <Tag key={`${group.id}-${item.description}-${tag}`} size="sm" variant="subtle">
                                  {tag}
                                </Tag>
                              ))}
                            </Wrap>
                          ) : null}
                          {linkProps ? (
                            <Tag
                              {...linkProps}
                              colorScheme="brand"
                              variant="solid"
                              width="fit-content"
                              px={4}
                              py={2}
                              borderRadius="full"
                            >
                              {item.link.label}
                            </Tag>
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

      <Container maxW="4xl" mt={{ base: 16, md: 20 }}>
        <Stack
          layerStyle="card"
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
