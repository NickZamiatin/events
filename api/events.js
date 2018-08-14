const express = require('express');
const router = express.Router();
const queries = require('../db/query')

function isValidId(req, res, next){
  if(!isNaN (req.params.id)) return next();
  next(new Error('Invalid Id'))
}
function validEvent (events){
  const hasTitle = typeof events.title == 'string' && events.title.trim() != '';
  const hasDescription = typeof events.description == 'string' && events.description.trim() != '';
  const hasDate = typeof events.date == 'string' && events.date.trim() != '';
  const hasLocation = typeof events.location == 'string' && events.location.trim() != '';
  return hasTitle && hasDescription && hasDate && hasLocation

}

router.get ('/', (req, res )=>{
  queries.getAll().then(event =>{
    res.json(event)
  })
})

router.get ('/:id',isValidId, (req, res, next)=>{
  queries.getOne(req.params.id).then(event =>{
    if(event){
      res.json(event)
    } else {
      res.status(404)
      next(new Error('Not Found'))
    }
  })
})

router.post('/',(req, res, next)=>{
  console.log(req.body);
  if(validEvent(req.body)){
    queries.create(req.body).then(event =>{
      res.json(event[0])
    })
  } else {
    next(new Error('Invalid Event'))
  }
})

router.put('/:id', isValidId, (req, res, next) => {
  if(validEvent(req.body)){
    queries.update(req.params.id, req.body).then(event => {
      res.json(event[0])
    })
  } else {
    next(new Error('Invalid Event'))
  }
})

router.delete('/:id', isValidId, (req, res) => {
  if(validEvent(req.body)){
    queries.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      })
    })
  }
})

module.exports = router;