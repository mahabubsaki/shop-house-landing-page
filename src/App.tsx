import React, { useEffect } from 'react';
import './App.css';
import BottomStickyNav from './components/BottomStickyNav';
import MiddleNav from './components/MiddleNav';
import Notice from './components/Notice';
import TopNav from './components/TopNav';
import "rsuite/dist/rsuite.min.css";
import 'swiper/css';
import "swiper/css/free-mode";
import 'animate.css';
import MobileBottomNav from './components/MobileBottomNav';
import SliderHeader from './components/SliderHeader';
import SliderFeature from './components/SliderFeature';
import FeaturedProducts from './components/FeaturedProducts';


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
      <div className='h-[10000px]'>

      </div>
      <MobileBottomNav />

    </div>
  );
}

export default App;
