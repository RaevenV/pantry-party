import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FoodItem } from "./Home";
import { Navbar } from "./components/Navbar";
import Timer from "./components/Timer";

export function StartCooking() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const location = useLocation();
  const [foodItem, setFoodItem] = useState<FoodItem>(
    location.state as FoodItem
  );
  const [servings, setServings] = useState(foodItem.servings);
  const [originalIngredients] = useState([...foodItem.ingredientList]);
  const handlePortionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newServings = parseInt(e.target.value, 10);
    if (!isNaN(newServings) && newServings > 0) {
      setServings(newServings);
    }
  };

  // useEffect(() => {
  //   const scaleFactor = servings / foodItem.servings;
  //   const parsedIngredients = originalIngredients.map((ingredient) =>
  //     parseIngredient(ingredient, scaleFactor)
  //   );
  //   setFoodItem((prev) => ({ ...prev, ingredientList: parsedIngredients }));
  // }, [servings, originalIngredients, foodItem.servings]);

  // const parseIngredient = (ingredientString: string, scaleFactor: number): string => {
  //   const match = ingredientString.match(/^(\d+(?:\.\d+)?)([a-zA-Z]+)\s(.+)$/);
  //   if (match) {
  //     const originalAmount = parseFloat(match[1]);
  //     const scaledAmount = originalAmount * scaleFactor;
  //     const roundedAmount = Math.round(scaledAmount * 100) / 100;
  //     return `${roundedAmount}${match[2]} ${match[3]}`;
  //   }
  //   return ingredientString;
  // };

  return (
    <>
      <Navbar />
      <div
        className="w-full pt-[80px] min-h-screen flex flex-col justify-start items-center px-6 font-raleway pb-20"
        style={{
          backgroundImage: `url("./Background.png")`,
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
            <div className="flex flex-row mt-[5px] items-center bg-cream text-[#256B4A] rounded-lg pl-[8px] font-medium">
              1-2 portions
            </div>
          </div>
        </div>
        <div className="w-full text-left text-[#256B4A] text-[25px] mt-[10px] font-extrabold">FOLLOW THIS STEPS!</div>
        <div className="w-full text-left bg-[#256B4A] text-[#f5f5dc] p-[6px] text-[14px] rounded-xl p-[10px]">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="hidden" // Hide the default checkbox
            />
            <div
              className={`appearance-none h-4 w-4 border-2 border-[#f5f5dc] rounded-[2px] mr-2 flex items-center justify-center ${
                isChecked ? 'bg-[#f5f5dc]' : 'bg-transparent'
              }`}
            >
              {isChecked && (
                <span className="text-[#256B4A]" style={{ fontSize: '20px' }}>
                  ✔
                </span>
              )}
            </div>
            Chop lettuce into bite size pieces (500gr)
          </label>
          <Timer />
        </div>
      </div>
    </>
  );
}
