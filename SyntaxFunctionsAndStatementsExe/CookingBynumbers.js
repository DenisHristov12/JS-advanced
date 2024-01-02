function cooking(...args) {
    let num = Number(args.shift());

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num += 1;
                console.log(num);
                break;
            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num -= num * 20/100;
                console.log(num);
                break;
            default:
                break;
        }
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 
'fillet' 
);