import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/aboutUs' },
  ];

  return (
    <chakra.header
      id="header"
      borderBottom="1px"
      borderColor="gray.700"
      bg="gray.900"
      color="white"
      px={{ base: 4, md: 8 }}
      py={4}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex align="center" justify="space-between" wrap="wrap">
        {/* Logo */}
        <Link to="/">
          <Heading fontSize="2xl" fontFamily="cursive" color="teal.300">
            ShiRa
          </Heading>
        </Link>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <HStack spacing={6}>
            <ButtonGroup as="nav" variant="link" spacing="4">
              {navLinks.map(({ name, path }) => (
                <Button
                  key={name}
                  as={Link}
                  to={path}
                  fontSize="16px"
                  color="gray.100"
                  _hover={{ color: 'white', textDecoration: 'underline' }}
                >
                  {name}
                </Button>
              ))}
            </ButtonGroup>

            <HStack spacing="3">
              <Button
                as={Link}
                to="/contact"
                size="sm"
                colorScheme="blue"
              >
                Contact
              </Button>
              <Button
                as={Link}
                to="/signup"
                size="sm"
                variant="outline"
                colorScheme="green"
              >
                Sign up
              </Button>
            </HStack>
          </HStack>
        ) : (
          // Mobile nav drawer
          <Box>
            <NavMobile />
          </Box>
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;
