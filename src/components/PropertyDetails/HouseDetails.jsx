import { Stack, VStack, Heading, Text, Box, HStack, Image } from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";

// 🔵 Define color tokens for easy reuse
const textColors = {
  name: 'white',
  address: 'white',
  type: 'teal',
  city: 'red',
  price: 'red',
  specs: 'white',
  description: 'white',
};

const HouseDetails = () => {
  const { propertyId } = useParams();
  const { houses } = useContext(HouseContext);
  const searchedHouse = houses.find(house => house.id == propertyId);

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' align={{ md: 'center' }} my='28px'>
        <Box>
          <Heading fontSize='22px' color={textColors.name}>{searchedHouse.name}</Heading>
          <Text fontSize='15px' color={textColors.address}>{searchedHouse.address}</Text>
        </Box>

        <HStack>
          <Text px='3' borderRadius='full' bg='teal.100' color={textColors.type}>
            {searchedHouse.type}
          </Text>
          <Text px='3' borderRadius='full' bg='blue.100' color={textColors.city}>
            {searchedHouse.city}
          </Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color={textColors.price}>
          Rs. {searchedHouse.price}
        </Text>
      </Stack>

      <Stack direction={{ base: 'column', lg: 'row' }} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <Image src={searchedHouse.imageLg} alt='house' />

          <Stack py='10px' spacing={{ sm: '3', md: '5' }} direction={{ base: 'column', md: 'row' }}>
            <HStack>
              <BiBed style={{ color: "red" }} />
              <Text fontSize="14px" color={textColors.specs}>
                {searchedHouse.bedrooms} Bedrooms
              </Text>
            </HStack>

            <HStack>
              <BiBath style={{ color: "red" }} />
              <Text fontSize="14px" color={textColors.specs}>
                {searchedHouse.bathrooms} Bathrooms
              </Text>
            </HStack>

            <HStack>
              <BiArea style={{ color: "red" }} />
              <Text fontSize="14px" color={textColors.specs}>
                {searchedHouse.surface}
              </Text>
            </HStack>
          </Stack>

          <Text fontSize='15px' color={textColors.description}>
            {searchedHouse.description}
          </Text>
        </VStack>

        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  );
};

export default HouseDetails;
