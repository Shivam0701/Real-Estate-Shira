import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import PropertyTypeFilter from './PropertyTypeFilter';

const Search = () => {
  const {
    searchHandler,
    resetFilters,
    houses,
    isLoading,
  } = useContext(HouseContext);

  return (
    <Flex my='3' direction='column' borderRadius='md' bg='teal.50' boxShadow='md' p='5'>
      <Heading py='2' size={{ base: 'sm', md: 'md' }}>
        Let’s Help You Find the Right Home
      </Heading>
      <Text fontSize='sm' color='gray.600'>
        Find properties that fit your city, budget, and lifestyle
      </Text>

      <Flex gap={{ base: 3, md: 2 }} direction={{ base: 'column', md: 'row' }} borderRadius='30' mt='4'>
        <LocationFilter />
        <PropertyTypeFilter />
        <PriceFilter />
        <Button onClick={searchHandler} px='6' colorScheme='teal' isLoading={isLoading}>
          Search
        </Button>
        <Button variant='outline' onClick={resetFilters}>
          Reset
        </Button>
      </Flex>

      {houses.length === 0 && (
        <Text mt='4' color='red.500' fontWeight='bold'>
          No matching properties found. Please try other filters.
        </Text>
      )}
    </Flex>
  );
};

export default Search;
