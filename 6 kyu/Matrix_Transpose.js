function transpose(matrix) {
    const res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!res[j]) {
                res[j] = [];
            }
            res[j].push(matrix[i][j]);
        }
    }
    return res;
}