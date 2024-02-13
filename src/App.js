

import Home from "./components/home/home";
import About from "./components/about/about";
import Specialties from "./components/specialties/specialties";
import './App.css';
import Doctors from "./components/doctors/doctors";
import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Internalmedicine from "./components/pages/Internalmedicine/internalmedicine"
import Paeditrics from "./components/pages/paeditrics/paeditrics"

import Diabetology from "./components/pages/diabetology/diabetology";

import Gyne from "./components/pages/gynae/gyne";
import Laboratry from "./components/pages/laboratory/laboratory";
import Laproscopic from "./components/pages/Laproscopic/Laproscopic";
import Ortho from "./components/pages/ortho/ortho";
import  Trauma from "./components/pages/trauma/trauma";


function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/specialities" element={<Specialties />} > 
          </Route>

          <Route path="/specialities/diabetology" element={<Diabetology />} />
            <Route path="/specialities/paeditrics" element={<Paeditrics/>} />
            <Route path="/specialities/gyna" element={<Gyne />} />
            <Route path="/specialities/laboratory" element={<Laboratry />} />
            <Route path="/specialities/labroscopic" element={<Laproscopic />} />
            <Route path="/specialities/ortho" element={<Ortho />} />
            <Route path="/specialities/trauma" element={<Trauma />} /> 

          <Route path="/specialities/Internalmedicine" element={<Internalmedicine />} />
          <Route path="/doctors" element={<Doctors />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/gallery" element={<Gallery />}> </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
