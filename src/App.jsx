import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navcomp from './Components/Navcomp';
import Home from './Components/Home';
import Cart from './Components/Cart'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navcomp/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
