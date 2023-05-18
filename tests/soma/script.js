function soma(n1, n2) {
  try {
    if (n1 >= 0 && n2 >= 0) {
      return n1 + n2;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

module.exports = { soma };
