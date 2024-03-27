import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Flex alignItems="center" justifyContent="center">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" mb={4}>
                Enterprise Software Solution
              </Heading>
              <Text fontSize="xl" mb={8}>
                Empower your teams with our scalable and secure enterprise software. Streamline workflows, collaborate effectively, and drive business growth.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      {}
      <Box py={20}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Flex alignItems="center">
            <Box flex="1" pr={8}>
              <Heading as="h2" size="xl" mb={4}>
                AI-Powered Enterprise Solution
              </Heading>
              <Text fontSize="lg" mb={8}>
                Leverage the power of artificial intelligence to optimize your business processes, gain valuable insights, and stay ahead of the competition. Our AI-driven enterprise solution provides intelligent automation, predictive analytics, and data-driven decision-making capabilities.
              </Text>
              <Button colorScheme="blue" size="lg">
                Learn More
              </Button>
            </Box>
            <Box flex="1">
              <Image src="path/to/ai-image.jpg" alt="AI Enterprise Solution" borderRadius="lg" />
            </Box>
          </Flex>
          <Box borderBottomWidth="1px" borderColor="gray.200" my={12} width="50%" mx="auto" />
        </Box>
      </Box>

      {}
      <Box py={20}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Key Features
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem>
              <Icon as={FaCheck} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Scalability
              </Heading>
              <Text>Our software scales seamlessly to accommodate the growth of your enterprise, ensuring uninterrupted performance.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaCheck} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Security
              </Heading>
              <Text>We prioritize the security of your data with robust encryption, access controls, and regular security audits.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaCheck} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Collaboration
              </Heading>
              <Text>Foster team collaboration with real-time communication, shared workspaces, and seamless file sharing.</Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            What Our Customers Say
          </Heading>
          <Stack spacing={8}>
            <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
              <Text fontSize="xl" mb={4}>
                "The enterprise software has revolutionized the way our teams work together. It's intuitive, reliable, and has significantly improved our productivity."
              </Text>
              <Text fontWeight="bold">John Doe, CEO</Text>
            </Box>
            <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
              <Text fontSize="xl" mb={4}>
                "We've been using this software across our organization, and it has streamlined our processes and enhanced collaboration. It's a game-changer!"
              </Text>
              <Text fontWeight="bold">Jane Smith, CTO</Text>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box py={20}>
        <Box maxW="7xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8}>
            Ready to Transform Your Enterprise?
          </Heading>
          <Button colorScheme="blue" size="lg">
            Get Started Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
