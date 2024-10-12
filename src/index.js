module.exports = function check(str, bracketsConfig) {
  let result = [] 
  let bracketPair = {}
  let openBrackets = []

  for (let bracket of bracketsConfig) {
    let open = bracket[0]
    let close = bracket[1]
    bracketPair[close] = open
    openBrackets.push(open)
  }

  for (let char of str) {
    if (openBrackets.includes(char)) {
      if (result[result.length - 1] === char && bracketPair[char] === char) {
        result.pop()
      } else result.push(char)
    } 
    
    else {
      if (result.length === 0 || result[result.length - 1] !== bracketPair[char]) {
        return false
      }
      result.pop()
    }
  }

  return result.length === 0
}


