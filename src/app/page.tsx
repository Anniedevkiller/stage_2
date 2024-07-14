import React from "react";
<<<<<<< HEAD
import { CatSection, HeroSection, NewArrival } from "./component";
=======
import {CatSection, HeroSection, NewArrival } from "./component";
>>>>>>> e42ad2362c2aa13e3ce221a07059d7eded4d8c9a

const page = () => {
  return (
    <>
      <HeroSection />
<<<<<<< HEAD
      <CatSection />
=======
      <CatSection/>
>>>>>>> e42ad2362c2aa13e3ce221a07059d7eded4d8c9a
      <NewArrival />
      <img
        loading="eager"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aabaf9bae933404387640499ed672a07d8534dfe5a06919a94394c1daad3d66?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
        alt="New arrival showcase"
        className="mt-28 w-full aspect-[2.33] max-w-[1404px] max-md:mt-10 max-md:max-w-full"
      />
    </>
  );
};

export default page;
