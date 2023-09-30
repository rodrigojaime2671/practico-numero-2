function buscarElementos (inputData, flag) {
    const resultado = inputData.filter(item => {
        if (flag === 'startsWithA') {
          return  typeof item === 'string' && item.startsWith('A') 
        } else if (flag === 'contains1') {
            return typeof item === 'number' || (typeof item === 'string' && item.includes('1'))
        } else if (flag === 'startsWithNot1') {
            return typeof item === 'string' && !item.startsWith('1')
        }
    });

    return resultado;
}

const input1 = ["Aba", "AAb", "b", "B"];
const input2 = [1, "2", "0", "1b", "1"];
const input3 = [1, "2", "0", "1b", "1"];

const output1 = buscarElementos(input1, "startsWithA");
const output2 = buscarElementos(input2, "contains1");
const output3 = buscarElementos(input3, "startsWithNot1");

console.log("Output 1:", output1); 
console.log("Output 2:", output2);
console.log("Output 3:", output3);