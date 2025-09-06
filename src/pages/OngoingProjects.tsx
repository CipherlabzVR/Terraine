import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, X, Building, DollarSign, Calendar, MapPin, User, ChevronsDown } from 'lucide-react';

// --- Direct Image Imports for Ongoing Projects ---
import project1Image from '@/assert/projects/1.jpg';
import project2Image from '@/assert/projects/2.jpg';
import project3Image from '@/assert/projects/3.jpg';
import project4Image from '@/assert/projects/4.jpg';
import project5Image from '@/assert/projects/5.jpg';
import project6Image from '@/assert/projects/6.jpg';
import project7Image from '@/assert/projects/7.jpg';
import project8Image from '@/assert/projects/8.jpg';
import project9Image from '@/assert/projects/9.jpg';
import project10Image from '@/assert/projects/10.jpg';
import project11Image from '@/assert/projects/11.jpg';
import project12Image from '@/assert/projects/12.jpg';
import project13Image from '@/assert/projects/13.png';
import project14Image from '@/assert/projects/14.png';
import project15Image from '@/assert/projects/15.jpg';
import project16Image from '@/assert/projects/16.png';
import project17Image from '@/assert/projects/17.jpg';
import project18Image from '@/assert/projects/18.jpg';
import project19Image from '@/assert/projects/19.png';
import project20Image from '@/assert/projects/20.png';
import project21Image from '@/assert/projects/21.png';
import project22Image from '@/assert/projects/22.png';
import project23Image from '@/assert/projects/23.png';


// --- New Project Data ---
const allProjects = [
  {
    id: 1,
    title: "Desert Pearl Residence",
    description: "A modern sanctuary in the heart of the desert with shimmering white facades. Large shaded terraces create cool outdoor lounges. Floor to ceiling glass panels reveal breathtaking dune vistas. Interiors combine warm woods with polished marble. The private courtyard features a reflective water pool. It is a perfect blend of modern design and desert heritage.",
    images: [project1Image],
    client: "Desert Horizon Estates",
    location: "Abu Dhabi, UAE",
    budget: "$8.5 Million",
    startDate: "2024-07-01",
  },
  {
    id: 2,
    title: "Harbour View Penthouse",
    description: "Set above Sydney Harbour, this home offers endless water views. Open living areas flow toward an expansive outdoor terrace. The infinity pool reflects both the sky and harbour lights. Interiors feature custom Australian timber and Italian stone. Sliding glass walls create a seamless indoor outdoor experience. Every space celebrates the coastal urban lifestyle.",
    images: [project2Image],
    client: "Pacific Lifestyle Group",
    location: "Sydney, Australia",
    budget: "$5.0 Million",
    startDate: "2025-03-10",
  },
  {
    id: 3,
    title: "Lakefront Serenity Lodge",
    description: "Nestled beside a crystal-clear New Zealand lake. This lodge combines rustic charm with contemporary elegance. Double height windows frame snowcapped peaks in the distance. Natural stone fireplaces create warmth during winter nights. The outdoor deck extends directly over the water. A true retreat for peace and reflection.",
    images: [project3Image],
    client: "Southern Escape Resorts",
    location: "Queenstown, New Zealand",
    budget: "$3.1 Million",
    startDate: "2024-06-01",
  },
  {
    id: 4,
    title: "Black Forest Modern Estate",
    description: "Surrounded by towering pines and fresh mountain air. The home’s glass façade captures forest views in every direction. Interior design blends dark wood with minimalist white tones. A central atrium floods the space with natural light. Outdoor living includes a fire pit and heated spa. It offers a tranquil lifestyle in the German countryside.",
    images: [project4Image],
    client: "Alpine Living GmbH",
    location: "Baden-Württemberg, Germany",
    budget: "$4.3 Million",
    startDate: "2024-02-01",
  },
  {
    id: 5,
    title: "Overwater Horizon Retreat",
    description: "Positioned above turquoise waters in the Maldives. This villa features glass floor panels for marine viewing. Outdoor decks connect to a private infinity pool. The interiors use light woods and airy fabrics. Large sliding doors invite sea breezes inside. Every moment is surrounded by ocean beauty.",
    images: [project5Image],
    client: "Ocean Pearl Resorts",
    location: "Baa Atoll, Maldives",
    budget: "$2.5 Million",
    startDate: "2024-10-01",
  },
  {
    id: 6,
    title: "Cinnamon Coast Villa",
    description: "Situated along the golden beaches of Sri Lanka. The villa uses open pavilions for a breezy atmosphere. Handcrafted teak furniture adds warmth and character. Palm lined gardens lead to the shoreline. Infinity pool edges meet the ocean horizon. Perfect for both relaxation and entertaining.",
    images: [project6Image],
    client: "Island Luxe Developments",
    location: "Galle, Sri Lanka",
    budget: "$2.1 Million",
    startDate: "2024-05-01",
  },
  {
    id: 7,
    title: "Royal Garden Palace",
    description: "A majestic home surrounded by landscaped Mughal style gardens. White stone arches and domes recall India’s rich heritage. Interiors are filled with intricate inlay and luxurious fabrics. Expansive courtyards host evening gatherings under the stars. Private fountains create a peaceful soundscape. It is both opulent and deeply rooted in tradition.",
    images: [project7Image],
    client: "Heritage Estates Pvt Ltd",
    location: "Jaipur, India",
    budget: "$5.8 Million",
    startDate: "2024-08-01",
  },
  {
    id: 8,
    title: "Mountain View Majlis",
    description: "Perched high above the valleys of Oman. This residence combines local stone with modern design. Terraces offer uninterrupted mountain panoramas. Interiors feature handwoven rugs and carved wooden screens. The central courtyard is shaded and breezy. A perfect escape into nature and culture.",
    images: [project8Image],
    client: "Al Shams Developments",
    location: "Jebel Akhdar, Oman",
    budget: "$3.8 Million",
    startDate: "2025-02-01",
  },
  {
    id: 9,
    title: "Marina Skyline Penthouse",
    description: "Set above Dubai Marina with a 270 degree city view. Floor to ceiling glass walls flood the space with light. Private rooftop pool offers an unmatched sunset experience. Italian marble floors flow through open living areas. Custom lighting enhances the glamorous interiors. A statement of urban luxury in the UAE.",
    images: [project9Image],
    client: "Skyline Properties LLC",
    location: "Dubai, UAE",
    budget: "$6.5 Million",
    startDate: "2025-05-01",
  },
  {
    id: 10,
    title: "Coral Sands Beach Estate",
    description: "This home rests directly on Australia’s Sunshine Coast. The beachfront lawn merges with golden sands. Vast sliding doors erase the boundary to the outdoors. Natural stone and timber create an earthy palette. An infinity pool glistens beside the ocean edge. Designed for barefoot luxury living.",
    images: [project10Image],
    client: "Coastal Living Group",
    location: "Noosa, Australia",
    budget: "$4.2 Million",
    startDate: "2024-04-15",
  },
  {
    id: 11,
    title: "Alpine Glass Chalet",
    description: "High in New Zealand’s Southern Alps lies this transparent haven. Walls of glass frame ever changing seasonal views. Interiors are wrapped in warm oak and wool textiles. A stone fireplace anchors the main living space. The outdoor spa offers panoramic stargazing. It blends alpine charm with modern precision.",
    images: [project11Image],
    client: "Summit Retreats Ltd",
    location: "Wanaka, New Zealand",
    budget: "$2.6 Million",
    startDate: "2024-05-05",
  },
  {
    id: 12,
    title: "Riverfront Art Villa",
    description: "Set on the banks of a German river in a cultural district. Architecture is inspired by modern art galleries. Expansive walls showcase curated private collections. Minimalist interiors highlight views over the water. Outdoor terraces connect to landscaped sculpture gardens. A home that is both residence and gallery.",
    images: [project12Image],
    client: "ArtHaus Developments GmbH",
    location: "Düsseldorf, Germany",
    budget: "$4.4 Million",
    startDate: "2025-01-01",
  },
  {
    id: 13,
    title: "Lagoon Whisper Retreat",
    description: "Hidden among Maldivian palm groves beside a calm lagoon. Private decks lead to clear shallow waters. Soft neutral interiors mirror the sandy surroundings. Outdoor showers offer a tropical bathing experience. Every suite opens directly onto the beach. Designed for ultimate privacy and seclusion.",
    images: [project13Image],
    client: "Serenity Resorts",
    location: "Ari Atoll, Maldives",
    budget: "$1.8 Million",
    startDate: "2024-09-10",
  },
  {
    id: 14,
    title: "Cinnamon Hill Manor",
    description: "Overlooking Sri Lanka’s lush spice plantations. Colonial style verandas wrap around the residence. Interiors showcase antique furnishings and patterned tiles. Cool breezes flow through high ceilinged rooms. Gardens are scented with cinnamon and frangipani. The estate exudes timeless tropical elegance.",
    images: [project14Image],
    client: "Spice Heritage Homes",
    location: "Kandy, Sri Lanka",
    budget: "$2.2 Million",
    startDate: "2024-05-15",
  },
  {
    id: 15,
    title: "Horizon Tower Corporate Hub",
    description: "Soaring glass and steel structure in the heart of Dubai’s business district. State-of-the-art offices with smart automation systems. Sustainability features include solar facades and greywater recycling. Panoramic meeting rooms overlook the city skyline. Dedicated wellness floors and executive lounges. A landmark redefining corporate luxury.",
    images: [project15Image],
    client: "Gulf Capital Developments",
    location: "Dubai, UAE",
    budget: "$220 Million",
    startDate: "2024-02-12",
  },
  {
    id: 16,
    title: "Southern Cross Business Tower",
    description: "Rising in Sydney’s waterfront financial district. Features energy-efficient curtain walls and wind turbines. Premium coworking and executive suites with harbor views. Indoor gardens provide natural ventilation and greenery. Conference floors equipped with immersive tech. A showcase of Australia’s corporate future.",
    images: [project16Image],
    client: "Southern Cross Real Estate Group",
    location: "Sydney, Australia",
    budget: "$225 Million",
    startDate: "2024-04-02",
  },
  {
    id: 17,
    title: "Harbour View Corporate Plaza",
    description: "Skyline-defining tower along the Auckland waterfront. Open atrium lobby with sculptural glass elevators. Smart climate controls for efficient energy use. Sky lounges offer sweeping views of Waitematā Harbour. Retail and dining spaces integrated at ground level. A symbol of New Zealand’s business growth.",
    images: [project17Image],
    client: "Pacific Horizon Developments",
    location: "Auckland, New Zealand",
    budget: "$190 Million",
    startDate: "2024-06-01",
  },
  {
    id: 18,
    title: "Palm Breeze Luxury Villa",
    description: "Waterfront estate on a secluded lagoon in the Maldives. Contemporary design with open floor plans and skylights. Infinity pool blends seamlessly into the horizon. Custom-made furniture crafted from sustainable teak. Private jetty for yacht access. Luxury island living at its finest.",
    images: [project18Image],
    client: "Coral Reef Estates",
    location: "North Male Atoll, Maldives",
    budget: "$4.5 Million",
    startDate: "2024-04-12",
  },
  {
    id: 19,
    title: "Ocean Crest Luxury House",
    description: "Set along Sri Lanka’s southern coast. Minimalist design with glass walls for panoramic ocean views. Infinity pool and sun decks perfect for entertaining. Natural stone and hardwood interiors. Outdoor dining pavilion with sea breeze ambiance. A private retreat with unmatched elegance.",
    images: [project19Image],
    client: "Island Luxe Properties",
    location: "Galle, Sri Lanka",
    budget: "$2.6 Million",
    startDate: "2024-01-15",
  },
  {
    id: 20,
    title: "Skyline Grove Residence",
    description: "Hilltop home overlooking the Indian countryside. Clean modern lines with landscaped rooftop gardens. Floor-to-ceiling windows maximize light and views.Infinity lap pool and open-plan living areas. Custom interiors feature local artisan work. A blend of luxury and cultural elegance.",
    images: [project20Image],
    client: "Horizon Estates Pvt Ltd",
    location: "Pune, India",
    budget: "$2.7 Million",
    startDate: "2024-04-22",
  },
  {
    id: 21,
    title: "Grand Orchid Wedding Hall Interior",
    description: "Lavish interior inspired by Mughal and modern fusion. Crystal chandeliers illuminate a domed ceiling with gold accents. Custom stage design for ceremonies and events. Integrated lighting and sound control systems. Spacious banquet layout for over 800 guests. An unforgettable venue for life’s biggest moments.",
    images: [project21Image],
    client: "Royal Events Group",
    location: "Muscat, Oman",
    budget: "$6.2 Million",
    startDate: "2024-02-01",
  },
  {
    id: 22,
    title: "Quantum Edge Research Center",
    description: "Cutting-edge high-tech facility in Germany’s innovation hub. Angular glass facade with integrated solar panels. Flexible lab spaces with clean-room capabilities. Green roofs and rainwater harvesting systems. Collaborative zones with immersive VR environments. A flagship of technological advancement.",
    images: [project22Image],
    client: "FutureTech Innovations GmbH",
    location: "Munich, Germany",
    budget: "$160 Million",
    startDate: "2024-03-18",
  },
  {
    id: 23,
    title: "Coral Bay Cultural Pavilion",
    description: "Architectural landmark celebrating Maldivian heritage. Wave-inspired roof structure crafted from timber and steel. Exhibition spaces showcase local art and history. Amphitheater for cultural performances. Surrounded by tropical gardens and reflecting pools. A gathering place for community and visitors alike.",
    images: [project23Image],
    client: "Island Culture Foundation",
    location: "Hulhumalé, Maldives",
    budget: "$9.7 Million",
    startDate: "2024-04-06",
  }
];

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: typeof allProjects[0], onClose: () => void }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
          <img src={project.images[0]} alt="Main project view" className="w-full h-auto object-cover rounded-lg mb-4"/>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">{project.description}</p>
          <div className="space-y-3 text-sm border-t border-white/20 pt-4">
            <DetailItem icon={User} label="Client" value={project.client} />
            <DetailItem icon={MapPin} label="Location" value={project.location} />
            <DetailItem icon={DollarSign} label="Budget" value={project.budget} />
            <DetailItem icon={Calendar} label="Start Date" value={new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
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


const OngoingProjects = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const handleOpenModal = (project: typeof allProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <>
      <Header mode="transparent" className="fixed top-0 left-0 w-full z-40" />
      
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/pro.mp4"
          />
          <div className="absolute inset-0 bg-[#0b2741]/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold">ONGOING PROJECTS</h1>
          <p className="mt-2 text-xl text-white max-w-3xl mx-auto">
            Explore our current projects that are shaping the future of urban development           </p>
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
                  src="/pro.mp4"
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

              {visibleCount < allProjects.length && (
              <div className="text-center mt-12 md:mt-16">
                  <Button
                      onClick={handleLoadMore}
                      variant="outline"
                      className="bg-[#0050A0] text-white hover:bg-blue-700 border-blue-600 px-8 py-3 text-base font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
                  >
                      LOAD MORE
                      <ChevronsDown className="ml-2 h-5 w-5" />
                  </Button>
              </div>
              )}
          </div>
      </main>

      <Footer />

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default OngoingProjects;