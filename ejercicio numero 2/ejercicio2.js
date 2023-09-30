function clasificarArrays (inputData) {
    const output = {
        w:[],
        z:[],
        x:[]
    }

    inputData.forEach (item => {
        if (typeof item === 'number') {
            output.w.push(item) 
        } else if (typeof item === 'string') {
            output.z.push(item)
        } else {
            output.x.push (null)
        }
    })

    return output;
}

const input1 = [1, 2, "B", "C", "B"];
 
const output1 = clasificarArrays(input1);

console.log(output1); // { w: [1, 2], z: ['B', 'C', 'B'], x: [] }
  