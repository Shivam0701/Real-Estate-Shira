import { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import { HouseContext } from '../../context/HouseContext';

const prices = [
  { value: 'Select Price Range' },
  { value: '₹20,000   - ₹30,000' },
  { value: '₹30,000   - ₹1,10,000' },
  { value: '₹1,10,000 - ₹1,40,000' },
  { value: '₹1,40,000 - ₹1,70,000' },
  { value: '₹1,70,000 - ₹2,00,000' },
  { value: '₹2,00,000 - ₹2,30,000' },
];

const PriceFilter = () => {
  const { price, setPrice } = useContext(HouseContext);

  return (
    <Select value={price} onChange={(e) => setPrice(e.target.value)}>
      {prices.map((item, index) => (
        <option key={index} value={item.value}>
          {item.value}
        </option>
      ))}
    </Select>
  );
};

export default PriceFilter;
