import React from "react";

const Brands = () => {
  const images = [
    "/vectors/the-portfolio-collective.svg",
    "/vectors/infarm1.svg",
    "/vectors/Fitbit_logo.svg",
    "/vectors/SENIC-logo.webp",
  ];
  return (
    <section className="h-[100vh] bg-black text-white flex flex-col justify-center">
      <h1 className="ml-8 text-4xl font-bold mb-5">
        <span className="focus-text"> Trusted</span> by big and small
      </h1>
      <div className="flex flex-col lg:flex-row gap-y-8 justify-between items-center w-10/12 mx-auto">
        {images.map((img) => (
          <img src={img} alt="" className="w-48" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
