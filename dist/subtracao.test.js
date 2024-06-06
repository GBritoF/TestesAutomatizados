"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subtracao_1 = __importDefault(require("./subtracao"));
describe('Testes de subtração', () => {
    test('Deve verificar o resultado de uma subtração', () => {
        expect((0, subtracao_1.default)(11, 5)).toBeCloseTo(6);
        expect((0, subtracao_1.default)(3, 1)).toBeCloseTo(2);
        expect((0, subtracao_1.default)(15, 5)).toBeCloseTo(10);
    });
    test('Deve verificar o resultado incorreto de uma subtração', () => {
        expect((0, subtracao_1.default)(11, 5)).not.toBeCloseTo(5);
    });
});
