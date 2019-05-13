/*
 * cn-interview - index.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const {Router} = require('express')
const courses = require('../data/courses.json')

module.exports = () => {
  var router = Router()

  /**
   * Load all courses.
   * filter support like,
   *   /courses?level=中级&track=iOS
   */
  router.get('/courses', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    const {level, track, title} = req.query
    res.json(courses.filter(c => level ? level === c.level : true)
      .filter(c => track ? !!~c.tracks.indexOf(track) : true)
      .filter(c => title ? c.title.includes(title) : true)
      )
  })

  return router
}
