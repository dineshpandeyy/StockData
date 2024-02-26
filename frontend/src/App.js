import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* <Route path="/hi" element={<div>hiiiii</div>} /> */} 
        <Route path="/home" element={<Navbar />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
