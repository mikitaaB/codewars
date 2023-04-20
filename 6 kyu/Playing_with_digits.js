function digPow(n, p) {
    const copyN = n;
    let arr = [];
    while (n) {
        arr.push(n % 10);
        n = (n / 10) | 0;
    }
    arr = arr.reverse();
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] ** (p + i);
    }

    const pow = copyN ** p;
    if (res === pow) {
        return p;
    } else if (res % copyN === 0) {
        return res / copyN;
    }
    return -1;
}