import React from 'react';

function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">What just happened?</h2>
            {/* <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                              <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                              <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
                            </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">1</span>. You filled in the required data fields.</h4>
              <p className="text-lg text-gray-400 text-center">Data brokers needed to collect additional info to verify your identity and ensure they’re deleting the right person’s data. PrivacyBot only sent the minimum amount of information required for each data broker to delete your info, nothing more. </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                              <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                              <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
                            </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">2</span>. Data deletion requests were sent from your email.</h4>
              <p className="text-lg text-gray-400 text-center">PrivacyBot is essentially a smart email routing tool. You just send CCPA data delete requests en masse right from your own email. PrivacyBot accessed your email through 0auth tokens and ran entirely from your own machine.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="-5 -5 74 74" xmlns="http://www.w3.org/2000/svg">
                <rect className="stroke-current text-purple-600" strokeWidth="10" width="64" height="64" rx="32" />
                {/*<path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />*/}
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">3</span>. Any replies/next steps will be sent to your inbox.</h4>
              <p className="text-lg text-gray-400 text-center">Any follow-ups from the companies themselves will go directly back to you. All further communications will be between you and the company, we just helped to kick start the process.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
