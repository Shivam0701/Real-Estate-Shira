import { Textarea, Image, VStack, HStack, Box, Text, Input, Button } from '@chakra-ui/react'

// 🔴 Define global-style color constants here
const agentTextColor = {
  name: 'white',     // Dark Gray
  phone: '#e4e9efff',    // Chakra blue.600
};

const Form = ({ searchedHouse }) => {
  return (
    <VStack border='1px' borderColor='green.900' boxShadow='md' px='5' py='6'>
      <HStack>
        <Image borderRadius='full' boxSize='75px' src={searchedHouse.agent.image} />
        <Box>
          <Text mb='-3px' fontWeight='extrabold' fontSize='15px' color={agentTextColor.name}>
            {searchedHouse.agent.name}
          </Text>
          <Text fontSize='12px' color={agentTextColor.phone}>
            +{searchedHouse.agent.phone}
          </Text>
        </Box>
      </HStack>

      <VStack my='3px' spacing='2px'>
        <form>
          <Input mt='3' mb='2' placeholder="Name*" />
          <Input placeholder="Email*" />
          <Input my='2' placeholder="Phone*" />
          <Textarea
            my='2'
            placeholder='Message*'
            size='sm'
            color='white'
            defaultValue='Hello, I am interested in Your Property'
          />
          <HStack my='2'>
            <Button w='full' px='4'>Send Message</Button>
            <Button w={{ base: 'full', md: '50%' }} variant='outline'>Call</Button>
          </HStack>
        </form>
      </VStack>
    </VStack>
  );
};

export default Form;
