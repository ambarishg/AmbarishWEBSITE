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
  const featuredTags = Array.from(allTags).slice(0, 8);

  const stats = [
    {
      label: 'Azure-aligned focus areas',
      value: focusAreas.length,
      description: 'Practices and programmes accelerated with Microsoft technology.'
    },
    {
      label: 'Case studies',
      value: totalStories,
      description: 'Stories recognised by Microsoft communities and hackathons.'
    },
    {
      label: 'Specialised capabilities',
      value: allTags.size,
      description: 'Technical pillars spanning Azure AI, data, and cloud-native tooling.'
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
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/highlights">
                  Case Studies
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Microsoft &amp; Azure</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Stack spacing={{ base: 6, md: 8 }} maxW="3xl">
              <Tag
                size="sm"
                variant="subtle"
                alignSelf="flex-start"
                bg={badgeBg}
                color={badgeColor}
                borderRadius="full"
                px={4}
                py={1.5}
                fontWeight="semibold"
                letterSpacing="0.05em"
              >
                Azure
              </Tag>
              <Stack spacing={{ base: 4, md: 5 }}>
                <Heading size={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight={1.1}>
                  Azure Impact Portfolio
                </Heading>
                <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.7}>
                  A curated view of programmes, hackathons, and production blueprints that earned
                  recognition from Microsoft and demonstrate how Azure services translate into
                  measurable community outcomes.
                </Text>
              </Stack>
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
                    >
                      {tag}
                    </Tag>
                  ))}
                </Wrap>
              ) : null}
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  bg={surface}
                  px={{ base: 5, md: 6 }}
                  py={{ base: 6, md: 8 }}
                  boxShadow="0 20px 52px -32px rgba(59,130,246,0.35)"
                >
                  <Stack spacing={{ base: 1.5, md: 2 }}>
                    <Text fontSize="sm" fontWeight="semibold" color={subtle} textTransform="uppercase">
                      {stat.label}
                    </Text>
                    <Heading size="lg" color={headingColor}>
                      {stat.value}
                    </Heading>
                    <Text fontSize="sm" color={bodyColor} lineHeight={1.6}>
                      {stat.description}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" mt={{ base: -10, md: -20 }}>
        <Stack spacing={{ base: 10, md: 16 }}>
          {focusAreas.length > 1 ? (
            <Box
              bg={surface}
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="3xl"
              p={{ base: 5, md: 6 }}
              boxShadow="0 16px 48px -28px rgba(59,130,246,0.28)"
            >
              <Stack spacing={3}>
                <Text fontSize="sm" fontWeight="medium" color={subtle} textTransform="uppercase">
                  Navigate the focus areas
                </Text>
                <Wrap spacing={2.5}>
                  {focusAreas.map((area) => (
                    <Tag
                      key={area.anchorId}
                      as="a"
                      href={`#${area.anchorId}`}
                      size="sm"
                      borderRadius="full"
                      variant="subtle"
                      bg={badgeBg}
                      color={badgeColor}
                      px={4}
                      py={1.5}
                      _hover={{ textDecoration: 'none', transform: 'translateY(-1px)' }}
                    >
                      {normalizeCategory(area.category)}
                    </Tag>
                  ))}
                </Wrap>
              </Stack>
            </Box>
          ) : null}

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
            {focusAreas.map((area) => (
              <Stack
                key={area.anchorId}
                id={area.anchorId}
                spacing={{ base: 6, md: 8 }}
                borderRadius="3xl"
                border="1px solid"
                borderColor={cardBorder}
                bg={surface}
                p={{ base: 6, md: 8 }}
                boxShadow="0 24px 60px -36px rgba(30,64,175,0.35)"
              >
                <Stack spacing={{ base: 3, md: 4 }}>
                  <Stack spacing={1}>
                    <Text fontSize="sm" color={subtle} textTransform="uppercase" fontWeight="semibold">
                      {normalizeCategory(area.category)}
                    </Text>
                    {area.description ? (
                      <Text color={bodyColor} fontSize="sm" lineHeight={1.6}>
                        {area.description}
                      </Text>
                    ) : null}
                  </Stack>
                  {area.aggregatedTags.length ? (
                    <Wrap spacing={2}>
                      {area.aggregatedTags.slice(0, 4).map((tag) => (
                        <Tag
                          key={`${area.anchorId}-${tag}`}
                          size="sm"
                          variant="subtle"
                          bg={badgeBg}
                          color={badgeColor}
                          borderRadius="full"
                        >
                          {tag}
                        </Tag>
                      ))}
                      {area.aggregatedTags.length > 4 ? (
                        <Tag
                          key={`${area.anchorId}-more`}
                          size="sm"
                          variant="subtle"
                          bg="transparent"
                          color={subtle}
                          borderRadius="full"
                          border="1px dashed"
                          borderColor={highlightBorder}
                        >
                          +{area.aggregatedTags.length - 4} more
                        </Tag>
                      ) : null}
                    </Wrap>
                  ) : null}
                </Stack>

                <Divider borderColor={dividerColor} />

                <Stack spacing={5}>
                  {area.items.map((item) => {
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
                                  <Tag
                                    key={`${area.anchorId}-${item.description}-${tag}`}
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
                            {linkProps ? (
                              <Button
                                {...linkProps}
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
                                {item.link.label}
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
        </Stack>
      </Container>
    </Box>
  );
};

export default MicrosoftAzureHighlights;
