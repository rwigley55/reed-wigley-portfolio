import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TitleCard from "./components/TitleCard";
import SiteNav from "./components/SiteNav";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <SiteNav />
    </div>
  );
}

export default App;
