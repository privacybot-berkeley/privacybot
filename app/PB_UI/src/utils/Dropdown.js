import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transition from '../utils/Transition.js';

function Dropdown({
  children,
  title
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="flex flex-grow flex-wrap items-end"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="text-purple-600 bg-black-100 hover:text-gray-100 rounded-full px-2 py-1 transition duration-150 ease-in-out"
        href="#0"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        {/* <svg className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg> */}
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="absolute w-40 bg-gray-800 py-2 ml-6 rounded-md"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
};
