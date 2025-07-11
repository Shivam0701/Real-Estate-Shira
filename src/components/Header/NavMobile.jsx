import { useRef } from 'react';
import {
  Button,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.5rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
        color="white"
        _hover={{ bg: 'gray.700' }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Center>
            <DrawerHeader pt={8} fontSize="xl">Menu</DrawerHeader>
          </Center>

          <DrawerBody px={10} mt={6}>
            <VStack spacing={6} align="start">
              {[
                { label: 'Home', to: '/' },
                { label: 'Features', to: '/features' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Sign In', to: '/signin' },
                { label: 'Sign Up', to: '/signup' },
              ].map((item) => (
                <Button
                  as={RouterLink}
                  to={item.to}
                  variant="ghost"
                  size="lg"
                  w="100%"
                  justifyContent="flex-start"
                  fontWeight="medium"
                  key={item.label}
                >
                  {item.label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
