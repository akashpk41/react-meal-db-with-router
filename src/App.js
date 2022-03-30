import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/Not_Found/NotFound";
import Foods from "./components/Foods/Foods";
import MealInfo from "./components/Meal_Info/MealInfo";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path='/foods/:mealdb' element={ <MealInfo /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
