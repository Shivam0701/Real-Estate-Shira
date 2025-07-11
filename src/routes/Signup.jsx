import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';


const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Signup = () => {
  const inputBg = useColorModeValue('whiteAlpha.200', 'gray.700');
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: false });
  };

  const handleSubmit = () => {
    const newErrors = {
      username: formData.username.trim() === '',
      email: formData.email.trim() === '',
      password: formData.password.trim() === ''
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (!hasError) {
      alert('Signup successful!');
      setFormData({ username: '', email: '', password: '' });
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
        letterSpacing="tight"
      >
        Join ShiRa – Create Your Account
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
          backgroundColor: 'rgba(45, 212, 191, 0.08)',
        }}
      >
        <VStack spacing={5}>
          <FormControl isRequired isInvalid={errors.username}>
            <FormLabel color="white">Full Name</FormLabel>
            <Input
              color="white"
              placeholder="Enter a cool username"
              value={formData.username}
              onChange={handleChange('username')}
              focusBorderColor="teal.400"
              _hover={{ borderColor: 'teal.300' }}
            />
            {errors.username && (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={errors.email}>
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

          <FormControl isRequired isInvalid={errors.password}>
            <FormLabel color="white">Password</FormLabel>
            <InputGroup>
              <Input
                color="white"
                type={showPassword ? 'text' : 'password'}
                placeholder="Choose a strong password"
                value={formData.password}
                onChange={handleChange('password')}
                focusBorderColor="teal.400"
                _hover={{ borderColor: 'teal.300' }}
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  color="teal.200"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label="Toggle password visibility"
                />
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
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
            Create Account
          </MotionButton>

          <Text color="gray.400" fontSize="sm" mt="2">
  Already have an account?{' '}
  <Text
    as={RouterLink}
    to="/login"
    color="blue.300"
    fontWeight="medium"
    _hover={{ textDecoration: 'underline' }}
    display="inline"
  >
    Log in
  </Text>
</Text>

        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default Signup;
