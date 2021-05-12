import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';

function SignUp() {
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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-60">
                <h1 className="h3">Fill in the required data fields</h1>
              </div>


              {/* Form */}
              <div className="max-w-sm mx-auto">
                {/*<form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                      </button>
                    </div>
                  </div>
                </form>*/}
                <div className="flex items-center my-6">
                                                <div className="border-t border-gray-700 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                                                <div className="text-gray-400"><a href='https://privacybot.io' target="_blank"><u>Why do I need to enter this?</u></a></div>
                                                <div className="border-t border-gray-700 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                                              </div>
                <form action="/about">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                      <input id="first-name" type="text" className="form-input w-full text-gray-300" placeholder="First name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                      <input id="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Last name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Street Address">Street Address </label>
                      <input id="Street" type="address" className="form-input w-full text-gray-300" placeholder="1234 Big St." />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="City of residence">City of Residence </label>
                        <input id="city" type="city" className="form-input w-full text-gray-300" placeholder="Berkeley" />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="State of residence">State of Residence <span className="text-red-600">*</span></label>
                        <input id="state" type="state" className="form-input w-full text-gray-300" placeholder="CA" required />
                      </div>
                    </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Zip Code">Zip Code </label>
                          <input id="zip code" type="zip code" className="form-input w-full text-gray-300" placeholder="12345" />
                        </div>
                    </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Country">Country </label>
                        <input id="country" type="country" className="form-input w-full text-gray-300" placeholder="USA" />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Date of Birth">Date of Birth </label>
                          <input id="date of birth" type="date of birth" className="form-input w-full text-gray-300" placeholder="MM/DD/YYYY" />
                        </div>
                    </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Age">Age </label>
                        <input id="age" type="age" className="form-input w-full text-gray-300" placeholder="29" />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Phone Number">Phone Number </label>
                          <input id="phone number" type="phone number" className="form-input w-full text-gray-300" placeholder="555-555-5555" />
                        </div>
                    </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Last 4 Digits of Credit Card Number">Last 4 Digits of Credit Card Number </label>
                        <input id="credit card" type="credit card" className="form-input w-full text-gray-300" placeholder="1234" />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Device Ad ID">Device Ad ID <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.adcolony.com/privacy-policy/finding-advertising-id/" target="_blank">What is this?</a></label>
                          <input id="device ad id" type="device ad id" className="form-input w-full text-gray-300" placeholder="6GF-443-E21" />
                        </div>
                    </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Twitter Handle">Twitter </label>
                          <input id="twitter handle" type="twitter handle" className="form-input w-full text-gray-300" placeholder="@twitter_handle" />
                        </div>
                    </div>
                  <div className="text-sm text-gray-500 text-center">
                    This is run entirely locally, we don't have access to this data. But here's our <Link to="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link> anyway.
                                </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" href="/about">Send</button>
                    </div>
                  </div>
                </form>
                {/*<div className="text-gray-400 text-center mt-6">
                  Already using Open PRO? <Link to="signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                </div>*/}
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;