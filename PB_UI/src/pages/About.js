import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Cta from '../partials/Cta';
import Process from '../partials/Process';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <Process />
        {/*<HeroAbout />
        <TeamImages />
        <Timeline />
        <Team />
        <TestimonialsCarousel />
        <Career />
        <Clients />
        <Newsletter /> */}
        <Cta />

      </main>

      {/*  Site footer
      <Footer />*/}

    </div>
  );
}

export default About;