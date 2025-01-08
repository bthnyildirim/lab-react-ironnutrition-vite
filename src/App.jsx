import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;
