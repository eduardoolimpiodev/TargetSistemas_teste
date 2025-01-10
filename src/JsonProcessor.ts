import fs from "fs";

export class JsonProcessor {
  private data: { dia: number; valor: number }[];

  constructor(filePath: string) {
    this.data = this.loadJson(filePath);
  }

  private loadJson(filePath: string): { dia: number; valor: number }[] {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent);
    } catch (error) {
      throw new Error(`Erro ao carregar o arquivo JSON: ${error.message}`);
    }
  }

  public getMenorFaturamento(): number {
    return Math.min(...this.data.filter((d) => d.valor > 0).map((d) => d.valor));
  }

  public getMaiorFaturamento(): number {
    return Math.max(...this.data.map((d) => d.valor));
  }

  public getDiasAcimaDaMedia(): number {
    const media = this.getMedia();
    return this.data.filter((d) => d.valor > media).length;
  }

  private getMedia(): number {
    const faturamentoValido = this.data.filter((d) => d.valor > 0).map((d) => d.valor);
    return faturamentoValido.reduce((a, b) => a + b, 0) / faturamentoValido.length;
  }
}
