const {Router} = require('express')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router  = Router()


const getWordsByNumber = require('../getwords')
router.get('/generate', 
  [
    check('typedNumbers', 'Please, enter correct numbers').exists(),
    check('typedNumbers', 'Invalid numbers').isNumeric(),
    check('typedNumbers', 'Invalid numbers - contains zero button').not().contains(0),
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
    const {typedNumbers, showReal} = req.query
    const buttons = config.get('buttons')

    let phoneWords = getWordsByNumber(typedNumbers, buttons, showReal)

    res.status(200).json({ message : 'ok', phoneWords})
  } catch (error) {
    res.status(500).json({ message : 'Something is wrong...try again', e: error.message})
  }
})

module.exports = router