function sameNums(num) {
    let numArr = num.toString().split("").map((el) => Number(el));
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numArr.length; i++) {
        let currNum = numArr[i];
        sum += currNum;

        if(numArr[0] !== currNum){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);

sameNums(1234);