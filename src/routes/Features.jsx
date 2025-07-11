import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHome, FaSearchLocation, FaHeadset, FaMapMarkedAlt, FaFilter, FaCheckCircle } from 'react-icons/fa';

const MotionBox = motion(Box);

const features = [
  {
    icon: FaHome,
    title: 'Verified Properties',
    description: 'Each listing is checked to ensure authenticity and updated documentation.',
  },
  {
    icon: FaSearchLocation,
    title: 'Smart Search',
    description: 'Use filters like location, price, and type to find the perfect match instantly.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Got questions? We’re just a message or call away any time of the day.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Interactive Maps',
    description: 'Explore neighborhoods visually with our integrated Google Maps feature.',
  },
  {
    icon: FaFilter,
    title: 'Advanced Filters',
    description: 'Narrow down results using multiple criteria including amenities and furnishing.',
  },
  {
    icon: FaCheckCircle,
    title: 'Instant Booking',
    description: 'Secure your property tour with real-time booking and confirmation.',
  },
];

const Features = () => {
  const cardBg = useColorModeValue('whiteAlpha.200', 'gray.700');

  return (
    <MotionBox
      py={12}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Heading
        textAlign="center"
        mb={10}
        color="teal.300"
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        Explore Our Features
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="6xl" mx="auto">
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="lg"
            bg={cardBg}
            boxShadow="lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <VStack align="start" spacing={3}>
              <Icon as={feature.icon} w={8} h={8} color="teal.300" />
              <Heading size="md" color="white">
                {feature.title}
              </Heading>
              <Text color="gray.300">{feature.description}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Features;
