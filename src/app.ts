let initData: number[] = [];
let results: number[] = [];
let squareRootResults: number[] = [];

    for (let i:number = 1; i < 101; i++) {
        initData.push(i);
    }
    for (let r:number = 1; r < initData.length + 1; r++) {
        let newVal: number = r + 2;
        if (newVal % 2 === 0) {
            results.push(newVal);
            let squareRoot: number = Math.sqrt(newVal);
            squareRootResults.push(squareRoot);
            if (squareRoot > 7) {
                console.log(`squareRoot большее 7: `, squareRoot);
                
            }
        }
    }

    console.log(`squareRootResults: `, squareRootResults);
    console.log(`results: `, results);
    console.log(`initData: `, initData);