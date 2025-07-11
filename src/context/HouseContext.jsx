import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext('');

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState('Select City');
  const [cities, setCities] = useState([]);
  const [price, setPrice] = useState('Select Price Range');
  const [property, setProperty] = useState('Select Property Type');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const allCities = housesData.map((house) => house.country);
    const uniqueCities = [...new Set(allCities)];
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    const allPropertyTypes = housesData.map((house) => house.type);
    const uniquePropertyTypes = [...new Set(allPropertyTypes)];
    setProperties(uniquePropertyTypes);
  }, []);

  const searchHandler = () => {
    setIsLoading(true);

    const isDefault = (str) => str.includes('Select');

    let minPrice = 0;
    let maxPrice = Infinity;

    if (!isDefault(price)) {
      const [min, , max] = price.split(' ');
      minPrice = parseInt(min.replace(/₹|,/g, ''));
      maxPrice = parseInt(max.replace(/₹|,/g, ''));
    }

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price.replace(/₹|,/g, ''));

      const matchesCity = isDefault(city) || house.country === city;
      const matchesPrice = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);
      const matchesProperty = isDefault(property) || house.type === property;

      return matchesCity && matchesPrice && matchesProperty;
    });

    setTimeout(() => {
      setHouses(filteredHouses);
      setIsLoading(false);
    }, 1000);
  };

  const resetFilters = () => {
    setIsLoading(true);
    setCity('Select City');
    setPrice('Select Price Range');
    setProperty('Select Property Type');

    setTimeout(() => {
      setHouses(housesData);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        city,
        setCity,
        cities,
        price,
        setPrice,
        property,
        setProperty,
        properties,
        searchHandler,
        resetFilters,
        isLoading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
