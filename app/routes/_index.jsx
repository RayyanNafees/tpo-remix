import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section1 from "../components/LandingPage/Section1";
import Section3 from "../components/LandingPage/Section3";
import Section2 from "../components/LandingPage/Section2"
import Whoweare from "../components/LandingPage/Whoweare";
import DirectorsDesk from "../components/LandingPage/DirectorsDesk";
import ChartSection from "../components/LandingPage/ChartSection";

export const meta = () => {
	return [
		{ title: "Training & Placement | AMU" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Section1/>
      <Whoweare />
      <DirectorsDesk />
      <Section2/>
      <ChartSection/>
      <Section3/>      
      <Footer />
    </>
  );
};

export default LandingPage;
