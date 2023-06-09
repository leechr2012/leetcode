// JAVASCRIPT IMPLEMENTATION:
const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) return [ previousNums[complement], i ];

    previousNums[num] = i;
  }
};
