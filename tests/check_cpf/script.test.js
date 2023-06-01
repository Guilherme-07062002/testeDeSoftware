const somaCpf = require('./script').somaCpf

test('Validar CPF', () => {
    let value = somaCpf("090.623.324-50")
    expect(value).toBeGreaterThanOrEqual(33);
    expect(value).toBeLessThanOrEqual(55);
});
