function isPowerOfThree(n){
    if(n <= 0) return false; //checks if the number is less than 0 or zero
    while(n > 1){
        if(n % 3 !== 0){
            return false; // 'n' is not divisible by 3
        }
        n /= 3;
        console.log(n);
    }
    return true;  //checks if number is one

}

console.log(isPowerOfThree(20));
