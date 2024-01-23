
import Navbar from "./components/Navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Specialties from "./components/specialties/specialties";
import './App.css';
import Doctors from "./components/doctors/doctors";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="app_wrap">
      <Navbar />
      <Home />
      <About/>
      <Specialties/>
      <Doctors/>
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
