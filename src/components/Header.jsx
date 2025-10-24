import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { hero } from '../data/profile.js';

const NAV_LINKS = [
  { label: 'About', to: { pathname: '/', hash: '#about' } },
  { label: 'Experience', to: { pathname: '/', hash: '#experience' } },
  { label: 'Case Studies', to: '/highlights' },
  { label: 'AG Academy', to: '/ag-academy' },
  { label: 'Credentials', to: { pathname: '/', hash: '#credentials' } },
  { label: 'Blogs', href: 'https://blog.ambarishganguly.com' }
];

const Header = () => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(17, 24, 39, 0.92)');
  const border = useColorModeValue('rgba(148, 163, 184, 0.3)', 'rgba(148, 163, 184, 0.2)');
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const linkHover = useColorModeValue('brand.600', 'brand.300');

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg={bg}
      borderBottom="1px solid"
      borderColor={border}
      backdropFilter="blur(14px)"
      boxShadow="md"
    >
      <Container maxW="7xl">
        <Flex
          align="center"
          justify="space-between"
          py={4}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 3, md: 0 }}
          px={{ base: 0, md: 2 }}
        >
          <Stack spacing={0} align={{ base: 'center', md: 'flex-start' }}>
            <Text textStyle="eyebrow" color={useColorModeValue('brand.600', 'brand.300')}>
              Data & AI Leadership
            </Text>
            <Link
              as={RouterLink}
              to={{ pathname: '/', hash: '#hero' }}
              fontWeight="semibold"
              fontSize="lg"
              color={useColorModeValue('brand.700', 'brand.200')}
            >
              {hero.name}
            </Link>
          </Stack>
          <HStack spacing={{ base: 2, md: 6 }} flexWrap="wrap" justify="center">
            {NAV_LINKS.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="medium"
                  color={linkColor}
                  px={{ base: 2, md: 0 }}
                  py={{ base: 2, md: 1 }}
                  borderRadius="full"
                  _hover={{
                    color: linkHover,
                    textDecoration: 'none',
                    bg: useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 130, 246, 0.12)')
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  as={RouterLink}
                  to={item.to}
                  fontSize="sm"
                  fontWeight="medium"
                  color={linkColor}
                  px={{ base: 2, md: 0 }}
                  py={{ base: 2, md: 1 }}
                  borderRadius="full"
                  _hover={{
                    color: linkHover,
                    textDecoration: 'none',
                    bg: useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 130, 246, 0.12)')
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button as={Link} href={`mailto:${hero.contact.email}`} size="sm" colorScheme="brand">
              Contact
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
