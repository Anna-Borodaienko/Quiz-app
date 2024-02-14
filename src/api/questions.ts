import { Questions } from "../types/questions";

const jsonFilePath = 'questions.json';

export const getQuestions = async(): Promise<Questions | string> => {
  try {
    const response = await fetch(jsonFilePath);
    if (response) return response.json();
      else return 'Questions are not found';
  } catch {} return 'An error occurred while fetching the questions.'
};

export const getTotalQuestNr = async(): Promise<number> => {
  try {
    const response = await fetch(jsonFilePath);
    if (response) return Object.keys(response.json()).length; 
      else return 0;
  } catch {} return 0;
}
