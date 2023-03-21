
import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About"
import Login from './components/Login';
import Home from './components/Home';
import  NoteContext from "./context/notes/noteconstext";
import NoteState from './context/notes/notestate';
import {BrowserRouter as Router,
Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <NoteState>
    <Router >
    
    <Navbar/>
  <div className='container'>
    <Routes>
<Route exact path="/" element={<Home key="home" />}></Route>
<Route exact path="/about" element={<About key="about" />}></Route>
<Route exact path="/login" element={<Login key="login" />}></Route>



    </Routes>
    </div>
    </ Router >
    </NoteState>
    </>
       
  );
}

export default App;
