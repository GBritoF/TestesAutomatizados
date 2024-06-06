const soma = require('./soma')

test('verificar soma', () => {
    expect(soma(3, 8)).toBe(11)
})