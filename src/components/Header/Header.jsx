import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  // Correct route paths here
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/aboutUs' }, 
  ];

  return (
    <chakra.header id="header" borderBottom="1px solid" borderColor="white">
      <Flex w="100%" py="5" align="center" justify="space-between">
        {/* Logo / Brand */}
        <Link to="/">
          <Heading fontSize="3xl" fontFamily="cursive" color="gray.50">
            ShiRa
          </Heading>
        </Link>

        {/* Desktop Nav */}
        {isDesktop ? (
          <>
            <ButtonGroup as="nav" variant="link" spacing="5">
              {navLinks.map(({ name, path }) => (
                <Button
                  key={name}
                  as={Link}
                  to={path}
                  fontSize="16px"
                  color="gray.100"
                  _hover={{ textDecoration: 'underline', color: 'white' }}
                >
                  {name}
                </Button>
              ))}
            </ButtonGroup>

            {/* Right Buttons */}
            <HStack spacing="3">
              <Button
                as={Link}
                to="/contact"
                size="sm"
                variant="solid"
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
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;
