function agruparValores(input) {
    const agrupados = {
        booleanos: [],
        numeros: {},
        nulosCeros: [],
    };

    for (const valor of input) {
        if (typeof valor === 'boolean') {
            agrupados.booleanos.push(valor);
        }

        if (typeof valor === 'number') {
            if (!agrupados.numeros[valor]) {
                agrupados.numeros[valor] = 0;
            }
            agrupados.numeros[valor]++;
        }

        if (valor === null || valor === 0) {
            agrupados.nulosCeros.push(valor);
        }
    }

    const resultado = [];

    if (agrupados.booleanos.length > 0) {
        resultado.push(...agrupados.booleanos);
    }

    for (const numero in agrupados.numeros) {
        if (agrupados.numeros.hasOwnProperty(numero) && agrupados.numeros[numero] > 2) {
            resultado.push(Number(numero));
        }
    }

    if (agrupados.nulosCeros.length > 0) {
        resultado.push(...agrupados.nulosCeros);
    }

    return resultado;
}

const input1 = [1, 2, 3, "A", "A", "B", 2, 2];
const input2 = [1, "B", "C", true, true, 1];
const input3 = ["B", "B", 1, 1, 1, 2, 2, 0];

const output1 = agruparValores(input1);
const output2 = agruparValores(input2);
const output3 = agruparValores(input3);

console.log(output1);
console.log(output2);
console.log(output3);
