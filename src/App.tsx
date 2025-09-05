import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import StructuralDesign from "./pages/StructuralDesign";
import CivilEngineering from "./pages/civilengineering/CivilEngineering";
import ArchitecturalConsulting from "./pages/achitecturalconsulting/ArchitecturalConsulting";
import ProjectManagement from "./pages/ProjectManagement";
import AutoCAD from "./pages/autocad/AutoCAD";
import Revit from "./pages/revit/Revit";
import ETABS from "./pages/etabs/ETABS";
import STAADPro from "./pages/staadpro/STAADPro";
import Residential from "./pages/Residential";
import Commercial from "./pages/commercial/Commercial";
import Industrial from "./pages/Industrial";
import Career from "./pages/Career";
import Inquiry from "./pages/Inquiry";
import DigitalTwin from "./pages/DigitalTwin";
import Faq from "./pages/Faq"; // Removed the duplicate 'History' import
import Whyterrene from "./pages/whyterrene";
import Sustainability from "./pages/sustainability";
import Qualitypolicy from "./pages/qualitypolicy";
import Testimonial from "./pages/Testimonial";
import Blog from "./pages/blog";
import Sitemap from "./pages/Sitemap";
import Packages from "./pages/Packages";
import StarterPackage from "./pages/StarterPackage";
import MidlevelPackage from "./pages/midlevelPackage";
import HighendPackages from "./pages/highendPackages";
import InternationalPackage from "./pages/internationalPackage";
import CorporatePackages from "./pages/corporatePackages";
import TerreneSpecial from "./pages/terrenespecial";
import ProjectsPage from "./pages/CompletedProjects";
import StickyButtons from "./components/StickyButtons";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import Services from "./pages/Services"; // Importing the Services page
import SoftwareTraining from "./pages/SoftwareTraining";
import ConsultancyServices from "./pages/ConsultancyServices";
import ScrollToTop from "./components/ScrollToTop"; 
import Bim from "./pages/Bim";
import HVAC from "./pages/HVAC";
import InteriorDesign from "./pages/InteriorDesign";
import Landscape from "./pages/Landscape";
import Structural from "./pages/Structural";
import VisualEngineering from "./pages/VisualEngineering";
import Customize from "./pages/Customize";
import ConstructionPM from "./pages/ConstructionPM";
import AIinEngineering from "./pages/AIinEngineering";
import Drawing from "./pages/Drawings";
import Construction from "./pages/Construction"
import AiEngineeringPage from "./pages/AIEngineering";
import BimPage from "./pages/BIMpage";
import DigitalTwinPage from "./pages/DTwing";
import FurnitureDesignPage from "./pages/Furniture";
import ImportExportPage from "./pages/ImportExport";
import InteriorDesignPage from "./pages/Interior";
import MaterialConsultancyPage from "./pages/Material";
import MaintenancePage from "./pages/Maintenance";
import SmartProjectManagementPage from "./pages/Sub service pages/consultancy/Smartproject";
import CostValueEngineeringPage from "./pages/Sub service pages/consultancy/Costvalue";
import BimDigitalTwinPage from "./pages/Sub service pages/consultancy/Bim";
import GeotechnicalSoilPage from "./pages/Sub service pages/consultancy/Geotechnical";
import StructuralEngineeringPage from "./pages/Sub service pages/consultancy/Structural";
import ArchitecturalPage from "./pages/Sub service pages/consultancy/ArchitecturalPage";
import InteriorDesignService from "./pages/Sub service pages/consultancy/InteriorDesign";
import MaterialConsultancyService from "./pages/Sub service pages/consultancy/MaterialConsultancyPage";
import MEPPage from "./pages/Sub service pages/consultancy/MepEngineeringPage";
import MEPHVACPage from "./pages/Sub service pages/consultancy/MepHvacPage";
import EnvironmentalSustainabilityPage from "./pages/Sub service pages/consultancy/EnvironmentalSustainabilityPage";
import RegulatoryCompliancePage from "./pages/Sub service pages/consultancy/RegulatoryCompliancePage";
import SurveyingDigitalMappingPage from "./pages/Sub service pages/consultancy/SurveyingDigitalMappingPage";
import ConstructionSupervisionPage from "./pages/Sub service pages/consultancy/ConstructionSupervisionPage";
import LabTestingPage from "./pages/Sub service pages/consultancy/FieldLaboratoryTestingPage";
import TechnicalReportsPage from "./pages/Sub service pages/consultancy/TechnicalReportsPage";
import ApprovalDrawingPage from "./pages/Sub service pages/drawings/ApprovalDrawingPage";
import ArchitecturalDrawPage from "./pages/Sub service pages/drawings/ArchitecturalPage";
import StructuralDrawingPage from "./pages/Sub service pages/drawings/StructuralDrawingPage";
import InteriorDesignDrawingPage from "./pages/Sub service pages/drawings/InteriorDesignDrawingPage";
import MepDrawingPage from "./pages/Sub service pages/drawings/MepDrawingPage";
import ElectricalDrawingPage from "./pages/Sub service pages/drawings/ElectricalDrawingPage";
import MechanicalDrawingPage from "./pages/Sub service pages/drawings/MechanicalDrawingPage";
import PlumbingDrawingPage from "./pages/Sub service pages/drawings/PlumbingDrawingPage";
import HvacDrawingPage from "./pages/Sub service pages/drawings/HvacDrawingPage";
import ResidentialConstructionPage from "./pages/Sub service pages/construction/ResidentialConstructionPage";
import CommercialConstructionPage from "./pages/Sub service pages/construction/CommercialConstructionPage";
import IndustrialConstructionPage from "./pages/Sub service pages/construction/IndustrialConstructionPage";
import InfrastructureConstructionPage from "./pages/Sub service pages/construction/InfrastructureConstructionPage";
import RoadConstructionPage from "./pages/Sub service pages/construction/RoadConstructionPage";
import TimberConstructionPage from "./pages/Sub service pages/construction/TimberConstructionPage";
import PrecastConstructionPage from "./pages/Sub service pages/construction/PrecastConstructionPage";
import SteelConstructionPage from "./pages/Sub service pages/construction/SteelConstructionPage";
import CladdingEngineeringPage from "./pages/Sub service pages/construction/CladdingEngineeringPage";
import AluminumFabricationPage from "./pages/Sub service pages/construction/AluminumFabricationPage";
import SubcontractingPage from "./pages/Sub service pages/construction/SubcontractingPage";
import ConstructionMaterialsPage from "./pages/Sub service pages/construction/ConstructionMaterialsPage";
import ThreeDBimPage from "./pages/Sub service pages/bim/ThreeDBimPage";
import FourDBimPage from "./pages/Sub service pages/bim/FourDBimPage";
import FiveDBimPage from "./pages/Sub service pages/bim/FiveDBimPage";
import SixDBimPage from "./pages/Sub service pages/bim/SixDBimPage";
import SevenDBimPage from "./pages/Sub service pages/bim/SevenDBimPage";
import EightDBimPage from "./pages/Sub service pages/bim/EightDBimPage";
import NineDBimPage from "./pages/Sub service pages/bim/NineDBimPage";
import RealTimeAssetMonitoringPage from "./pages/Sub service pages/digitaltwin/RealTimeAssetMonitoringPage";
import PredictivePreventiveMaintenancePage from "./pages/Sub service pages/digitaltwin/PredictivePreventiveMaintenancePage";  
import EnergyResourceOptimizationPage from "./pages/Sub service pages/digitaltwin/EnergyResourceOptimizationPage";
import ConceptDesignPage from "./pages/Sub service pages/interior/Concept";
import ProjectManagementPage from "./pages/Sub service pages/interior/ProjectManagement";
import DetailedDrawingsPage from "./pages/Sub service pages/interior/DetailedDrawings";
import TurnkeySolutionsPage from "./pages/Sub service pages/interior/TurnkeySolutions";
import MaterialColorPage from "./pages/Sub service pages/interior/MaterialColor";
import RenovationPage from "./pages/Sub service pages/interior/Renovation";
import FurnitureSelectionPage from "./pages/Sub service pages/interior/FurnitureSelection";
import StylingDecorPage from "./pages/Sub service pages/interior/StylingDecor";
import ResidentialInteriorsPage from "./pages/Sub service pages/interior/ResidentialInteriors";
import CommercialInteriorsPage from "./pages/Sub service pages/interior/CommercialInteriors";
import HospitalityInteriorsPage from "./pages/Sub service pages/interior/HospitalityInteriors";
import HealthcareInteriorsPage from "./pages/Sub service pages/interior/HealthcareInteriors";
import ExhibitionEventPage from "./pages/Sub service pages/interior/ExhibitionEvent";
import FacilityManagementPage from "./pages/Sub service pages/digitaltwin/FacilityManagementPage";
import RemoteOperationsPage from "./pages/Sub service pages/digitaltwin/RemoteOperationsPage";
import PredictiveMaintenancePage from "./pages/Sub service pages/digitaltwin/PredictivePreventiveMaintenancePage";
import SmartCityDigitalTwinPage from "./pages/Sub service pages/digitaltwin/SmartCityDigitalTwinPage";
import EmergencyPreparednessPage from "./pages/Sub service pages/digitaltwin/EmergencyPreparednessPage";
import ArVrTrainingPage from "./pages/Sub service pages/digitaltwin/ArVrTrainingPage";
import OperationalAnalyticsPage from "./pages/Sub service pages/digitaltwin/OperationalAnalyticsPage";
import MaterialSelectionPage from "./pages/Sub service pages/material/MaterialSelection";
import MaterialTestingPage from "./pages/Sub service pages/material/MaterialTesting";
import BestMaterialPricePage from "./pages/Sub service pages/material/BestMaterialPrice";
import SustainableMaterialPage from "./pages/Sub service pages/material/SustainableMaterial";
import ConcreteConsultancyPage from "./pages/Sub service pages/material/ConcreteConsultancy";
import SteelMetalConsultancyPage from "./pages/Sub service pages/material/SteelMetalConsultancy";
import PolymerCompositeConsultancyPage from "./pages/Sub service pages/material/PolymerCompositeConsultancy";
import MaterialCostProcurementPage from "./pages/Sub service pages/material/MaterialCostProcurement";
import FailureAnalysisTroubleshootingPage from "./pages/Sub service pages/material/FailureAnalysisTroubleshooting";
import InnovativeAdvancedMaterialsPage from "./pages/Sub service pages/material/InnovativeAdvancedMaterials";
import FireSafetyConsultancyPage from "./pages/Sub service pages/material/FireSafetyConsultancy";
//furniture
import CustomFurnitureDesignPage from "./pages/Sub service pages/furniture/CustomFurnitureDesignPage";
import ModularFurniturePage from "./pages/Sub service pages/furniture/ModularFurniturePage";
import FurnitureManufacturingPage from "./pages/Sub service pages/furniture/FurnitureManufacturingPage";
import TurnkeyFurnitureFitOutsPage from "./pages/Sub service pages/furniture/TurnkeyFurnitureFitOutsPage";
import CommercialInstitutionalFurniturePage from "./pages/Sub service pages/furniture/CommercialInstitutionalFurniturePage";
import OutdoorSpecialtyFurniturePage from "./pages/Sub service pages/furniture/OutdoorSpecialtyFurniturePage";
import FurnitureSupplySourcingPage from "./pages/Sub service pages/furniture/FurnitureSupplySourcingPage";
import RestorationMaintenancePage from "./pages/Sub service pages/furniture/RestorationMaintenancePage";
import SmartInnovativeFurniturePage from "./pages/Sub service pages/furniture/SmartInnovativeFurniturePage";
import ConsultancyFurniturePlanningPage from "./pages/Sub service pages/furniture/ConsultancyFurniturePlanningPage";

// AI Engineering Sub-Service Pages
import AiPoweredDesignPlanningPage from "./pages/Sub service pages/ai-engineering/AiPoweredDesignPlanningPage";
import PredictiveAnalyticsForecastingPage from "./pages/Sub service pages/ai-engineering/PredictiveAnalyticsForecastingPage";
import SmartConstructionRoboticsPage from "./pages/Sub service pages/ai-engineering/SmartConstructionRoboticsPage";
import DigitalTwinsWithAiPage from "./pages/Sub service pages/ai-engineering/DigitalTwinsWithAiPage";
import AiForBimConstructionManagementPage from "./pages/Sub service pages/ai-engineering/AiForBimConstructionManagementPage";
import DataAnalyticsInsightsPage from "./pages/Sub service pages/ai-engineering/DataAnalyticsInsightsPage";
import CustomAiSolutionsConsultingPage from "./pages/Sub service pages/ai-engineering/CustomAiSolutionsConsultingPage";

// Import-Export Sub-Service Pages
import ConstructionMaterialsImportPage from "./pages/Sub service pages/import-export/ConstructionMaterialsImportPage";
import EngineeringMaterialsExportPage from "./pages/Sub service pages/import-export/EngineeringMaterialsExportPage";
import AdvancedTechnologyImportPage from "./pages/Sub service pages/import-export/AdvancedTechnologyImportPage";
import MachinerySparePartsPage from "./pages/Sub service pages/import-export/MachinerySparePartsPage";
import InteriorFurnitureImportPage from "./pages/Sub service pages/import-export/InteriorFurnitureImportPage";
import RawMaterialSourcingPage from "./pages/Sub service pages/import-export/RawMaterialSourcingPage";
import LogisticsSupplyChainPage from "./pages/Sub service pages/import-export/LogisticsSupplyChainPage";
import SpecializedEngineeringProductsPage from "./pages/Sub service pages/import-export/SpecializedEngineeringProductsPage";
import ConsultingProcurementSupportPage from "./pages/Sub service pages/import-export/ConsultingProcurementSupportPage";
import TurnkeySupplySolutionsPage from "./pages/Sub service pages/import-export/TurnkeySupplySolutionsPage";

//maintenance
import FacilityManagementServicesPage from "./pages/Sub service pages/maintenance/FacilityManagementServicesPage";
import PreventiveMaintenancePage from "./pages/Sub service pages/maintenance/PreventiveMaintenancePage";
import CorrectiveMaintenancePage from "./pages/Sub service pages/maintenance/CorrectiveMaintenancePage";
import ElectricalMaintenancePage from "./pages/Sub service pages/maintenance/ElectricalMaintenancePage";
import HVACMechanicalMaintenancePage from "./pages/Sub service pages/maintenance/HvacMechanicalMaintenancePage";
import PlumbingWaterSystemsMaintenancePage from "./pages/Sub service pages/maintenance/PlumbingWaterSystemsMaintenancePage";
import FireSafetySecurityMaintenancePage from "./pages/Sub service pages/maintenance/FireSafetySecurityPage";
import BuildingFabricMaintenancePage from "./pages/Sub service pages/maintenance/BuildingFabricMaintenancePage";
import AnnualMaintenanceContractsPage from "./pages/Sub service pages/maintenance/AnnualMaintenanceContractsPage";
import PredictiveSmartMaintenancePage from "./pages/Sub service pages/maintenance/PredictiveSmartMaintenancePage";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* This component will now handle scrolling for all routes */}
        <ScrollToTop />

        {/* The Routes component handles page content */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/architectural-consulting" element={<ArchitecturalConsulting />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/autocad" element={<AutoCAD />} />
          <Route path="/revit" element={<Revit />} />
          <Route path="/etabs" element={<ETABS />} />
          <Route path="/staad-pro" element={<STAADPro />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/career" element={<Career />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/whyterrene" element={<Whyterrene />} />
          <Route path="/qualitypolicy" element={<Qualitypolicy />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/services-main" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/residental" element={<StarterPackage />} />
          <Route path="/packages/commercial" element={<MidlevelPackage />} />
          <Route path="/packages/infrastructure" element={<HighendPackages />} />
          <Route path="/packages/consultant" element={<InternationalPackage />} />
          <Route path="/packages/bim-a" element={<CorporatePackages />} />
          <Route path="/packages/software" element={<TerreneSpecial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />

          
          <Route path="/services/consultancy-services" element={<ConsultancyServices />} />
          <Route path="/services/drawings" element={<Drawing />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/ai-engineering" element={<AiEngineeringPage />} />
          <Route path="/services/bim" element={<BimPage />} />
          <Route path="/services/digital-twin" element={<DigitalTwinPage />} />
          <Route path="/services/furniture-design" element={<FurnitureDesignPage />} />
          <Route path="/services/import-export" element={<ImportExportPage />} />
          <Route path="/services/interior-design" element={<InteriorDesignPage />} />
          <Route path="/services/material-consultancy" element={<MaterialConsultancyPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />

          //Consultancy Services Pages
          
          <Route path="/services/consultancy-services/smart-management" element={<SmartProjectManagementPage />} />
           <Route path="/services/consultancy-services/cost-value" element={<CostValueEngineeringPage />} />
           <Route path="/services/consultancy-services/BIM" element={<BimDigitalTwinPage />} />
           <Route path="/services/consultancy-services/Geotechnical" element={<GeotechnicalSoilPage />} />
            <Route path="/services/consultancy-services/structural-engineering" element={<StructuralEngineeringPage />} />
            <Route path="/services/consultancy-services/architectural" element={<ArchitecturalPage />} />
            <Route path="/services/consultancy-services/interior-design" element={<InteriorDesignService />} />
            <Route path="/services/consultancy-services/material-consultancy" element={<MaterialConsultancyService />} />
            <Route path="/services/consultancy-services/mep-engineering" element={<MEPPage />} />
            <Route path="/services/consultancy-services/mep-hvac" element={<MEPHVACPage />} />
            <Route path="/services/consultancy-services/sustainability-consulting" element={<EnvironmentalSustainabilityPage />} />
            <Route path="/services/consultancy-services/regulatory-advisory" element={<RegulatoryCompliancePage />} />
            <Route path="/services/consultancy-services/surveying-mapping" element={<SurveyingDigitalMappingPage />} />
            <Route path="/services/consultancy-services/construction-supervision" element={<ConstructionSupervisionPage />} />
            <Route path="/services/consultancy-services/lab-testing" element={<LabTestingPage />} />
            <Route path="/services/consultancy-services/technical-reports" element={<TechnicalReportsPage />} />

          //Drawings Pages
          <Route path="/services/drawings/approval-drawing" element={<ApprovalDrawingPage />} />
          <Route path="/services/drawings/architectural" element={<ArchitecturalDrawPage />} />
          <Route path="/services/drawings/structural" element={<StructuralDrawingPage />} />
          <Route path="/services/drawings/interior-design" element={<InteriorDesignDrawingPage />} />
          <Route path="/services/drawings/mep" element={<MepDrawingPage />} />
          <Route path="/services/drawings/electrical" element={<ElectricalDrawingPage />} />
          <Route path="/services/drawings/mechanical" element={<MechanicalDrawingPage />} />
          <Route path="/services/drawings/plumbing" element={<PlumbingDrawingPage />} />
          <Route path="/services/drawings/hvac" element={<HvacDrawingPage />} />


          //Construction Pages
          <Route path="/services/construction/residential" element={<ResidentialConstructionPage />} />
          <Route path="/services/construction/commercial" element={<CommercialConstructionPage />} />
          <Route path="/services/construction/industrial" element={<IndustrialConstructionPage />} />
          <Route path="/services/construction/infrastructure" element={<InfrastructureConstructionPage />} />
          <Route path="/services/construction/road" element={<RoadConstructionPage />} />
          <Route path="/services/construction/timber" element={<TimberConstructionPage />} />
          <Route path="/services/construction/precast" element={<PrecastConstructionPage />} />
          <Route path="/services/construction/steel" element={<SteelConstructionPage />} />
          <Route path="/services/construction/cladding-engineering" element={<CladdingEngineeringPage />} />
          <Route path="/services/construction/aluminum-fabrication" element={<AluminumFabricationPage />} />
          <Route path="/services/construction/subcontracting" element={<SubcontractingPage />} />
          <Route path="/services/construction/construction-materials" element={<ConstructionMaterialsPage />} />

          //BIM Pages
          <Route path="/services/bim/3d-bim" element={<ThreeDBimPage />} />
          <Route path="/services/bim/4d-bim" element={<FourDBimPage />} />
          <Route path="/services/bim/5d-bim" element={<FiveDBimPage />} />
          <Route path="/services/bim/6d-bim" element={<SixDBimPage />} />
          <Route path="/services/bim/7d-bim" element={<SevenDBimPage />} />
          <Route path="/services/bim/8d-bim" element={<EightDBimPage />} />
          <Route path="/services/bim/9d-bim" element={<NineDBimPage />} />

          //Interior Design Sub-Service Pages
          <Route path="/services/interior/concept-development" element={<ConceptDesignPage />} />
 <Route path="/services/interior/project-management" element={<ProjectManagementPage />} />
 <Route path="/services/interior/detailed-drawings" element={<DetailedDrawingsPage />} />     
 <Route path="/services/interior/turnkey-solutions" element={<TurnkeySolutionsPage />} />
 <Route path="/services/interior/material-color" element={<MaterialColorPage />} />
 <Route path="/services/interior/renovation" element={<RenovationPage />} />
 <Route path="/services/interior/furniture-selection" element={<FurnitureSelectionPage />} />
  <Route path="/services/interior/styling-decor" element={<StylingDecorPage />} />
 <Route path="/services/interior/residential" element={<ResidentialInteriorsPage />} />
 <Route path="/services/interior/commercial" element={<CommercialInteriorsPage />} />
 <Route path="/services/interior/hospitality" element={<HospitalityInteriorsPage />} />
 <Route path="/services/interior/healthcare" element={<HealthcareInteriorsPage />} />
 <Route path="/services/interior/exhibition-event" element={<ExhibitionEventPage />} />
 



          //Digital Twin Sub-Service Page
          <Route path="/services/digital-twin/asset-monitoring" element={<RealTimeAssetMonitoringPage />} />
          <Route path="/services/digital-twin/predictive-maintenance" element={<PredictivePreventiveMaintenancePage />} />
          <Route path="/services/digital-twin/energy-optimization" element={<EnergyResourceOptimizationPage />} />
          <Route path="/services/digital-twin/facility-management" element={<FacilityManagementPage />} />
          <Route path="/services/digital-twin/remote-operations" element={<RemoteOperationsPage />} />
          <Route path="/services/digital-twin/predictive-maintenance" element={<PredictiveMaintenancePage />} />
          <Route path="/services/digital-twin/smart-city" element={<SmartCityDigitalTwinPage />} />
          <Route path="/services/digital-twin/emergency-preparedness" element={<EmergencyPreparednessPage />} />
          <Route path="/services/digital-twin/ar-vr-training" element={<ArVrTrainingPage />} />
          <Route path="/services/digital-twin/operational-analytics" element={<OperationalAnalyticsPage />} />



          //Material Consultancy Sub-Service Pages
          <Route path="/services/material/selection" element={<MaterialSelectionPage />} />
 <Route path="/services/material/testing" element={<MaterialTestingPage />} />
 <Route path="/services/material/pricing" element={<BestMaterialPricePage />} />
 <Route path="/services/material/sustainable" element={<SustainableMaterialPage />} />
 <Route path="/services/material/concrete" element={<ConcreteConsultancyPage />} />
 <Route path="/services/material/steel" element={<SteelMetalConsultancyPage />} />
 <Route path="/services/material/polymer" element={<PolymerCompositeConsultancyPage />} />
 <Route path="/services/material/cost-analysis" element={<MaterialCostProcurementPage />} />
 <Route path="/services/material/failure-analysis" element={<FailureAnalysisTroubleshootingPage />} />
 <Route path="/services/material/innovative" element={<InnovativeAdvancedMaterialsPage />} />
 <Route path="/services/material/fire-safety" element={<FireSafetyConsultancyPage />} />


          //Furniture Sub-Service Pages
          <Route path="/services/furniture/custom-design" element={<CustomFurnitureDesignPage />} />
            <Route path="/services/furniture/modular" element={<ModularFurniturePage />} />
            <Route path="/services/furniture/manufacturing" element={<FurnitureManufacturingPage />} />
            <Route path="/services/furniture/turnkey-fit-outs" element={<TurnkeyFurnitureFitOutsPage />} />
            <Route path="/services/furniture/commercial" element={<CommercialInstitutionalFurniturePage />} />
            <Route path="/services/furniture/outdoor" element={<OutdoorSpecialtyFurniturePage />} />
            <Route path="/services/furniture/sourcing" element={<FurnitureSupplySourcingPage />} />
            <Route path="/services/furniture/restoration" element={<RestorationMaintenancePage />} />
            <Route path="/services/furniture/smart" element={<SmartInnovativeFurniturePage />} />
            <Route path="/services/furniture/planning" element={<ConsultancyFurniturePlanningPage />} />

             //AI Engineering Sub-Service Pages
            <Route path="/services/ai/design-planning" element={<AiPoweredDesignPlanningPage />} />
            <Route path="/services/ai/predictive-analytics" element={<PredictiveAnalyticsForecastingPage />} />
            <Route path="/services/ai/smart-construction" element={<SmartConstructionRoboticsPage />} />
            <Route path="/services/ai/digital-twins-ai" element={<DigitalTwinsWithAiPage />} />
            <Route path="/services/ai/bim-construction" element={<AiForBimConstructionManagementPage />} />
            <Route path="/services/ai/data-analytics" element={<DataAnalyticsInsightsPage />} />
            <Route path="/services/ai/custom-solutions" element={<CustomAiSolutionsConsultingPage />} />

            //Import-Export Sub-Service Pages
          <Route path="/services/import-export/construction-materials-import" element={<ConstructionMaterialsImportPage />} />
          <Route path="/services/import-export/engineering-materials-export" element={<EngineeringMaterialsExportPage />} />
          <Route path="/services/import-export/advanced-technology-import" element={<AdvancedTechnologyImportPage />} />
          <Route path="/services/import-export/machinery-spare-parts" element={<MachinerySparePartsPage />} />
          <Route path="/services/import-export/interior-furniture-import" element={<InteriorFurnitureImportPage />} />
          <Route path="/services/import-export/raw-material-sourcing" element={<RawMaterialSourcingPage />} />
          <Route path="/services/import-export/logistics-supply-chain" element={<LogisticsSupplyChainPage />} />
          <Route path="/services/import-export/specialized-engineering-products" element={<SpecializedEngineeringProductsPage />} />
          <Route path="/services/import-export/consulting-procurement-support" element={<ConsultingProcurementSupportPage />} />
          <Route path="/services/import-export/turnkey-supply-solutions" element={<TurnkeySupplySolutionsPage />} />

          //Maintenance Sub-Service Pages
          <Route path="/services/maintenance/facility-management" element={<FacilityManagementServicesPage />} />
          <Route path="/services/maintenance/preventive-maintenance" element={<PreventiveMaintenancePage />} />
          <Route path="/services/maintenance/corrective-maintenance" element={<CorrectiveMaintenancePage />} />
          <Route path="/services/maintenance/electrical-maintenance" element={<ElectricalMaintenancePage />} />
          <Route path="/services/maintenance/hvac-mechanical-maintenance" element={<HVACMechanicalMaintenancePage />} />
          <Route path="/services/maintenance/plumbing-maintenance" element={<PlumbingWaterSystemsMaintenancePage />} />
          <Route path="/services/maintenance/fire-safety-security" element={<FireSafetySecurityMaintenancePage />} />
          <Route path="/services/maintenance/building-fabric-maintenance" element={<BuildingFabricMaintenancePage />} />
          <Route path="/services/maintenance/annual-maintenance-contracts" element={<AnnualMaintenanceContractsPage />} />
          <Route path="/services/maintenance/predictive-smart-maintenance" element={<PredictiveSmartMaintenancePage />} />



          <Route path="/software-training" element={<SoftwareTraining />} />
          <Route path="/services/software-training" element={<SoftwareTraining />} />
          <Route path="/software-training/digital-twin" element={<DigitalTwin />} />
          <Route path="/software-training/bim" element={<Bim />} />
          <Route path="/software-training/AIEngineerng" element={<AIinEngineering />} />
          <Route path="/software-training/construction-pm" element={<ConstructionPM />} />
          <Route path="/software-training/customize-course" element={<Customize />} />
          <Route path="/software-training/mep-hvac" element={<HVAC />} />
          <Route path="/software-training/interior" element={<InteriorDesign />} />
          <Route path="/software-training/landscape" element={<Landscape />} />
          <Route path="/software-training/strcutural" element={<Structural />} />
          <Route path="/software-training/3d-visualization" element={<VisualEngineering />} />
          
          
          <Route path="*" element={<NotFound />} />
           
        </Routes>

        {/* StickyButtons component persists across all pages */}
        <StickyButtons />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;