import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-[#131415]">
      <h1 className="text-white text-5xl font-extrabold mx-12 text-center pt-20">
        Heads of Product hire us to do continuous user discovery, so they can
        <span className="focus-text"> focus on all the other fires.</span>
      </h1>
      <h4 className="text-[#999999] text-center mt-10 font-semibold px-14">
        Partner with us. Give your product team superpowers. Start tomorrow and
        stop whenever.
      </h4>
      <button className="start-button">
        <span className="pr-3 text-white">Start now</span>
        <img src="/vectors/arrow.svg" alt="" />
      </button>
    </section>
  );
};

export default Hero;
