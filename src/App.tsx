import axios from "axios";
import { useEffect, useState } from "react";
import MealContainer from "./components/MealContainer";
import { IMeal } from "./types/meal";
import "./index.css";

function App() {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [meal, setMeal] = useState<IMeal>();

  const callRandomMeal = () => {
    axios.get(baseURL).then((response) => {
      setMeal(response.data.meals[0]);
    });
  };

  useEffect(() => {
    callRandomMeal();
  }, []);

  const handleRandomMeal = () => {
    callRandomMeal();
  };

  return (
    <div className="App">
      {meal && (
        <MealContainer
          meal={meal as IMeal}
          onHandleRandomMeal={handleRandomMeal}
        />
      )}
    </div>
  );
}

export default App;
