import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Users, Laptop, Library, Clock, ArrowRight, Star, Briefcase, Plus, Phone, ArrowDownWideNarrow, ChevronLeft, ChevronRight, UserCircle2 } from 'lucide-react';

// --- Mock Data for Courses (unchanged) ---
const coursesData = [
   {
    title: 'Diploma in BIM',
    slug: 'bim',
    image: '/bim.jpg',
    duration: '16-20 Weeks',
    description: 'Master Building Information Modeling from fundamentals to advanced project coordination.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-blue-500/70 to-purple-600/70'
  },
  {
    title: 'Digital Twin Technology',
    slug: 'digital-twin',
    image: '/digital-twin.jpg',
    duration: '12 Weeks',
    description: 'Explore the creation and application of digital replicas for real-world assets and systems.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-teal-500/70 to-cyan-600/70'
  },
  {
    title: 'AI in Engineering',
    slug: 'AIEngineerng',
    image: '/ai-engineering.jpg',
    duration: '14 Weeks',
    description: 'Leverage artificial intelligence and machine learning to solve complex engineering challenges.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-amber-500/70 to-orange-600/70'
  },
  {
    title: '3D Architectural Visualization',
    slug: '3d-visualization',
    image: '/3d-visualization.jpeg',
    duration: '12 Weeks',
    description: 'Create stunning, photorealistic architectural renders with industry-standard software.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-sky-500/70 to-blue-600/70'
  },
  {
    title: 'Construction Project Management',
    slug: 'construction-pm',
    image: '/construction-management.jpg',
    duration: '18 Weeks',
    description: 'Gain essential skills in planning, executing, and overseeing construction projects.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-amber-500/70 to-orange-600/70'
  },
  {
    title: 'Structural Design and Modelling',
    slug: 'structural',
    image: '/showcase-1.jpg',
    duration: '15 Weeks',
    description: 'Learn the principles of structural engineering and advanced 3D modeling techniques.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-red-500/70 to-orange-600/70'
  },
  {
    title: 'MEP & HVAC Systems',
    slug: 'mep-hvac',
    image: '/mep.jpeg',
    duration: '14 Weeks',
    description: 'Understand the design and implementation of Mechanical, Electrical, and Plumbing systems.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-indigo-500/70 to-purple-600/70'
  },
  {
    title: 'Interior Design',
    slug: 'interior',
    image: '/showcase-4.jpeg',
    duration: '10 Weeks',
    description: 'Master the art of creating functional and aesthetic interior spaces from concept to completion.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-pink-500/70 to-rose-600/70'
  },
  {
    title: 'Landscape Architecture',
    slug: 'landscape',
    image: '/land.jpeg',
    duration: '12 Weeks',
    description: 'Learn to design and manage outdoor spaces, blending nature with modern environments.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-green-500/70 to-emerald-600/70'
  },
  {
    title: 'Customized Corporate Training',
    slug: 'customize-course',
    image: '/learn.jpg',
    duration: 'Custom',
    description: 'Tailored training programs designed to meet the specific needs of your organization.',
    feeDescription: 'Contact us for a custom quote and curriculum.',
    gradient: 'from-gray-500/70 to-slate-600/70'
  },
];

// --- Mock Data for Reviews (unchanged) ---
const reviewsData = [
    { name: 'Sanjana Perera', rating: 5, review: "The BIM course completely transformed how I approach project modeling. The hands-on exercises made learning engaging and practical.", course: 'Diploma in BIM' },
    { name: 'Nadeesha Fernando', rating: 5, review: "Digital Twin training gave me insights I never expected. Now I can monitor real-time data confidently in projects.", course: 'Digital Twin Technology' },
    { name: 'Alex Thompson', rating: 5, review: "AI in Engineering course exceeded my expectations. The combination of theory and real-world examples was perfect for advancing my skills.", course: 'AI in Engineering' },
    { name: 'Dilani Jayawardena', rating: 5, review: "The 3D Visualization course was amazing! I can now create realistic renders that impress clients and colleagues.", course: '3D Architectural Visualization' },
    { name: 'Tharindu Silva', rating: 5, review: "Construction Project Management training helped me organize projects efficiently. The templates and workflows are extremely practical.", course: 'Construction Project Management' },
    { name: 'Sophia Martinez', rating: 5, review: "Structural Design and Modelling course provided deep technical knowledge. The software exercises really prepared me for real-world projects.", course: 'Structural Design and Modelling' },
    { name: 'Kavindi Rathnayake', rating: 5, review: "MEP & HVAC Systems course was highly detailed. I now understand system integration and optimization confidently.", course: 'MEP & HVAC Systems' },
    { name: 'Ravindra Perera', rating: 5, review: "Interior Design training completely changed my approach to spaces. The 3D renders I created are portfolio-ready.", course: 'Interior Design' },
    { name: 'Liam O’Connor', rating: 5, review: "Landscape Architecture course opened my eyes to sustainable design. The combination of theory and practical work was excellent.", course: 'Landscape Architecture' },
    { name: 'Shanika De Silva', rating: 5, review: "BIM course gave me confidence in digital modeling. I can now collaborate seamlessly with project teams.", course: 'Diploma in BIM' },
    { name: 'Hiran Jayasuriya', rating: 5, review: "Digital Twin Technology course was eye-opening. I can simulate real-world scenarios effectively for my projects.", course: 'Digital Twin Technology' },
    { name: 'Emma Li', rating: 5, review: "AI in Engineering course provided practical insights into automation and predictive analytics. Truly career-enhancing.", course: 'AI in Engineering' },
    { name: 'Anushka Wijesinghe', rating: 5, review: "3D Visualization training was extremely helpful. I created renders that I am proud to showcase professionally.", course: '3D Architectural Visualization' },
    { name: 'Pubudu Ranasinghe', rating: 5, review: "Construction Project Management course gave me practical tools to manage timelines, budgets, and teams efficiently.", course: 'Construction Project Management' },
    { name: 'Carlos Mendes', rating: 5, review: "Structural Design and Modelling course exceeded my expectations. I learned advanced techniques I immediately applied at work.", course: 'Structural Design and Modelling' },
    { name: 'Sara Al-Rashid', rating: 5, review: "3D Visualization course helped me create realistic renders for my architectural projects. Truly career-enhancing!", course: '3D Architectural Visualization' },
    { name: 'Mohammed Al-Harbi', rating: 5, review: "Construction Project Management training gave me practical tools to manage timelines, budgets, and resources effectively.", course: 'Construction Project Management' },
    { name: 'Laila Al-Saidi', rating: 5, review: "Interior Design course boosted my creativity and technical skills. My portfolio now looks highly professional.", course: 'Interior Design' },
    { name: 'Dilani Senaratne', rating: 5, review: "MEP & HVAC Systems course helped me understand complex systems clearly. The practical exercises were invaluable.", course: 'MEP & HVAC Systems' },
    { name: 'Sandun Perera', rating: 5, review: "Interior Design training boosted my creativity and technical skills. I now design spaces confidently for clients.", course: 'Interior Design' },
    { name: 'Hannah Müller', rating: 5, review: "Landscape Architecture course was thorough and inspiring. I now apply sustainable solutions in my projects effectively.", course: 'Landscape Architecture' },
    { name: 'Kavindi Hewage', rating: 5, review: "BIM course taught me efficient modeling workflows. My project coordination skills have improved significantly.", course: 'Diploma in BIM' },
    { name: 'Thilan Fernando', rating: 5, review: "Digital Twin Technology course is amazing for real-time monitoring and predictive maintenance in engineering projects.", course: 'Digital Twin Technology' },
    { name: 'Rachel Adams', rating: 5, review: "AI in Engineering course was highly practical. I gained valuable skills in automation and data-driven solutions.", course: 'AI in Engineering' },
    { name: 'Ahmed Al-Farsi', rating: 5, review: "The BIM course was highly practical. I can now manage complex building models efficiently.", course: 'Diploma in BIM' },
    { name: 'Fatima Al-Mansoori', rating: 5, review: "Digital Twin Technology training gave me hands-on experience with real-time monitoring and predictive maintenance tools.", course: 'Digital Twin Technology' },
    { name: 'Hassan Al-Qahtani', rating: 5, review: "Structural Design and Modelling course exceeded expectations. The software exercises prepared me perfectly for professional projects.", course: 'Structural Design and Modelling' }
  ];
  
// --- Mock Data for Showcase (unchanged) ---
const showcaseData = [
    { student: 'A.H. Mohamed Fawaz', title: 'Modern Residential Building Design', image: '/student/1.png', category: 'Architecture', tools: 'Revit, Lumion' },
    { student: 'R. Karthik Kumar', title: 'Futuristic Corporate Headquarters Design', image: '/student/2.png', category: 'BIM', tools: 'Revit, Dynamo' },
    { student: 'P.R. Jayasinghe', title: 'Modern Urban Apartment Tower', image: '/student/3.png', category: 'Visualization', tools: '3Ds Max & V-Ray' },
    { student: 'T.D. Wijeratne', title: 'Modern Apartment MEP Drawing', image: '/student/4.png', category: 'MEP', tools: 'Revit MEP' },
    { student: 'M.A.M. Farook Zubair', title: 'Complex MEP Blueprint', image: '/student/5.png', category: 'MEP', tools: 'AutoCAD' },
    { student: 'A.F. Nafeesa', title: 'Modern Coastal Villa Design', image: '/student/6.png', category: 'Architecture', tools: 'Revit & Enscape' },
    { student: 'K. Arjun Vignesh', title: 'Corporate Office Design', image: '/student/7.png', category: 'Interior', tools: 'SketchUp & Lumion' },
    { student: 'K.K.D. Silva', title: 'Livingroom Interior Design', image: '/student/8.png', category: 'Interior', tools: '3Ds Max & V-Ray' },
    { student: 'K.H. Fernando', title: 'Urban Apartment Design', image: '/student/9.png', category: 'BIM', tools: 'Revit Architecture' },
    { student: 'V. Tharshini', title: 'Modern Family Home Design', image: '/student/10.png', category: 'Architecture', tools: 'AutoCAD, Revit' },
  ];


// --- Reviews Carousel Component (unchanged) ---
const ReviewsCarousel = ({ reviews }: { reviews: typeof reviewsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const reviewsToShow = 3;
  const extendedReviews = [...reviews, ...reviews.slice(0, reviewsToShow)];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      const newIndex = reviews.length;
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        const newTransform = `translateX(-${newIndex * (100 / reviewsToShow)}%)`;
        carouselRef.current.style.transform = newTransform;
        
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 700ms ease-in-out';
            setCurrentIndex(newIndex - 1);
          }
        }, 50);
      }
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= reviews.length) {
      const timer = setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = 'translateX(0%)';
          setCurrentIndex(0);
          
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'transform 700ms ease-in-out';
            }
          }, 50);
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, reviews.length]);
  
  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  
  const handleMouseLeave = () => {
    startTimer();
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex"
          style={{ 
            transition: 'transform 700ms ease-in-out',
            transform: `translateX(-${currentIndex * (100 / reviewsToShow)}%)`
          }}
        >
          {extendedReviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400 flex items-center justify-center bg-white/10 shrink-0">
                    <UserCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4 flex-grow">"{review.review}"</p>
                <p className="text-xs text-cyan-400 mt-auto">Completed: {review.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        <Button onClick={prevSlide} variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 border-none">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button onClick={nextSlide} variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 border-none">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

// --- Showcase Carousel Component (unchanged) ---
const ShowcaseCarousel = ({ items }: { items: typeof showcaseData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
  
    const itemsToShow = 4; 
    const extendedItems = [...items, ...items.slice(0, itemsToShow)];
  
    const nextSlide = () => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    };
  
    const prevSlide = () => {
      if (currentIndex === 0) {
        const newIndex = items.length;
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          const newTransform = `translateX(-${newIndex * (100 / itemsToShow)}%)`;
          carouselRef.current.style.transform = newTransform;
          
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'transform 700ms ease-in-out';
              setCurrentIndex(newIndex - 1);
            }
          }, 50);
        }
      } else {
        setCurrentIndex(prevIndex => prevIndex - 1);
      }
    };
    
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };
  
    useEffect(() => {
      startTimer();
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }, []);
  
    useEffect(() => {
      if (currentIndex >= items.length) {
        const timer = setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = 'translateX(0%)';
            setCurrentIndex(0);
            
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 700ms ease-in-out';
              }
            }, 50);
          }
        }, 700);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, items.length]);
    
    const handleMouseEnter = () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    
    const handleMouseLeave = () => {
      startTimer();
    };
  
    return (
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex"
            style={{ 
              transition: 'transform 700ms ease-in-out',
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
            }}
          >
            {extendedItems.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="relative rounded-lg overflow-hidden group shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-cyan-500/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.tools}</p>
                    <p className="text-xs text-white/70 mt-1">By: {item.student}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
            <Button onClick={prevSlide} variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 border-none">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button onClick={nextSlide} variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 border-none">
              <ChevronRight className="w-6 h-6" />
            </Button>
        </div>
      </div>
    );
  };


// --- SoftwareTraining Component ---
const SoftwareTraining: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header mode="transparent" className="fixed top-0 left-0 w-full z-40" />
      
      <div className="bg-[#0b2741]">
        {/* --- Hero Section (unchanged) --- */}
        <section className="relative min-h-screen flex items-center text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/sof.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/70"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-8 mt-[4vh]">
            <div className="grid grid-cols-1 items-center w-full min-h-screen">
              <div className="space-y-8 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                  Engineering Education
                  <br />
                  Powered by Real-World Expertise
                </h1>
                <p className="mt-6 text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Empowering engineers with cutting-edge skills, practical knowledge, and real-world tools to excel in modern industries                 </p>
                <div>
                  <a href="#courses">
                    <Button className="bg-[#0050A0] hover:bg-cyan-500/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg">
                      EXPLORE COURSES
                      <ArrowDownWideNarrow className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Why Choose Us Section (unchanged) --- */}
        <section className="py-16 md:py-12 relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/soft.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-full px-4 md:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Terrene Engineering Skills Training Division?</h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
                Skills Training division empowers professionals with future-ready digital skills, blending innovation, industry expertise, and practical learning to transform careers and projects with cutting-edge latest Architectural, Engineering, and Construction technology </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <Award className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
                <p className="text-white/70">Courses designed with real-world engineering applications and aligned with industry standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <Users className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
                <p className="text-white/70">Learn directly from experienced engineers and certified AEC professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <Laptop className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project-Based Learning</h3>
                <p className="text-white/70">Hands-on sessions with real project simulations that enhance employability and professional growth globally</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <Library className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Learning Options</h3>
                <p className="text-white/70">Training designed to fit diverse schedules (Online/ Physical) while supporting career advancement worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- In-Demand Skills Section ✅ MODIFIED --- */}
        <section id="courses" className="py-16 md:py-12 relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/cad.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-full px-4 md:px-8 relative z-10">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">LEARN THE MOST IN-DEMAND SKILLS</h2>
              <p className="max-w-2xl text-white/80 leading-relaxed">
                Gain future-ready expertise with our specialized courses designed to equip engineers, architects, and professionals with practical knowledge, digital innovation, and industry-focused tools to excel in today’s competitive engineering landscape </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData.map((course, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-900 rounded-xl overflow-hidden transform transition-transform duration-300 shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col ${
                    index === coursesData.length - 1 && coursesData.length % 3 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Link to={`/software-training/${course.slug}`}>
                    <div className="relative overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-80 object-cover transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-80 transition-opacity`}></div>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                        <Library className="w-6 h-6 text-cyan-700" />
                      </div>
                      <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 bg-slate-800 flex flex-col flex-grow">
                    <p className="text-white/70 mb-4 text-sm flex-grow">{course.description}</p>
                    <div className="border-t border-white/20 pt-4 mt-auto">
                      <p className="text-xs text-white/60 italic mb-4">{course.feeDescription}</p>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-2 text-white/80">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{course.duration}</span>
                        </div>
                        <Link 
                          to={`/software-training/${course.slug}`} 
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-xs"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* --- What Our Students Say Section (unchanged) --- */}
        <section className="py-16 md:py-12 relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/eng.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-full px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">WHAT OUR STUDENTS SAY</h2>
              <div className="flex justify-center items-center space-x-2 text-yellow-400">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <span className="text-white/80 ml-2 text-lg">5.0/5.0 from {reviewsData.length} reviews</span>
              </div>
            </div>

            <ReviewsCarousel reviews={reviewsData} />
            
            <div className="text-center mt-16">
              <Link to="/success-stories">
                <Button className="bg-[#0050A0] hover:bg-cyan-600 text-white px-8 py-3 font-semibold rounded-full text-lg transition-all hover:scale-105 shadow-lg">
                  READ MORE SUCCESS STORIES
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- Student Showcase Section (unchanged) --- */}
        <section className="py-16 md:py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/car.mp4"
            />
            <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-full px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">STUDENT SHOWCASE</h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-white/80 leading-relaxed">
                Discover real student projects showcasing creativity, innovation, and practical skills
              </p>
            </div>
            
            <ShowcaseCarousel items={showcaseData} />

            <div className="text-center mt-16 flex justify-center items-center space-x-4">
              <Link to="/portfolio">
                <Button className="bg-[#0050A0] hover:bg-cyan-500 text-white px-8 py-3 font-semibold rounded-full text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center">
                  VIEW PORTFOLIO
                  <Briefcase className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="text-white bg-cyan-500 border-white/50 hover:bg-white/10 hover:text-white px-8 py-3 font-semibold rounded-full text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center">
                  JOIN NEXT BATCH
                  <Plus className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- CTA Section (unchanged) --- */}
        <section className="py-16 w-full px-4 md:px-8">
                                   <div className="bg-gradient-to-r from-cyan-700 to-[#0b2741] rounded-2xl shadow-2xl p-12 text-center text-white">
                                       <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                           Ready to Transform Your Career?
                                       </h2>
                                       <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                                           Enroll today and Master Future-ready AEC skills with Terrene Engineering Skills Training division </p>
                                       <div className="flex justify-center items-center gap-4 flex-wrap">
                                           <Link to="/contact">
                                               <Button size="lg" className="bg-[#0050A0] text-white text-md font-bold w-[35vh] hover:bg-cyan-500 transition-colors px-6">
                                                   ENROLL NOW
                                                   <Plus className="w-5 h-5 ml-2" />
                                               </Button>
                                           </Link>
                                           <Link to="/completed-projects">
                                               <Button size="lg"  className="bg-cyan-500 text-md text-white hover:bg-white/10 transition-colors px-6 w-[35vh]">
                                                   SPEAK TO AN ADVISOR
                                                   <Phone className="w-5 h-5 ml-2" />
                                               </Button>
                                           </Link>
                                       </div>
                                   </div>
                               </section>

        <Footer />
      </div>
    </>
  );
};

export default SoftwareTraining;