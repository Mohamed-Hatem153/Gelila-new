import NewNavbar from './components/NewNavbar/NewNavbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NewNavbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
