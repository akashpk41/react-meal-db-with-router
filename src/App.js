import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <Routes>
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
