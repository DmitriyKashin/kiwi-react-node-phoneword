const config = require('config')

const getWords = require('../getwords')

test('Simple test #1, input = 23 ', () => {
    let typedNumbers = "23"
    let expected = ["ad","bd","cd","ae","be","ce","af","bf","cf"]
    let showReal  = "false"
    const buttons = config.get('buttons')
    const result = getWords(typedNumbers, buttons, showReal)
    expected.forEach(elem => {
      expect(result).toContain(elem)
    })
})
test('Simple test #2, input = 56 ', () => {
  let typedNumbers = "56"
  let expected = ["jm","jn","jo","km","kn","ko","lm","ln","lo"]
  let showReal  = "false"
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Simple test #3, input = 789 ', () => {
  let typedNumbers = "789"
  let expected = ["ptw","qtw","rtw","stw","puw","quw","ruw","suw","pvw","qvw","rvw","svw","ptx","qtx","rtx","stx","pux","qux","rux","sux","pvx","qvx","rvx","svx","pty","qty","rty","sty","puy","quy","ruy","suy","pvy","qvy","rvy","svy","ptz","qtz","rtz","stz","puz","quz","ruz","suz","pvz","qvz","rvz","svz"]
  let showReal  = "false"
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})

test('Real test #1, input = 9675, expected word = work ', () => {
  let typedNumbers = "9675"
  let showReal  = "true"
  let expected = ["work"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #2, input = 668437, expected word = mother ', () => {
  let typedNumbers = "668437"
  let showReal  = "true"
  let expected = ["mother"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #3, input = 83673728873, expected word = temperature ', () => {
  let typedNumbers = "83673728873"
  let showReal  = "true"
  let expected = ["temperature"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #4, input = 7653, expected words = sold, role ', () => {
  let typedNumbers = "7653"
  let showReal  = "true"
  let expected = ["sold", "role"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #5, input = 7737368, expected word = present ', () => {
  let typedNumbers = "7737368"
  let showReal  = "true"
  let expected = ["present"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #6, input = 569, expected words = joy, low ', () => {
  let typedNumbers = "569"
  let showReal  = "true"
  let expected = ["joy", "low"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})
test('Real test #7, input = 468, expected words = got, hot ', () => {
  let typedNumbers = "468"
  let showReal  = "true"
  let expected = ["got", "hot"]
  const buttons = config.get('buttons')
  const result = getWords(typedNumbers, buttons, showReal)
  expected.forEach(elem => {
    expect(result).toContain(elem)
  })
})

