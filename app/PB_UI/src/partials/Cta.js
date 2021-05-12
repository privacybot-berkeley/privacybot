import React from 'react';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-12 md:pt-20 border-t border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-cta>

            {/* Section header */}
            <h1 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-cta]">That's it! You're all done.</h1>
            {/* <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-cta]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.</p> */}

            {/* CTA button */}
            {/*<div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-cta]">
              <a className="btn text-white bg-purple-600 hover:bg-purple-700" href="javascript:window.close();">Close</a>
            </div>*/}

            {/* Check list
            <ul className="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1">
              <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-cta]">
                <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Free 14-day trial</span>
              </li>
              <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-cta]">
                <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Volume discounts</span>
              </li>
            </ul> */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
