import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  HStack,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Experience from '../sections/Experience.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const ExperiencePage = () => {
  useSEO(seo.experience);

  const pageBg = useColorModeValue('gray.50', '#0f172a');
  const heroBg = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(236,243,255,0.92) 100%)',
    'linear-gradient(180deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.96) 100%)'
  );
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.500', 'gray.400');
  const badgeBg = useColorModeValue('rgba(15,23,42,0.04)', 'rgba(255,255,255,0.06)');
  const badgeColor = useColorModeValue('gray.700', 'gray.100');
  const statBorder = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.16)');
  const statLabel = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bg={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="6xl" py={{ base: 14, md: 24 }}>
          <Stack spacing={{ base: 8, md: 10 }}>
            <Breadcrumb fontSize="sm" separator="/" color={subtle}>
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Experience</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Stack spacing={4} maxW="3xl">
              <Tag
                alignSelf="flex-start"
                size="md"
                px={4}
                py={1.5}
                borderRadius="full"
                bg={badgeBg}
                color={badgeColor}
                letterSpacing="0.3em"
                textTransform="uppercase"
                fontWeight="medium"
              >
                Experience
              </Tag>
              <Text
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight={{ base: 1.2, md: 1.1 }}
                fontWeight="bold"
                color={useColorModeValue('gray.900', 'gray.100')}
                letterSpacing={{ base: '-0.02em', md: '-0.03em' }}
                maxW="4xl"
              >
                A leadership track record shaped across enterprise transformation, utilities, and AI.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} lineHeight={1.8} maxW="2xl">
                Senior mandates, long-horizon accountability, and trusted advisory work across complex operating environments.
              </Text>
            </Stack>
            <HStack
              spacing={{ base: 0, md: 10 }}
              align="stretch"
              flexDirection={{ base: 'column', md: 'row' }}
              borderTop="1px solid"
              borderColor={statBorder}
              pt={6}
            >
              <Stack spacing={1} minW={{ md: '180px' }}>
                <Text fontSize="2xl" fontWeight="semibold" color={useColorModeValue('gray.900', 'gray.100')}>
                  25+
                </Text>
                <Text color={statLabel} textTransform="uppercase" letterSpacing="0.18em" fontSize="xs">
                  Years
                </Text>
              </Stack>
              <Stack spacing={1} minW={{ md: '180px' }}>
                <Text fontSize="2xl" fontWeight="semibold" color={useColorModeValue('gray.900', 'gray.100')}>
                  Global
                </Text>
                <Text color={statLabel} textTransform="uppercase" letterSpacing="0.18em" fontSize="xs">
                  Scope
                </Text>
              </Stack>
              <Stack spacing={1} minW={{ md: '180px' }}>
                <Text fontSize="2xl" fontWeight="semibold" color={useColorModeValue('gray.900', 'gray.100')}>
                  C-Suite
                </Text>
                <Text color={statLabel} textTransform="uppercase" letterSpacing="0.18em" fontSize="xs">
                  Advisory
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Container>
      </Box>
      <Experience />
    </Box>
  );
};

export default ExperiencePage;
