const cache = func => {
    const cache = {};

    return (...params) => {
        const key = JSON.stringify(params);
        if (key in cache) {
            return cache[key];
        }
        const funcRes = func(...params);
        cache[key] = funcRes;
        return funcRes;
    };
}