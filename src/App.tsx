import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Navbar';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}/>
        <Route path='/projects' element={<Projects></Projects>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
      </Routes>
    </div>
  );
}
