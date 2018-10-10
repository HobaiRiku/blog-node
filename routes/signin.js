const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, function (req, res, next) {
  res.send('展示登录')
})

router.post('/', checkNotLogin, function (req, res, next) {
  res.send('登录')
})

module.exports = router
