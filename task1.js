const solution = (array) => {
  const n = a.length;

  const visited = new Array(n).fill(false);

  let currentPosition = 0;
  let jumps = 0;
  while (currentPosition >= 0 && currentPosition < n && !visited[currentPosition]) {
    visited[currentPosition] = true;
    const nextPosition = currentPosition + a[currentPosition];
    if (nextPosition < 0 || nextPosition >= n) {
      return jumps + 1;
    }
    currentPosition = nextPosition;
    jumps++;
  }
  return -1;
}