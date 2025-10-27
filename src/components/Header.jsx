import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { hero } from '../data/profile.js';

const NAV_LINKS = [
  { label: 'About', to: { pathname: '/', hash: '#about' } },
  { label: 'Experience', to: { pathname: '/', hash: '#experience' } },
  {
    label: 'Case Studies',
    to: '/highlights',
    submenu: [
      { label: 'Highlights Overview', to: '/highlights' },
      { label: 'Kaggle Achievements', to: '/highlights/kaggle-achievements' }
    ]
  },
  { label: 'YouTube', to: '/ag-academy' },
  { label: 'Credentials', to: { pathname: '/', hash: '#credentials' } },
  { label: 'Blogs', href: 'https://blog.ambarishganguly.com' }
];

const Header = () => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(17, 24, 39, 0.92)');
  const border = useColorModeValue('rgba(148, 163, 184, 0.3)', 'rgba(148, 163, 184, 0.2)');
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const linkHover = useColorModeValue('brand.600', 'brand.300');
  const menuBg = useColorModeValue('white', 'rgba(15,23,42,0.95)');
  const menuBorder = useColorModeValue('rgba(148,163,184,0.3)', 'rgba(148,163,184,0.35)');
  const menuHover = useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 130, 246, 0.18)');

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
      <Link
        href="#main-content"
        position="absolute"
        left="-999px"
        top="auto"
        bg="brand.500"
        color="white"
        px={4}
        py={2}
        borderRadius="full"
        fontWeight="semibold"
        _focus={{
          left: '16px',
          top: '16px',
          outline: '2px solid',
          outlineColor: 'brand.500'
        }}
        _focusVisible={{
          left: '16px',
          top: '16px'
        }}
      >
        Skip to main content
      </Link>
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
              item.submenu ? (
                <Menu key={item.label} placement="bottom-start">
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                    fontSize="sm"
                    fontWeight="medium"
                    color={linkColor}
                    px={{ base: 2, md: 3 }}
                    py={{ base: 2, md: 1 }}
                    borderRadius="full"
                    _hover={{
                      color: linkHover,
                      bg: menuHover
                    }}
                    _active={{
                      bg: menuHover
                    }}
                    _expanded={{
                      color: linkHover,
                      bg: menuHover
                    }}
                  >
                    {item.label}
                  </MenuButton>
                  <MenuList bg={menuBg} borderColor={menuBorder} py={2}>
                    {item.submenu.map((subItem) => {
                      const linkProps = subItem.href
                        ? {
                            as: Link,
                            href: subItem.href,
                            target: subItem.target || '_blank',
                            rel: subItem.rel || 'noopener noreferrer'
                          }
                        : {
                            as: RouterLink,
                            to: subItem.to
                          };
                      return (
                        <MenuItem
                          key={subItem.to || subItem.href}
                          fontSize="sm"
                          color={linkColor}
                          _hover={{ bg: menuHover, color: linkHover, textDecoration: 'none' }}
                          {...linkProps}
                        >
                          {subItem.label}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              ) : item.href ? (
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
