import NewNavbar from './components/NewNavbar/NewNavbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './components/ErrorMessage/ErrorMessage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <NewNavbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
