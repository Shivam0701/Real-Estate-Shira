import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Image,
  useColorModeValue,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AboutUs = () => {
  const bgColor = useColorModeValue('whiteAlpha.200', 'gray.700');

  return (
    <MotionBox
      py={12}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* 🔷 Page Heading */}
      <Heading
        textAlign="center"
        mb={8}
        color="teal.300"
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        About ShiRa
      </Heading>

      {/* 🔷 Overview Section */}
      <Box
        maxW="5xl"
        mx="auto"
        bg={bgColor}
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        mb={10}
      >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
          <Image
            borderRadius="lg"
            boxSize={{ base: '100%', md: '300px' }}
            objectFit="cover"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Team working"
          />
          <VStack align="start" spacing={4}>
            <Text color="white" fontSize="lg" lineHeight="tall">
              Welcome to <strong>ShiRa</strong> — a platform built to help you
              find your dream property. Whether you're looking to rent, buy, or
              just explore, our mission is to simplify the real estate journey
              using clean design, robust tools, and real-time listings.
            </Text>
            <Text color="gray.300" fontSize="md">
              Built by a passionate team of developers and designers, ShiRa
              combines technology and trust to make property discovery intuitive
              and engaging.
            </Text>
          </VStack>
        </Stack>
      </Box>

      {/* 🔷 Why Choose Us */}
      <Box maxW="6xl" mx="auto" mt={12}>
        <Heading size="md" color="teal.300" mb={6}>
          Why Choose ShiRa?
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={5} bg="whiteAlpha.100" borderRadius="lg">
            <Heading size="sm" color="teal.200" mb={2}>Verified Listings</Heading>
            <Text color="gray.200">Every property is verified for legality and accuracy.</Text>
          </Box>
          <Box p={5} bg="whiteAlpha.100" borderRadius="lg">
            <Heading size="sm" color="teal.200" mb={2}>AI-Powered Matches</Heading>
            <Text color="gray.200">Smart suggestions tailored to your needs.</Text>
          </Box>
          <Box p={5} bg="whiteAlpha.100" borderRadius="lg">
            <Heading size="sm" color="teal.200" mb={2}>24/7 Support</Heading>
            <Text color="gray.200">Friendly human support whenever you need it.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* 🔷 FAQs */}
      <Box maxW="6xl" mx="auto" mt={16}>
        <Heading size="md" color="teal.300" mb={4}>
          Frequently Asked Questions
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  Can I schedule a property visit through ShiRa?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">
              Absolutely. You can use our built-in calendar feature to request a site visit. The property owner or agent will confirm availability.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  How do I contact a property owner or agent?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">
              Once you find a listing, you’ll see the contact info or a “Message Owner” button. Use that to connect instantly.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  Can I list rental and resale properties both?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">
              Yes. Whether you're renting out or selling a flat, bungalow, or commercial space, ShiRa supports all types.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  Is my personal data safe on ShiRa?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">
              Yes, we use end-to-end encryption and never share your data with third parties.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  Do I need an account to browse listings?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">
              Nope! You can browse freely, but signing up allows saving favorites, scheduling visits, and more.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </MotionBox>
  );
};

export default AboutUs;
