import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/userOuth/Login';
import Register from './pages/userOuth/Register';
import Navbar from './pages/navigation/Navbar';
import ErrorPage from './pages/Error/ErrorPage';
import Codeped from './pages/codeped/Codeped';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contribute from './pages/contribute/Contribute';
import ShareCode from './pages/codeped/ShareCode';

function App() {
  
  
  return (
    <div className="App" onContextMenu={(event)=>{event.preventDefault();}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="code" element={<Codeped /> } />
            <Route path="code/share/:id" element={<ShareCode />} />
            <Route path="about" element={<About /> } />
            <Route path="contribute" element={<Contribute /> } />
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/sign-up' element={<Register />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
