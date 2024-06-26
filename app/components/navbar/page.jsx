import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="absolute z-10 content-center w-screen">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <a className="text-xl btn btn-ghost">daisyUI</a> */}
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={200} height={300} />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-none gap-2">
            <Link href="/" className="text-gray-500">
              Home
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link href="/pages/about" className="text-gray-500">
              About
            </Link>
          </div>
          {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img width={500} height={500} alt="Tailwind CSS Navbar component"  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default navbar;
