
function isPalindrom(word) {
    const chars = [...word] //string to array with spread [...]
    console.log(chars)
    for (let i = 0, j = chars.length - 1; j >= i; i++, j--) {
      if (chars[i] !== chars[j]) return false
    }
    return true
  }
  console.log(isPalindrom('apple'))