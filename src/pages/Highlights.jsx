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
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,134,245,0.12) 0%, rgba(14,116,244,0.2) 100%)',
    'linear-gradient(135deg, rgba(59,134,245,0.25) 0%, rgba(14,116,244,0.35) 100%)'
  );
  const breadcrumbColor = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.88)');
  const border = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.25)');
  const accentGradient = useColorModeValue(
    'linear-gradient(90deg, rgba(59,130,246,0.85) 0%, rgba(99,102,241,0.85) 100%)',
    'linear-gradient(90deg, rgba(96,165,250,0.75) 0%, rgba(129,140,248,0.75) 100%)'
  );
  const headingColor = useColorModeValue('gray.800', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const tagBg = useColorModeValue('rgba(59,130,246,0.08)', 'rgba(59,130,246,0.18)');
  const statCardBg = useColorModeValue('rgba(255,255,255,0.75)', 'rgba(15,23,42,0.75)');
  const statBorder = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.2)');
  const statHeading = useColorModeValue('gray.900', 'gray.100');
  const statSubtle = useColorModeValue('gray.600', 'gray.400');
  const cardShadow = useColorModeValue(
    '0 24px 65px -32px rgba(30,64,175,0.45)',
    '0 24px 65px -32px rgba(30,64,175,0.75)'
  );
  const cardHoverShadow = useColorModeValue(
    '0 32px 85px -30px rgba(30,64,175,0.55)',
    '0 32px 85px -30px rgba(30,64,175,0.85)'
  );
  const itemBg = useColorModeValue('rgba(236,243,255,0.6)', 'rgba(20,24,35,0.75)');
  const itemBorder = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.25)');
  const iconBg = useColorModeValue('rgba(59,130,246,0.18)', 'rgba(59,130,246,0.25)');
  const iconColor = useColorModeValue('brand.500', 'brand.300');
  const dividerColor = useColorModeValue('rgba(226,232,240,0.7)', 'rgba(74,85,104,0.55)');
  const ctaBg = useColorModeValue('rgba(244,249,255,0.92)', 'rgba(30,41,59,0.88)');
  const ctaHoverBg = useColorModeValue('rgba(231,244,255,0.96)', 'rgba(45,55,72,0.9)');
  const ctaBorder = useColorModeValue('rgba(37,99,235,0.75)', 'rgba(165,180,252,0.85)');
  const ctaHoverBorder = useColorModeValue('rgba(30,64,175,0.9)', 'rgba(191,219,254,0.95)');
  const ctaText = useColorModeValue('brand.600', 'brand.200');
  const ctaShadow = useColorModeValue(
    '0 16px 35px -24px rgba(59,130,246,0.55)',
    '0 16px 35px -20px rgba(129,140,248,0.55)'
  );

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

  const stats = [
    {
      label: 'Focus areas',
      value: achievements.length,
      description: 'Strategic domains stewarding impact'
    },
    {
      label: 'Stories captured',
      value: totalHighlights,
      description: 'Awards, deployments, and narratives preserved'
    },
    {
      label: 'Distinct themes',
      value: allTags.size,
      description: 'Unique disciplines represented across work'
    }
  ];

  return (
    <Box>
      <Box
        position="relative"
        overflow="hidden"
        bg={heroBg}
        borderBottom="1px solid"
        borderColor="outline"
        py={{ base: 14, md: 24 }}
      >
        <Box
          position="absolute"
          top={{ base: '-20', md: '-24' }}
          right={{ base: '-32', md: '-28' }}
          w={{ base: '320px', md: '420px' }}
          h={{ base: '320px', md: '420px' }}
          bgGradient="radial(rgba(99,102,241,0.35), transparent 65%)"
          filter="blur(6px)"
          display={{ base: 'none', md: 'block' }}
        />
        <Box
          position="absolute"
          bottom={{ base: '-32', md: '-36' }}
          left={{ base: '-10', md: '-14' }}
          w={{ base: '260px', md: '320px' }}
          h={{ base: '260px', md: '320px' }}
          bgGradient="radial(rgba(59,130,246,0.35), transparent 70%)"
          filter="blur(8px)"
          display={{ base: 'none', md: 'block' }}
        />
        <Container maxW="6xl" position="relative">
          <Stack spacing={{ base: 8, md: 10 }} align={{ base: 'stretch', md: 'flex-start' }}>
            <Breadcrumb fontSize="sm" separator="/" color={breadcrumbColor}>
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
              spacing={{ base: 4, md: 3 }}
              maxW="3xl"
              align={{ base: 'flex-start', md: 'flex-start' }}
              textAlign="left"
            >
              <Tag
                size="sm"
                colorScheme="brand"
                variant="subtle"
                textTransform="uppercase"
                letterSpacing="0.12em"
                px={4}
                py={2}
                borderRadius="full"
              >
                Impact Portfolio
              </Tag>
              <Heading size={{ base: 'lg', md: '2xl' }} color={headingColor} lineHeight={{ base: 1.2, md: 1.1 }}>
                Recognitions across climate, recommendations, geospatial, and community impact.
              </Heading>
              <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }} maxW={{ base: 'full', md: '2xl' }}>
                Explore how award-winning analytics, responsible AI, and open collaboration have delivered measurable
                outcomes for conservation, education, national missions, and developer ecosystems.
              </Text>
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 3 }}
              spacing={{ base: 4, md: 5, xl: 6 }}
              w="full"
              pt={{ base: 2, md: 4 }}
            >
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  bg={statCardBg}
                  border="1px solid"
                  borderColor={statBorder}
                  borderRadius="lg"
                  px={{ base: 4, md: 6 }}
                  py={{ base: 5, md: 6 }}
                  boxShadow="0 18px 40px -25px rgba(59,130,246,0.55)"
                >
                  <Text fontSize="sm" textTransform="uppercase" letterSpacing="0.18em" color={statSubtle}>
                    {stat.label}
                  </Text>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={statHeading} mt={2}>
                    {stat.value}
                  </Text>
                  <Text fontSize="xs" color={statSubtle} mt={2} lineHeight={1.6}>
                    {stat.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 20 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }}>
          {achievements.map((group) => (
            <Box
              key={group.category}
              position="relative"
              bg={cardBg}
              border="1px solid"
              borderColor={border}
              borderRadius="28px"
              p={{ base: 6, md: 8, xl: 9 }}
              boxShadow={cardShadow}
              backdropFilter="blur(14px)"
              zIndex={0}
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-6px)',
                boxShadow: cardHoverShadow,
                borderColor: 'brand.400'
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                borderTopLeftRadius: 'inherit',
                borderTopRightRadius: 'inherit',
                bg: accentGradient,
                opacity: 0.85
              }}
            >
              <Stack spacing={7}>
                <Stack spacing={3}>
                  <Tag
                    size="sm"
                    variant="subtle"
                    colorScheme="brand"
                    w="fit-content"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    bg={tagBg}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                  >
                    Focus Area
                  </Tag>
                  <Heading size={{ base: 'lg', md: 'xl' }} color={headingColor} lineHeight={1.2}>
                    {group.category}
                  </Heading>
                  {group.description ? (
                    <Text color={subtle} fontSize={{ base: 'sm', md: 'md' }} lineHeight={1.7}>
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
                      <Box key={description}>
                        <Stack
                          direction={{ base: 'column', sm: 'row' }}
                          spacing={{ base: 3, md: 4 }}
                          align="flex-start"
                          bg={itemBg}
                          border="1px solid"
                          borderColor={itemBorder}
                          borderRadius="xl"
                          p={{ base: 4, md: 5 }}
                        >
                          <Box
                            bg={iconBg}
                            borderRadius="full"
                            p={2.5}
                            alignSelf="flex-start"
                            flexShrink={0}
                          >
                            <Icon as={CheckCircleIcon} color={iconColor} boxSize={5} />
                          </Box>
                          <Stack
                            spacing={3}
                            flex="1"
                            align="flex-start"
                            textAlign="left"
                            w="full"
                          >
                            <Text color={bodyColor} fontWeight="semibold" lineHeight={1.6}>
                              {description}
                            </Text>
                            {tags.length ? (
                              <Wrap spacing={2} justify="flex-start">
                                {tags.map((tag) => (
                                  <Tag
                                    key={`${description}-${tag}`}
                                    size="sm"
                                    variant="subtle"
                                    colorScheme="brand"
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
                                variant="solid"
                                size="sm"
                                borderRadius="full"
                                px={5}
                                fontWeight="semibold"
                                alignSelf="flex-start"
                                bg={ctaBg}
                                color={ctaText}
                                borderWidth="2px"
                                borderColor={ctaBorder}
                                boxShadow={ctaShadow}
                                backdropFilter="blur(6px)"
                                _hover={{
                                  bg: ctaHoverBg,
                                  borderColor: ctaHoverBorder,
                                  boxShadow: ctaShadow,
                                  textDecoration: 'none',
                                  transform: 'translateY(-1px)'
                                }}
                                _active={{
                                  transform: 'translateY(0)',
                                  boxShadow: '0 10px 24px -20px rgba(59,130,246,0.55)'
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
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Highlights;
