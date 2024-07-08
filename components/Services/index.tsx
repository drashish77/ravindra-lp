import Image from "next/image";
import React from "react";
import { MdBusiness, MdOutlineFastfood } from "react-icons/md";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mb-3">
        <h2 className="text-center text-3xl font-bold mb-5 text-gray-900">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <div className="border-t w-40  border-orange-500 -mt-2 mb-2 border-2"></div>
        <div className="border-b w-20 border-orange-500 border-2"></div>
      </div>
      {/* <h3 className="text-2xl">Expert Income Tax Consultation Services</h3>{" "} */}
      {/* <p className="">
        Maximize Your Refunds and Minimize Your Stress with Our Professional Tax
        Solutions
      </p> */}
      <p className="my-5 text-center text-lg font-medium">
        Expert tax planning, filing, and advisory services to maximize your
        refunds and minimize liabilities. Trust our experienced team for
        accurate and efficient income tax solutions.
      </p>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <div className="w-full h-40 border  opacity-90 group hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">
              COMPANY REGISTRATION
            </div>
            <MdBusiness className="text-6xl mx-auto mt-5" />
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">
              G.S.T. REGISTRATION
            </div>
            <Image
              src="/logo/gst.png"
              className="mx-auto mt-5"
              alt=""
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">INCOME TAX FILLINS</div>
            {/* <HiOutlineReceiptTax className="text-6xl mx-auto mt-5" /> */}
            <Image
              src="/logo/itr_logo.svg"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">
              FOOD (FSSAI) REGISTRATION
            </div>
            <MdOutlineFastfood className="text-6xl mx-auto mt-5 " />
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">DSC REGISTRATION</div>
            <Image
              src="/logo/dsc.jpeg"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">
              EPFO/ESIC REGISTRATION
            </div>
            <Image
              src="/logo/epfo.jpeg"
              alt=""
              width={80}
              height={80}
              className="mx-auto mt-5"
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">
              TRADE MARK REGISTRATION
            </div>
            <Image
              src="/logo/trademark.jpeg"
              className="mx-auto mt-5"
              alt=""
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">LOAN</div>
            <Image
              src="/logo/loan.webp"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">TALLY ACCOUNTING</div>
            <Image
              src="/logo/tally.png"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
          <div
            className="w-full h-40 border
            opacity-90 hover:shadow-2xl"
          >
            <div className="text-center pt-3 font-bold">
              SHOP ACT REGISTRATION
            </div>
            <Image
              src="/logo/shop_act.png"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="w-full h-40 border  opacity-90 hover:shadow-2xl">
            <div className="text-center pt-3 font-bold">PF WITHDRAWL</div>
            <Image
              src="/logo/pf.png"
              className="mx-auto mt-5"
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
