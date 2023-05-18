let Conta = class {
  constructor(nome, codigo, saldo) {
    this.nome = nome;
    this.codigo = codigo;
    this.saldo = saldo;
  }
};

const conta1 = new Conta("Fulano", 123, 0);
const conta2 = new Conta("Jubileu", 321, 100);

usuarios = [conta1, conta2];

function sacar(valor, codigo) {
  try {
    if (valor >= 0 && codigo) {
      const destino = usuarios.find((user) => user.codigo === Number(codigo));
      if (destino) {
        if (destino.saldo >= valor) {
          destino.saldo -= valor;
          return true;
        }
      }
    }
    return null;
  } catch (error) {
    return null;
  }
}

module.exports = { sacar };
