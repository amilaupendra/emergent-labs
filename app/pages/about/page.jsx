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
          Emergent Labs pioneers transformative software solutions, leveraging
          cutting-edge technologies for mobile and web applications. With a team
          of skilled professionals, we craft immersive experiences that redefine
          digital landscapes. Our commitment to innovation drives us to explore
          the latest advancements, ensuring our solutions remain at the
          forefront of technology. We specialize in developing sophisticated
          mobile apps, responsive web platforms, and intuitive user interfaces.
          At Emergent Labs, we are dedicated to pushing boundaries, delivering
          excellence in every project. Join us in shaping the future of digital
          innovation as we continue to lead the way in harnessing emerging
          technologies.
        </h1>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default about;
