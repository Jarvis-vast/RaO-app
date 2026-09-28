// ILLMProvider.ts
export interface ILLMProvider {
  generateText(prompt: string, options?: any): Promise<string>;
  generateStructured<T>(prompt: string, schema: any, options?: any): Promise<T>;
}
