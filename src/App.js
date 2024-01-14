
import Navbar from "./components/Navbar/navbar";
import Contactus from "./components/contact/contactus";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import './App.css';

function App() {
  return (
    <div className="app_wrap">
      <Navbar />
      <Home />
      <Contactus  className="contactcomp"/>
      <Footer />

    </div>
  );
}

export default App;
