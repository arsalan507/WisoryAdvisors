import { Navbar } from '@/components/common/Navbar';
import { Hero } from '@/components/sections/Hero';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Recognition } from '@/components/sections/Recognition';
import { MediaMentions } from '@/components/sections/MediaMentions';
import { Values } from '@/components/sections/Values';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <About />
      <Team />
      <Recognition />
      <MediaMentions />
      <Values />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
