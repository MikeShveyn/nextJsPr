 'use server';

 import { saveMeal } from "./meals";
 import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text.title || text.title.trim() === ""
}

 export async function shareMeal(prevState ,fromData) {
    const meal = {
        title : fromData.get('title'),
        summary : fromData.get('summary'),
        instructions : fromData.get('instructions'),
        image : fromData.get('image'),
        creator : fromData.get('name'),
        creator_email : fromData.get('email'),
    }
    console.log(meal)
    if(isInvalidText(meal.title) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) || 
      isInvalidText(meal.creator) || 
      isInvalidText(meal.creator_email) ||
      !meal.creator_email.includes('@') ||
      !meal.image || meal.image.size === 0
    ) {
      return  {
        message: 'Invalid input'
      }
    }

    await saveMeal(meal)
    redirect('/meals')
  }