import React from "react";
import Hero from "@/components/templates/Home/Hero/Hero";
import About from "@/components/templates/Home/About/About";
import Tours from "@/components/templates/Home/Tours/Tours";
import Comments from "@/components/templates/Home/Comments/Comments";
import AllTours from "@/components/templates/Home/AllTours/AllTours";
import Footer from "@/components/modules/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col w-full 2xl:max-w-[75vw] lg:max-w-[85vw] xl:max-w-[80vw]">
        <Hero />
        <About />
        <Tours />
        <Comments />
        <AllTours />
      </div>
    </div>
  );
};

export default Home;
