const wordlist = require('wordlist-english')
const cache = require('./cache')


const getWords = (typedNumbers, buttons, showReal) => {
  let newTree
  let phoneWords
  if (showReal === "true") {
    phoneWords =  cache.get(`filtered:${typedNumbers}`)
    if (phoneWords) return phoneWords
  }
  newTree = cache.get(`tree:${typedNumbers}`)
  if (newTree) {
    phoneWords =  Object.keys(newTree)
    return phoneWords
  }
  else {
    newTree = []
  }
  const splitedNumbers = [...typedNumbers+'']
  let flipButtons = []
  buttons.map((button) => {
    flipButtons[button.number] = button.symbols
  })
  let aTree = []
  // here we can also try to use cache from the end of string to speed up 
  for (let i = 0; i < splitedNumbers.length; i++) {
    aTree = cache.get("tree:"+typedNumbers.substring(0,(i+1)))
    if (aTree) {
      newTree = aTree
      continue;
    }
    aTree = []
    flipButtons[splitedNumbers[i]].map((symbol, k) => {
      if ( i === 0) {
        aTree[symbol] = true
      }
      else {
        for (key in newTree) {
          aTree[`${key}${symbol}`] = true
        }
      }
    })
    newTree = aTree
  }
  cache.set("tree:"+typedNumbers, newTree, 10000 )
  phoneWords = Object.keys(newTree)
  if (showReal === "true") {
    const englishWords = wordlist['english/10']
    phoneWords = phoneWords.filter(value => englishWords.indexOf(value) !== -1)
    cache.set("filtered:"+typedNumbers, phoneWords, 10000 )
    return phoneWords
  }
  return phoneWords
}

module.exports = getWords