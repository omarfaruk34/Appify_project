
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import BodyContainer from './Component/Bodycontainer/BodyContainer';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodyarea" element={<BodyContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
