function somaCpf(value) {
    value = value.split(/[\D]/)

    value = value[0].concat(value[1], value[2], value[3])

    let somatorio = 0

    for (let index = 0; index < 11; index++) {
        somatorio += parseInt(value[index])
    }

    return somatorio
}

module.exports = { somaCpf };