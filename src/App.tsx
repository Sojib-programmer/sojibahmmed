import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Ticru from "./pages/Ticru";
import CompanySetup from "./pages/CompanySetup";

import MidnightLogic from "./pages/MidnightLogic";
import Ecosystem from "./pages/Ecosystem";
import {
  About,
  SojibBangladesh,
  WhoIsSojib,
} from "./pages/variants";
import PillarPage from "./pages/pillars/PillarPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import VisionLayout from "./pages/vision/VisionLayout";
import VisionIndex from "./pages/vision/Index";
import VisionAbout from "./pages/vision/About";
import VisionEn from "./pages/vision/En";
import VisionBn from "./pages/vision/Bn";
import VisionIndustries from "./pages/vision/Industries";
import VisionIndustrySlug from "./pages/vision/IndustrySlug";
import VisionEcosystem from "./pages/vision/Ecosystem";
import VisionSuper from "./pages/vision/eco/Super";
import VisionLayers from "./pages/vision/eco/Layers";
import VisionGovtech from "./pages/vision/eco/Govtech";
import VisionStorage from "./pages/vision/eco/Storage";
import VisionTicrupay from "./pages/vision/eco/Ticrupay";
import VisionDeshi from "./pages/vision/eco/Deshi";
import VisionFuture from "./pages/vision/eco/Future";
import VisionInfrastructure from "./pages/vision/eco/Infrastructure";
import VisionInterconnection from "./pages/vision/eco/Interconnection";
import VisionBlogIndex from "./pages/vision/BlogIndex";
import VisionBlogPost from "./pages/vision/BlogPostPage";
import VisionBlogCategory from "./pages/vision/BlogCategory";


const queryClient = new QueryClient();

// Misspelling / alt-slug → canonical variant route
const REDIRECTS: Record<string, string> = {
  "/sojibahmed": "/about",
  "/sojib-ahmed": "/about",
  "/sojib-ahmmed": "/about",
  "/sojibahmmed": "/about",
  "/sojib": "/about",
  "/mdsojib": "/about",
  "/md-sojib": "/about",
  "/mdsojib-ahmed": "/about",
  "/md-sojib-ahmed": "/about",
  "/md-sojib-ahmmed": "/about",
  "/sazib": "/about",
  "/sazib-ahmed": "/about",
  "/sazibahmed": "/about",
  "/sazib-ahmmed": "/about",
  "/shojib": "/about",
  "/shojib-ahmed": "/about",
  "/shojib-ahmmed": "/about",
  "/founder": "/about",
  "/bio": "/about",
  "/me": "/about",
  "/who-is-sojib": "/who-is-sojib-ahmmed",
  
  "/sojib-bd": "/sojib-ahmmed-bangladesh",
  "/sojib-bangladesh": "/sojib-ahmmed-bangladesh",
  // Retired product
  "/inboxnumber": "/ecosystem",
  "/blog/inboxnumber-virtual-phone-numbers-for-the-world": "/ecosystem",
  // Legacy sojibahmmed (vision) URLs → /vision/*
  "/en": "/vision/en",
  "/bn": "/vision/bn",
  "/industries": "/vision/industries",
  "/field-notes": "/vision/blog",
  "/vision-blog": "/vision/blog",
  "/ecosystem/super": "/vision/ecosystem/super",
  "/ecosystem/layers": "/vision/ecosystem/layers",
  "/ecosystem/govtech": "/vision/ecosystem/govtech",
  "/ecosystem/storage": "/vision/ecosystem/storage",
  "/ecosystem/ticrupay": "/vision/ecosystem/ticrupay",
  "/ecosystem/deshi": "/vision/ecosystem/deshi",
  "/ecosystem/future": "/vision/ecosystem/future",
  "/ecosystem/infrastructure": "/vision/ecosystem/infrastructure",
  "/ecosystem/interconnection": "/vision/ecosystem/interconnection",
};

// Prefix redirect: /industries/:slug → /vision/industries/:slug
const IndustrySlugRedirect = () => {
  const { slug = "" } = useParams();
  return <Navigate to={`/vision/industries/${slug}`} replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ticru" element={<Ticru />} />
        <Route path="/companysetup" element={<CompanySetup />} />
        
        <Route path="/midnight-logic" element={<MidnightLogic />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/pillar/:slug" element={<PillarPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sojib-ahmmed-bangladesh" element={<SojibBangladesh />} />
        <Route path="/who-is-sojib-ahmmed" element={<WhoIsSojib />} />
        <Route path="/vision" element={<VisionLayout />}>
          <Route index element={<VisionIndex />} />
          <Route path="about" element={<VisionAbout />} />
          <Route path="en" element={<VisionEn />} />
          <Route path="bn" element={<VisionBn />} />
          <Route path="industries" element={<VisionIndustries />} />
          <Route path="industries/:slug" element={<VisionIndustrySlug />} />
          <Route path="ecosystem" element={<VisionEcosystem />} />
          <Route path="ecosystem/super" element={<VisionSuper />} />
          <Route path="ecosystem/layers" element={<VisionLayers />} />
          <Route path="ecosystem/govtech" element={<VisionGovtech />} />
          <Route path="ecosystem/storage" element={<VisionStorage />} />
          <Route path="ecosystem/ticrupay" element={<VisionTicrupay />} />
          <Route path="ecosystem/deshi" element={<VisionDeshi />} />
          <Route path="ecosystem/future" element={<VisionFuture />} />
          <Route path="ecosystem/infrastructure" element={<VisionInfrastructure />} />
          <Route path="ecosystem/interconnection" element={<VisionInterconnection />} />
          <Route path="blog" element={<VisionBlogIndex />} />
          <Route path="blog/category/:category" element={<VisionBlogCategory />} />
          <Route path="blog/:slug" element={<VisionBlogPost />} />
        </Route>

        {Object.entries(REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="/industries/:slug" element={<IndustrySlugRedirect />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
