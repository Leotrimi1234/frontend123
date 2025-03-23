
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import './css/style.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Nav from './pages/Nav';
import Footer from './pages/Footer';



function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/news' element={<News/>}/>

    </Routes>
    <Footer/>
     </BrowserRouter>



   
    
  );
}

export default App;
