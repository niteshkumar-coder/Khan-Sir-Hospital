
import { GoogleGenAI } from "@google/genai";

/**
 * Safely initializes the GoogleGenAI client.
 * Returns null if the API key is missing to prevent constructor errors.
 */
const getAIClient = () => {
  try {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    if (!apiKey) return null;
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Failed to initialize Gemini Client:", e);
    return null;
  }
};

export const getHealthAdvice = async (symptoms: string) => {
  try {
    const ai = getAIClient();
    if (!ai) {
      return "I'm currently in offline mode. Please call our emergency number +91 62002 88285 for immediate assistance.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: symptoms,
      config: {
        systemInstruction: "You are a friendly AI Health Assistant for Khan Sir Hospital. Provide helpful, concise health information. ALWAYS emphasize that this is not medical diagnosis and the user should consult our doctors. Be encouraging and empathetic.",
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please consult one of our specialists.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the medical database. Please call our helpline for expert advice.";
  }
};
