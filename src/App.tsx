import React, { useEffect } from 'react';
import './App.css';
import BottomStickyNav from './components/BottomStickyNav';
import MiddleNav from './components/MiddleNav';
import Notice from './components/Notice';
import TopNav from './components/TopNav';
import "rsuite/dist/rsuite.min.css";
import 'swiper/css';
import "swiper/css/free-mode";
import './styles/animate.css';
import MobileBottomNav from './components/MobileBottomNav';
import SliderHeader from './components/SliderHeader';
import SliderFeature from './components/SliderFeature';
import FeaturedProducts from './components/FeaturedProducts';
import SaleBanner from './components/SaleBanner';
import CategoriesSlider from './components/CategoriesSlider';
import Services from './components/Services';
import ParallexPromo from './components/ParallexPromo';
import LatestNews from './components/LatestNews';
import BrandsMarquee from './components/BrandsMarquee';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App relative">
      <Notice />
      <TopNav />
      <MiddleNav />
      <BottomStickyNav />
      <SliderHeader />
      <SliderFeature />
      <FeaturedProducts />
      <SaleBanner />
      <CategoriesSlider />
      <Services />
      <ParallexPromo />
      <LatestNews />
      <BrandsMarquee />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
