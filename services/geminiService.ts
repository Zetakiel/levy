import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTangoLyrics = async (theme: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada. Por favor configure su API KEY.";
  }

  try {
    const prompt = `
      Actúa como Claudia Levy, la compositora de tango argentina. 
      Escribe una estrofa corta de tango (4-6 versos) sobre el tema: "${theme}".
      El estilo debe ser:
      1. Irónico y mordaz.
      2. Con lenguaje rioplatense (lunfardo sutil).
      3. Una perspectiva moderna o feminista, desafiando clichés.
      4. Melancólico pero con fuerza.
      
      Solo devuelve la letra, sin introducciones ni explicaciones.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "El bandoneón se quedó mudo... intenta de nuevo.";
  } catch (error) {
    console.error("Error generating lyrics:", error);
    return "Hubo un error al invocar a las musas del arrabal. Intenta más tarde.";
  }
};
