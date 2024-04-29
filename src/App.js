import { Routes, Route } from 'react-router-dom'
import Slideshow from './TEST/Slideshow';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import We from './pages/We';
import OurAgents from './pages/OurAgents';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/we' element={<We/>}/>
                <Route path='/nos-agents' element={<OurAgents/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/test' element={<Slideshow/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
