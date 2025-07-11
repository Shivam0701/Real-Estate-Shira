import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaLightbulb,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const features = [
  {
    title: 'Verified Listings',
    icon: FaShieldAlt,
    desc: 'Every property on ShiRa is manually verified to ensure you never deal with fake or misleading information.',
  },
  {
    title: 'Interactive Map View',
    icon: FaMapMarkedAlt,
    desc: 'Easily explore neighborhoods, nearby amenities, and commute options with our integrated map view.',
  },
  {
    title: 'Instant Notifications',
    icon: FaRocket,
    desc: 'Get real-time alerts on new listings, price drops, and favorite properties.',
  },
  {
    title: 'Community Support',
    icon: FaUsers,
    desc: 'A user-friendly community where buyers and sellers help each other with reviews and tips.',
  },
  {
    title: 'Global Reach',
    icon: FaGlobe,
    desc: 'Explore properties not just in your city, but across the globe. Ideal for NRIs and investors.',
  },
  {
    title: 'AI-Powered Search',
    icon: FaLightbulb,
    desc: 'Our smart search engine learns your preferences and shows exactly what you need.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  const bgColor = useColorModeValue('whiteAlpha.200', 'gray.700');

  return (
    <MotionBox
      py={12}
      px={{ base: 4, md: 10 }}
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        align="center"
        mb={12}
        maxW="7xl"
        mx="auto"
      >
        <Box flex="1">
          <Heading color="teal.300" fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
            Discover Features that Make Property Hunting Easy
          </Heading>
          <Text fontSize="lg" color="gray.300">
            ShiRa offers a complete digital real estate experience with innovative tools and unmatched support.
          </Text>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
          alt="Real estate"
          borderRadius="lg"
          boxShadow="xl"
          maxW="400px"
        />
      </Stack>

      {/* Feature Grid with Animations */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} maxW="7xl" mx="auto">
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="lg"
            bg={bgColor}
            boxShadow="lg"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition="0.4s ease"
          >
            <Stack spacing={4} align="start">
              <Icon as={feature.icon} w={8} h={8} color="teal.300" />
              <Heading size="md" color="white">{feature.title}</Heading>
              <Text color="gray.300">{feature.desc}</Text>
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Features;
