"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
describe('Testes de multiplicação', () => {
    test('Deve verificar o resultado da multiplicação', () => {
        expect((0, multiplicacao_1.default)(6.5, 2)).toBe(13);
        expect((0, multiplicacao_1.default)(2, 8)).toBe(16);
        expect((0, multiplicacao_1.default)(60, 2)).toBe(120);
    });
    test('Deve verificar o resultado incorreto de uma multiplicação', () => {
        expect((0, multiplicacao_1.default)(6, 2)).not.toBe(15);
    });
});
