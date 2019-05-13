/*
 * cn-interview - server.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'
const { port=3333 } = require('minimist')(process.argv)

const app = require('./app')

app.listen(port, () => {
  console.log('app start at http://localhost:%s ', app.address().port)
})
