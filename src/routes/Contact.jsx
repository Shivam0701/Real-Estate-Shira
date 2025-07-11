import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Contact = () => {
  const inputBg = useColorModeValue('whiteAlpha.200', 'gray.700');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: false }); // remove error while typing
  };

  const handleSubmit = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === ''
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (!hasError) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  return (
    <MotionBox
      py={12}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <Heading
        textAlign="center"
        mb={8}
        color="teal.300"
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        Contact Us
      </Heading>

      <MotionBox
        maxW="lg"
        mx="auto"
        bg={inputBg}
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        transition="all 0.3s ease"
        whileHover={{
          scale: 1.015,
          boxShadow: '0px 10px 20px rgba(0, 255, 255, 0.2)',
          backgroundColor: 'rgba(45, 212, 191, 0.1)',
        }}
      >
        <VStack spacing={5}>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel color="white">Name</FormLabel>
            <Input
              color="white"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange('name')}
              focusBorderColor="teal.400"
              _hover={{ borderColor: 'teal.300' }}
            />
            {errors.name && (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email} isRequired>
            <FormLabel color="white">Email</FormLabel>
            <Input
              color="white"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange('email')}
              focusBorderColor="teal.400"
              _hover={{ borderColor: 'teal.300' }}
            />
            {errors.email && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.message} isRequired>
            <FormLabel color="white">Message</FormLabel>
            <Textarea
              color="white"
              placeholder="Type your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange('message')}
              focusBorderColor="teal.400"
              _hover={{ borderColor: 'teal.300' }}
            />
            {errors.message && (
              <FormErrorMessage>Message is required.</FormErrorMessage>
            )}
          </FormControl>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            colorScheme="teal"
            width="full"
            onClick={handleSubmit}
            transition="all 0.3s ease"
          >
            Send Message
          </MotionButton>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default Contact;
