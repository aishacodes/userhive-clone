import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const arr = [1, 9, 2, 3, 4];
  const featureCollection = [
    {
      title: "Save your political capital",
      desc: `Don't spend your political capital to do what your gut tells you is
    right. Get the rest of the business on your side with qualitative data
    and a real understanding of your customer.`,
    },
    {
      title: "Deliver value, quickly",
      desc: `In a rush? We can start tomorrow. We can make sure you're not left waiting while you hire a permanent team member, or pick up the slack when you can't justify a hire. Ramp up our services with your needs, and ramp back down again as the rush subsides.`,
    },
    {
      title: "Best practices not best of luck",
      desc: `Don't leave it to chance. We bring years of experience in the best practices, using frameworks like Jobs to be Done and Continuous User Discovery.`,
    },
  ];
  return (
    <section className="bg-[#131415] pb-20 min-h-[70vh]">
      <h2 className="text-white text-5xl font-extrabold mx-auto text-center pt-20 max-w-[83%]  lg:max-w-3xl">
        There's no shortcut to understanding your customers. With us
        <span className="focus-text"> you won't need one.</span>
      </h2>
      <p className="text-gray1 max-w-xl mx-auto mt-6 text-center text-xl lg:text-base">
        For teams that have
        <span className="text-white"> lent on intuition for too long</span>, and
        <span className="text-white"> don't know the why</span> behind customer
        actions.
      </p>
      <div className="px-8 flex gap-6 flex-wrap mt-12">
        {featureCollection.map((feature) => (
          <FeatureCard title={feature.title} desc={feature.desc} />
        ))}
      </div>
    </section>
  );
};

export default Features;
