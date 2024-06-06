import subtracao from './subtracao'

describe('Testes de subtração', () => {
    test('Deve verificar o resultado de uma subtração', () => {
        expect(subtracao(11, 5)).toBeCloseTo(6)
        expect(subtracao(3, 1)).toBeCloseTo(2)
        expect(subtracao(15, 5)).toBeCloseTo(10)
    })

    test('Deve verificar o resultado incorreto de uma subtração', () => {
        expect(subtracao(11, 5)).not.toBeCloseTo(5)
    })
})