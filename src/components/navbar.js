import React from "react";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

const navbar = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-8 py-2.5 dark:bg-gray-800">
        <div className="mt-2 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={require("../assets/Logo-Regular.svg").default}
              className="mr-3 h-12 mb-0"
              alt="rhetora Logo"
            />
            <span className="hidden pt-2 md:block self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              rhetora.ai
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
          <PopupButton
              url="https://calendly.com/lukarhetora/15-minute-call"
              /*
              * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
              * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
              */
              rootElement={document.getElementById("root")}
              text="Book a Demo"
              className="text-white bg-main align-middle hover:bg-minor focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-3 lg:px-5 pb-2 lg:py-2 mr-2 focus:outline-none  "
              style={{ paddingTop: "13px"}}
            />
            {/* <Link
              to="/join-waitlist" */}
              {/* className="text-white bg-main hover:bg-minor focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-lg px-3 lg:px-5 pb-2 lg:py-2 mr-2 focus:outline-none "
              style={{ paddingTop: "13px", fontWeight:500 }}
            >
              Book a Demo */}
            {/* </Link> */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-md text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/our-story"
                  className="block py-2 pr-4 pl-3 text-md font-regular rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="block py-2 pr-4 pl-3 text-md font-regular border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block py-2 pr-4 pl-3 text-md font-medium border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                 <a href="https://www.app.rhetora.ai" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
               </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
