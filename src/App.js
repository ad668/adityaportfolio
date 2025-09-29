import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Home/Contact';
import About from './pages/Home/About';
import Experiences from './pages/Home/Experiences';
import Projects from './pages/Home/projects';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About/" element={<About/>}/>
        <Route path="/Experiences/" element={<Experiences/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/Contact/" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
