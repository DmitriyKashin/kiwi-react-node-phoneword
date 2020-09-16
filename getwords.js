const wordlist = require('wordlist-english')
const cache = require('./cache')


const getWords = (typedNumbers, buttons, showReal) => {
  let finalWordSet = [] 
  let phoneWords
  let tempWordSet = []
  let i = 0
  const splitedNumbers = [...typedNumbers+'']
  let flipButtons = []

  if (showReal === "true") {
    phoneWords =  cache.get(`filtered:${typedNumbers}`)
    if (phoneWords) return phoneWords
  }
  finalWordSet = cache.get(`tree:${typedNumbers}`)
  if (finalWordSet && showReal === "false") {
    phoneWords =  Object.keys(finalWordSet)
    return phoneWords
  } else {
    finalWordSet = []
  }
  buttons.map((button) => {
    flipButtons[button.number] = button.symbols
  })
  // here we can also try to use cache from the end of string to speed up 
  let probablyPreviousLength = splitedNumbers.length-1
  lastCache = cache.get("tree:"+typedNumbers.substring(0,probablyPreviousLength))
  if (lastCache) {
    i = splitedNumbers.length-1
    finalWordSet = lastCache
  }
  for (i; i < splitedNumbers.length; i++) {
    tempWordSet = cache.get("tree:"+typedNumbers.substring(0,(i+1))) // checking if we already handled this sequence
    if (tempWordSet) {
      finalWordSet = tempWordSet
      continue;
    }
    tempWordSet = []
    flipButtons[splitedNumbers[i]].map((symbol, k) => {
      if ( i === 0) {
        tempWordSet[symbol] = true
      } else {
        for (key in finalWordSet) {
          tempWordSet[`${key}${symbol}`] = true
        }
      }
    })
    finalWordSet = tempWordSet
  }
  cache.set("tree:"+typedNumbers, finalWordSet, 10000 )
  phoneWords = Object.keys(finalWordSet)
  if (showReal === "true") {
    const englishWords = wordlist['english/10']
    phoneWords = phoneWords.filter(value => englishWords.indexOf(value) !== -1)
    cache.set("filtered:"+typedNumbers, phoneWords, 10000 )
    return phoneWords
  }
  return phoneWords
}

module.exports = getWords