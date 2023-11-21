import Cursor from "./components/cursor/Cursor";
import "./index.scss";
import { LandingPage } from "./pages/landing-page/LandingPage";
import { Navbar } from "./components";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Tech from "./pages/tech/Tech";
import Projects from "./pages/projects/Projects";
import ContactPage from "./pages/contact/ContactPage";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <LandingPage />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <ContactPage />
      <Footer />
    </>
  );
};

export default App;
