import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { bannerData } from '../data';
import Apartment6Lg from '../assets/images/banner2.png'; 
import Apartment1Lg from '../assets/images/houseBanner.jpg';


const MotionVStack = motion(VStack);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const Banner = () => {
  return (
    <MotionStack
      direction={{ base: 'column', lg: 'row' }}
      my={6}
      overflow="hidden"
      spacing={0}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {/* Left Text Section */}
      <MotionVStack
        flexGrow="1"
        px={{ base: 6, md: 10 }}
        py={{ base: 8, md: 16 }}
        bgGradient="linear(to-r, gray.800, green.800)"
        justify="center"
        align="start"
        borderRadius="xl"
        spacing={6}
        variants={{
          hidden: { opacity: 0, x: -60 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8 }}
        color="white"
        boxShadow="xl"
      >
        <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} lineHeight="short">
          Find a Home That Matches Your Dreams
        </Heading>

        <Text fontSize={{ base: 'sm', md: 'md' }} maxW="600px">
          Whether you're buying, renting, or investing — ShiRa helps you discover
          trusted, verified properties with real-time insights and community support.
        </Text>

        <Box>
          <Button
            bg="cyan.100"
            color="teal.900"
            _hover={{ bg: 'blue.200' }}
            size="md"
            px={6}
            boxShadow="md"
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          >
            Start Exploring
          </Button>
        </Box>

        {/* Quick Highlights */}
        <HStack spacing={4} flexWrap="wrap">
          {bannerData.map((item, index) => (
            <MotionBox
              key={index}
              bg="whiteAlpha.300"
              p={4}
              borderRadius="md"
              color="white"
              minW="150px"
              boxShadow="sm"
              whileHover={{ scale: 1.05 }}
              transition="all 0.3s ease"
            >
              <HStack>
                <Text fontWeight="bold">{Object.keys(item)}</Text>
                <BiPlus />
              </HStack>
              <Text fontSize="sm">{Object.values(item)}</Text>
            </MotionBox>
          ))}
        </HStack>
      </MotionVStack>

      {/* Right Image Section */}
      <MotionBox
        display={{ base: 'none', lg: 'flex' }}
        flexDir="column"
        align="center"
        justify="center"
        px={4}
        py={4}
        variants={{
          hidden: { opacity: 0, x: 60 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={Apartment1Lg}
          alt="house"
          borderRadius="lg"
          boxShadow="2xl"
          maxH="250px"
          objectFit="cover"
          mb={4}
        />
        <Image
          src={Apartment6Lg}
          alt="house"
          borderRadius="lg"
          boxShadow="2xl"
          maxH="250px"
          objectFit="cover"
        />
      </MotionBox>
    </MotionStack>
  );
};

export default Banner;
