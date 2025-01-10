"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlProcessor = void 0;
const fs = require("fs");
const path = require("path");
const xml2js_1 = require("xml2js");
class XmlProcessor {
    constructor(filePath) {
        this.data = [];
        this.loadXml(filePath);
    }
    loadXml(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const absolutePath = path.resolve(filePath);
                const fileContent = fs.readFileSync(absolutePath, "utf-8");
                const parsed = yield (0, xml2js_1.parseStringPromise)(`<root>${fileContent}</root>`);
                this.data = parsed.root.row.map((row) => ({
                    dia: Number(row.dia[0]),
                    valor: Number(row.valor[0]),
                }));
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Erro ao carregar o arquivo XML: ${error.message}`);
                }
                else {
                    throw new Error(`Erro desconhecido ao carregar o arquivo XML.`);
                }
            }
        });
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
exports.XmlProcessor = XmlProcessor;
