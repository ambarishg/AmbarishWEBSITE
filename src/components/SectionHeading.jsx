import { Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const SectionHeading = ({ eyebrow, title, description }) => {
  const headingGradient = useColorModeValue(
    'linear(to-r, brand.900, brand.600)',
    'linear(to-r, white, accent.200)'
  );
  const divider = useColorModeValue('rgba(38,61,96,0.18)', 'rgba(208,220,240,0.14)');

  return (
    <Stack spacing={4} align="center" textAlign="center">
      {eyebrow ? (
        <Text textStyle="eyebrow" color={useColorModeValue('accent.700', 'accent.200')}>
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        fontSize={{ base: '2.5rem', md: '4rem' }}
        lineHeight={1}
        maxW="4xl"
        bgGradient={headingGradient}
        backgroundClip="text"
      >
        {title}
      </Heading>
      {description ? (
        <Text color="subtleText" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" lineHeight={1.85}>
          {description}
        </Text>
      ) : null}
      <Divider borderColor={divider} w={{ base: '60%', md: '40%' }} />
    </Stack>
  );
};

export default SectionHeading;
