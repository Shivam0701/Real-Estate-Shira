// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import HouseProvider from './context/HouseContext';

import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import Features from './routes/Features';
import Login from './routes/Login';
import AboutUs from './routes/AboutUs'; // ✅ CASE SENSITIVE

const App = () => {
  return (
    <HouseProvider>
      <Box minH="100vh" display="flex" flexDirection="column" bg="gray.900">
        <Header />

        <Box as="main" flex="1" px={{ base: 4, md: 10 }} w="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property-details" element={<PropertyDetails />}>
              <Route path=":propertyId" element={<HouseDetails />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem", color: "white" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </HouseProvider>
  );
};

export default App;
