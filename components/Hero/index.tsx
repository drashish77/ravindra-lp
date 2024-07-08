import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-5 lg:mb-0">
        <h1 className="lg:w-2/3 text-3xl font-bold capitalize">
          Get tax Advice to avoid mistakes that can cost you big
        </h1>
        <p className="s font-semibold lg:w-2/3 mt-3 text-gray-800">
          Access to high quality tax advice to complement the investment advice
          we provide
        </p>

        <div className="relative pt-5">
          <a
            href="tel:+91 9179158083"
            className="group rounded-lg border border-transparent text-white  bg-orange-600 w-fit px-5 py-2"
          >
            Contact us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
        </div>
      </div>

      <div className="">
        <Image
          src={"/hero.jpg"}
          height={500}
          width={500}
          priority
          alt="hero image which contain tax paper and a calculater"
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
