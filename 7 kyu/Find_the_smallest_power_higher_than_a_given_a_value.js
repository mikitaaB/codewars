function findNextPower(val, pow_) {
    return (Math.floor((val ** (1/pow_)).toFixed(3)) + 1) ** pow_;
}