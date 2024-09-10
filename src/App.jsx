import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Landing from './pages/Landing';
import Main from './pages/Main';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/sign-up" element={<Signup />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
