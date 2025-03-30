import fs from "fs";
import path from "path";
import { colorsZ } from "../colors"; // Ajuste conforme a estrutura do seu projeto
import z from "zod";

// Caminho para o arquivo JSON com as cores
const filePath = path.join(__dirname, "../colors.json");

// Carrega e valida o arquivo JSON
const loadColorsJson = () => {
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
};

describe("Color Schema", () => {
  it("should load and validate color data", () => {
    const jsonData = loadColorsJson();
    
    // Valida os dados carregados com o schema de Zod
    expect(() => colorsZ.parse(jsonData)).not.toThrow();
  });

 
});


