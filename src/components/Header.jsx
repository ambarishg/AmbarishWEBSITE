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
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { hero } from '../data/profile.js';

const SECTION_LINKS = [
  { label: 'Public Service', to: { pathname: '/', hash: '#public-service' } },
  { label: 'NASA', to: { pathname: '/', hash: '#nasa' } },
  { label: 'Bees on Azure', to: { pathname: '/', hash: '#bees' } },
  { label: 'Credentials', to: { pathname: '/', hash: '#credentials' } }
];

const CASE_STUDY_LINKS = [
  { label: 'All case studies', to: '/highlights' },
  { label: 'Azure', to: '/highlights/microsoft-azure' },
  { label: 'Kaggle', to: '/highlights/kaggle-achievements' }
];

const PRIMARY_LINKS = [
  { label: 'About', to: { pathname: '/', hash: '#about' } },
  { label: 'Experience', to: '/experience' },
  { label: 'Speaking & Conferences', to: '/speaking-conferences' },
  { label: 'YouTube', to: '/ag-academy' },
  { label: 'Blogs', href: 'https://blog.ambarishganguly.com' }
];

const Header = () => {
  const bg = useColorModeValue('rgba(244, 239, 230, 0.94)', 'rgba(10, 20, 38, 0.92)');
  const border = useColorModeValue('rgba(38, 61, 96, 0.14)', 'rgba(208, 220, 240, 0.14)');
  const linkColor = useColorModeValue('rgba(38, 49, 69, 0.86)', 'rgba(226, 232, 240, 0.9)');
  const linkHover = useColorModeValue('brand.700', 'accent.200');
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuHover = useColorModeValue('gray.100', 'whiteAlpha.100');
  const logoKicker = useColorModeValue('accent.600', 'accent.200');
  const logoColor = useColorModeValue('brand.800', 'white');

  const renderLink = (item, options = {}) => {
    const props = item.href
      ? {
          as: options.menuItem ? Link : undefined,
          href: item.href,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      : {
          as: RouterLink,
          to: item.to
        };

    if (options.menuItem) {
      return (
        <MenuItem
          key={item.label}
          color={linkColor}
          fontSize="sm"
          textTransform="none"
          _hover={{ bg: menuHover, color: linkHover, textDecoration: 'none' }}
          {...props}
        >
          {item.label}
        </MenuItem>
      );
    }

    return (
      <Link
        key={item.label}
        fontSize="sm"
        fontWeight="semibold"
        textTransform="none"
        color={linkColor}
        px={2}
        py={2}
        borderRadius="md"
        whiteSpace="nowrap"
        _hover={{ color: linkHover, bg: menuHover, textDecoration: 'none' }}
        _focusVisible={{ outline: '2px solid', outlineColor: linkHover, outlineOffset: '2px' }}
        {...props}
      >
        {item.label}
      </Link>
    );
  };

  const renderDropdown = (label, items) => (
    <Menu key={label} placement="bottom-start">
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        fontSize="sm"
        fontWeight="semibold"
        textTransform="none"
        color={linkColor}
        px={2}
        borderRadius="md"
        _hover={{ color: linkHover, bg: menuHover }}
        _expanded={{ color: linkHover, bg: menuHover }}
        _focusVisible={{ outline: '2px solid', outlineColor: linkHover, outlineOffset: '2px' }}
      >
        {label}
      </MenuButton>
      <MenuList bg={menuBg} borderColor={border} boxShadow="lg" py={2}>
        {items.map((item) => renderLink(item, { menuItem: true }))}
      </MenuList>
    </Menu>
  );

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg={bg}
      borderBottom="1px solid"
      borderColor={border}
      backdropFilter="blur(16px)"
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
        borderRadius="md"
        fontWeight="semibold"
        _focus={{ left: '16px', top: '16px', zIndex: 30 }}
        _focusVisible={{ outline: '2px solid', outlineColor: 'brand.500' }}
      >
        Skip to main content
      </Link>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" py={{ base: 3, md: 4 }} gap={4}>
          <Stack spacing={0} align="flex-start" flexShrink={0}>
            <Text textStyle="eyebrow" color={logoKicker} fontSize="xs">
              Executive Portfolio
            </Text>
            <Link
              as={RouterLink}
              to={{ pathname: '/', hash: '#hero' }}
              fontFamily="heading"
              fontWeight="700"
              fontSize={{ base: '1.35rem', md: '1.65rem' }}
              lineHeight="1.2"
              color={logoColor}
              letterSpacing="-0.03em"
              _hover={{ textDecoration: 'none', color: linkHover }}
            >
              {hero.name}
            </Link>
          </Stack>

          <HStack spacing={1} display={{ base: 'none', xl: 'flex' }} align="center">
            {renderLink(PRIMARY_LINKS[0])}
            {renderDropdown('Highlights', SECTION_LINKS)}
            {renderLink(PRIMARY_LINKS[1])}
            {renderDropdown('Case Studies', CASE_STUDY_LINKS)}
            {renderLink(PRIMARY_LINKS[2])}
            {renderLink(PRIMARY_LINKS[3])}
            {renderLink(PRIMARY_LINKS[4])}
            <Button
              as={Link}
              href={`mailto:${hero.contact.email}`}
              size="sm"
              ml={2}
              flexShrink={0}
              textTransform="none"
            >
              Contact
            </Button>
          </HStack>

          <Box display={{ base: 'block', xl: 'none' }}>
            <Menu placement="bottom-end">
              <MenuButton
                as={Button}
                variant="outline"
                size="sm"
                leftIcon={<HamburgerIcon />}
                aria-label="Open navigation menu"
                textTransform="none"
              >
                Menu
              </MenuButton>
              <MenuList
                bg={menuBg}
                borderColor={border}
                boxShadow="lg"
                maxH="min(70vh, 32rem)"
                overflowY="auto"
                minW="15rem"
                py={2}
              >
                {PRIMARY_LINKS.slice(0, 2).map((item) => renderLink(item, { menuItem: true }))}
                {SECTION_LINKS.map((item) => renderLink(item, { menuItem: true }))}
                {CASE_STUDY_LINKS.map((item) => renderLink(item, { menuItem: true }))}
                {PRIMARY_LINKS.slice(2).map((item) => renderLink(item, { menuItem: true }))}
                <MenuItem
                  as={Link}
                  href={`mailto:${hero.contact.email}`}
                  color={linkColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="none"
                  _hover={{ bg: menuHover, color: linkHover, textDecoration: 'none' }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
