import Hero from "@/app/Components/Hero";
import LogoCloud from "@/app/Components/LogoCloud";
import WhyUs from "@/app/Components/WhyUs";
import Subscribe from "@/app/Components/Subscribe";
import Nav from "@/app/Components/Nav";
import Footer from "@/app/Components/Footer";
import WhoWeHelp from "@/app/Components/WhoWeHelp";
import WhatWeDo from "@/app/Components/WhatWeDo";

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
