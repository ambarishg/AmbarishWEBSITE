import { Box, Container, Divider, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { hero } from '../data/profile.js';

const Footer = () => (
  <Box
    py={{ base: 10, md: 12 }}
    bg={useColorModeValue('rgba(255,255,255,0.9)', 'rgba(17,24,39,0.92)')}
    borderTop="1px solid"
    borderColor={useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.2)')}
    backdropFilter="blur(14px)"
  >
    <Container maxW="6xl">
      <Stack spacing={6} align="center">
        <Divider borderColor={useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.25)')} />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={{ base: 4, md: 6 }}
          w="full"
        >
          <Text fontWeight="medium" color="subtleText">
            {'\u00A9'} {new Date().getFullYear()} {hero.name}. All rights reserved.
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href={`mailto:${hero.contact.email}`} color="brand.500">
              {hero.contact.email}
            </Link>
            <Link href={hero.contact.linkedin} color="brand.500" isExternal>
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
