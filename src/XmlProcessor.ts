import * as fs from "fs";
import * as path from "path";
import { parseStringPromise } from "xml2js";

export class XmlProcessor {
  private data: { dia: number; valor: number }[] = [];

  constructor(filePath: string) {
    this.loadXml(filePath);
  }

  private async loadXml(filePath: string): Promise<void> {
    try {
      const absolutePath = path.resolve(filePath);
      const fileContent = fs.readFileSync(absolutePath, "utf-8");
      const parsed = await parseStringPromise(`<root>${fileContent}</root>`);
      this.data = parsed.root.row.map((row: any) => ({
        dia: Number(row.dia[0]),
        valor: Number(row.valor[0]),
      }));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao carregar o arquivo XML: ${error.message}`);
      } else {
        throw new Error(`Erro desconhecido ao carregar o arquivo XML.`);
      }
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
