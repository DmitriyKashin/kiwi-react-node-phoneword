const {Router} = require('express')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router  = Router()
const wordlist = require('wordlist-english')
router.get('/generate', 
  [
    check('typedNumbers', 'Please, enter correct numbers').exists(),
    check('typedNumbers', 'Invalid numbers').isNumeric(),
  ],
  async (req, res) => {
  try {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid numbers'
      })
    }

    const buttons = config.get('buttons')
    let flipButtons = []
    buttons.map((button) => {
      flipButtons[button.number] = button.symbols
    })

    const {typedNumbers, showReal} = req.query
    const splitedNumbers = [...typedNumbers+'']
    let newTree = []
    let aTree = []
    const englishWords = wordlist['english/10']
    splitedNumbers.map((n, i) => {
        aTree = []
        flipButtons[n].map((symbol, k) => {
          if ( i === 0) {
            newTree[symbol] = true
          }
          else {
            for (key in newTree) {
              aTree[`${key}${symbol}`] = true
            }
          }
        })
        if (i !== 0) {
          newTree = aTree
        }
    })
    let phoneWords = Object.keys(newTree);
    if (showReal === "true") {
      phoneWords = phoneWords.filter(value => englishWords.indexOf(value) !== -1)
    }

    res.status(200).json({ message : 'ok', phoneWords})
  } catch (error) {
    res.status(500).json({ message : 'Something is wrong...try again', e: error.message})
  }
})

module.exports = router