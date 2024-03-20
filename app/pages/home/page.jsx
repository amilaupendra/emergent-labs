import React from "react";
import Navbar from "../../components/navbar/page";
import Banner from "@/app/components/home/banner/page";
import Intro from "@/app/components/home/Introduction/page";
import Footer from "@/app/components/footer/page"
import Projects from '@/app/components/home/projects/page'

const homepage = () => {
  return (
    <div className="container relative flex flex-col mx-auto">
      <Banner />
      <Intro />
      <div className="flex ">
      <Projects/>
      </div>
    </div>
  );
};

export default homepage;
