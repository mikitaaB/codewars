function digitalRoot(n) {
  const arr = String(n).split("");
  const res = arr.reduce((acc, cur) => acc + +cur, 0);
  return String(res).length > 1 ? digitalRoot(res) : res;
}