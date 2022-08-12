import "./App.css";

//react bootstrap imports
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import SecondIntro from "./components/SecondIntro";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <SecondIntro />
      <Footer />
    </div>
  );
}

export default App;
