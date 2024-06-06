"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const divisao_1 = __importDefault(require("./divisao"));
describe('Testes de divisão', () => {
    test('Deve verificar o resultado da divisão', () => {
        expect((0, divisao_1.default)(5, 2)).toBe(2.5);
        expect((0, divisao_1.default)(10, 4)).toBe(2.5);
        expect((0, divisao_1.default)(20, 2)).toBe(10);
    });
    test('Verificar o resultado incorreto de uma divisão', () => {
        expect((0, divisao_1.default)(6, 2)).not.toBe(4);
    });
});
