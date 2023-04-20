const getSlice = (nums, start, end) => nums.slice(start, end ?? nums.length).join('');

const createPhoneNumber = (nums) => {
    return `(${getSlice(nums, 0, 3)}) ${getSlice(nums, 3, 6)}-${getSlice(nums, 6)}`
}