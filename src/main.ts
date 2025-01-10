import { JsonProcessor } from "./JsonProcessor";
import { XmlProcessor } from "./XmlProcessor";

async function main() {
  try {
    console.log("=== Processando JSON ===");
    const jsonProcessor = new JsonProcessor("dados.json");
    console.log("Menor Faturamento (JSON):", jsonProcessor.getMenorFaturamento());
    console.log("Maior Faturamento (JSON):", jsonProcessor.getMaiorFaturamento());
    console.log("Dias Acima da Média (JSON):", jsonProcessor.getDiasAcimaDaMedia());

    console.log("\n=== Processando XML ===");
    const xmlProcessor = new XmlProcessor("dados.xml");
    console.log("Menor Faturamento (XML):", await xmlProcessor.getMenorFaturamento());
    console.log("Maior Faturamento (XML):", await xmlProcessor.getMaiorFaturamento());
    console.log("Dias Acima da Média (XML):", await xmlProcessor.getDiasAcimaDaMedia());
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

main();
