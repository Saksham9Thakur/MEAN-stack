var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var todo=mongoose.model('todo')

router.post('/', function(req, res, next) {
new todo({text:req.body.text,done:false}).save(function(err,a){	
res.send("Saksham");
});
});

router.get('/', function(req, res, next) 
{
todo.find(function(err,a)
{
res.json(a);
})
});

router.delete('/:todo_id', function(req, res, next) 
{
console.log('try to delete');	
todo.remove({_id:req.params.todo_id},function(err,a)
{
console.log('try to delete');	
if(err)
res.send(err);
todo.find(err,a)
{
res.json(a);	
}
})
});

module.exports = router;