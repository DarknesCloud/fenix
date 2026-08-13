'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import ScrollReveal from '@/components/ui/ScrollReveal';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhenYouNeedUs from '@/components/sections/WhenYouNeedUs';
import Methodology from '@/components/sections/Methodology';
import Services from '@/components/sections/Services';
import CaseStudy from '@/components/sections/CaseStudy';
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
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <WhenYouNeedUs />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Methodology />
        </ScrollReveal>

        <ScrollReveal>
          <CaseStudy />
        </ScrollReveal>

        <ScrollReveal>
          <NewHopeCase />
        </ScrollReveal>

        <ScrollReveal>
          <Philosophy />
        </ScrollReveal>

        <ScrollReveal>
          <Founder />
        </ScrollReveal>

        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>

        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
