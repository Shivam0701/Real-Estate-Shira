import { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  return (
    <Select value={property} onChange={(e) => setProperty(e.target.value)}>
      <option>Select Property Type</option>
      {properties.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </Select>
  );
};

export default PropertyTypeFilter;
