import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, X, Building, DollarSign, Calendar, MapPin, Maximize, Clock, User, ChevronsDown } from 'lucide-react';

// Assuming you have created this index file as previously instructed
import { projectImages } from '../assert/projects'; 


// --- Expanded Project Data for Modal ---
const allCompletedProjects = [
  {
    id: 1,
    title: "Sustainable Innovation Center",
    description: "This project comprised the design and construction of a state-of-the-art green building integrating solar technology, green roofs, and energy-efficient glass façades. The facility includes modern office spaces, collaborative areas, and research labs, with a strong focus on environmental sustainability and innovative architecture.",
    images: projectImages.slice(0, 4), 
    client: "GreenTech Developments Pvt Ltd",
    location: "Eco Park, Australia",
    projectType: "Sustainable Commercial Facility",
    area: "150,000 sqft",
    budget: "$45 Million",
    startDate: "2021-01-05",
    endDate: "2024-04-15",
  },
  {
    id: 2,
    title: "Floating Glass Pavilion",
    description: "This project features a cutting-edge floating residence with panoramic glass walls, blending modern architecture with serene waterside living. Designed for both luxury and sustainability, the pavilion offers unobstructed views, natural light optimization, and a seamless connection to its surrounding environment.",
    images: projectImages.slice(4, 8), 
    client: "Oceanview Living Ltd",
    location: "Lake Wakatipu, Queenstown, New Zealand",
    projectType: "Luxury Floating Residence",
    area: "3,500 sqft",
    budget: "$2.4 million",
    startDate: "2022-05-10",
    endDate: "2023-09-12",
  },
  {
    id: 3,
    title: "Minimalist Urban Residence",
    description: "This project showcases a contemporary two-story home defined by clean geometric lines, expansive glass façades, and a minimalist design philosophy. Built to maximize natural light and indoor-outdoor flow, the residence offers a tranquil living space in the heart of the city, combining elegance with functional urban living.",
    images: projectImages.slice(8, 12), 
    client: "Skyline Homes Pte Ltd",
    location: "Orchard Road, Singapore",
    projectType: "Luxury Urban Residence",
    area: "4,200 sqft",
    budget: "$3.2 million",
    startDate: "2021-10-05",
    endDate: "2023-02-18",
  },
  {
    id: 4,
    title: "Solar Green Tower",
    description: "This project delivers an eco-conscious high-rise that blends modern architecture with advanced sustainable technology. Featuring a full solar-panel façade, vertical gardens, and private balcony greenery, the building achieves exceptional energy efficiency while offering residents a vibrant and healthy urban lifestyle.",
    images: projectImages.slice(12, 16), 
    client: "Horizon Eco Developments Pty Ltd",
    location: "Melbourne, Australia",
    projectType: "Sustainable Residential Tower",
    area: "120,000 sqft",
    budget: "$33 Million",
    startDate: "2021-02-15",
    endDate: "2024-11-20",
  },
  {
    id: 5,
    title: "Modern Minimalist Residence",
    description: "This project showcases the design and construction of a contemporary two-story residence featuring clean lines, expansive glass façades, and warm vertical timber cladding. The layout emphasizes open-plan living, natural light, and seamless indoor-outdoor connectivity, delivering a sophisticated yet comfortable home.",
    images: projectImages.slice(16, 20),
    client: "Private Homeowner",
    location: "Colombo, Sri Lanka",
    projectType: "Luxury Residential",
    area: "4,500 sqft",
    budget: "$1.8 Million",
    startDate: "2022-07-15",
    endDate: "2024-02-20",
  },
  {
    id: 6,
    title: "Hillside Eco Retreat",
    description: "This project features a modern hillside residence designed to harmonize with its natural surroundings. Built with stone, glass, and sustainable materials, it integrates solar panels, energy-efficient systems, and expansive terraces to capture panoramic views. The design blends luxury with eco-conscious living.",
    images: projectImages.slice(20, 24),
    client: "Private Retreat Owner",
    location: "Queenstown, New Zealand",
    projectType: "Luxury Eco-Residential",
    area: "3,800 sqft",
    budget: "$2.4 Million",
    startDate: "2021-05-05",
    endDate: "2023-09-12",
  },
  {
    id: 7,
    title: "Luxury Poolside Villa",
    description: "This project delivers a contemporary three-story villa in Dubai, combining sleek modern lines with warm wooden accents and expansive glass façades. Featuring multiple balconies, open-plan interiors, and a private swimming pool, the design maximizes comfort, elegance, and resort-style living for an exclusive urban lifestyle.",
    images: projectImages.slice(24, 28),
    client: "Private Villa Owner",
    location: "Dubai, UAE",
    projectType: "Luxury Residential Villa",
    area: "6,200 sqft",
    budget: "$5.5 Million",
    startDate: "2022-02-02",
    endDate: "2023-11-28",
  },
  {
    id: 8,
    title: "Highrise Luxury Residence – Oman",
    description: "This landmark project features the development of a premium 25-storey residential tower with contemporary glass façades, spacious balconies, and green rooftop spaces. Designed to offer panoramic city views, it integrates high-end amenities including a fitness center, infinity pool, and smart home technology, redefining modern living in Oman.",
    images: projectImages.slice(28, 32),
    client: "Horizon Properties LLC",
    location: "Muscat, Oman",
    projectType: "Luxury Residential Tower",
    area: "320,000 sqft",
    budget: "$120 Million",
    startDate: "2021-05-15",
    endDate: "2024-09-10",
  },
  {
    id: 9,
    title: "Futuristic Cricket & Events Stadium – Dubai",
    description: "This iconic project features the construction of a next-generation, multi-purpose stadium designed to host world-class cricket matches and large-scale events. Boasting a capacity of 65,000 spectators, the venue integrates a sleek aerodynamic roof structure, advanced LED lighting systems, retractable seating, and cutting-edge broadcast technology. The design emphasizes both fan comfort and high-energy event experiences, making it a landmark destination in Dubai.",
    images: projectImages.slice(32, 36),
    client: "Emirates Sports Development Authority",
    location: "Dubai, UAE",
    projectType: "Multi-Purpose Sports Stadium",
    area: "65,000 Seats", // Using 'area' key for capacity
    budget: "$850 Million",
    startDate: "2020-02-12",
    endDate: "2024-11-20",
  },
  {
    id: 10,
    title: "Contemporary Corporate Office – Saudi Arabia",
    description: "This project showcases the development of a premium-grade corporate office building featuring a striking combination of sleek glass façades and minimalist concrete architecture. Designed with energy-efficient systems and integrated smart lighting, the building offers flexible office spaces, executive suites, and rooftop terraces, making it a modern hub for business excellence in Saudi Arabia.",
    images: projectImages.slice(36, 40),
    client: "Al Noor Business Group",
    location: "Riyadh, Saudi Arabia",
    projectType: "Corporate Office Building",
    area: "85,000 sqft",
    budget: "$28 Million",
    startDate: "2016-03-18",
    endDate: "2018-08-25",
  },
  {
    id: 11,
    title: "Advanced Learning Campus – Greenview College",
    description: "This project features the construction of a contemporary academic facility designed to foster innovative learning in a sustainable environment. The building includes lecture halls, digital labs, staff offices, and landscaped outdoor spaces. Floor-to-ceiling glazing and natural ventilation strategies were used to enhance energy efficiency and student well-being.",
    images: projectImages.slice(40, 44),
    client: "Greenview College Board",
    location: "Wellington, New Zealand",
    projectType: "Educational Facility",
    area: "95,000 sqft",
    budget: "$30 Million",
    startDate: "2017-07-01",
    endDate: "2020-02-28",
  },
  {
    id: 12,
    title: "Central Transit Hub – Singapore High-Speed Railway Station",
    description: "This landmark project includes the development of a futuristic high-speed railway terminal designed for seamless passenger flow and intermodal connectivity. The architectural form features aerodynamic curves, expansive glass façades, and intelligent lighting systems. The station supports high-speed rail links, underground transit integration, and premium amenities, setting a benchmark in transportation infrastructure.",
    images: projectImages.slice(44, 48),
    client: "Land Transport Authority (LTA), Singapore",
    location: "Downtown Core, Singapore",
    projectType: "Transportation Infrastructure",
    area: "180,000 sqft",
    budget: "$180 Million",
    startDate: "2020-05-10",
    endDate: "2023-12-12",
  },
  {
    id: 13,
    title: "Tropical Eco-Villa Retreat – Island Residence, Maldives",
    description: "This luxury villa project showcases tropical architecture with eco-conscious features including solar energy integration, natural stone finishes, and open-plan spaces. Designed for seamless indoor-outdoor living, the residence includes a private pool, shaded verandas, and lush native landscaping to create a serene and sustainable getaway.",
    images: projectImages.slice(48, 52),
    client: "Private Investor",
    location: "Maafushi Island, Maldives",
    projectType: "Luxury Residential Villa",
    area: "4,800 sqft",
    budget: "$1.8 Million",
    startDate: "2020-01-12",
    endDate: "2021-09-18",
  },
  {
    id: 14,
    title: "Doha Classical Architecture Pavilion",
    description: "This project involved the construction of a grand neoclassical-style facility featuring ornate columns, arched windows, and a symmetrical façade. The design merges timeless elegance with modern functionality, creating an inviting and prestigious presence. Lush landscaping with palm trees and floral beds enhances the approach, while the interior offers premium event and meeting spaces.",
    images: projectImages.slice(52, 56),
    client: "Qatar Real Estate Development Authority",
    location: "Doha, Qatar",
    projectType: "Cultural & Commercial Building",
    area: "85,000 sqft",
    budget: "$55 Million",
    startDate: "2019-11-15",
    endDate: "2022-02-20",
  },
  {
    id: 15,
    title: "Private Tropical Villa",
    description: "This project delivered a serene, contemporary tropical residence blending modern architecture with traditional Sri Lankan craftsmanship. Featuring open living spaces, hand-carved wooden doors, and a tranquil courtyard pool, the villa is designed for seamless indoor and outdoor living. Natural materials, lush landscaping, and shaded verandas create a peaceful retreat that embraces the island’s climate and culture.",
    images: projectImages.slice(56, 60),
    client: "Dr. Senanayake Samaraweera",
    location: "Galle, Sri Lanka",
    projectType: "Luxury Private Residence",
    area: "4,800 sqft",
    budget: "$800,000",
    startDate: "2021-04-05",
    endDate: "2022-09-12",
  },
  {
    id: 16,
    title: "Overwater Luxury Villas",
    description: "This project comprised the design and construction of exclusive overwater villas, blending modern tropical architecture with traditional Maldivian craftsmanship. Each villa features floor to ceiling glass walls, private infinity pools, and direct lagoon access. Sustainable design elements, including solar panels and natural ventilation, ensure minimal environmental impact while delivering unmatched comfort and privacy.",
    images: projectImages.slice(60, 64),
    client: "Island Escape Resorts Pvt Ltd",
    location: "North Malé Atoll, Maldives",
    projectType: "Luxury Resort Development",
    area: "22,000 sqft (combined)",
    budget: "$16 Million",
    startDate: "2013-08-10",
    endDate: "2015-12-18",
  },
  {
    id: 17,
    title: "Sustainable Innovation Center",
    description: "This project involved the design and construction of a state-of-the-art sustainable building that integrates green roofs, energy efficient glass, and landscaping to provide an ecofriendly environment. The building houses modern offices, collaborative spaces, and cutting-edge research labs. The project highlights environmental responsibility with a strong focus on energy saving features.",
    images: projectImages.slice(64, 68),
    client: "GreenTech Developments Pvt Ltd",
    location: "Mido Park, UK",
    projectType: "Sustainable Commercial Facility",
    area: "150,000 sqft",
    budget: "$55 Million",
    startDate: "2018-01-05",
    endDate: "2020-04-15",
  },
  {
    id: 18,
    title: "Mountain View Retreat",
    description: "This project involved the construction of a modern ecofriendly home designed to blend seamlessly with its natural surroundings. The home features large glass windows, wooden cladding, and stone accents, providing a cozy yet contemporary living space. The outdoor patio area creates a perfect environment for enjoying the beautiful mountain views, with sustainable landscaping that complements the building.",
    images: projectImages.slice(68, 72),
    client: "Alpine Homes Ltd.",
    location: "Queenstown, New Zealand",
    projectType: "Residential Retreat",
    area: "2,500 sqft",
    budget: "$600,000",
    startDate: "2020-03-15",
    endDate: "2021-08-01",
  },
  {
    id: 19,
    title: "Desert Oasis Villa",
    description: "This project involves the creation of a luxurious desert villa, designed to blend contemporary architecture with traditional desert aesthetics. The villa features large sliding glass doors that open to a private pool area, surrounded by lush landscaping and palm trees. The interior focuses on spacious, modern living areas with clean lines and neutral tones, perfect for relaxation and comfort in the desert climate.",
    images: projectImages.slice(72, 76),
    client: "Arabian Estates Ltd.",
    location: "Riyadh, Saudi Arabia",
    projectType: "Residential Villa",
    area: "4,000 sqft",
    budget: "$1.2 Million",
    startDate: "2022-06-01",
    endDate: "2023-09-30",
  },
  {
    id: 20,
    title: "Oceanfront Serenity Villa",
    description: "This project features a luxury beachfront villa designed for ultimate relaxation and seamless indoor-outdoor living. Large glass panels offer unobstructed views of the turquoise ocean, while natural wood tones and open terraces create a serene and welcoming environment. The design emphasizes simplicity, comfort, and harmony with the surrounding landscape.",
    images: projectImages.slice(76, 80),
    client: "Mr. Omar Al-Fahad",
    location: "Maldives",
    projectType: "Beachfront Residential Villa",
    area: "3,200 sqft",
    budget: "$2.7 Million",
    startDate: "2022-08-01",
    endDate: "2023-12-10",
  },
  {
    id: 21,
    title: "Aurora Skytower",
    description: "This project features a cutting-edge commercial skyscraper with a fluid sculptural form designed to reflect the sky and surrounding skyline. The tower includes premium office spaces, luxury lounges, and a panoramic sky garden at the crown. Its design blends innovation, elegance, and environmental performance with high performance glazing and advanced building systems.",
    images: projectImages.slice(80, 84),
    client: "EuropaTech Holdings",
    location: "Frankfurt, Germany",
    projectType: "Commercial High Rise",
    area: "950,000 sqft",
    budget: "$410 Million",
    startDate: "2021-10-01",
    endDate: "2024-03-12",
  },
  {
    id: 22,
    title: "Green Haven Residence",
    description: "This project features a modern sustainable home designed with passive cooling, solar panels, green roofing, and natural materials. The structure combines concrete, timber, and glass to create a seamless connection with the surrounding environment. Energy efficiency, daylight access, and native landscaping are core elements of the design approach, offering both comfort and environmental harmony.",
    images: projectImages.slice(84, 88),
    client: "Dr. Tāne Whitaker",
    location: "Rotorua, New Zealand",
    projectType: "Sustainable Residential Home",
    area: "2,800 sqft",
    budget: "$750,000",
    startDate: "2022-12-05",
    endDate: "2024-05-20",
  },
  {
    id: 23,
    title: "Royal Garden Residence",
    description: "This project showcases the development of an elegant luxury villa surrounded by a grand landscaped garden. The design features a symmetrical front façade with tall columns, natural stone finishes, and wide verandas. The garden includes meticulously maintained lawns, decorative fountains, and palm-lined pathways that create a serene and regal atmosphere.",
    // Note: Image indices are cycled to reuse existing photos
    images: projectImages.slice(88, 92),
    client: "Dr. Thilini Samrakodi",
    location: "Kurunegala, Sri Lanka",
    projectType: "Luxury Residential Villa",
    area: "8,500 sqft",
    budget: "$1.5 Million",
    startDate: "2021-02-01",
    endDate: "2023-05-20",
  },
  {
    id: 24,
    title: "Éclat Café",
    description: "A contemporary French café blending minimal elegance with warm hospitality. The exterior features rich wooden paneling accented by soft amber lighting, creating an inviting atmosphere for evening patrons. Large glass doors open into a cozy interior with modern pendant lights, sleek black seating, and neatly arranged shelving. The design focuses on clean lines, warm tones, and an intimate yet refined ambiance.",
    // Note: Image indices are cycled to reuse existing photos
    images: projectImages.slice(92, 96),
    client: "Maison Lumière Hospitality Group",
    location: "Lyon, France",
    projectType: "Boutique Café",
    area: "1,200 sqft",
    budget: "$550,000",
    startDate: "2022-03-10",
    endDate: "2023-09-15",
  },
  {
    id: 25,
    title: "Skyline Heights",
    description: "A sleek and modern high-rise residential tower designed to embody Dubai’s contemporary urban elegance. The façade features clean vertical lines, expansive glass panels, and private balconies for each unit, offering panoramic city views. The entrance is framed with warm lighting and minimalist landscaping, creating a refined and welcoming arrival experience. The design emphasizes symmetry, luxury, and functional aesthetics.",
    images: projectImages.slice(96, 100),
    client: "Horizon Real Estate Development",
    location: "Dubai, United Arab Emirates",
    projectType: "Residential High-Rise",
    area: "85,000 sqft",
    budget: "USD 45 Million",
    startDate: "2021-01-05",
    endDate: "2023-06-20",
  },
  {
    id: 26,
    title: "Elegant Bungalow Retreat",
    description: "This project features the design and construction of a luxurious hillside bungalow that blends timeless elegance with modern comforts. Nestled amidst scenic mountain views, the residence includes spacious living areas, premium finishes, and landscaped gardens, creating a serene retreat in the heart of nature.",
    images: projectImages.slice(100, 104),
    client: "Evergreen Estates Ltd.",
    location: "Nuwara Eliya, Sri Lanka",
    projectType: "Luxury Residential Bungalow",
    area: "8,500 sqft",
    budget: "$700,000",
    startDate: "2015-09-15",
    endDate: "2017-12-12",
  },
  {
    id: 27,
    title: "Futuristic Corporate Tower",
    description: "This project involved the creation of a cutting edge high rise corporate tower designed to embody modernity, efficiency, and innovation. Featuring a sleek glass façade, advanced smart building technologies, and premium grade interiors, the tower provides state of the art office spaces, conference facilities, and executive lounges, setting a new benchmark for commercial architecture in the region.",
    images: projectImages.slice(104, 108),
    client: "Horizon Global Developments",
    location: "Muscat, Oman",
    projectType: "High Rise Commercial Tower",
    area: "420,000 sqft",
    budget: "$210 Million",
    startDate: "2018-04-02",
    endDate: "2020-08-28",
  },
  {
    id: 28,
    title: "Futuristic Glass Dome Auditorium",
    description: "This landmark project features an innovative glass dome structure designed for cultural events, conferences, and performances. Its panoramic glass panels, integrated smart lighting, and advanced acoustic engineering create an immersive experience, while sustainable technologies ensure energy efficiency and environmental harmony.",
    images: projectImages.slice(108, 112),
    client: "City Cultural Development Authority",
    location: "Sydney, Australia",
    projectType: "Public Auditorium / Event Space",
    area: "85,000 sqft",
    budget: "$60 Million",
    startDate: "2020-08-12",
    endDate: "2023-05-05",
  },
  {
    id: 29,
    title: "Minimalist Full House Interior Design",
    description: "This project involved the complete interior design of a modern residence, embracing a minimalist aesthetic with clean lines, neutral tones, and functional layouts. Custom furniture, concealed storage, and natural lighting were strategically integrated to create a serene, spacious, and clutter-free living environment.",
    images: projectImages.slice(112, 116),
    client: "Mr. Dilan Perera",
    location: "Colombo, Sri Lanka",
    projectType: "Residential Interior Design",
    area: "3,200 sqft",
    budget: "$150,000 USD",
    startDate: "2018-01-10",
    endDate: "2018-08-18",
  },
  {
    id: 30,
    title: "Modern Farmhouse Style Interior Design",
    description: "This project transformed a countryside home into a modern farmhouse haven, blending rustic charm with contemporary elegance. Natural wood accents, exposed beams, and neutral palettes were paired with modern furnishings and open layouts to create a warm, welcoming space that balances style and comfort.",
    images: projectImages.slice(116, 120),
    client: "Mr. James Whitmore",
    location: "Canterbury, New Zealand",
    projectType: "Residential Interior Design",
    area: "2,800 sqft",
    budget: "$300,000 USD",
    startDate: "2018-06-06",
    endDate: "2019-03-14",
  },
  {
    id: 31,
    title: "Sleek Urban Full Interior Design – Sri Lanka",
    description: "This project involved the complete interior design of a premium urban residential space, combining modern minimalism with warm, luxurious finishes. Featuring open-plan layouts, high-quality materials, ambient lighting, and custom-built furniture, the design maximizes functionality while maintaining an elegant, sophisticated atmosphere. Every detail, from textures to color palettes, was carefully curated to reflect contemporary Sri Lankan urban living.",
    images: projectImages.slice(120, 124),
    client: "Mr. Aravind Perera",
    location: "Colombo, Sri Lanka",
    projectType: "Residential Interior Design",
    area: "4,500 sqft",
    budget: "$350,000",
    startDate: "2016-09-10",
    endDate: "2017-05-14",
  },
  {
    id: 32,
    title: "Scandinavian Style Interior Design – Elegance in Singapore",
    description: "This project brought to life a serene and minimalist Scandinavian-inspired interior, blending natural materials, soft neutral tones, and functional design. The open-concept layout features light oak finishes, clean-lined furniture, and ambient lighting that enhances the airy atmosphere. Every detail, from handcrafted cabinetry to curated décor, was tailored to reflect timeless elegance and modern comfort for urban living in Singapore.",
    images: projectImages.slice(124, 128),
    client: "Ms. Elina Tan",
    location: "Singapore",
    projectType: "Residential Interior Design",
    area: "3,200 sqft",
    budget: "$450,000",
    startDate: "2018-07-01",
    endDate: "2020-02-22",
  },
  {
    id: 33,
    title: "Japandi Style Full Interior Design – Elegance in Maldives",
    description: "This project embraced the harmonious fusion of Japanese minimalism and Scandinavian functionality, creating a serene yet luxurious living environment. Featuring natural wood accents, muted color palettes, clean lines, and organic textures, the design maximizes light and space while fostering a calming ambiance. Bespoke furniture, handcrafted details, and seamless indoor-outdoor integration capture the tranquil elegance of island living in the Maldives.",
    images: projectImages.slice(128, 132),
    client: "Mr. Rihan Moosa",
    location: "Malé, Maldives",
    projectType: "Residential Interior Design",
    area: "5,000 sqft",
    budget: "$2.0 Million",
    startDate: "2024-03-20",
    endDate: "2024-12-18",
  },
  {
    id: 34,
    title: "Tropical Beachfront Villa – Maldives",
    description: "This project involved the design and construction of a luxurious beachfront villa, seamlessly blending tropical architecture with modern amenities. Featuring expansive open spaces, floor-to-ceiling glass walls, infinity-edge pool, and natural timber finishes, the villa offers panoramic ocean views and direct beach access. Lush landscaping and outdoor living areas enhance the serene island atmosphere, creating a perfect private retreat in the Maldives.",
    images: projectImages.slice(132, 136),
    client: "Ms. Layla Ibrahim",
    location: "Baa Atoll, Maldives",
    projectType: "Luxury Residential Villa",
    area: "7,800 sqft",
    budget: "$2.8 Million",
    startDate: "2018-11-15",
    endDate: "2020-08-05",
  },
  {
    id: 35,
    title: "Luxurious Beach Resort – Maldives",
    description: "This project delivered the design and development of an ultra-luxury beachfront resort, blending Maldivian charm with world-class hospitality standards. The resort features overwater villas, private plunge pools, spa pavilions, and multiple fine-dining venues, all oriented to maximize breathtaking ocean views. Natural materials, airy interiors, and sustainable construction practices create an atmosphere of refined relaxation while preserving the island’s pristine beauty.",
    images: projectImages.slice(136, 140),
    client: "Mr. Zayan Rasheed",
    location: "North Malé Atoll, Maldives",
    projectType: "Luxury Beach Resort",
    area: "120,000 sqft",
    budget: "$55 Million",
    startDate: "2018-04-03",
    endDate: "2021-10-12",
  },
  {
    id: 36,
    title: "Elegant Luxury Interior Design – Australia",
    description: "This project transformed a contemporary residence into an opulent yet welcoming home, combining refined aesthetics with high-end craftsmanship. The design features grand open spaces, marble finishes, custom joinery, designer lighting, and a harmonious neutral palette accented with rich textures. Every element, from bespoke furniture to art curation, was meticulously planned to embody timeless elegance and modern Australian luxury living.",
    images: projectImages.slice(140, 144),
    client: "Mrs. Isabella Carter",
    location: "Sydney, Australia",
    projectType: "Residential Interior Design",
    area: "6,200 sqft",
    budget: "$1.4 Million",
    startDate: "2023-10-05",
    endDate: "2024-06-27",
  },
  {
    id: 37,
    title: "Modern Office Architecture",
    description: "A streamlined 4-storey office building designed with simplicity and efficiency in mind. The architecture focuses on clean lines, functional layouts, and ample natural lighting, creating an inviting workspace that balances modern aesthetics with practicality.",
    images: projectImages.slice(144, 148),
    client: "Al Noor Business Group",
    location: "Doha, Qatar",
    projectType: "Commercial Office Building",
    area: "45,000 sqft",
    budget: "$15 Million",
    startDate: "2021-03-10",
    endDate: "2023-08-05",
  },
  {
    id: 38,
    title: "Sleek Health Center",
    description: "A state-of-the-art healthcare facility blending cutting-edge medical technology with a serene, patient-focused environment. The design emphasizes clean lines, natural light, and calming interiors, fostering both functionality for staff and comfort for patients.",
    images: projectImages.slice(148, 152),
    client: "Bayer Medical Group",
    location: "Munich, Germany",
    projectType: "Healthcare Facility",
    area: "60,000 sqft",
    budget: "$22 Million",
    startDate: "2018-11-01",
    endDate: "2020-02-14",
  },
  {
    id: 39,
    title: "Ocean Crest Residence",
    description: "A luxurious coastal home in Galle with panoramic sea views and a fully bespoke interior. Designed to merge modern elegance with tropical charm, the residence offers seamless indoor-outdoor living, premium finishes, and custom-made furnishings.",
    images: projectImages.slice(152, 156),
    client: "Mr. & Mrs. Perera",
    location: "Galle, Sri Lanka",
    projectType: "Luxury Residential (Full Interior)",
    area: "12,500 sqft",
    budget: "$3.0 Million",
    startDate: "2021-03-10",
    endDate: "2023-08-18",
  },
  {
    id: 40,
    title: "Cozy Haven Residence",
    description: "A warm and inviting home interior designed with simplicity, comfort, and functionality at its core. Featuring soft color palettes, natural textures, and efficient space planning, the design creates a peaceful living environment perfect for family life.",
    images: projectImages.slice(156, 160),
    client: "Mr. & Mrs. Silva",
    location: "Kandy, Sri Lanka",
    projectType: "Residential Interior Design",
    area: "2,800 sqft",
    budget: "$140,000",
    startDate: "2015-01-15",
    endDate: "2016-05-22",
  },
  {
    id: 41,
    title: "Modern Luxury House Full Interior Design",
    description: "This project features a complete interior design of a modern luxury house, combining elegance with comfort. The design incorporates spacious living areas, sleek furniture, ambient lighting, and high-end finishes throughout. The use of natural materials and tasteful decor creates a warm and inviting atmosphere while maintaining a contemporary look.",
    images: projectImages.slice(160, 164),
    client: "Arabian Estates Ltd.",
    location: "Riyadh, Saudi Arabia",
    projectType: "Residential Luxury Interior Design",
    area: "4,000 sqft",
    budget: "$1.5 Million",
    startDate: "2017-06-01",
    endDate: "2018-05-30",
  },
  {
    id: 42,
    title: "Luxe Haven – 5-Star Hotel Interior Design, Colombo",
    description: "This project encompassed the complete interior design and furnishing of a luxury five-star hotel in central Colombo. Blending contemporary elegance with local cultural elements, the interiors include a grand lobby, signature restaurant, premium guest rooms, executive suites, and wellness areas. High-end materials, custom lighting, and art installations elevate the guest experience.",
    images: projectImages.slice(164, 168),
    client: "Imperial Hospitality Group",
    location: "Colombo 01, Sri Lanka",
    projectType: "Hospitality Interior Design",
    area: "120,000 sqft",
    budget: "$25 Million",
    startDate: "2022-10-01",
    endDate: "2024-03-25",
  },
  {
    id: 43,
    title: "The Grand Pavilion – Wedding Hall Interior Design",
    description: "This project involved the complete interior transformation of a premium wedding hall into a luxurious and adaptable event venue. The design features a statement chandelier centerpiece, intricately detailed ceiling work, acoustic paneling, ambient LED lighting, and flexible stage and seating arrangements to suit varying wedding themes and traditions.",
    images: projectImages.slice(168, 172),
    client: "Blossom Banquets Pvt Ltd",
    location: "Hyderabad, India",
    projectType: "Wedding Hall Interior Design",
    area: "25,000 sqft",
    budget: "$3.0 Million",
    startDate: "2020-08-10",
    endDate: "2021-05-15",
  },
  {
    id: 44,
    title: "Desert Pearl – Modern Luxury Residence, Oman",
    description: "This bespoke villa project blends modern minimalism with regional elegance, featuring clean architectural lines, high-performance glazing, and a palette of neutral stone and timber. The house includes an open-plan living space, private cinema, infinity pool, and automated smart home systems—all designed to maximize privacy, comfort, and desert views.",
    images: projectImages.slice(172, 176),
    client: "Al Zahra Family Estate",
    location: "Muscat, Oman",
    projectType: "Luxury Private Residence",
    area: "9,500 sqft",
    budget: "$3.3 Million",
    startDate: "2021-09-01",
    endDate: "2024-01-22",
  },
  {
    id: 45,
    title: "Vertex One – Pyramid-Inspired Corporate Architecture, Australia",
    description: "This iconic architectural project reimagines corporate design through a striking pyramid-inspired form that symbolizes innovation and structure. The building features a glass-and-steel terraced façade, sky-lit atriums, sustainable ventilation systems, and tiered office floors that optimize daylight and spatial hierarchy. It stands as a bold landmark in the Australian business landscape.",
    images: projectImages.slice(176, 180),
    client: "Vertex Global Holdings",
    location: "Melbourne, Victoria, Australia",
    projectType: "Corporate Headquarters Architecture",
    area: "160,000 sqft",
    budget: "$120 Million",
    startDate: "2021-02-14",
    endDate: "2024-07-05",
  },
  {
    id: 46,
    title: "NeoSpire Tower – Futuristic Urban Innovation High-Rise, Dubai",
    description: "A symbol of architectural progress, NeoSpire Tower redefines Dubai’s skyline with its dynamic parametric façade, vertical green zones, and integrated smart technologies. This 60-story mixed-use skyscraper includes premium offices, innovation labs, co-living apartments, sky lounges, and AI-managed infrastructure systems—merging urban luxury with sustainable design and future-ready functionality.",
    images: projectImages.slice(180, 184),
    client: "FutureForm Developments",
    location: "Business Bay, Dubai, UAE",
    projectType: "Futuristic High-Rise / Mixed-Use Development",
    area: "580,000 sqft",
    budget: "$400 Million",
    startDate: "2015-06-01",
    endDate: "2018-10-10",
  },
  {
    id: 47,
    title: "Azure Drift – Coastal Beach Retreat, Australia",
    description: "Nestled along Australia’s sunlit shoreline, this luxury beach retreat blends contemporary architecture with natural coastal elements. Featuring panoramic ocean views, timber-clad façades, breezy open-plan interiors, and a seamless indoor-outdoor flow, the residence includes an infinity pool, outdoor lounge decks, and sustainable cooling strategies designed for relaxed seaside living.",
    images: projectImages.slice(184, 188),
    client: "Azure Living Group",
    location: "Byron Bay, New South Wales, Australia",
    projectType: "Luxury Coastal Residence",
    area: "6,200 sqft",
    budget: "$2.8 Million",
    startDate: "2022-04-10",
    endDate: "2023-12-02",
  },
  {
    id: 48,
    title: "Zenith House – Japandi Style Villa, Singapore",
    description: "A harmonious fusion of Japanese minimalism and Scandinavian functionality, this Japandi-inspired villa offers refined simplicity and natural elegance. Clean architectural lines, warm wood tones, textured stone, and curated natural light shape a tranquil living experience. The home includes a meditation courtyard, open-concept interiors, and bespoke furniture crafted for mindfulness and flow.",
    images: projectImages.slice(188, 192),
    client: "Private Residence – Nakamura Family",
    location: "Bukit Timah, Singapore",
    projectType: "Japandi Style Private Villa",
    area: "7,800 sqft",
    budget: "$3.8 Million",
    startDate: "2019-02-01",
    endDate: "2020-06-16",
  },
  {
    id: 49,
    title: "Cloudstone Lodge – Modern Mountain Retreat, New Zealand",
    description: "Set against the breathtaking alpine backdrop of New Zealand’s Southern Alps, Cloudstone Lodge combines rugged natural textures with sleek modern architecture. The retreat features cantilevered structures, floor-to-ceiling glazing, geothermal heating, and locally sourced stone and timber. Designed as a luxury escape, it includes panoramic living spaces, a wellness spa, and secluded outdoor lounges.",
    images: projectImages.slice(192, 196),
    client: "Southern Peaks Development Ltd",
    location: "Queenstown, Otago, New Zealand",
    projectType: "Luxury Mountain Retreat",
    area: "6,500 sqft",
    budget: "$3.8 Million",
    startDate: "2022-03-01",
    endDate: "2024-08-04",
  },
  {
    id: 50,
    title: "Twilight Modern Mall",
    description: "This project delivered a striking contemporary retail complex in the heart of Dubai, designed to capture the city’s vibrant nightlife energy. The mall features expansive glass façades, dynamic LED lighting, and over eight floors of high-end retail, dining, and entertainment spaces. Landscaped terraces, luxury lounges, and panoramic city views create an unforgettable shopping and leisure experience, especially during twilight hours when the architecture is dramatically illuminated.",
    images: projectImages.slice(196, 200),
    client: "Emirates Urban Developments",
    location: "Downtown Dubai, UAE",
    projectType: "Luxury Retail & Entertainment Complex",
    area: "1,200,000 sqft",
    budget: "$700 Million",
    startDate: "2020-03-01",
    endDate: "2022-10-05",
  },
  {
    id: 51,
    title: "Sleek Twin-Tower Development",
    description: "This landmark project features two ultra-modern high-rise towers connected by a skybridge, redefining the skyline of Muscat. The design incorporates sleek glass façades, energy-efficient systems, and premium-grade materials to create a timeless architectural statement. The towers house luxury residences, corporate offices, and lifestyle amenities, offering panoramic views of the city and coastline.",
    images: projectImages.slice(200, 204),
    client: "Al Noor Properties LLC",
    location: "Muscat, Oman",
    projectType: "Mixed-Use High-Rise Development",
    area: "2,000,000 sqft",
    budget: "$1 Billion",
    startDate: "2016-02-15",
    endDate: "2020-08-22",
  },
  {
    id: 52,
    title: "Sustainable Architectural Complex",
    description: "This project showcases a pioneering approach to eco-friendly design, integrating advanced energy-efficient systems, green roofs, and renewable energy sources. The complex features open-plan workspaces, community areas, and landscaped courtyards that promote natural light and ventilation. Built with locally sourced, low-carbon materials, it sets a benchmark for modern sustainable architecture in Canada while achieving LEED Platinum certification.",
    images: projectImages.slice(204, 208),
    client: "Maple Green Developments Inc.",
    location: "Vancouver, Canada",
    projectType: "Sustainable Commercial Complex",
    area: "350,000 sqft",
    budget: "$150 Million",
    startDate: "2019-01-12",
    endDate: "2022-05-14",
  },
  {
    id: 53,
    title: "Sleek Corporate Façade",
    description: "This project involved the design and execution of a contemporary corporate building façade, characterized by clean lines, reflective glass panels, and precision-engineered cladding. The design maximizes natural light while enhancing energy efficiency, creating a striking visual identity for the client’s headquarters. The façade lighting system highlights the structure’s elegance both day and night, making it a standout in the city’s business district.",
    images: projectImages.slice(208, 212),
    client: "Al Fahad Investments",
    location: "Riyadh, Saudi Arabia",
    projectType: "Corporate Headquarters Façade Design",
    area: "180,000 sqft",
    budget: "$75 Million",
    startDate: "2018-09-07",
    endDate: "2020-03-28",
  },
  {
    id: 54,
    title: "Modern Farmhouse Residence",
    description: "This project brought to life a contemporary interpretation of the classic farmhouse, combining rustic charm with modern comforts. Featuring open-plan living, high vaulted ceilings, and expansive windows, the design seamlessly connects the indoors with the surrounding countryside. Natural timber, stone finishes, and a neutral color palette create warmth and elegance, while sustainable features such as rainwater harvesting and solar panels enhance efficiency.",
    images: projectImages.slice(212, 216),
    client: "Private Individual",
    location: "Hunter Valley, Australia",
    projectType: "Luxury Private Residence",
    area: "6,200 sqft",
    budget: "$2.8 Million",
    startDate: "2023-05-04",
    endDate: "2024-11-10",
  }
];

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: typeof allCompletedProjects[0], onClose: () => void }) => {
  const [activeImage, setActiveImage] = useState(project.images[0]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const DetailItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: React.ReactNode }) => (
    <div className="flex items-start">
      <Icon className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-1" />
      <div>
        <strong className="text-gray-400">{label}: </strong>
        <span className="text-white">{value}</span>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
    >
      <Button 
        onClick={onClose} 
        variant="ghost" 
        size="icon" 
        className="absolute top-4 right-4 text-white hover:text-cyan-300 z-[51] bg-black/50 rounded-full"
      >
        <X className="h-6 w-6" />
      </Button>

      <div 
        className="bg-[#0b2741] border border-white/10 rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
          <img src={activeImage} alt="Main project view" className="w-full h-60 sm:h-80 object-cover rounded-lg mb-4"/>
          <div className="grid grid-cols-4 gap-2">
            {project.images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setActiveImage(img)}
                className={`w-full h-16 sm:h-20 object-cover rounded-md cursor-pointer transition-all duration-200 ${activeImage === img ? 'ring-2 ring-cyan-400 scale-105' : 'opacity-60 hover:opacity-100'}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{project.title}</h2>
          {/* This line below now correctly displays the FULL description inside the modal */}
          <p className="text-gray-300 mb-6 text-sm sm:text-base">{project.description}</p>
          <div className="space-y-3 text-sm border-t border-white/20 pt-4">
            <DetailItem icon={MapPin} label="Location" value={project.location} />
            <DetailItem icon={User} label="Client" value={project.client} />
            <DetailItem icon={Calendar} label="Completion Date" value={formatDate(project.endDate)} />
            <DetailItem icon={Building} label="Project Type" value={project.projectType} />
            <DetailItem icon={Maximize} label="Area" value={project.area} />
            <DetailItem icon={Clock} label="Duration" value={<>{formatDate(project.startDate)} → {formatDate(project.endDate)}</>} />
            <DetailItem icon={DollarSign} label="Budget" value={project.budget} />
          </div>
          <div className="mt-auto pt-6 w-full">
            <Link to="/inquiry" className="w-full">
              <Button className="w-full bg-[#0050A0] text-white hover:bg-blue-700 font-semibold py-3 transition-all hover:scale-105">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


const CompletedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(8); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof allCompletedProjects[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const handleOpenModal = (project: typeof allCompletedProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const visibleProjects = allCompletedProjects.slice(0, visibleCount);

  return (
    <>
      <Header mode="transparent" className="fixed top-0 left-0 w-full z-40" />
      
      <div>
        <section className="relative min-h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/service.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold">COMPLETED PROJECTS</h1>
            <p className="mt-2 text-xl text-white max-w-3xl mx-auto">
              A showcase of our commitment to engineering excellence and innovation             </p>
          </div>
        </section>

        <main className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/about.mp4"
                />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {visibleProjects.map((project) => (
                    <div 
                    key={project.id} 
                    className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-cyan-500/20 hover:border-white/20"
                    >
                    <div className="overflow-hidden cursor-pointer" onClick={() => handleOpenModal(project)}>
                        <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold text-white mb-2 flex-grow">
                        {project.title}
                        </h2>
                        {/* This line shows a TRUNCATED summary on the main page card */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description.substring(0, 100)}...
                        </p>
                        <button onClick={() => handleOpenModal(project)} className="text-cyan-400 font-semibold text-sm mt-auto self-start hover:text-cyan-300">
                        read more &gt;&gt;
                        </button>
                    </div>
                    </div>
                ))}
                </div>

                {visibleCount < allCompletedProjects.length && (
                <div className="text-center mt-12 md:mt-16">
                    <Button
                        onClick={handleLoadMore}
                        variant="outline"
                        className="bg-[#0050A0] text-white hover:bg-blue-700 border-blue-600 px-8 py-3 text-base font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
                    >
                        LOAD MORE
                        <ChevronsDown className="ml-2 h-10 w-5" />
                    </Button>
                </div>
                )}
            </div>
        </main>

        <Footer />
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CompletedProjects;