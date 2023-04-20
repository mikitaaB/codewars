Object.prototype.hash = function(string) {
    const arr = string.split(".");
    let res = this;
    for (let i = 0; i < arr.length; i++) {
        if (res[arr[i]]) {
            res = res[arr[i]];
        } else {
           return undefined;
        }
    }
    return res;
}