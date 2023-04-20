const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    const sqrtNum = Math.sqrt(num) | 0;
    for (let i = sqrtNum; i >= 2; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}