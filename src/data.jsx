export const bannerData = [
    {1200: 'Premium Product'}, 
    {4500: 'Happy Customer'}, 
    {'240': 'Award Winning'}
]

// import house images
import House1 from './assets/images/houses/house1.png';
import House2 from './assets/images/houses/house2.png';
import House3 from './assets/images/houses/house3.png';
import House4 from './assets/images/houses/house4.png';
import House5 from './assets/images/houses/house5.png';
import House6 from './assets/images/houses/house6.png';
import House7 from './assets/images/houses/house7.png';
import House8 from './assets/images/houses/house8.png';
import House9 from './assets/images/houses/house9.png';
import House10 from './assets/images/houses/house10.png';
import House11 from './assets/images/houses/house11.png';
import House12 from './assets/images/houses/house12.png';
// import house large images
import House1Lg from './assets/images/houses/house1lg.png';
import House2Lg from './assets/images/houses/house2lg.png';
import House3Lg from './assets/images/houses/house3lg.png';
import House4Lg from './assets/images/houses/house4lg.png';
import House5Lg from './assets/images/houses/house5lg.png';
import House6Lg from './assets/images/houses/house6lg.png';
import House7Lg from './assets/images/houses/house7lg.png';
import House8Lg from './assets/images/houses/house8lg.png';
import House9Lg from './assets/images/houses/house9lg.png';
import House10Lg from './assets/images/houses/house10lg.png';
import House11Lg from './assets/images/houses/house11lg.png';
import House12Lg from './assets/images/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/images/apartments/a1.png';
import Apartment2 from './assets/images/apartments/a2.png';
import Apartment3 from './assets/images/apartments/a3.png';
import Apartment4 from './assets/images/apartments/a4.png';
import Apartment5 from './assets/images/apartments/a5.png';
import Apartment6 from './assets/images/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/images/apartments/a1lg.png';
import Apartment2Lg from './assets/images/apartments/a2lg.png';
import Apartment3Lg from './assets/images/apartments/a3lg.png';
import Apartment4Lg from './assets/images/apartments/a4lg.png';
import Apartment5Lg from './assets/images/apartments/a5lg.png';
import Apartment6Lg from './assets/images/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/images/agents/agent1.png';
import Agent2 from './assets/images/agents/agent2.png';
import Agent3 from './assets/images/agents/agent3.png';
import Agent4 from './assets/images/agents/agent4.png';
import Agent5 from './assets/images/agents/agent5.png';
import Agent6 from './assets/images/agents/agent6.png';
import Agent7 from './assets/images/agents/agent7.png';
import Agent8 from './assets/images/agents/agent8.png';
import Agent9 from './assets/images/agents/agent9.png';
import Agent10 from './assets/images/agents/agent10.png';
import Agent11 from './assets/images/agents/agent11.png';
import Agent12 from './assets/images/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'Sitamarhi Sukh Niwas',
    description: 'A luxurious 6-bedroom villa in Sitamarhi featuring modern interiors, a spacious backyard, and close proximity to country center.',
    country: 'Sitamarhi, Bihar',
    address: 'Plot No. 7, Rajopatti Road, Near Collectorate Office, Sitamarhi, Bihar 843301',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    image: House1,
    imageLg: House1Lg,
    agent: {
      image: Agent1,
      name: 'Ravi Pratap',
      phone: '9876543210',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'Dilli Darshan Villa',
    description: 'Elegant family home in the heart of New Delhi with a large living area, cozy fireplace, and double garage.',
    country: 'New Delhi, Delhi',
    address: 'A-82, Green Park Extension, Near AIIMS Metro Station & Yusuf Sarai Market, New Delhi, Delhi 110016',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    image: House2,
    imageLg: House2Lg,
    agent: {
      image: Agent2,
      name: 'Meena Sharma',
      phone: '9876543211',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'Punjab Heritage Villa',
    description: 'Spacious and modern house with an open floor plan, large kitchen island, and garden-facing windows in Jalandhar.',
    country: 'Jalandhar, Punjab',
    address: 'House No. 110, Model Town Extension, Near Lovely Sweets, Jalandhar, Punjab 144003',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    image: House3,
    imageLg: House3Lg,
    agent: {
      image: Agent3,
      name: 'Gurpreet Singh',
      phone: '9876543212',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'Malad Gharonda',
    description: 'A well-furnished property with a lush garden, premium fittings, and plenty of natural light. Perfect for families.',
    country: 'Malad, Mumbai',
    address: 'Orlem, Malad West, Mumbai, Maharashtra 400064',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    image: House4,
    imageLg: House4Lg,
    agent: {
      image: Agent4,
      name: 'Farhan Sheikh',
      phone: '9876543213',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'Mumbai Manor',
    description: 'Beautiful 5-bedroom house with rustic charm and modern updates. Close to schools, parks, and amenities.',
    country: 'Mumbai',
    address: 'Bandra West, Mumbai, Maharashtra 400050',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    image: House5,
    imageLg: House5Lg,
    agent: {
      image: Agent5,
      name: 'Priya Kapoor',
      phone: '9876543214',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'Dilli Heights',
    description: 'A large estate offering 6 bedrooms, modern appliances, smart home features, and a peaceful neighborhood.',
    country: 'New Delhi, Delhi',
    address: 'Dwarka Sector 21, New Delhi, Delhi 110075',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    image: House6,
    imageLg: House6Lg,
    agent: {
      image: Agent6,
      name: 'Sanjay Rathi',
      phone: '9876543215',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Jalandhar Residency',
    description: '2-bedroom apartment with country views, natural lighting, and a compact, efficient layout for urban living.',
    country: 'Jalandhar, Punjab',
    address: 'Flat No. 3B, GTB Nagar, Near DAV College, Jalandhar, Punjab 144002',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    image: Apartment1,
    imageLg: Apartment1Lg,
    agent: {
      image: Agent7,
      name: 'Rohit Bansal',
      phone: '9876543216',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Kandivali Pearl',
    description: 'Cozy 3-bedroom apartment with a modern kitchen, open plan living room, and balcony access.',
    country: 'Mumbai',
    address: 'Kandivali East, Mumbai, Maharashtra 400101',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    image: Apartment2,
    imageLg: Apartment2Lg,
    agent: {
      image: Agent8,
      name: 'Shraddha Joshi',
      phone: '9876543217',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Mehsaul Enclave',
    description: 'Stylish 2-bedroom apartment perfect for young professionals. Features smart storage and updated interiors.',
    country: 'Sitamarhi, Bihar',
    address: 'C-14, Mehsaul Road, Opposite City Hospital, Sitamarhi, Bihar 843302',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    image: Apartment3,
    imageLg: Apartment3Lg,
    agent: {
      image: Agent9,
      name: 'Alok Mishra',
      phone: '9876543218',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'Chincholi Palace',
    description: 'Elegant 5-bedroom residence with grand hallways, updated kitchen, and a tranquil backyard garden.',
    country: 'Malad, Mumbai',
    address: 'Chincholi Bunder Road, Malad West, Mumbai, Maharashtra 400064',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    image: House10,
    imageLg: House10Lg,
    agent: {
      image: Agent10,
      name: 'Nisha Deshmukh',
      phone: '9876543219',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'Saket Bungalow',
    description: 'A serene 7-bedroom bungalow tucked in nature with stylish interiors and a large open terrace.',
    country: 'New Delhi, Delhi',
    address: 'H-35, Saket Block J, Near Saket Metro Station, New Delhi, Delhi 110017',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    image: House11,
    imageLg: House11Lg,
    agent: {
      image: Agent11,
      name: 'Pooja Verma',
      phone: '9876543220',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'Jalandhar Creekside',
    description: 'Beautiful creek-facing property in Jalandhar featuring 4 luxurious bedrooms and a landscaped garden.',
    country: 'Jalandhar, Punjab',
    address: 'Urban Estate Phase 2, Jalandhar, Punjab 144022',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    image: House12,
    imageLg: House12Lg,
    agent: {
      image: Agent12,
      name: 'Harleen Kaur',
      phone: '9876543221',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'Evershine Villa',
    description: '5-bedroom heritage-style house in Malad with tasteful upgrades and eco-friendly features.',
    country: 'Malad, Mumbai',
    address: 'Evershine Nagar, Malad West, Mumbai, Maharashtra 400064',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    image: House1,
    imageLg: House1Lg,
    agent: {
      image: Agent1,
      name: 'Yusuf Khan',
      phone: '9876543222',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'Andheri Heights',
    description: 'Luxury 5-bedroom home in Mumbai with rooftop deck, gym space, and modern finishings.',
    country: 'Mumbai',
    address: 'Andheri West, Mumbai, Maharashtra 400053',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    image: House2,
    imageLg: House2Lg,
    agent: {
      image: Agent2,
      name: 'Reema Sinha',
      phone: '9876543223',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'Lalbagh Residency',
    description: 'Modern 4-bedroom home in Sitamarhi with open interiors and a spacious green backyard.',
    country: 'Sitamarhi, Bihar',
    address: 'House No. 22, Lalbagh Chowk, Near Kali Mandir, Sitamarhi, Bihar 843302',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    image: House3,
    imageLg: House3Lg,
    agent: {
      image: Agent3,
      name: 'Ashutosh Rana',
      phone: '9876543224',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Liberty Garden Flat',
    description: 'Peaceful 2BHK with balcony overlooking green spaces. Ideal for small families.',
    country: 'Malad, Mumbai',
    address: 'Liberty Garden Road, Near Inorbit Mall, Malad West, Mumbai, Maharashtra 400064',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    image: Apartment4,
    imageLg: Apartment4Lg,
    agent: {
      image: Agent4,
      name: 'Neha Jaiswal',
      phone: '9876543225',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    name: 'Green Park Heights',
    description: 'Spacious 3-bedroom flat with modular kitchen and 24x7 security. Near schools and metro.',
    country: 'New Delhi, Delhi',
    address: 'E-57, Green Park Main Market, Near Uphaar Cinema, Opposite Evergreen Sweet House, New Delhi, Delhi 110016',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    image: Apartment5,
    imageLg: Apartment5Lg,
    agent: {
      image: Agent5,
      name: 'Ankur Bhalla',
      phone: '9876543226',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    name: 'Shastri Nagar Homes',
    description: 'Elegant apartment with wooden flooring, modern interiors, and a peaceful ambiance, located in a prime area of Jalandhar.',
    country: 'Jalandhar, Punjab',
    address: 'Street No. 5, Shastri Nagar, Near Guru Nanak Hospital, Jalandhar, Punjab 144001',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    image: Apartment6,
    imageLg: Apartment6Lg,
    agent: {
      image: Agent6,
      name: 'Jasleen Chawla',
      phone: '9876543227',
    },
  },
];
