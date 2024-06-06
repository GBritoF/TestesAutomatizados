import divisao from "./divisao";

describe('Testes de divisão', () => {
    test('Deve verificar o resultado da divisão', () => {
        expect(divisao(5, 2)).toBe(2.5)
        expect(divisao(10, 4)).toBe(2.5)
        expect(divisao(20, 2)).toBe(10)
    })

    test('Verificar o resultado incorreto de uma divisão', () => {
        expect(divisao(6, 2)).not.toBe(4)
    })
})