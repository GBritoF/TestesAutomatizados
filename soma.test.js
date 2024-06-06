const soma = require('./soma')

describe('Teste soma', () => {
    test('verificar soma', () => {
        expect(soma(3, 8)).toBe(11)
    })

    test('Verifica soma incorreta', () => {
        expect(soma(3, 4)).not.toBe(13)
    })
})