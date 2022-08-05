let total ;
let numbers = [1,2,3,4,5];
let sumArr =[];
let min,max=0;


const sum = numbers.reduce((total, value) => total + value, 0); 
    for(let i=0;i<numbers.length;i++){
        let temp = numbers[i];
        total =sum-temp; 
        sumArr.push(total)
        }
console.log('Minimal : ',Math.min(...sumArr));
console.log('Maximum : ',Math.max(...sumArr));
