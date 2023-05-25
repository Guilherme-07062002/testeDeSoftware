function typeTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
      return "Triângulo equilátero";
    } else if (a == b || a == c || c == b) {
      return "Triângulo isóceles";
    } else {
      return "Triângulo escaleno";
    }
  } else {
    return "Nenhuma medida foi informada!";
  }
}

module.exports = { typeTriangle };
