import { useRef } from 'react';
import {
  VStack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerHeader, DrawerOverlay, IconButton, Button, useDisclosure, Center
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sign In', path: '/signin' },
    { name: 'Sign Up', path: '/signup' },
  ];

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.35rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Center>
            <DrawerHeader>Menu</DrawerHeader>
          </Center>
          <DrawerBody px="14" mt="4">
            <VStack as="nav" spacing="6" alignItems="flex-start">
              {navLinks.map((link) => (
                <Button
                  as={Link}
                  to={link.path}
                  variant="ghost"
                  size="lg"
                  key={link.name}
                  onClick={onClose} // <-- closes drawer on click
                >
                  {link.name}
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

