const express = require('express')
const routes  = express.Router()
const membro = require('./app/controllers/membros')
const valor = require('./app/controllers/valores')


routes.get('/',function(req,res){
  return res.send('OK')
})


module.exports = routes