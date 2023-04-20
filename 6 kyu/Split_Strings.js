function solution(str){
    const res = [];
    const newStr = str.split("");
    for (let i = 0; i < newStr.length; i+=2) {
        res.push(str[i] + (str[i+1] ? str[i+1] : "_"));
    }
    return res;
}