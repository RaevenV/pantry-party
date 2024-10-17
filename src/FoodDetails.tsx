import { useLocation } from "react-router-dom";
import { FoodItem } from "./Home";
import { Navbar2 } from "./components/Navbar2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function FoodDetails() {
  const navigate = useNavigate();
  const navigateStartCooking = () => {
    navigate("/startCooking", { state: foodItem });
  };
  
  const location = useLocation();
  const [foodItem, setFoodItem] = useState<FoodItem>(
    location.state as FoodItem
  );
  const [servings, setServings] = useState(foodItem.servings);
  const [originalIngredients] = useState([...foodItem.ingredientList]);

  const parseIngredient = (
    ingredientString: string,
    scaleFactor: number
  ): string => {
    const match = ingredientString.match(/^(\d+(?:\.\d+)?)([a-zA-Z]+)\s(.+)$/);
    if (match) {
      const originalAmount = parseFloat(match[1]);
      const scaledAmount = originalAmount * scaleFactor;
      const roundedAmount = Math.round(scaledAmount * 100) / 100;
      return `${roundedAmount}${match[2]} ${match[3]}`;
    }
    return ingredientString;
  };

  useEffect(() => {
    const scaleFactor = servings / foodItem.servings;
    const parsedIngredients = originalIngredients.map((ingredient) =>
      parseIngredient(ingredient, scaleFactor)
    );
    setFoodItem((prev) => ({ ...prev, ingredientList: parsedIngredients }));
  }, [servings, originalIngredients, foodItem.servings]);

  const handlePortionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newServings = parseInt(e.target.value, 10);
    if (!isNaN(newServings) && newServings > 0) {
      setServings(newServings);
    }
  };

  return (
    <>
      <Navbar2 />
      <div
        className="px-[5%] mx-auto pt-[100px] pb-20 font-raleway w-full min-h-screen flex flex-col justify-start items-center"
        style={{
          backgroundImage: `url("/Background3.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="menu-box w-full rounded-xl shadow-xl h-[200px] bg-mainGreen flex flex-row justify-between items-center px-4 py-4">
          <img
            src={foodItem.picture}
            alt=""
            className="w-[45%] h-full rounded-2xl object-cover"
          />
          <div className="w-[52%] h-full px-2 text-cream">
            <div className="font-extrabold text-[20px]">{foodItem.name}</div>
            <div className="flex flex-row w-full mt-2">
              <b className="font-extrabold tracking-wide">Difficulty:</b>
              <div className="ml-2 font-medium">{foodItem.difficulty}</div>
            </div>
            <div className="flex flex-row w-full mt-2 justify-start items-center">
              <img src="./time-left.png" className="h-4 w-4" alt="" />
              <div className="ml-2 font-medium">{foodItem.cookTime}</div>
            </div>
            <div className="flex flex-row w-full mt-2 items-center">
              <label htmlFor="portion" className="mr-2">
                Servings:
              </label>
              <input
                id="portion"
                type="number"
                min="1"
                value={servings}
                onChange={handlePortionChange}
                className="w-16 px-2 py-1 text-darkGreen border border-darkGreen rounded"
              />
            </div>
          </div>
        </div>

        <div className="text-cream font-bold rounded-lg w-full p-4 mb-6 mt-4">
          <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
          <ul className="space-y-2">
            {foodItem.ingredientList.map((ingredient, index) => (
              <li key={index} className="flex items-center text-lg">
                <span className="mr-2">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center w-full h-32 pt-10">
          <img
            src="./startCooking.png"
            onClick={navigateStartCooking}
            className="hover:scale-[1.02] h-full w-[40%] transition-all ease-in duration-[200] cursor-pointer"
            alt="Start Cooking"
          />
        </div>
      </div>
    </>
  );
}
