function fib(num){
    if (num == 0){
        return 0;
    }
    else if (num == 1){
        return 1;
    }
    else{
        return fib(num - 1) + fib(num - 2);
    }

}

let testArrs = [4, 1, 1000, 4000000, 75024, 75025];
// let testArrs = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < testArrs.length; i++){
    let ans = fib(testArrs[i]);
    console.log(ans);
}