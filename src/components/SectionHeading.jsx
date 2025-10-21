import { Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const SectionHeading = ({ eyebrow, title, description }) => {
  const headingGradient = useColorModeValue(
    'linear(to-r, brand.700, brand.500)',
    'linear(to-r, brand.200, brand.400)'
  );
  const divider = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.25)');

  return (
    <Stack spacing={4} align="center" textAlign="center">
      {eyebrow ? (
        <Text textStyle="eyebrow" color={useColorModeValue('brand.600', 'brand.300')}>
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        size="xl"
        lineHeight={1.15}
        maxW="3xl"
        bgGradient={headingGradient}
        backgroundClip="text"
      >
        {title}
      </Heading>
      {description ? (
        <Text color="subtleText" fontSize="lg" maxW="2xl">
          {description}
        </Text>
      ) : null}
      <Divider borderColor={divider} w={{ base: '60%', md: '40%' }} />
    </Stack>
  );
};

export default SectionHeading;
