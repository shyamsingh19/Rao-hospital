

import Home from "./components/home/home";
import About from "./components/about/about";
import Specialties from "./components/specialties/specialties";
import './App.css';
import Doctors from "./components/doctors/doctors";
import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Internalmedicine from "./components/pages/Internalmedicine/internalmedicine"
import Paeditrics from "./components/pages/paeditrics/paeditrics"




function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/specialities/" element={<Specialties />}>

            <Route path="Internalmedicine" element={<Internalmedicine />} />
            <Route path="paeditrics" element={<Paeditrics />} />
          </Route>


          <Route path="/doctors" element={<Doctors />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/gallery" element={<Gallery />}> </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
