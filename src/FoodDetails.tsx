
import { useLocation } from "react-router-dom";
import { FoodItem } from "./Home";

export function FoodDetails() {
  const location = useLocation();
  const foodItem = location.state as FoodItem; // Assuming you pass the entire FoodItem in state

  return (
    <div className="w-full mt-[85px] min-h-screen flex flex-col justify-start items-start px-6 mb-20 font-raleway">
      <h1 className="text-3xl font-bold text-darkGreen mb-4">
        {foodItem.name}
      </h1>
      <p className="text-lg mb-2">
        <strong>Description:</strong> {foodItem.description}
      </p>
      <p className="text-lg mb-2">
        <strong>Cook Time:</strong> {foodItem.cookTime}
      </p>
      <p className="text-lg mb-2">
        <strong>Prep Time:</strong> {foodItem.prepTime}
      </p>
      <p className="text-lg mb-2">
        <strong>Servings:</strong> {foodItem.servings}
      </p>
      <p className="text-lg font-bold mb-2">Ingredients:</p>
      <ul className="list-disc list-inside mb-4">
        {foodItem.ingredientList.map((ingredient, index) => (
          <li key={index} className="text-lg">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
