import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Roms from "./components/Roms";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers/>
      <Plan/>
      <Roms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
