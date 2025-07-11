import {
  Center,
  Grid,
  Heading,
  Spinner,
  Stack,
  Box,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { HouseContext } from "../../context/HouseContext";
import HouseItem from './HouseItem';

const MotionBox = motion(Box);

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const HouseList = () => {
  const { houses, isLoading } = useContext(HouseContext);
  const borderColor = useColorModeValue('teal.300', 'teal.500');
  const bgCard = useColorModeValue('#d1fae5', '#134e4a');

  if (isLoading) {
    return (
      <Center minH="200px">
        <Spinner size="xl" color="teal.400" thickness='4px' />
      </Center>
    );
  }

  if (houses.length === 0) {
    return (
      <Stack maxH='400px'>
        <Heading size="lg" p={{ base: '6', md: '10' }} align="center">
          Oops... Can try another one?
        </Heading>
      </Stack>
    );
  }

  return (
    <Flex justify="center" px={{ base: 2, md: 4 }}>
      <Grid
        my='6'
        gap='8'
        width="100%"
        maxW="1400px"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      >
        {houses.map((item, index) => (
          <MotionBox
            key={item.id}
            custom={index}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            borderRadius='2xl'
            overflow='hidden'
            backgroundColor={bgCard}
            outline={`2px solid ${borderColor}`}
            outlineOffset='8px'
            p="1"  // ← space inside the border but outside the content
            whileHover={{
              scale: 1.02,
              boxShadow: '0 12px 30px rgba(0, 200, 200, 0.2)',
            }}
            transition={{ duration: 0.3 }}
            display='flex'
            flexDirection='column'
            height="100%"
          >
            <Link to={`/property-details/${item.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <HouseItem house={item} />
            </Link>
          </MotionBox>
        ))}
      </Grid>
    </Flex>
  );
};

export default HouseList;
