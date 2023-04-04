const solution = (prices) => {
  var min1 = Infinity;
  var min2 = Infinity;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min1) {
      min2 = min1;
      min1 = prices[i];
    } else if (prices[i] < min2) {
      min2 = prices[i];
    }
  }
  return min2 - min1;
}

let prices =  [22, 7, 8, 3,5 ];
let minLossAmount = solution(prices);
console.log(minLossAmount); // sẽ in ra 2