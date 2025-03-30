import { z } from "zod";
import fs from "fs";
import path from "path";

// Definindo um esquema para as cores no formato hexadecimal
const colorSchema = z.object({
  "50": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "100": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "200": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "300": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "400": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "500": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "600": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "700": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "800": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  "900": z.string().regex(/^#[0-9A-Fa-f]{6}$/),
});

// Define o esquema das cores principais (red, blue, green, etc.)
const colorsSchemaZ = z.object({
    red: colorSchema,
    blue: colorSchema,
    green: colorSchema,
    yellow: colorSchema,
    purple: colorSchema,
    gray: colorSchema,
    orange: colorSchema,
    pink: colorSchema,
    teal: colorSchema,
    brown: colorSchema,
    indigo: colorSchema,
    cyan: colorSchema,
    lime: colorSchema,
    magenta: colorSchema,
    olive: colorSchema,
    navy: colorSchema,
    beige: colorSchema,
    lavender: colorSchema,
    gold: colorSchema,
    charcoal: colorSchema,
    bronze: colorSchema,
    platinum: colorSchema,
    coral: colorSchema,
    mint: colorSchema,
    peach: colorSchema,
    steel: colorSchema,
    turquoise: colorSchema,
    violet: colorSchema,
    silver: colorSchema,
  });
  
  // Esquema principal para validar todo o objeto JSON
  const mainSchema = z.object({
    colors: colorsSchemaZ,
  });

// Caminho do arquivo JSON
const filePath = path.join(__dirname, "./colors.json");

// Função para carregar o JSON do arquivo
const loadJsonData = (): unknown => {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Erro ao carregar o arquivo JSON:", error);
    return {};
  }
};



// Carregar os dados e validar
const jsonData = loadJsonData();


// Exemplo de exportação de esquema
export const colors = mainSchema.parse(jsonData);
export const colorsZ = mainSchema;


