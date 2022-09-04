import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SOP from './Pages/SOP';
import whatsapp from './Utilites/icons8-whatsapp.svg';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Sign from './Pages/Sign';
import SopProductPage from './Pages/SopProductPage';




function App() {
  return (
    <div className="App font-GorditaRegular">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SOP" element={<SOP/>} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/SopProductPage" element={<SopProductPage />} />
        </Routes>
        <a href="https://github.com/mertJF/tailblocks" class="animate-bounce rounded-full w-16 h-16 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-lg" target="_blank">
          <img src={whatsapp} class="h-16 w-16" />
        </a>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;






