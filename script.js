function isPowerOfFour(n){
    if(n <= 0) return false; //checks if the number is less than 0 or zero
     // 'n' is not divisible by 4
    while(n > 1){
        if(n % 4 !== 0){
            return false;
        }
        n /= 4;
    }
     //checks if number is one
    return true;
}

console.log(isPowerOfFour(16));
