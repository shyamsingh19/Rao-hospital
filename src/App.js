

import Home from "./components/home/home";
import About from "./components/about/about";
import Specialties from "./components/specialties/specialties";
import './App.css';
import Doctors from "./components/doctors/doctors";
import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
   <>  
      {/* <Navbar />
      <Home />
      <About/>
      <Specialties/>
      <Doctors/>
      <Contact />
      <Gallery />
      <Footer /> */}

      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />}> </Route> */}
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/specialities" element={<Specialties />}> </Route>
        <Route path="/doctors" element={<Doctors />}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/gallery" element={<Gallery/>}> </Route>
      </Routes>
      </BrowserRouter>

    </>
    
  );
}

export default App;
