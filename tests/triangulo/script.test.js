const typeTriangle = require("./script").typeTriangle;

describe("Testando função verificar triangulo", () => {
  it("Deve sair equilatero", () => {
    expect(typeTriangle(10, 10, 10)).toBe("Triângulo equilátero");
  });
  it("Deve sair escaleno", () => {
    expect(typeTriangle(10, 8, 6)).toBe("Triângulo escaleno");
  });

  it("Deve sair isóceles", () => {
    expect(typeTriangle(10, 10, 6)).toBe("Triângulo isóceles");
  });
});
