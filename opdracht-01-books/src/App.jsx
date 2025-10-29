
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NoPage from './Pages/Nopage';
import Navigation from './Pages/Navigation'



function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navigation />}> 

        <Route index element={<Home />} />
    <Route path="/about" element={<About/>}/>
     <Route path="/home" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/> 
    <Route path='*' element={<NoPage />}/>

</Route>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
