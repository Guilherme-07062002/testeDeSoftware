const soma = require("./script").soma

describe("Testando função soma", () => {
  it("Somando dois números", () => {
    expect(soma(2, 2)).toBe(4);
  });

  it("Inserindo número inválido", () => {
    expect(soma(-3, 2)).toBe(null);
  });
});
