
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Categorydetail from './pages/Categorydetail';
import ShoppingCard from './pages/ShoppingCard';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import BestsellingDetail from './pages/BestsellingDetail';
import Bestselling from './components/Bestselling';
import Register from './pages/Register';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/bestselling" element={<Bestselling/>}></Route>
      <Route path="/bestselling/:id" element={<BestsellingDetail/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
      <Route path="/category/:id" element={<Categorydetail/>}></Route>
      <Route path="/shopping" element={<ShoppingCard/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
