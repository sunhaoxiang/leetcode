// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
// Given two integers x and y, return the Hamming distance between them.

const hammingDistance = (x, y) => {
  // convert to binary
  x = x.toString(2)
  y = y.toString(2)
  let maxLength = Math.max(x.length, y.length)
  // padStart() to make the length of x and y equal
  x = x.padStart(maxLength, '0')
  y = y.padStart(maxLength, '0')
  let ans = 0
  for (let i = 0; i < maxLength; i++) {
    if (x[i] !== y[i]) ans++
  }
  return ans
}

const hammingDistance2 = (x, y) => {
  let distance = 0
  // XOR
  let t = x ^ y
  while(t) {
    distance += t & 1
    // right shift
    t = t>>>1
  }
  return distance
}

console.log(hammingDistance(1, 4)) // 2