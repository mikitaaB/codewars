function solution(string) {
    let res = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
        res += " " + string[i];
      } else {
        res += string[i];
      }
    }
  return res;
}