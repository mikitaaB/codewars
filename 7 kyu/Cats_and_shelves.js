function solution(start, finish) {
  let diff = finish - start;
  return diff % 3 + diff/3|0;
}