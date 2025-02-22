import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import "./Style/Animations.css"
import Callback from "./Components/Callback";
 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
      
    </div>
  );
};

export default App;
