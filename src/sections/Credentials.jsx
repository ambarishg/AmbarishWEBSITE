import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, education } from '../data/profile.js';

const Credentials = () => {
  const subtle = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      id="credentials"
      py={{ base: 16, md: 20 }}
      bg={useColorModeValue('rgba(236, 243, 255, 0.4)', 'gray.900')}
    >
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Continuous learning across data, engineering, and emerging tech."
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
          <Box
            layerStyle="card"
            p={{ base: 6, md: 8 }}
            _hover={{ boxShadow: 'floating' }}
          >
            <Stack direction="row" align="center" spacing={3} mb={4}>
              <FaCertificate color="#2b91e6" size={20} />
              <Heading size="sm">Certifications & Specializations</Heading>
            </Stack>
            <List spacing={2}>
              {certifications.map((item) => (
                <ListItem key={item} color={subtle}>
                  <ListIcon as={CheckCircleIcon} color="brand.400" />
                  {item}
                </ListItem>
              ))}
            </List>
            <Text mt={6} fontSize="sm" color={subtle}>
              Language: English (Full Professional Proficiency)
            </Text>
          </Box>
          <Box
            layerStyle="card"
            p={{ base: 6, md: 8 }}
            _hover={{ boxShadow: 'floating' }}
          >
            <Stack direction="row" align="center" spacing={3} mb={4}>
              <FaGraduationCap color="#2b91e6" size={20} />
              <Heading size="sm">Education</Heading>
            </Stack>
            <Stack spacing={4}>
              {education.map((item) => (
                <Box key={item.school}>
                  <Text fontWeight="semibold">{item.school}</Text>
                  <Text color={subtle}>{item.degree}</Text>
                  <Text color={subtle} fontSize="sm">
                    {item.period}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Credentials;
