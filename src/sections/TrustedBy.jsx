import { Box, Container, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import kaggleLogo from '../../docs/KAGGLE-LOGO.svg';
import microsoftLogo from '../../docs/Microsoft-logo.svg';
import nasaLogo from '../../docs/nasa-logo.svg';
import surveyLogo from '../../docs/SURVEY-LOGO.png';
import westBengalLogo from '../../docs/WBGOVT.png';
import governmentOfIndiaLogo from '../../docs/Government-of-India.svg';

const trustedPartners = [
  
  { src: nasaLogo, alt: 'Trusted by NASA', title: 'NASA' },
  { src: kaggleLogo, alt: 'Trusted by Kaggle', title: 'Kaggle' },
  { src: microsoftLogo, alt: 'Trusted by Microsoft', title: 'Microsoft' },
  {
    src: surveyLogo,
    alt: 'Trusted by Survey',
    title: 'Survey',
    prominent: true
  },
  {
    src: westBengalLogo,
    alt: 'Trusted by the Government of West Bengal',
    title: 'Government of West Bengal',
    prominent: true
  }
];

const TrustedBy = () => {
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.25)');
  const bg = useColorModeValue('white', 'rgba(15, 23, 42, 0.6)');

  return (
    <Box py={{ base: 10, md: 14 }} id="trusted-badges">
      <Container maxW="6xl">
        <Stack
          spacing={4}
          layerStyle="card"
          borderRadius="3xl"
          border="1px solid"
          borderColor={borderColor}
          bg={bg}
          p={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
        >
          <Text textStyle="eyebrow" letterSpacing="0.4em">
            Trusted by
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="text">
            Industry, research, and government partners who expect clarity and execution.
          </Text>
          <Flex
            wrap="wrap"
            gap={{ base: 6, md: 10 }}
            justify="center"
            align="center"
            w="full"
            mt={4}
          >
            {trustedPartners.map((partner) => {
              const sizeProps = partner.prominent
                ? partner.title === 'Survey'
                  ? { maxW: '240px', minW: '170px', maxH: { base: 48, md: 58 } }
                  : partner.title === 'Government of West Bengal'
                    ? { maxW: '220px', minW: '160px', maxH: { base: 46, md: 54 } }
                    : { maxW: '200px', minW: '150px', maxH: { base: 44, md: 52 } }
                : { maxW: '140px', minW: '110px', maxH: { base: 36, md: 40 } };
              return (
                <Box
                  key={partner.alt}
                  maxW={sizeProps.maxW}
                  minW={sizeProps.minW}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    maxH={sizeProps.maxH}
                    objectFit="contain"
                  />
                </Box>
              );
            })}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default TrustedBy;
