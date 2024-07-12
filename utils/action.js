'use server'
import OpenAI from "openai"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY1);
const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,


});
//FOR
export const generateChatResponse = async (chatMessages) => {
    try {

        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are helpful assistant' },
                ...chatMessages
            ],
            model: 'gpt-3.5-turbo',
            temprature: 0,

        })

        return response.choices[0].message;
    }
    catch (error) {
        console.log(chatMessages);
        return null;

    }

    console.log(response.choices[0].message);

    // return "awesome";
}



export const getExistingTour = async ({ city, country }) => {

    return null;
}
export const generatetTourResponse = async ({ city, country }) => {

    return null
}
export const createNewTour = async ({ tour }) => {

    return null
}