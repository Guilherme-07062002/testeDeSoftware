const sacar = require("../conta_bancaria/script").sacar;

describe("Testando funções - Conta Bancária", () => {
  describe("Saque", () => {
    it("Saque bem sucedido", () => {
      expect(sacar(50, 321)).toBe(true);
    });

    it("Codigo inválido", () => {
      expect(sacar(50, 0)).toBe(null);
    });

    it("Saldo insuficiente", () => {
      expect(sacar(50, 123)).toBe(null);
    });
  });
});
