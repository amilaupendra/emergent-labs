import React from "react";
import Image from "next/image";

const projects = () => {
  return (
    <div>
      <h1 className="pt-12 pb-6 text-3xl font-bold">Want new ideas?</h1>
      <div className="carousel rounded-box">
      <div className="flex-col p-3 text-2xl text-center carousel-item">
        <h3>Resturent</h3>
          <Image
            src="/resturent.jpg"
            width={500}
            height={500}
            alt="resturent"
          />
        </div>
        <div className="flex-col p-3 text-2xl text-center carousel-item">
          <h3>Furniture Shop</h3>
          <Image
            src="/furniture.jpg"
            width={500}
            height={500}
            alt="Burger"
          />
        </div>
        <div className="flex-col p-3 text-2xl text-center carousel-item">
          <h3>Handcrafts Selling</h3>
          <Image
            src="/craft.jpg"
            width={500}
            height={500}
            alt="Burger"
          />
        </div>
        <div className="flex-col p-3 text-2xl text-center carousel-item">
          <h3>Portfolio Sites</h3>
          <Image
            src="/portfolio.jpg"
            width={500}
            height={500}
            alt="Burger"
          />
        </div>
        <div className="flex-col p-3 text-2xl text-center carousel-item">
          <h3>Coffee Shop</h3>
          <Image
            src="/coffee.jpg"
            width={500}
            height={500}
            alt="Burger"
          />
        </div>
        <div className="flex-col p-3 text-2xl text-center carousel-item">
          <h3>handcraft Selling</h3>
          <Image
            src="/crafts2.jpg"
            width={500}
            height={500}
            alt="Burger"
          />
        </div>
        
      </div>
    </div>
  );
};

export default projects;
