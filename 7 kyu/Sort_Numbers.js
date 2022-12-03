function solution(nums){
    if (nums === null || nums.some(el => el === null)) {
      return [];
    }
    return nums.sort((a, b) => a-b);
}