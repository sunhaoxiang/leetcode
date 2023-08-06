const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const m = g.length
  const n = s.length
  let count = 0
  for (let i = 0, j = 0; i < m && j < n; i++, j++) {
    while (j < n && g[i] > s[j]) {
      j++
    }
    if (j < n) {
      count++
    }
  }
  return count
}

console.log(findContentChildren([1, 2, 3], [1, 2])) // 2