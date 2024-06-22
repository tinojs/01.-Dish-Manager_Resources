function printEvenPowersof2(input) {
    let n = Number(input[0]);
    for(let i = 0; i <= n; i++){
    
        let powerOf2 = Math.pow(2,i);
        if (i % 2 === 0) {
            console.log(powerOf2);
        
        }
    }
    
    
    
    }
    printEvenPowersof2(["3"]);