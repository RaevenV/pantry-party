import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Timer from "./components/Timer";
import Checkbox from "./components/Checkbox";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function StartCooking() {
  const location = useLocation();
  const { picture, name, difficulty, cookTime, servings, cookingStepsId } = location.state;
  
  const [cookingSteps, setCookingSteps] = useState<any[]>([]);
  // const getCookingStepsById = async (cookingStepsId: string) => {
  //   const stepsRef = doc(db, 'CookingSteps', cookingStepsId); // Adjust the collection name as needed
  //   const stepsDoc = await getDoc(stepsRef);

  //   if (stepsDoc.exists()) {
  //     // Return the cooking steps array, assuming it's stored under the 'steps' field
  //     return stepsDoc.data().steps;
  //   } else {
  //     throw new Error("No such document!");
  //   }
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
            src={picture}
            alt=""
            className="w-[45%] h-full rounded-2xl object-cover"
          />
          <div className="w-[52%] h-full px-2 text-cream">
            <div className="font-extrabold text-[20px]">{name}</div>
            <div className="flex flex-row w-full mt-2">
              <b className="font-extrabold tracking-wide">Difficulty:</b>
              <div className="ml-2 font-medium">{difficulty}</div>
            </div>
            <div className="flex flex-row w-full mt-2 justify-start items-center">
              <img src="./time-left.png" className="h-4 w-4" alt="" />
              <div className="ml-2 font-medium">{cookTime}</div>
            </div>
            <div className="flex flex-row mt-[5px] items-center bg-cream text-[#256B4A] rounded-lg pl-[8px] font-medium">
              {servings} portions
            </div>
          </div>
        </div>
        <div className="w-full text-left text-[#256B4A] text-[25px] mt-[10px] font-extrabold">FOLLOW THIS STEPS!</div>
        <div className="w-full text-left bg-[#256B4A] text-[#f5f5dc] p-[6px] text-[14px] rounded-xl p-[12px]">
          <Checkbox label="Chop potatoes"/>
          <Timer duration={300}/>
          {/* {cookingSteps.map((step, index) => (
            <div key={index}>
              <Checkbox label={step.name} />
              {step.isTimed && <Timer duration={step.duration} />}
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
