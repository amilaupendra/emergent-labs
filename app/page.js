import Image from "next/image";
import Homepage from "../app/pages/home/page"
import Navbar from "../app/components/navbar/page";
import Footer from "../app/components/footer/page";

export default function Home() {
  return (
    <div className="overflow-y-auto">
    <Navbar/>
    <div className="container relative z-0 px-4 pt-16 mx-auto">
    <Homepage/>
    </div>
    <Footer/>
    </div>
  );
}
