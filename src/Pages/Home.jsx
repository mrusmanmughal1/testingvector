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
const Home = () => {
  return (
    <div>
      <Header />
      <MobileNav />
      <Hero />
      <CounterLabels />
      <SlotsDetails />
      <RecentTransactions />
        <Roadmap />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
