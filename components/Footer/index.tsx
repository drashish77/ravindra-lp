import React from "react";

const Footer = () => {
  return (
    <div className=" bg-blue-800 w-full text-white">
      <div className="container mx-auto  rounded-lg ">
        <footer className="">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src="logo/logo.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Ravindra Tax Advice
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li> */}
                <li>
                  <a href="tel:+91 9179158083" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex justify-center flex-col md:flex-row items-center">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="/" className="hover:underline ">
                  Ravindra Tax Advice™.{" "}
                </a>
              </span>
              <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-2 lg:ml-0">
                All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
