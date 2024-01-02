function circleArea(arg) {
    let result = 0;
    
    if(typeof(arg) === "number"){
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
    }
}

circleArea("sjk");