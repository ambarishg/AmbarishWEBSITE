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
  { label: 'NASA', to: { pathname: '/', hash: '#nasa' } },
  { label: 'Bees on Azure', to: { pathname: '/', hash: '#bees' } },
  { label: 'Experience', to: '/experience' },
  {
    label: 'Case Studies',
    to: '/highlights',
    submenu: [
      { label: 'Overview', to: '/highlights' },
      { label: 'Azure', to: '/highlights/microsoft-azure' },
      { label: 'Kaggle', to: '/highlights/kaggle-achievements' }
    ]
  },
  { label: 'Speaking & Conferences', to: '/speaking-conferences' },
  { label: 'YouTube', to: '/ag-academy' },
  { label: 'Credentials', to: { pathname: '/', hash: '#credentials' } },
  { label: 'Blogs', href: 'https://blog.ambarishganguly.com' }
];

const Header = () => {
  const bg = useColorModeValue('rgba(247, 241, 232, 0.76)', 'rgba(10, 20, 38, 0.82)');
  const border = useColorModeValue('rgba(38, 61, 96, 0.14)', 'rgba(208, 220, 240, 0.14)');
  const linkColor = useColorModeValue('rgba(38, 49, 69, 0.82)', 'rgba(226, 232, 240, 0.84)');
  const linkHover = useColorModeValue('brand.700', 'accent.200');
  const menuBg = useColorModeValue('rgba(255,250,242,0.98)', 'rgba(10,20,38,0.96)');
  const menuBorder = useColorModeValue('rgba(38,61,96,0.14)', 'rgba(208,220,240,0.14)');
  const menuHover = useColorModeValue('rgba(38, 61, 96, 0.06)', 'rgba(201, 150, 31, 0.12)');
  const logoKicker = useColorModeValue('accent.600', 'accent.200');
  const logoColor = useColorModeValue('brand.800', 'white');
  const navBg = useColorModeValue('rgba(255,255,255,0.46)', 'rgba(255,255,255,0.03)');

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg={bg}
      borderBottom="1px solid"
      borderColor={border}
      backdropFilter="blur(18px)"
      boxShadow="0 18px 50px -32px rgba(15, 23, 42, 0.5)"
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
          <Stack spacing={0.5} align={{ base: 'center', md: 'flex-start' }}>
            <Text textStyle="eyebrow" color={logoKicker}>
              Data & AI Leadership
            </Text>
            <Link
              as={RouterLink}
              to={{ pathname: '/', hash: '#hero' }}
              fontWeight="700"
              fontSize={{ base: 'lg', md: 'xl' }}
              color={logoColor}
              letterSpacing="-0.02em"
            >
              {hero.name}
            </Link>
          </Stack>
          <HStack
            spacing={{ base: 2, md: 4 }}
            flexWrap="wrap"
            justify="center"
            bg={navBg}
            border="1px solid"
            borderColor={border}
            borderRadius="full"
            px={{ base: 3, md: 4 }}
            py={{ base: 2, md: 2.5 }}
            backdropFilter="blur(8px)"
          >
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
                    bg: menuHover
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
                    bg: menuHover
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button as={Link} href={`mailto:${hero.contact.email}`} size="sm">
              Contact
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
