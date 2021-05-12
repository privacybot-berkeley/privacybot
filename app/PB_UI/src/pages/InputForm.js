import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Dropdown from '../utils/Dropdown';



class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      full_address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      dob: "",
      age: "",
      phone_num: "",
      cc_last4: "",
      device_ad_id: "",
      twitter_handle: "",
      usrchoice: "top_choice"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleOptionChange = changeEvent => {
    this.setState({
      usrchoice: changeEvent.target.value
    });
  }
  


  handleSubmit = (event) => {
    event.preventDefault()
    const r = window.confirm("You're about to initiate email conversations with 90-500+ data brokers. Are you sure you want to proceed?")
    if (r === true){
    axios.post('http://localhost:5000/privacyAPI/v1/', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.history.push('/about');
  }
}

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {
      firstname,
      lastname,
      mail,
      full_address,
      city,
      state,
      zip,
      country,
      email,
      dob,
      age,
      phone_num,
      cc_last4,
      device_ad_id,
      twitter_handle,
      usrchoice
    } = this.state
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
                <div className="max-w-3xl mx-auto text-center pb-8 md:pb-60">
                  <h1 className="h3">Fill in the required data fields</h1>
                </div>
                {/* <div className="max-w-sm mx-auto"> */}
                <div className="mx-auto">
                  <div className="max-w-sm mx-auto">
                    <div className="flex max-w-sm items-center my-6">
                      <div className="border-t border-gray-700 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                      <div className="text-gray-400 hover:text-gray-100"><a href='https://privacybot.io/FAQ' target="_blank">Why do I need to enter this info?</a></div>
                      <div className="border-t border-gray-700 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                    </div>
                  </div>
                  {/* Form */}
                  {/* <form action="/about" onSubmit={this.handleSubmit}> */}
                  <form action="/about" href="/about" onSubmit={this.handleSubmit}>
                    <div className="max-w-sm mx-auto">
                      {/* firstname */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                          <input name="firstname" value={firstname} onChange={this.handleInputChange} id="first-name" type="text" className="form-input w-full text-gray-300" placeholder="First name" required />
                        </div>
                      </div>
                      {/* lastname */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                          <input name="lastname" value={lastname} onChange={this.handleInputChange} id="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Last name" required />
                        </div>
                      </div>
                      {/* email */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                          <input name="email" value={email} onChange={this.handleInputChange} id="email" type="email" className="form-input w-full text-gray-300" placeholder="your.email@gmail.com" required />
                        </div>
                      </div>
                      {/* full_address */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Street Address">Street Address</label> */}
                          <ul className="flex flex-grow flex-wrap items-end">
                            <li>
                              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Street Address">Street Address </label>
                            </li>
                            <li>
                              <Dropdown title="&#9432;" style="display: none;">
                                <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">32% of companies on our list need your street address. They likely use it in compiling location or socioeconomic data. </p>
                              </Dropdown>
                            </li>
                          </ul>
                          <input name="full_address" value={full_address} onChange={this.handleInputChange} id="Street" type="address" className="form-input w-full text-gray-300" placeholder="1234 Big St." />
                        </div>
                      </div>
                      {/* city */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <ul className="flex flex-grow flex-wrap items-end">
                              <li>
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="City of residence">City of Residence </label>
                              </li>
                              <li>
                                <Dropdown title="&#9432;" style="display: none;">
                                  <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">37% of companies on our list need your city of residence. They likely use it in compiling location or socioeconomic data.</p>
                                </Dropdown>
                              </li>
                            </ul>
                            {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="City of residence">City of Residence </label> */}
                            <input name="city" value={city} onChange={this.handleInputChange} id="city" type="city" className="form-input w-full text-gray-300" placeholder="Berkeley" />
                          </div>
                      </div>
                      {/* state */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="State of residence">State of Residence <span className="text-red-600">*</span></label>
                            <input name="state" value={state} onChange={this.handleInputChange} id="state" type="state" className="form-input w-full text-gray-300" placeholder="CA" required />
                          </div>
                        </div>
                      {/* zip */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <ul className="flex flex-grow flex-wrap items-end">
                                <li>
                                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Zip Code">Zip Code </label>
                                </li>
                                <li>
                                  <Dropdown title="&#9432;" style="display: none;">
                                    <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">36% of companies on our list need your zip code. They likely use it in compiling location or socioeconomic data.</p>
                                  </Dropdown>
                                </li>
                              </ul>
                              {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Zip Code">Zip Code </label> */}
                              <input name="zip" value={zip} onChange={this.handleInputChange} id="zip code" type="zip code" className="form-input w-full text-gray-300" placeholder="12345" />
                            </div>
                        </div>
                      {/* country */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <ul className="flex flex-grow flex-wrap items-end">
                              <li>
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Country">Country </label>
                              </li>
                              <li>
                                <Dropdown title="&#9432;" style="display: none;">
                                  <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">72% of companies on our list need your country of residence. They likely use it in compiling location or socioeconomic data.</p>
                                </Dropdown>
                              </li>
                            </ul>
                            {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Country">Country </label> */}
                            <input name="country" value={country} onChange={this.handleInputChange} id="country" type="country" className="form-input w-full text-gray-300" placeholder="USA" />
                          </div>
                      </div>
                      {/* dob */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <ul className="flex flex-grow flex-wrap items-end">
                                <li>
                                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Date of Birth">Date of Birth </label>
                                </li>
                                <li>
                                  <Dropdown title="&#9432;" style="display: none;">
                                    <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">7% of companies on our list need your date of birth. They likely use it in verifying identity for people searchers.</p>
                                  </Dropdown>
                                </li>
                              </ul>
                              {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Date of Birth">Date of Birth </label> */}
                              <input name="dob" value={dob} onChange={this.handleInputChange} id="date of birth" type="date of birth" className="form-input w-full text-gray-300" placeholder="MM/DD/YYYY" />
                            </div>
                        </div>
                      {/* age */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <ul className="flex flex-grow flex-wrap items-end">
                              <li>
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Age">Age </label>
                              </li>
                              <li>
                                <Dropdown title="&#9432;" style="display: none;">
                                  <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">4% of companies on our list need your age. They likely use it in verifying identity for people searchers.</p>
                                </Dropdown>
                              </li>
                            </ul>
                            {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Age">Age </label> */}
                            <input name="age" value={age} onChange={this.handleInputChange} id="age" type="age" className="form-input w-full text-gray-300" placeholder="29" />
                          </div>
                      </div>
                      {/* phone_num */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <ul className="flex flex-grow flex-wrap items-end">
                                <li>
                                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Phone Number">Phone Number </label>
                                </li>
                                <li>
                                  <Dropdown title="&#9432;" style="display: none;">
                                    <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">20% of companies on our list need your phone number. They likely use it in verifying identity or selling phone data.</p>
                                  </Dropdown>
                                </li>
                              </ul>
                              {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Phone Number">Phone Number </label> */}
                              <input name="phone_num" value={phone_num} onChange={this.handleInputChange} id="phone number" type="phone number" className="form-input w-full text-gray-300" placeholder="555-555-5555" />
                            </div>
                        </div>
                      {/* cc_last4 */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <ul className="flex flex-grow flex-wrap items-end">
                              <li>
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Last 4 Digits of Credit Card Number">Last 4 Digits of Credit Card Number </label>
                              </li>
                              <li>
                                <Dropdown title="&#9432;" style="display: none;">
                                  <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">0.5% of companies on our list need the last 4 digits of your credit card number. They likely use it to cross-reference with credit agencies.</p>
                                </Dropdown>
                              </li>
                            </ul>
                            {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Last 4 Digits of Credit Card Number">Last 4 Digits of Credit Card Number </label> */}
                            <input name="cc_last4" value={cc_last4} onChange={this.handleInputChange} id="credit card" type="credit card" className="form-input w-full text-gray-300" placeholder="1234" />
                          </div>
                      </div>
                      {/* device_ad_id */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Device Ad ID">Device Ad ID <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.adcolony.com/privacy-policy/finding-advertising-id/" target="_blank">What is this?</a></label>
                              <input name="device_ad_id" value={device_ad_id} onChange={this.handleInputChange} id="device ad id" type="device ad id" className="form-input w-full text-gray-300" placeholder="6GF-443-E21" />
                            </div>
                        </div>
                      {/* twitter_handle */}
                      <div className="flex max-w-sm flex-wrap -mx-3 mb-4 pb-8">
                            <div className="w-full px-3">
                              <ul className="flex flex-grow flex-wrap items-end">
                                <li>
                                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Twitter Handle">Twitter </label>
                                </li>
                                <li>
                                  <Dropdown title="&#9432;" style="display: none;">
                                    <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">0.2% of companies on our list need your twitter handle. They likely sell it in combination with other mobile phone data or to use as identity verification.</p>
                                  </Dropdown>
                                </li>
                              </ul>
                              {/* <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="Twitter Handle">Twitter </label> */}
                              <input name="twitter_handle" value={twitter_handle} onChange={this.handleInputChange} id="twitter handle" type="twitter handle" className="form-input w-full text-gray-300" placeholder="@twitter_handle" />
                            </div>
                        </div>
                    </div>

                    {/* Subset Selection */}
                    <div className="max-w-lg mx-auto text-center pb-12 pt-8">
                      <h1 className="h3">Select the company list you want to send deletion requests to</h1>
                    </div>
                  
                    {/* <div className="flex items-center">
                      <div className="border-t border-gray-700 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                      <div className="text-gray-400">Select at least one</div>
                      <div className="border-t border-gray-700 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                    </div> */}

                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                      
                      {/* Our Top Choices */}
                      <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                      <div className="absolute top-0 right-0 mr-6 -mt-4">
                          <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Recommended</div>
                        </div>
                        <div className="mb-4 pb-4 border-b border-gray-700">
                          <div className="h4 text-purple-600 mb-1">Our Top Choices</div>
                          <div className="inline-flex items-baseline mb-2">
                            {/* <span className="text-2xl md:text-3xl font-medium text-gray-400">{45}</span> */}
                            {/* <span className="h2">{priceOutput.plan1[value][1]}</span> */}
                            {/* <span className="font-medium text-gray-400">{priceOutput.plan1[value][2]}</span> */}
                          </div>
                          <div className="text-gray-400">This is our recommended option for people looking to get started.</div>
                        </div>
                        <div className="font-medium mb-3">This includes:</div>
                        <ul className="text-gray-400 -mb-3 flex-grow">
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>The largest data brokers and people search sites and their subsidiaries </span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>All additional companies that require no or minimal follow up</span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://docs.google.com/spreadsheets/d/1R3wfIxEH0v_gmjBBXYP6FZcwA03dqPAXkN_52m59pOg/edit?usp=sharing" target="_blank"> 91 companies in total</a></span>
                          </li>
                          {/* <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>For a full list of services supported in this option, click here</span>
                          </li> */}
                        </ul>
                        {/* <div className="border border-gray-700 p-3 mt-6"> */}
                        <div className="mt-8">
                          {/* <a type="checkbox" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a> */}
                          <label>
                          <input type="radio" value="top_choice" onChange={this.handleOptionChange} checked={this.state.usrchoice === "top_choice"} />
                          </label>
                          {/* <input type="checkbox" className="form-checkbox p-3"/> */}
                          <span className="text-gray-400 ml-2">Select</span>
                        </div>
                      </div>

                      {/* Top Choices + People Searchers */}
                      <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">

                        <div className="mb-4 pb-4 border-b border-gray-700">
                          <div className="h4 text-purple-600 mb-1">+ All People Searchers</div>
                          <div className="inline-flex items-baseline mb-2">
                            {/* <span className="text-2xl md:text-3xl font-medium text-gray-400">{priceOutput.plan2[value][0]}</span> */}
                            {/* <span className="h2">{priceOutput.plan2[value][1]}</span> */}
                            {/* <span className="font-medium text-gray-400">{priceOutput.plan2[value][2]}</span> */}
                          </div>
                          <div className="text-gray-400">This includes everything in our Top Choices option and all additional people search services.</div>
                        </div>
                        <div className="font-medium mb-3">This includes:</div>
                        <ul className="text-gray-400 -mb-3 flex-grow">
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Everything included in Our Top Choices</span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>All additional people search services</span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Moderate follow up may be required</span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://docs.google.com/spreadsheets/d/1R3wfIxEH0v_gmjBBXYP6FZcwA03dqPAXkN_52m59pOg/edit?usp=sharing" target="_blank"> 164 companies in total</a></span>
                          </li>
                          {/* <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Placeholder text commonly used</span>
                          </li> */}
                        </ul>
                        {/* <div className="border border-gray-700 p-3 mt-6"> */}
                        <div className="mt-8">
                          {/* <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a> */}
                          <label>
                          <input type="radio" value="people_search" onChange={this.handleOptionChange} checked={this.state.usrchoice === "people_search"} />
                          </label>
                          {/* <input type="checkbox" className="form-checkbox p-3"/> */}
                          <span className="text-gray-400 ml-2">Select</span>
                        </div>
                      </div>


                      {/* Exhaustive Deletion*/}
                      <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
                        <div className="mb-4 pb-4 border-b border-gray-700">
                          <div className="h4 text-purple-600 mb-1">Exhaustive Deletion</div>
                          <div className="inline-flex items-baseline mb-2">
                            {/* <span className="text-2xl md:text-3xl font-medium text-gray-400">{priceOutput.plan3[value][0]}</span> */}
                            {/* <span className="h2">{priceOutput.plan3[value][1]}</span> */}
                            {/* <span className="font-medium text-gray-400">{priceOutput.plan3[value][2]}</span> */}
                          </div>
                          <div className="text-gray-400">This sends deletion requests to each of 500+ data brokers and people search sites, the most exhaustive list available.</div>
                        </div>
                        <div className="font-medium mb-3">This includes:</div>
                        <ul className="text-gray-400 -mb-3 flex-grow">
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://docs.google.com/spreadsheets/d/1R3wfIxEH0v_gmjBBXYP6FZcwA03dqPAXkN_52m59pOg/edit?usp=sharing" target="_blank"> Every service on our list </a></span>
                          </li>
                          <li className="flex items-center mb-3">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span><b>Note: </b>This will send 500+ emails, significant follow up is required.</span>
                          </li>
                          
                        </ul>
                        {/* <div className="border border-gray-700 p-3 mt-6"> */}
                        <div className="mt-8">
                        <label>
                          <input type="radio" value="all_brokers" onChange={this.handleOptionChange} checked={this.state.usrchoice === "all_brokers"}/>
                        </label>
                          {/* <input type="radio" value="option1" checked={false} /> */}
                          {/* <input type="checkbox" className="form-checkbox p-3"/> */}
                          <span className="text-gray-400 ml-2">Select</span>
                          {/* <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a> */}
                          {/* <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a> */}
                        </div>
                      </div>
                    </div>
                    {/* Check Boxes */}
                    {/* <div className="flex flex-wrap -mx-3 mb-4 pt-8">
                      <div className="w-full px-3">
                        <ul className="flex flex-grow flex-wrap items-end">
                          <li>
                            <label className="flex items-center">
                              <input type="checkbox" className="form-checkbox"/>
                              <span className="text-gray-400 ml-2">Largest data brokers and people searchers</span>
                            </label>
                          </li>
                          <li>
                            <Dropdown title="&#9432;" style="display: none;">
                              <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">This selection includes only the 20 largest people search sites and data brokers.</p>
                            </Dropdown>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4 pt-2">
                      <div className="w-full px-3">
                        <ul className="flex flex-grow flex-wrap items-end">
                          <li>
                            <label className="flex items-center">
                              <input type="checkbox" className="form-checkbox" />
                              <span className="text-gray-400 ml-2">People searchers</span>
                            </label>
                          </li>
                          <li>
                            <Dropdown title="&#9432;" style="display: none;">
                              <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">Remove your data from companies that scrape public government records and sell it to other people or companies who want information on you specifically.</p>
                            </Dropdown>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4 pt-2">
                      <div className="w-full px-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Companies that require no or minimal follow up</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4 pt-2">
                      <div className="w-full px-3">
                        <ul className="flex flex-grow flex-wrap items-end">
                          <li>
                            <label className="flex items-center">
                              <input type="checkbox" className="form-checkbox" />
                              <span className="text-gray-400 ml-2">All companies on our list</span>
                            </label>
                          </li>
                          <li>
                            <Dropdown title="&#9432;" style="display: none;">
                              <p className="block text-gray-300 text-sm font-medium py-2 px-4 leading-tight">This is a list of 500+ data brokers, which may require a significant amount of follow up.</p>
                            </Dropdown>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    {/* button */}
                    {/* <div className="flex flex-wrap -mx-3 mt-6"> */}
                    <div className="max-w-sm mx-auto">
                      <div className="flex max-w-sm flex-wrap pt-16 pb-12">
                        <div className="w-full px-3">
                          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type="submit">Send Emails</button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 text-center">
                        This is run entirely locally, we don't have access to this data. Here's our <a href="https://privacybot.io/privacypolicy" target="_blank"> privacy policy</a>.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
  export default withRouter(InputForm);
  // export default InputForm;