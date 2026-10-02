import { Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const SectionHeading = ({ eyebrow, title, description }) => {
  const divider = useColorModeValue('rgba(38,61,96,0.18)', 'rgba(208,220,240,0.14)');

  return (
    <Stack spacing={4} align="flex-start" textAlign="left">
      {eyebrow ? (
        <Text textStyle="eyebrow" color={useColorModeValue('accent.700', 'accent.200')}>
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        fontSize={{ base: '2.25rem', md: '3.25rem' }}
        lineHeight={1.08}
        maxW="4xl"
        color={useColorModeValue('brand.900', 'white')}
      >
        {title}
      </Heading>
      {description ? (
        <Text color="subtleText" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" lineHeight={1.75}>
          {description}
        </Text>
      ) : null}
      <Divider borderColor={divider} w={{ base: '4rem', md: '5rem' }} />
    </Stack>
  );
};

export default SectionHeading;
