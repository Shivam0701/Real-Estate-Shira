import { useRef } from 'react';
import {
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  IconButton,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Contact', to: '/contact' },
    { label: 'Sign Up', to: '/signup' },
    { label: 'Sign In', to: '/login' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <IconButton
        variant='ghost'
        icon={<FiMenu fontSize='1.35rem' />}
        aria-label='Open Menu'
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Center>
            <DrawerHeader>Menu</DrawerHeader>
          </Center>
          <DrawerBody px='14' mt='4'>
            <VStack as='nav' spacing='8' alignItems='flex-start'>
              {menuItems.map(({ label, to }) => (
                <Button key={label} variant='link' onClick={() => handleNavigate(to)}>
                  {label}
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
