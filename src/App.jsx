import Cursor from "./components/cursor/Cursor";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import { LandingPage } from "./pages/landing-page/LandingPage";
import { Navbar } from "./components";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Tech from "./pages/tech/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <LandingPage />
      <About />
      <Tech />
      <Experience />
    </BrowserRouter>
  );
};

export default App;
