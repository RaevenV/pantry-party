import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  ingredientList: string[];
}

export function Home() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    <div className="w-full mt-[85px] min-h-screen flex flex-col justify-start items-center px-6 mb-20 font-raleway">
      {/* searchbar */}
      <div className="w-full flex flex-row justify-between items-center h-16 ">
        <input
          name="search"
          type="text"
          placeholder="search for menus"
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

      {/* cards */}
      <div className="mt-6 w-full h-auto flex flex-wrap flex-row justify-between items-start gap-y-4">
        {searchTerm
          ? filteredFoodItems.map((item) => (
              <div
                key={item.id}
                className="w-[48%] h-52 bg-mainGreen rounded-xl shadow-md flex items-center justify-center"
                onClick={() => handleCardClick(item)} 
              >
                <div className="text-white">{item.name}</div>
              </div>
            ))
          : foodItems.map((item) => (
              <div
                key={item.id}
                className="w-[48%] h-52 bg-mainGreen rounded-xl shadow-md flex items-center justify-center"
                onClick={() => handleCardClick(item)}
              >
                <div className="text-white">{item.name}</div>
              </div>
            ))}
      </div>
    </div>
  );
}
