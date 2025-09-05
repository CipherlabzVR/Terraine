import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from 'react-router-dom';
import LogoTriangle from './LogoTriangle';

// --- Data Types ---
interface LinkItem {
  label: string;
  to: string;
}

// --- Service Data with Sub-Services ---
const servicesWithSubServices = [
    {
      service: "Consultancy Services",
      path: "/services/consultancy-services",
      subServices: [
        { label: "Smart Project Management", to: "/services/consultancy-services/smart-management" },
        { label: "Cost & Value Engineering Solutions", to: "/services/consultancy-services/cost-value" },
        { label: "BIM & Digital Twin Consultancy", to: "/services/consultancy-services/BIM" },
        { label: "Geotechnical & Soil Investigation", to: "/services/consultancy-services/Geotechnical" },
        { label: "Structural Engineering", to: "/services/consultancy-services/structural-engineering" },
        { label: "Architectural", to: "/services/consultancy-services/architectural" },
        { label: "Interior Design", to: "/services/consultancy-services/interior-design" },
        { label: "Material Consultancy", to: "/services/consultancy-services/material-consultancy" },
        { label: "MEP Engineering", to: "/services/consultancy-services/mep-engineering" },
        { label: "MEP & HVAC System Design", to: "/services/consultancy-services/mep-hvac" },
        { label: "Environmental & Sustainability Consulting", to: "/services/consultancy-services/sustainability-consulting" },
        { label: "Regulatory & Compliance Advisory", to: "/services/consultancy-services/regulatory-advisory" },
        { label: "Surveying & Digital Mapping", to: "/services/consultancy-services/surveying-mapping" },
        { label: "Construction Supervision & QA/QC", to: "/services/consultancy-services/construction-supervision" },
        { label: "Field and Laboratory Testing", to: "/services/consultancy-services/lab-testing" },
        { label: "Technical Reports", to: "/services/consultancy-services/technical-reports" }
      ]
    },
    {
      service: "Engineering Drawings",
      path: "/services/drawings",
      subServices: [
        { label: "Approval Drawing", to: "/services/drawings/approval-drawing" },
        { label: "Architectural", to: "/services/drawings/architectural" },
        { label: "Structural", to: "/services/drawings/structural" },
        { label: "Interior Design", to: "/services/drawings/interior-design" },
        { label: "MEP", to: "/services/drawings/mep" },
        { label: "Mechanical Drawing", to: "/services/drawings/mechanical" },
        { label: "Electrical Drawing", to: "/services/drawings/electrical" },
        { label: "Plumbing Drawing", to: "/services/drawings/plumbing" },
        { label: "HVAC", to: "/services/drawings/hvac" }
      ]
    },
    {
      service: "Construction",
      path: "/services/construction",
      subServices: [
        { label: "Residential Construction", to: "/services/construction/residential" },
        { label: "Commercial Construction", to: "/services/construction/commercial" },
        { label: "Industrial Construction", to: "/services/construction/industrial" },
        { label: "Infrastructure Construction", to: "/services/construction/infrastructure" },
        { label: "Road Construction", to: "/services/construction/road" },
        { label: "Timber Construction", to: "/services/construction/timber" },
        {label: "Precast Construction", to: "/services/construction/precast" },
        { label: "Steel Construction", to: "/services/construction/steel" },
        { label: "Cladding Engineering", to: "/services/construction/cladding-engineering" },
        { label: "Aluminum Fabrication", to: "/services/construction/aluminum-fabrication" },
        { label: "Subcontracting", to: "/services/construction/subcontracting" },
        { label: "Construction Materials", to: "/services/construction/construction-materials" }
      ]
    },
    {
      service: "Interior Design",
      path: "/services/interior-design",
      subServices: [
        { label: "Concept Development & Design", to: "/services/interior/concept-development" },
        { label: "Project Management & Procurement", to: "/services/interior/project-management" },
        { label: "Detailed Interior Drawings", to: "/services/interior/detailed-drawings" },
        { label: "Turnkey Interior Solutions", to: "/services/interior/turnkey-solutions" },
        { label: "Material & Color Consultancy", to: "/services/interior/material-color" },
        { label: "Renovation & Makeover Services", to: "/services/interior/renovation" },
        { label: "Furniture Selection", to: "/services/interior/furniture-selection" },
        { label: "Styling & DÃ©cor", to: "/services/interior/styling-decor" },
        { label: "Specialized Interior Services", to: "/services/interior/specialized" },
        { label: "Residential Interiors", to: "/services/interior/residential" },
        { label: "Commercial Interiors", to: "/services/interior/commercial" },
        { label: "Hospitality Interiors", to: "/services/interior/hospitality" },
        { label: "Healthcare Interiors", to: "/services/interior/healthcare" },
        { label: "Exhibition & Event Design", to: "/services/interior/exhibition-event" }
      ]
    },
    {
      service: "BIM",
      path: "/services/bim",
      subServices: [
        { label: "3D BIM – Digital Design & Modeling", to: "/services/bim/3d-bim" },
        { label: "4D BIM – Time (Scheduling)", to: "/services/bim/4d-bim" },
        { label: "5D BIM – Cost (Estimation)", to: "/services/bim/5d-bim" },
        { label: "6D BIM – Sustainability & Energy", to: "/services/bim/6d-bim" },
        { label: "7D BIM – Facility Management", to: "/services/bim/7d-bim" },
        { label: "8D BIM – Safety & Risk Management", to: "/services/bim/8d-bim" },
        { label: "9D BIM – Lean Construction & Productivity", to: "/services/bim/9d-bim" }
      ]
    },
    {
      service: "Digital Twin",
      path: "/services/digital-twin",
      subServices: [
        { label: "Real-Time Asset Monitoring", to: "/services/digital-twin/asset-monitoring" },
        { label: "Predictive & Preventive Maintenance", to: "/services/digital-twin/predictive-maintenance" },
        { label: "Energy & Resource Optimization", to: "/services/digital-twin/energy-optimization" },
        { label: "Facility Management & Space Utilization", to: "/services/digital-twin/facility-management" },
        { label: "Remote Operations & Virtual Control Centers", to: "/services/digital-twin/remote-operations" },
        { label: "Infrastructure Monitoring", to: "/services/digital-twin/infrastructure-monitoring" },
        { label: "Smart City & Urban Digital Twin Services", to: "/services/digital-twin/smart-city" },
        { label: "Emergency Preparedness & Disaster Simulation", to: "/services/digital-twin/disaster-simulation" },
        { label: "AR/VR-based Operations & Training", to: "/services/digital-twin/ar-vr-training" },
        { label: "Operational Analytics & Decision-Making", to: "/services/digital-twin/operational-analytics" }
      ]
    },
    {
      service: "Maintenance",
      path: "/services/maintenance",
      subServices: [
        { label: "Facility Management Services", to: "/services/maintenance/facility-management" },
        { label: "Preventive & Scheduled Maintenance", to: "/services/maintenance/preventive-maintenance" },
        { label: "Corrective & Breakdown Maintenance", to: "/services/maintenance/corrective-maintenance" },
        { label: "Electrical Maintenance", to: "/services/maintenance/electrical-maintenance" },
        { label: "HVAC & Mechanical Maintenance", to: "/services/maintenance/hvac-mechanical-maintenance" },
        { label: "Plumbing & Water Systems Maintenance", to: "/services/maintenance/plumbing-maintenance" },
        { label: "Fire Safety & Security Systems", to: "/services/maintenance/fire-safety-security" },
        { label: "Building Fabric & Structural Maintenance", to: "/services/maintenance/building-fabric-maintenance" },
        { label: "Annual Maintenance Contracts (AMC)", to: "/services/maintenance/annual-maintenance-contracts" },
        { label: "Predictive & Smart Maintenance", to: "/services/maintenance/predictive-smart-maintenance" }
      ]
    },
    {
      service: "AI Engineering",
      path: "/services/ai-engineering",
      subServices: [
        { label: "AI-Powered Design & Planning", to: "/services/ai/design-planning" },
        { label: "Predictive Analytics & Forecasting", to: "/services/ai/predictive-analytics" },
        { label: "Smart Construction & Robotics", to: "/services/ai/smart-construction" },
        { label: "Digital Twins with AI", to: "/services/ai/digital-twins-ai" },
        { label: "AI for BIM & Construction Management", to: "/services/ai/bim-construction" },
        { label: "Data Analytics & Insights", to: "/services/ai/data-analytics" },
        { label: "Custom AI Solutions & Consulting", to: "/services/ai/custom-solutions" }
      ]
    },
    {
      service: "Furniture Design & Supply",
      path: "/services/furniture-design",
      subServices: [
        { label: "Custom Furniture Design", to: "/services/furniture/custom-design" },
        { label: "Modular Furniture Solutions", to: "/services/furniture/modular" },
        { label: "Furniture Manufacturing & Fabrication", to: "/services/furniture/manufacturing" },
        { label: "Turnkey Interior & Furniture Fit-Outs", to: "/services/furniture/turnkey-fit-outs" },
        { label: "Commercial & Institutional Furniture", to: "/services/furniture/commercial" },
        { label: "Outdoor & Specialty Furniture", to: "/services/furniture/outdoor" },
        { label: "Furniture Supply & Sourcing", to: "/services/furniture/sourcing" },
        { label: "Restoration & Maintenance Services", to: "/services/furniture/restoration" },
        { label: "Smart & Innovative Furniture", to: "/services/furniture/smart" },
        { label: "Consultancy & Furniture Planning", to: "/services/furniture/planning" }
      ]
    },
    {
      service: "Material Consultancy",
      path: "/services/material-consultancy",
      subServices: [
        { label: "Material Selection & Specification", to: "/services/material/selection" },
        { label: "Material Testing & Certification", to: "/services/material/testing" },
        { label: "Best Material Price", to: "/services/material/pricing" },
        { label: "Sustainable & Green Material Consultancy", to: "/services/material/sustainable" },
        { label: "Concrete & Cementitious Material", to: "/services/material/concrete" },
        { label: "Steel & Metal Material", to: "/services/material/steel" },
        { label: "Polymer, Plastic & Composite Material", to: "/services/material/polymer" },
        { label: "Material Cost Analysis & Procurement", to: "/services/material/cost-analysis" },
        { label: "Failure Analysis & Troubleshooting", to: "/services/material/failure-analysis" },
        { label: "Innovative & Advanced Materials", to: "/services/material/innovative" },
        { label: "Fire & Safety Material", to: "/services/material/fire-safety" }
      ]
    },
    {
      service: "Import & Export",
      path: "/services/import-export",
      subServices: [
        { label: "Import of Construction Materials", to: "/services/import-export/construction-materials-import" },
        { label: "Export of Engineering Materials", to: "/services/import-export/engineering-materials-export" },
        { label: "Import of Advanced Technology", to: "/services/import-export/advanced-technology-import" },
        { label: "Machinery & Spare Parts Supply", to: "/services/import-export/machinery-spare-parts" },
        { label: "Interior & Furniture Imports", to: "/services/import-export/interior-furniture-import" },
        { label: "Raw Material Sourcing", to: "/services/import-export/raw-material-sourcing" },
        { label: "Logistics & Supply Chain Services", to: "/services/import-export/logistics-supply-chain" },
        { label: "Specialized Engineering Products", to: "/services/import-export/specialized-engineering-products" },
        { label: "Consulting & Procurement Support", to: "/services/import-export/consulting-procurement-support" },
        { label: "Turnkey Supply Solutions", to: "/services/import-export/turnkey-supply-solutions" }
      ]
    },
    {
      service: "Software Training",
      path: "/software-training",
      subServices: [
        { label: "Master Diploma in BIM (3D - 9D)", to: "/software-training/bim" },
        { label: "Master Diploma in Digital Twin ", to: "/software-training/digital-twin" },
        { label: "Master Diploma in Artificial Intelligence (AI) in Engineering", to: "/software-training/AIEngineerng" },
        { label: "Master Diploma in 3D Visualization with VR ", to: "/software-training/3d-visualization" },
        { label: "Master Diploma in Construction Project Management", to: "/software-training/construction-pm" },
        { label: "Master Diploma in Structural Design and Modelling", to: "/software-training/strcutural" },
        { label: "Master Diploma in MEP and HVAC Systems", to: "/software-training/mep-hvac" },
        { label: "Master Diploma in Interior Design", to: "/software-training/interior" },
        { label: "Master Diploma in Landscape Architecture", to: "/software-training/landscape" },
        { label: "Customized Professional Training ", to: "/software-training/customize-course" }
      ]
    }
];

// Data for other Dropdowns
const companyLinks: LinkItem[] = [
    { label: "About Us", to: "/about" },
    { label: "Why Terrene", to: "/Whyterrene" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Testimonial", to: "/testimonial" },
    { label: "Sitemap", to: "/sitemap" },
    { label: "Quality Policy", to: "/qualitypolicy" },
    { label: "FAQ", to: "/faq" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/inquiry" },
];

const softwareTrainingLinks: LinkItem[] = [
    { label: "Master Diploma in BIM (3D - 9D)", to: "/software-training/bim" },
    { label: "Master Diploma in Digital Twin ", to: "/software-training/digital-twin" },
    { label: "Master Diploma in Artificial Intelligence (AI) in Engineering", to: "/software-training/AIEngineerng" },
    { label: "Master Diploma in 3D Visualization with VR ", to: "/software-training/3d-visualization" },
    { label: "Master Diploma in Construction Project Management", to: "/software-training/construction-pm" },
    { label: "Master Diploma in Structural Design and Modelling", to: "/software-training/strcutural" },
    { label: "Master Diploma in MEP and HVAC Systems", to: "/software-training/mep-hvac" },
    { label: "Master Diploma in Interior Design", to: "/software-training/interior" },
    { label: "Master Diploma in Landscape Architecture", to: "/software-training/landscape" },
    { label: "Customized Professional Training ", to: "/software-training/customize-course" }

];

const packageLinks: LinkItem[] = [
    { label: "Residential Project Package", to: "/packages/residental" },
    { label: "Commercial Project Package", to: "/packages/commercial" },
    { label: "Infrastructure Project Package", to: "/packages/infrastructure" },
    { label: "Engineering Consulting Package", to: "/packages/consultant" },
    { label: "BIM & Digital Twin Integrated with AI Engineering Package", to: "/packages/bim-ai" },
    { label: "Software Training & Skills Training Package", to: "/packages/software" },
];

const projectLinks: LinkItem[] = [
    { label: "Ongoing Projects", to: "/ongoing-projects" },
    { label: "Completed Projects", to: "/completed-projects" },
];

interface HeaderProps {
  mode?: 'transparent' | 'solid';
  className?: string;
}

// --- Prop Types for Helper Components ---
interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

interface MobileAccordionProps {
  title: string;
  links: LinkItem[];
}

// --- NEW COMPONENT PROP TYPES ---
interface MobileNavAccordionLinkProps {
  title: string;
  to: string;
  children: React.ReactNode;
}

interface DropdownLinkProps {
  to: string;
  children: React.ReactNode;
}


const Header = ({ mode = 'transparent', className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(servicesWithSubServices[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navigate = useNavigate();

  const navTextClass = `text-white hover:text-cyan-500 bg-transparent hover:bg-transparent transition-colors px-3 py-2 text-md font-medium`;
  const mobileNavTextClass = `text-white`;
  
  const toggleAccordion = (accordionName: string) => {
    setOpenAccordion(prev => prev === accordionName ? null : accordionName);
  };

  const MobileNavLink = ({ to, children, className: extraClassName = '' }: MobileNavLinkProps) => (
    <Link to={to} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileNavTextClass} ${extraClassName}`} onClick={() => setIsMenuOpen(false)}>{children}</Link>
  );

  const MobileAccordion = ({ title, links }: MobileAccordionProps) => (
    <div className="border-b border-white/10 py-1">
      <button onClick={() => toggleAccordion(title)} className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${mobileNavTextClass}`}>
        <span>{title}</span>
        <ChevronDown className={`transform transition-transform duration-200 ${openAccordion === title ? 'rotate-180' : ''} w-5 h-5`} />
      </button>
      {openAccordion === title && (
        <div className="pl-4 mt-2 space-y-1">
            {links.map(link => (
              <Link key={link.to} to={link.to} className={`block px-3 py-2 rounded-md text-sm ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
            ))}
        </div>
      )}
    </div>
  );
  
  // --- NEW COMPONENT TO FIX THE BUG ---
  // This component separates the link from the toggle button.
  // Clicking the title navigates. Clicking the rest of the row toggles.
  const MobileNavAccordionLink = ({ title, to, children }: MobileNavAccordionLinkProps) => {
    const handleLinkClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevents the accordion from toggling when the link is clicked
      setIsMenuOpen(false); // Close the mobile menu on navigation
    };

    return (
      <div className="border-b border-white/10 py-1">
        <div
          className="w-full flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(title)}
        >
          <Link
            to={to}
            className={`px-3 py-2 rounded-md text-base font-medium ${mobileNavTextClass}`}
            onClick={handleLinkClick}
          >
            {title}
          </Link>
          <div className="p-2"> {/* Wrapper for better touch target */}
            <ChevronDown className={`transform transition-transform duration-200 ${openAccordion === title ? 'rotate-180' : ''} w-5 h-5`} />
          </div>
        </div>
        {openAccordion === title && (
          <div className="pl-4 mt-2 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  };


  const DropdownLink = ({ to, children }: DropdownLinkProps) => (
      <NavigationMenuLink asChild>
          <Link to={to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 hover:text-cyan-500 rounded transition-colors">
              {children}
          </Link>
      </NavigationMenuLink>
  );

  return (
    <header className={`${className} w-full right-0 ml-[-1vh]`}>
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="Go to Home" onClick={() => setIsMenuOpen(false)}>
            <LogoTriangle />
          </Link>

          <div className="flex-1 flex justify-between items-center bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-md rounded-xl px-6 py-2 shadow-lg border border-white/10 mb-[6vh] mr-[1vh] ml-[-1vh]">
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden xl:flex items-center">
                <NavigationMenuList>
                  <NavigationMenuItem><Link to="/" className={`${navTextClass} font-bold`}>HOME</Link></NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTextClass}>COMPANY</NavigationMenuTrigger>
                    <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                      <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                        {companyLinks.map(link => <DropdownLink key={link.to} to={link.to}>{link.label}</DropdownLink>)}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTextClass} onClick={() => navigate('/services-main')}>SERVICES</NavigationMenuTrigger>
                    <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                      <div className="w-screen max-w-5xl p-6 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 flex gap-6">
                        <ul className="w-1/3 space-y-1 border-r border-white/10 pr-4">
                          {servicesWithSubServices.map((service, idx) => (
                             <li className="group" key={idx} onMouseEnter={() => setHoveredService(service)}>
                               <Link to={service.path} className="flex justify-between items-center p-2 text-sm text-white hover:bg-white/10 hover:text-cyan-500 rounded transition-colors cursor-pointer">
                                 {service.service}
                               </Link>
                             </li>
                          ))}
                        </ul>
                        <div className="w-2/3">
                          {hoveredService && (
                           <div>
                            <ul className="space-y-1 grid grid-cols-2 gap-x-4">
                              {hoveredService.subServices.map((subService) => (
                                  <li key={subService.to}>
                                      <NavigationMenuLink asChild><Link to={subService.to} className="block px-3 py-2 text-sm text-white/80 hover:text-cyan-500 hover:bg-white/10 rounded transition-colors">{subService.label}</Link></NavigationMenuLink>
                                  </li>
                              ))}
                            </ul>
                          </div>
                          )}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTextClass}><NavigationMenuLink asChild><Link to="/software-training">SOFTWARE TRAINING</Link></NavigationMenuLink></NavigationMenuTrigger>
                    <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                      <div className="w-64 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                        {softwareTrainingLinks.map((link) => (<DropdownLink key={link.to} to={link.to}>{link.label}</DropdownLink>))}
                        <div className="border-t border-white/10 mt-2 pt-2"><DropdownLink to="/software-training">View More</DropdownLink></div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTextClass} onClick={() => navigate('/packages')}>PACKAGES</NavigationMenuTrigger>
                     <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                      <div className="w-55 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                        {packageLinks.map(link => <DropdownLink key={link.to} to={link.to}>{link.label}</DropdownLink>)}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTextClass}>PROJECTS</NavigationMenuTrigger>
                    <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                      <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                        {projectLinks.map(link => <DropdownLink key={link.to} to={link.to}>{link.label}</DropdownLink>)}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem><Link to="/sustainability" className={`${navTextClass} font-bold`}>SUSTAINABILITY</Link></NavigationMenuItem>
                  <NavigationMenuItem><Link to="/inquiry" className={`${navTextClass} font-bold`}>CONTACT</Link></NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center">
              <div className="xl:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={mobileNavTextClass}>
                  {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex">
            <Button className="bg-[#0050A0] w-40 h-14 text-white hover:bg-[#00A5E7]/90 px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg text-base flex items-center justify-center mb-[6vh] ml-[1vh] mr-[1vh]" asChild>
              <Link to="/inquiry">INQUIRY</Link>
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <nav className="xl:hidden mt-4 pb-4 border-t border-white/20 pt-2 bg-slate-900/90 backdrop-blur-md rounded-lg mx-4 px-4">
            <div className="border-b border-white/10 py-1"><MobileNavLink to="/">HOME</MobileNavLink></div>
            <MobileAccordion title="COMPANY" links={companyLinks} />
            
            {/* --- UPDATED USAGE --- */}
            <MobileNavAccordionLink title="SERVICES" to="/services-main">
                <div className="space-y-2 max-h-64 overflow-y-auto">
                {servicesWithSubServices.map(service => (
                    <div key={service.path}>
                        <Link to={service.path} className={`block px-3 py-2 rounded-md text-sm font-semibold ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{service.service}</Link>
                        <div className="pl-4 border-l border-white/20 ml-3">
                            {service.subServices.map(sub => (
                                <Link key={sub.to} to={sub.to} className={`block px-3 py-2 rounded-md text-xs ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{sub.label}</Link>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </MobileNavAccordionLink>
            
            <MobileNavAccordionLink title="SOFTWARE TRAINING" to="/software-training">
                {softwareTrainingLinks.map(link => (
                    <Link key={link.to} to={link.to} className={`block px-3 py-2 rounded-md text-sm ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                ))}
            </MobileNavAccordionLink>

            <MobileNavAccordionLink title="PACKAGES" to="/packages">
                {packageLinks.map(link => (
                    <Link key={link.to} to={link.to} className={`block px-3 py-2 rounded-md text-sm ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                ))}
            </MobileNavAccordionLink>
            
            <MobileAccordion title="PROJECTS" links={projectLinks} />
            <div className="border-b border-white/10 py-1"><MobileNavLink to="/sustainability">SUSTAINABILITY</MobileNavLink></div>
            <div className="py-1"><MobileNavLink to="/inquiry">CONTACT US</MobileNavLink></div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;