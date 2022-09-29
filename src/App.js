import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './layout/homeView/Home';

import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Project from './pages/project/Project';
import Services from './pages/service/Services';
// import { Navbar } from './component/Navbar/Navbar';


function App() {
  return (
    <>

      <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route exact path='/services' element={<Services/>}> </Route>
        <Route exact path='/about' element={<About/>}> </Route>
        <Route exact path='/project' element={<Project/>}> </Route>
        <Route exact path='/blog' element={<Blog/>}> </Route>
        <Route exact path='/contact' element={<Contact/>}> </Route>
        
        </Routes>
      

      </BrowserRouter>
      </>
      
    
    );
}

export default App;
