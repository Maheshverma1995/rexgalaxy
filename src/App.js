import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from './components/Nav-bar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import HeaderNavBar from './components/Nav-bar/HeaderNavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ItTrainning from './components/It-trainning/ItTrainning';
import Service from './components/Service/Service';
import SoftwereTesting from './components/Softwere-testing/SoftwereTesting';
import Python from './components/Python/Python';
// import Home from './components/Home/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderNavBar/>
      <NavBar/>
      <Routes>
        <Route path=''element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='contact'element={<Contact/>}/>
        <Route path='it-trainning'element={<ItTrainning/>}/>
        <Route path='service'element={<Service/>}/>
        <Route path='softwere-testing'element={<SoftwereTesting/>}/>
        <Route path='python'element={<Python/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
