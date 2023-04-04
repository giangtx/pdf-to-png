const solution = (n) => {
  if (n < 2) {
    return n;
  }
  
  fn = solution(n - 1) + solution(n - 2);

  return fn % 1000000;
}

console.log(solution(8))