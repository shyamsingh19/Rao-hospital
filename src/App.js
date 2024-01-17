
import Navbar from "./components/Navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Specialties from "./components/specialties/specialties";
import './App.css';
import Doctors from "./components/doctors/doctors";
// import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from "./components/doctors/doctors";

function App() {
  return (
    <div className="app_wrap">
      <Navbar />
      <Home />
      <About/>
      <Specialties/>
      <Doctors/>

    </div>
  );
}

export default App;
