import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-[50%] lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className=" mx-auto max-w-7xl    xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About me
                </h2>
                <h3 className="mt-6 text-xl tracking-tight font-extrabold text-orange-500 sm:text-2xl md:text-4xl">
                  Adv Ravindra Gupta
                </h3>
                <p className="mt-2 mb-6 text-2xl">
                  Your Tax and Financial Services Expert
                </p>
                <p>
                  Welcome to my professional page! I am Adv. Ravindra Gupta, a
                  dedicated tax and financial services expert with 2 years of
                  experience helping individuals and businesses manage their
                  finances efficiently and effectively. My mission is to provide
                  personalized, high-quality financial solutions that help my
                  clients achieve their financial goals.
                </p>
              </div>
            </main>
          </div>
        </div>
        {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-[96] lg:w-full lg:h-full"
            src="/profile/ravindra_1.png"
            alt=""
          />
        </div> */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-56 w-full  sm:h-72 md:h-[96] lg:w-full lg:h-full">
            <Image
              className="object-cover object-top "
              src="/profile/ravindra_1.png"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
