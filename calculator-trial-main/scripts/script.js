
var operation = "";
const getOperation = (val) =>{
    console.log("inside oper",val);
    operation = val;
    if(operation=="+"){
        console.log("yes")
    }else{
        console.log("no");
    }
}

const calc = () =>{
    let result;
    let firstNumber = parseInt(document.getElementById('firstInput').value);
    let secondNumber = parseInt(document.getElementById('secondInput').value);
    switch(operation){
        case "+": result = getSum(firstNumber,secondNumber);
                    break;
        case "-": result = getDifference(firstNumber,secondNumber);
                    break;
        case "*": result = getProduct(firstNumber,secondNumber);
                    break;
        case "/": result = getQuotient(firstNumber,secondNumber);
                    break;
        case "%": result = getRemainder(firstNumber,secondNumber);
                    break;
        default: result = "Incorrect operator";
    }

    document.getElementById('result-prompt').innerText = result;

}

//takes 2 parameters : firstnumber and secondNumber
//add the 2 numbers and return the sum
const getSum = (firstNumber,secondNumber) =>{
    
}

//takes 2 parameters : firstnumber and secondNumber
//subtract the numbers and return the difference
const getDifference = (firstNumber,secondNumber)=>{
    
}


//takes 2 parameters : firstnumber and secondNumber
//return the product of both number
const getProduct = (firstNumber,secondNumber) =>{

}


//takes 2 parameters : firstnumber and secondNumber
//return the quotient of both numbers
const getQuotient = (firstNumber,secondNumber) =>{
    if (secondNumber !== 0) {
        return firstNumber / secondNumber;
    } else {
    
        console.error("Error: Division by zero is not allowed.");
        return undefined;
    }

}


//returns the remainder
const getRemainder = (firstNumber,secondNumber) =>{
    console.log("This is remainder function");
    console.log("heyyy");
    return secondNumber%firstNumber;
}