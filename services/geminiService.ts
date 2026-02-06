
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthAdvice = async (symptoms: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: symptoms,
      config: {
        systemInstruction: "You are a friendly AI Health Assistant for Khan Sir Hospital. Provide helpful, concise health information. ALWAYS emphasize that this is not medical diagnosis and the user should consult our doctors. Be encouraging and empathetic.",
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our front desk.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting right now. Please call our emergency number 112 if you have an urgent issue.";
  }
};
