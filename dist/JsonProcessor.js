"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonProcessor = void 0;
const fs = require("fs");
const path = require("path");
class JsonProcessor {
    constructor(filePath) {
        this.data = this.loadJson(filePath);
    }
    loadJson(filePath) {
        try {
            const absolutePath = path.resolve(filePath);
            const fileContent = fs.readFileSync(absolutePath, "utf-8");
            return JSON.parse(fileContent);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao carregar o arquivo JSON: ${error.message}`);
            }
            else {
                throw new Error(`Erro desconhecido ao carregar o arquivo JSON.`);
            }
        }
    }
    getMenorFaturamento() {
        return Math.min(...this.data.filter((d) => d.valor > 0).map((d) => d.valor));
    }
    getMaiorFaturamento() {
        return Math.max(...this.data.map((d) => d.valor));
    }
    getDiasAcimaDaMedia() {
        const media = this.getMedia();
        return this.data.filter((d) => d.valor > media).length;
    }
    getMedia() {
        const faturamentoValido = this.data.filter((d) => d.valor > 0).map((d) => d.valor);
        return faturamentoValido.reduce((a, b) => a + b, 0) / faturamentoValido.length;
    }
}
exports.JsonProcessor = JsonProcessor;
