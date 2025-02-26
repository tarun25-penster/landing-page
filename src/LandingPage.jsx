import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testominals";
import Footer from "./Footer";

const LandingPage = () => (
  <div className="max-w-4xl mx-auto">
    <Hero />
    <Features />
    <Testimonials />
    <Footer/>
  </div>
);

export default LandingPage;
