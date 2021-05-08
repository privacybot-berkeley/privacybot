import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import Cta from '../partials/Cta'
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      {/*<Header />*/}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        {/*<HeroHome />
        <FeaturesHome />
        <Process />
        <Tabs />
        <Target />
        <News />
        <Newsletter />
        <Cta />*/}

      </main>

      {/*  Site footer */}
      {/*<Footer />*/}

    </div>
  );
}

export default Home;