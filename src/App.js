import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Button from "./components/Buttons/Button";
import Talent from "./components/Talent/Talent";
import JobHunting from "./components/JobHunting/JobHunting";
import Recruitment from "./components/Recruitment/Recruitment";
import BuildLeft from "./components/Build/BuildLeft";
import BuildRight from "./components/Build/BuildRight";
import Footer from "./components/Footer/Footer";
import Absolutes from "./components/Absolutes/Absolutes";
import TT from "./components/tt/TT";
import Footer2 from "./components/Footer/Footer2";
function App() {
  return (
    <div className="App">
      <div className="ttt">
        <TT />
      </div>
      {/* <div className="NavbarContainer"><Navbar /></div> */}

      <div className="HomeContainer">
        <Home />
      </div>

      <div className="Button-Container">
        <Button />
      </div>

      <div className="Talent">
        <Talent />
      </div>
      <div className="JubHunting">
        <JobHunting />
      </div>

      <div className="Recruitment">
        <Recruitment />
      </div>

      <div className="Build">
        <div className="BuildLeft">
          <BuildLeft />
        </div>

        <div className="BuildRight">
          <BuildRight />
        </div>
      </div>
      <div className="Absolutes-Container">
        <Absolutes />
      </div>
      <div className="Footer-Container">
        <div className="Footer1">
          <Footer />
        </div>

        <div className="Footer2">
          <Footer2 />
        </div>
      </div>
    </div>
  );
}

export default App;
