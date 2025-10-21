import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import { blogs } from '../data/profile.js';

const Blogs = () => {
  const subtle = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box id="blogs" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Blogs"
          title="Latest thinking on agentic AI and applied data platforms."
          description="Deep dives that translate enterprise challenges into pragmatic, production-ready solutions."
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={12}>
          {blogs.map((blog) => (
            <Stack
              key={blog.title}
              spacing={4}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              _hover={{ transform: 'translateY(-6px)', boxShadow: 'floating' }}
              transition="transform 0.2s ease, box-shadow 0.2s ease"
            >
              <Stack spacing={2}>
                <Heading size="md">{blog.title}</Heading>
                <Text color={subtle}>{blog.excerpt}</Text>
              </Stack>
              <List spacing={2}>
                {blog.highlights.map((item) => (
                  <ListItem key={item} color={subtle}>
                    <ListIcon as={CheckCircleIcon} color="brand.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
              <HStack spacing={2} flexWrap="wrap">
                {blog.tags.map((tag) => (
                  <Badge
                    key={tag}
                    colorScheme="brand"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
              <Button
                as="a"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="brand"
                rightIcon={<ExternalLinkIcon />}
                alignSelf="flex-start"
              >
                {blog.actionLabel}
              </Button>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;
