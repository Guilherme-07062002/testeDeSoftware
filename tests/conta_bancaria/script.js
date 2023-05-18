function sacar(quantidade) {
  try {
    if (quantidade >= 0) {
      return true;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

module.exports = { sacar };
