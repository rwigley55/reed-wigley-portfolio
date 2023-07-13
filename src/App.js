import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TitleCard from "./components/TitleCard";
import SiteNav from "./components/SiteNav";
import AboutCard from "./components/AboutCard";
import PortfolioCard from "./components/PortfolioCard";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <SiteNav />
      <AboutCard />
      <PortfolioCard />
    </div>
  );
}

export default App;
