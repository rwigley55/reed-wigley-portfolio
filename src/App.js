import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TitleCard from "./components/TitleCard";
import SiteNav from "./components/SiteNav";
import AboutCard from "./components/AboutCard";
import PortfolioCard from "./components/PortfolioCard";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <SiteNav />
      <AboutCard />
      <PortfolioCard />
      <ContactCard />
    </div>
  );
}

export default App;
