const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to Movie CMS!')
})

module.exports = router