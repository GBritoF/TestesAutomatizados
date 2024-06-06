"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = __importDefault(require("./soma"));
describe('Teste soma', () => {
    test('verificar soma', () => {
        expect((0, soma_1.default)(3, 8)).toBe(11);
    });
    test('Verifica soma incorreta', () => {
        expect((0, soma_1.default)(3, 4)).not.toBe(13);
    });
});
