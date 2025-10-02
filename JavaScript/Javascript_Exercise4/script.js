
function script() {

    let firstNum = prompt("Enter your first number:") ;
    let secondNum = prompt("Enter your second number:") ;
    
    let addition = Number(firstNum) + Number(secondNum);        
    let subtraction = Number(firstNum) - Number(secondNum);     
    let multiplication = Number(firstNum) * Number(secondNum);  
    let division = Number(firstNum) / Number(secondNum);        
    let remainder = Number(firstNum) % Number(secondNum);
    let exponential = Number(firstNum) ** Number(secondNum);
    let average = (Number(firstNum) + Number(secondNum))/2;
    let isNum1Greater = (firstNum > secondNum);
    let largerNumber = Math.max(firstNum, secondNum);
    

    console.log("======Calculator======"); 
    console.log(`First Number: ${firstNum}`);
    console.log(`Second Number: ${secondNum}`);

    console.log("")// Empty line for spacing

    console.log(`Addition: ${firstNum} + ${secondNum} = ${addition}`);
    console.log(`Subtraction: ${firstNum} - ${secondNum} = ${subtraction}`);
    console.log(`Multiplication: ${firstNum} * ${secondNum} = ${multiplication}`);
    console.log(`Division: ${firstNum} / ${secondNum} = ${division}`);
    console.log(`Remainder: ${firstNum} % ${secondNum} = ${remainder}`);
    console.log(`Exponentiation: ${firstNum} ** ${secondNum} = ${exponential}`);
    console.log(`Average: (${firstNum} + ${secondNum})/2 = ${average}`);
    console.log(`Is the first number greater than the second number? ${isNum1Greater}`);
    console.log(`Between ${firstNum} and ${secondNum}, the LARGER number is: ${largerNumber}`);
}