function prefill(n, v) {
    if (typeof n === 'boolean' || n < 0 || n % 1 || isNaN(parseInt(n))) {
        throw new TypeError(`${n} is invalid`);
    } else {
        const count = Number(n);
        return count ? Array.from(Array(count)).fill(v) : [];
    }
}