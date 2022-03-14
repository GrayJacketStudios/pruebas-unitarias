
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const raizCuadrada = (a) => Math.sqrt(a);

const esPar = (a) => (a & 1) === 0;

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    raizCuadrada,
    esPar
};