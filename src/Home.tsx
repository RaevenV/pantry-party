import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import {BatchAddCookingSteps} from "./firebaseUtils.ts";
import Background from "/Background.png";
import { Navbar } from "./components/Navbar";
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  ingredientList: string[];
  picture: string;
  difficulty: string;
}

export function Home() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // const handleBatchAdd = async () => {
  //   const CookingSteps = [
  //     {
  //       id: 4,
  //       name: "Garlic Butter Shrimp",
  //       description:
  //         "Succulent shrimp cooked in a rich garlic butter sauce with a hint of lemon.",
  //       difficulty: "easy",
  //       prepTime: "10 minutes",
  //       cookTime: "10 minutes",
  //       servings: 2,
  //       ingredientList: [
  //         "200g shrimp, peeled and deveined",
  //         "30g butter",
  //         "4 cloves garlic, minced",
  //         "1 tbsp lemon juice",
  //         "Salt",
  //         "Pepper",
  //         "Fresh parsley, chopped (for garnish)",
  //       ],
  //       cookingStepsId: [1,2],
  //     },
  //   ];

  //   await BatchAddCookingSteps(CookingSteps);
  // };

  useEffect(() => {
    const fetchFoodItems = async () => {
      const foodItemsCollection = collection(db, "FoodItems");
      const foodItemsSnapshot = await getDocs(foodItemsCollection);
      const foodItemsList = foodItemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as FoodItem[];
      setFoodItems(foodItemsList);
    };

    fetchFoodItems();
  }, []);

  const handleCardClick = (item: FoodItem) => {
    navigate(`/foodDetails`, { state: item });
  };

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div
        className="w-full pt-[80px] min-h-screen flex flex-col justify-start items-center px-6 font-raleway pb-20"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* searchbar */}
        <div className="w-full flex flex-row justify-between items-center h-16 ">
          <input
            name="search"
            type="text"
            placeholder="search for recipes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[85%] h-[70%] bg-white rounded-xl px-4 focus:border-0 shadow-md placeholder-darkGreen focus:outline-none text-darkGreen font-bold text-[14px]"
          />
          <img src="./profile.png" className="w-12 h-12 " alt="" />
        </div>

        {/* welcome greetings */}
        <div className="mt-4 w-full h-20 flex flex-col justify-start items-start font-kanit">
          <div className="text-[24px] font-extrabold text-darkGreen ">
            SEARCH YOUR NEXT
          </div>
          <div className="text-[24px] font-extrabold text-darkGreen ">
            MEAL <b className="text-mainGreen italic">WITH US!</b>
          </div>
        </div>

        {/* buat ngeseed db */}
        {/* <button
        onClick={handleBatchAdd}
        className="bg-red-500 text-white p-2 rounded"
      >
        Add Cooking Step
      </button> */}

        {/* cards */}
        <div className="mt-6 w-full h-auto flex flex-wrap flex-row justify-between items-start gap-y-4">
          {searchTerm
            ? filteredFoodItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[48%] h-80 bg-white rounded-xl shadow-xl hover:bg-[#256B4A] hover:scale-[1.02] transition-all duration-[400] flex flex-col items-center justify-start cursor-pointer pt-2"
                  onClick={() => handleCardClick(item)}
                >
                  <img
                    src={item.picture}
                    alt=""
                    className="h-[60%] w-[92%] rounded-lg"
                  />
                  <div className="w-full h-[40%] flex justify-center items-center px-2 py-2">
                    <div className="w-full h-full bg-cream rounded-md text-sm font-medium font-archivo px-2 pt-1 flex flex-col justify-start items-start">
                      <span className="font-bold text-[14px] mb-1">
                        {item.name}
                      </span>
                      <span className="text-[10px]">
                        prep time: {item.prepTime}
                      </span>
                      <span className="text-[10px]">
                        cook time: {item.cookTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : foodItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[48%] h-80 bg-white rounded-xl shadow-xl hover:bg-[#256B4A] hover:scale-[1.02] transition-all duration-[400] flex flex-col items-center justify-start cursor-pointer pt-2"
                  onClick={() => handleCardClick(item)}
                >
                  <img
                    src={item.picture}
                    alt=""
                    className="h-[60%] w-[92%] rounded-lg object-cover"
                  />
                  <div className="w-full h-[40%] flex justify-center items-center px-2 py-2">
                    <div className="w-full h-full bg-cream rounded-md text-sm font-medium font-archivo px-2 pt-1 flex flex-col justify-start items-start">
                      <span className="font-bold text-[16px] mb-1">
                        {item.name}
                      </span>
                      <span>prep time: {item.prepTime}</span>
                      <span>cook time: {item.cookTime}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
