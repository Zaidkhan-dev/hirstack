
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  private initializeAI() {
    if (!this.ai) {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async getCareerAdvice(userInterests: string) {
    this.initializeAI();
    
    const prompt = `You are a professional career advisor at "hirstack", an elite IT training institute. 
    A prospective student is interested in: "${userInterests}".
    
    Recommend a specific learning path from our offerings:
    1. Full Stack Web Development (React, Node.js)
    2. Data Science & Machine Learning (Python, AI)
    3. Cloud Engineering & DevOps (AWS, Azure)
    4. Cybersecurity Specialist
    5. Mobile App Development (Flutter, React Native)
    
    Provide a concise, encouraging response (max 150 words) that explains WHY that path fits them and what the first step is. Use professional yet approachable tone.`;

    try {
      if (!this.ai) throw new Error("API not initialized");
      
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 0.95,
        }
      });
      return response.text || "I'm having trouble connecting right now, but please reach out to our human advisors!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Unable to get advice at this moment. Please check back later.";
    }
  }
}

export const geminiService = new GeminiService();
