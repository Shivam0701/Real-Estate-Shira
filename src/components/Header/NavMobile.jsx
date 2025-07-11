import { useRef } from 'react';
import {
  ButtonGroup, VStack, Drawer, DrawerBody, DrawerCloseButton,
  DrawerContent, DrawerHeader, DrawerOverlay, Button, IconButton,
  useDisclosure, Center
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // auto-close drawer
  };

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.35rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
        color="white"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerCloseButton />
          <Center>
            <DrawerHeader>Menu</DrawerHeader>
          </Center>
          <DrawerBody px="14" mt="4">
            <VStack as="nav" spacing="6" alignItems="flex-start">
              <Button variant="link" onClick={() => handleNavigate('/')}>Home</Button>
              <Button variant="link" onClick={() => handleNavigate('/features')}>Features</Button>
              <Button variant="link" onClick={() => handleNavigate('/about-us')}>About Us</Button>
              <Button variant="solid" onClick={() => handleNavigate('/contact')}>Contact</Button>
              <Button variant="outline" onClick={() => handleNavigate('/signup')}>Sign Up</Button>
              <Button variant="outline" onClick={() => handleNavigate('/login')}>Sign In</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
