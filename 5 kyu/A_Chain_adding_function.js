const add = (n) => {
    const sum = (next) => add(n + next);
    sum.valueOf = () => n;
    return sum;
}