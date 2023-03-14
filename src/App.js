
import './App.css';
import CustomCursor from "./assets/helpers/CustomCursor/CustomCursor";
import {WelcomePage} from "./components/organisms/WelcomePage/WelcomePage";
import {AboutMe} from "./components/organisms/AboutMe/AboutMe";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Portfolio} from "./components/organisms/Porfolio/Portfolio";
import {Contact} from "./components/organisms/Contact/Contact";

function App() {
  return (
      <Router>
          <div>
              <CustomCursor/>
              <Routes>
                  <Route path="/"  element={<WelcomePage />} />
                  <Route path="/about"  element={<AboutMe />} />
                  <Route path="/portfolio"  element={<Portfolio />} />
                  <Route path="/contact"  element={<Contact />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
