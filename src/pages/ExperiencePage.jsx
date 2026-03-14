import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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
    'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.18) 100%)',
    'linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.9) 100%)'
  );
  const borderColor = useColorModeValue('rgba(148,163,184,0.25)', 'rgba(148,163,184,0.25)');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const badgeBg = useColorModeValue('rgba(59,130,246,0.12)', 'rgba(59,130,246,0.2)');
  const badgeColor = useColorModeValue('brand.600', 'brand.200');

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bg={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="6xl" py={{ base: 14, md: 20 }}>
          <Stack spacing={{ base: 6, md: 8 }}>
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
                Career History
              </Tag>
              <Text
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight={{ base: 1.2, md: 1.1 }}
                fontWeight="extrabold"
                color={useColorModeValue('gray.900', 'gray.100')}
                letterSpacing={{ base: '-0.02em', md: '-0.03em' }}
              >
                Enterprise leadership across utilities, energy, and AI.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} lineHeight={1.75}>
                Detailed career history sits better here than on the front page. This page keeps the
                full operating track record available without making the homepage read like a CV.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Experience />
    </Box>
  );
};

export default ExperiencePage;
