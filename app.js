"use strict";
let initData = [];
let results = [];
let squareRootResults = [];
for (let i = 1; i < 101; i++) {
    initData.push(i);
}
for (let r = 1; r < initData.length + 1; r++) {
    let newVal = r + 2;
    if (newVal % 2 === 0) {
        results.push(newVal);
        let squareRoot = Math.sqrt(newVal);
        squareRootResults.push(squareRoot);
        if (squareRoot > 7) {
            console.log(`squareRoot большее 7: `, squareRoot);
        }
    }
}
console.log(`squareRootResults: `, squareRootResults);
console.log(`results: `, results);
console.log(`initData: `, initData);
