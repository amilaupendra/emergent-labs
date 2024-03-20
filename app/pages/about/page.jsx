import React from "react";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app//components/footer/page";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full pt-16 md:inline-flex">
        <div>
        <Image
          src="/about.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        </div>
      
      <div className="relative">
        <h1 className="text-center md:w-[50vw] p-6 leading-10 ">
          Emergent Labs pioneers transformative software solutions
        </h1>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default about;
