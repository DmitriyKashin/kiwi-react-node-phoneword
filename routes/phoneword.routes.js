const {Router} = require('express')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router  = Router()


router.get('/generate', 
  [
    check('numbers', 'Please, enter the number').exists(),
    check('numbers', 'Invalid numbers').isNumeric(),
  ],
  async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message : 'Something is wrong...try again'})
  }
})

module.exports = router