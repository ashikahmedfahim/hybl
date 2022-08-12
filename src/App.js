import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import SecondIntro from "./components/SecondIntro";
import Footer from "./components/Footer";
import About from "./components/About";
import OurProducts from "./components/OurProducts";

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <SecondIntro />
      <OurProducts />
      <About />
      <Footer />
    </div>
  );
}

export default App;
