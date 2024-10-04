import { db } from "../firebaseConfig";
import { collection, writeBatch, doc } from "firebase/firestore";

interface CookingStep {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredientList: string[];
  cookingStepsId: number[];
}

export const BatchAddCookingSteps = async (steps: CookingStep[]) => {
  const batch = writeBatch(db);

  steps.forEach((step) => {
    const stepRef = doc(collection(db, "FoodItems"));
    batch.set(stepRef, step);
  });

  try {
    await batch.commit();
    console.log("Batch write successful");
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};
