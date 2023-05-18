const sacar = require("../conta_bancaria/script").sacar

describe("Testando funções - Conta Bancária", () => {
  describe("Saque", () => {
    it("Saque bem sucedido", () => {
      sacar(100);
    });
  });
});
