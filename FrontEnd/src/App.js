import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./Component/Login";
import Register from "./Component/Register";
import Layout from "./Component/Layout";
import AboutUs from "./Component/AboutUs";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Layout />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
            <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
