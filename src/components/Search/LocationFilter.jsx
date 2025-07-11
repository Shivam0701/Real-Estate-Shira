import { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {
  const { city, setCity, cities } = useContext(HouseContext);

  return (
    <Select value={city} onChange={(e) => setCity(e.target.value)}>
      <option>Select City</option>
      {cities.map((cityItem, index) => (
        <option key={index} value={cityItem}>
          {cityItem}
        </option>
      ))}
    </Select>
  );
};

export default LocationFilter;
