function findNeedle(haystack) {
    const needle = (x) => x=='needle'
    let found= (haystack.findIndex(needle))
    return `found the needle at position ${found}`
  }