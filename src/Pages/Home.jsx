import AboutUs from "../Components/AboutUs";
import CounterLabels from "../Components/CounterLabels";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import MobileNav from "../Components/MobileNav";
import RecentTransactions from "../Components/RecentTransactions";
import Roadmap from "../Components/Roadmap";
import SlotsDetails from "../Components/SlotsDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Home = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className=" ">
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <MobileNav />
      <Hero />
      <CounterLabels />
      <SlotsDetails />
      <RecentTransactions />
      <section id="roadmap" className="hidden lg:block">
        <Roadmap />
      </section>
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
