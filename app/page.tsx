import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhenYouNeedUs from '@/components/sections/WhenYouNeedUs';
import Methodology from '@/components/sections/Methodology';
import Services from '@/components/sections/Services';
import NewHopeCase from '@/components/sections/NewHopeCase';
import Philosophy from '@/components/sections/Philosophy';
import Founder from '@/components/sections/Founder';
import WhyUs from '@/components/sections/WhyUs';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <WhenYouNeedUs />
        <Services />
        <Methodology />
        <NewHopeCase />
        <Philosophy />
        <Founder />
        <WhyUs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
