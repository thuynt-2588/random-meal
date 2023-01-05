import { IMeal } from "../../types/meal";
import "./index.scss";

type Props = {
  meal: IMeal;
  onHandleRandomMeal: () => void;
};

const MealContainer: React.FC<Props> = ({ meal, onHandleRandomMeal }) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  console.log("all", ingredients);
  return (
    <div className="random-meal">
      <h2 className="random-meal__title">Feeling hungry?</h2>
      <h4 className="random-meal__desc">Get a random meal by clicking below</h4>
      <button
        className="random-meal__btn-meal"
        onClick={() => onHandleRandomMeal()}
      >
        Get meal
      </button>
      <div className="random-meal__wrap">
        <div className="random-meal__category">
          Category:
          <span>{meal.strCategory}</span>
        </div>
        <div className="random-meal__category">
          Area:
          <span>{meal.strArea}</span>
        </div>
        <div className="random-meal__box">
          <img src={meal.strMealThumb} alt="" className="random-meal__img" />
          <div className="random-meal__ingredient">
            <h3 className="random-meal__ingredient-title">Ingredients:</h3>
            <ul className="random-meal__ingredient-ul">
              {ingredients &&
                ingredients.map(
                  (ingredient, i) => ingredient && <li>{ingredient}</li>
                )}
            </ul>
          </div>
        </div>
        <div className="random-meal__content">
          <div className="random-meal__content-name">{meal.strMeal}</div>
          <div className="random-meal__content-detail">
            {meal.strInstructions}
          </div>
        </div>

        {meal.strYoutube ? (
          <div className="random-meal__video">
            <h3 className="random-meal__video-title">Video Recipe</h3>
            <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MealContainer;
