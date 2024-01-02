function addRemove(arr) {
    let num = 1;
    let result = [];

    arr.forEach((cmd) => {
        if(cmd === 'add'){
            result.push(num);
        }else{
            result.pop();
        }
        num++;
    });
    
    let output = result.length >= 1 ? result.join("\n") : "Empty";
    console.log(output);
}

addRemove(['add',  
'add',  
'remove',  
'add',  
'add'] 
);