function largest(num1, num2, num3) {
    let largestNum = num1;

    if(num2 > num1 && num2 > num3){
        largestNum = num2;
    }else if(num3 > num1 && num3 > num2){
        largestNum = num3;
    }else{
        largestNum = num1;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largest(5, 4, 3);