import multiplicacao from './multiplicacao'

describe('Testes de multiplicação', () => {
    test('Deve verificar o resultado da multiplicação', () => {
        expect(multiplicacao(6.5, 2)).toBe(13)
        expect(multiplicacao(2, 8)).toBe(16)
        expect(multiplicacao(60, 2)).toBe(120)
    }) 

    test('Deve verificar o resultado incorreto de uma multiplicação', () => {
        expect(multiplicacao(6,2)).not.toBe(15)
    }) 
})