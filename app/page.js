import Image from "next/image";
import Homepage from "../app/pages/home/page"
import Navbar from "../app/components/navbar/page";
import Footer from "../app/components/footer/page";

export default function Home() {
  return (
    <div className="absolute content-center w-full m-0">
    <Navbar/>
    <div className="z-0 pt-16 w-[100%]">
    <Homepage/>
    </div>
    <Footer/>
    </div>
  );
}
