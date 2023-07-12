import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TitleCard from "./components/TitleCard";
import SiteNav from "./components/SiteNav";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <SiteNav />
      <AboutCard />
    </div>
  );
}

export default App;
