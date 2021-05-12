import React from 'react';

function FeaturesHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" data-aos-anchor="[data-aos-id-features-home]">
                <div className="relative">
                  <img className="md:max-w-none" src={require('../images/bot_background_removed.svg')} width="650" height="520" alt="Features illustration" />
                  {/* <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-1" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-2" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-3" cx="270" cy="260" r="64" />
                    </g>
                  </svg> */}
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-anchor="[data-aos-id-features-home]">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">A bit about us</div>
                  <h3 className="h3 mb-3">What is PrivacyBot?</h3>
                  <p className="text-xl text-gray-400 mb-4">A free and open source way  to delete your data from an exhaustive list of data brokers and people search services.</p>
                  <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> Includes <a href="https://docs.google.com/spreadsheets/d/1JY5bPJKBSnqgfC1JMMAkpXloIk_4rwJbvKoerZPw31w/edit?usp=sharing" target="_blank"><u>5x more data brokers</u></a> than what is currently offered by any paid service.</span>
                    </li>
                    {/* <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited jobs</span>
                    </li> */}
                    {/* <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free goods</span>
                    </li> */}
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Runs locally so your personally identifiable information (PII) is never shared with us.</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We are not a company, PrivacyBot will always be open source and free of charge.</span>
                    </li>
                  </ul>
                  {/* <div className="flex items-start mt-8">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/features-avatar.jpg')} width="40" height="40" alt="Features avatar" />
                    <div>
                      <blockquote className="text-gray-400 italic mb-3">"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing".</blockquote>
                      <div className="text-gray-700 font-medium">
                        <cite className="text-gray-200 not-italic">— Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
