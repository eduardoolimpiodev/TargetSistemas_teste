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
const JsonProcessor_1 = require("./JsonProcessor");
const XmlProcessor_1 = require("./XmlProcessor");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("=== Processando JSON ===");
            const jsonProcessor = new JsonProcessor_1.JsonProcessor("dados.json");
            console.log("Menor Faturamento (JSON):", jsonProcessor.getMenorFaturamento());
            console.log("Maior Faturamento (JSON):", jsonProcessor.getMaiorFaturamento());
            console.log("Dias Acima da Média (JSON):", jsonProcessor.getDiasAcimaDaMedia());
            console.log("\n=== Processando XML ===");
            const xmlProcessor = new XmlProcessor_1.XmlProcessor("dados.xml");
            console.log("Menor Faturamento (XML):", yield xmlProcessor.getMenorFaturamento());
            console.log("Maior Faturamento (XML):", yield xmlProcessor.getMaiorFaturamento());
            console.log("Dias Acima da Média (XML):", yield xmlProcessor.getDiasAcimaDaMedia());
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Erro:", error.message);
            }
            else {
                console.error("Erro desconhecido:", error);
            }
        }
    });
}
main();
