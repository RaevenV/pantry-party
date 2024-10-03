import React from "react";
import { batchAddCookingSteps } from "./firebaseUtils";

const DatabaseSeeder: React.FC = () => {
  const handleAddCookingSteps = async () => {
    const CookingSteps = [
      {
        cookTime: "30 minutes",
        cookingStepsId: [0, 1, 2, 3, 4],
        description:
          "Teriyaki chicken is a flavorful Japanese dish where chicken is cooked and coated in a sweet, savory glaze. The sauce creates a rich, glossy finish, making the chicken tender and delicious.",
        difficulty: "easy",
        id: 1,
        ingredientList: [
          "800g chicken thighs",
          "37.5g brown sugar",
          "60g soy sauce",
          "5g garlic",
          "2g grated ginger (optional)",
          "15g water",
          "27.5g cooking oil",
        ],
        name: "Teriyaki Chicken",
        prepTime: "30 minutes",
        servings: 4,
      },
    ];

    await batchAddCookingSteps(CookingSteps);
  };

  return (
    <div>
      <button onClick={handleAddCookingSteps} className="bg-red-500">Add CookingSteps</button>
    </div>
  );
};

export default DatabaseSeeder;
