import Hero from "./Components/Hero";
import LogoCloud from "./Components/LogoCloud";
import WhyUs from "./Components/WhyUs";
import Subscribe from "./Components/Subscribe";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import WhoWeHelp from "./Components/WhoWeHelp";
import WhatWeDo from "./Components/WhatWeDo";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoCloud />
      <WhyUs />
      <WhatWeDo />
      <WhoWeHelp />
      <Subscribe />
      <Footer />
    </>
  );
}
