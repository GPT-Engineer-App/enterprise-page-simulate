import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Security");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
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
          <Text fontSize="sm" textAlign="center" mb={2}>
            ENTERPRISE-LEVEL FEATURES
          </Text>
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
          <Flex justifyContent="center" mt={8}>
            <Button mr={4} colorScheme="blue" onClick={() => handleTabClick("Security")}>
              Security
            </Button>
            <Button mr={4} colorScheme="blue" onClick={() => handleTabClick("Scale")}>
              Scale
            </Button>
            <Button mr={4} colorScheme="blue" onClick={() => handleTabClick("Performance")}>
              Performance
            </Button>
            <Button colorScheme="blue" onClick={() => handleTabClick("Compliance")}>
              Compliance
            </Button>
          </Flex>
          <Box mt={8}>
            {}
            {activeTab === "Security" && (
              <Box>
                <Heading as="h3" size="lg" mb={4}>
                  Security
                </Heading>
                <Text>Our enterprise software prioritizes the security of your data with robust encryption, access controls, and regular security audits. We ensure that your sensitive information remains protected at all times.</Text>
              </Box>
            )}
            {activeTab === "Scale" && (
              <Box>
                <Heading as="h3" size="lg" mb={4}>
                  Scale
                </Heading>
                <Text>Our software is designed to scale seamlessly with your growing enterprise needs. Whether you have a small team or a large organization, our solution can handle the increasing workload and user base without compromising performance.</Text>
              </Box>
            )}
            {activeTab === "Performance" && (
              <Box>
                <Heading as="h3" size="lg" mb={4}>
                  Performance
                </Heading>
                <Text>We understand the importance of high-performance software in enterprise environments. Our solution is optimized for speed, efficiency, and reliability, ensuring that your teams can work productively without any delays or interruptions.</Text>
              </Box>
            )}
            {activeTab === "Compliance" && (
              <Box>
                <Heading as="h3" size="lg" mb={4}>
                  Compliance
                </Heading>
                <Text>Compliance with industry regulations and standards is a top priority for enterprises. Our software is built with compliance in mind, adhering to relevant guidelines and best practices to help you meet your compliance requirements effortlessly.</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
