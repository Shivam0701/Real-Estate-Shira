import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

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
import AboutUs from './routes/AboutUs';


const App = () => {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='property-details' element={<PropertyDetails />}>
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>

          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
<Route path="/features" element={<Features />} />

          <Route path='/aboutUs' element={<AboutUs />} />
         
<Route path="/login" element={<Login />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

      </Container>

      <Footer />
    </HouseProvider>
  );
};

export default App;
