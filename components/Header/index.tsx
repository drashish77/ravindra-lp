import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full py-5 px-5 md:px-10 bg-blue-800 opacity-90 fixed z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between  text-white">
          <Link href="/" className="font-bold md:text-xl text-sm ">
            Ravindra Tax{" "}
            <span className="md:inline-block hidden">Advice & Preparation</span>
          </Link>
          <Link href="tel:+91 9179158083">
            <span className="md:inline-block hidden">Questions? Call </span> 📞
            9179158083
          </Link>
          {/* <a href="tel:+"></a> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
