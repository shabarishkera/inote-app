
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home'
import NoteState from './context/notes/notestate';
import {BrowserRouter as Router,
Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
function App() {
  return (
    <>
    <NoteState>
    <Router >
    
    <Navbar/>
  <div className='container'>
    <Routes>
<Route exact path="/" element={<Home key="home" />}></Route>
<Route exact path="/signup" element={<Signup key="signup" />}></Route>
<Route exact path="/login" element={<Login key="login" />}></Route>
    </Routes>
    </div>
    </ Router >
    </NoteState>
    </>
       
  );
}

export default App;
