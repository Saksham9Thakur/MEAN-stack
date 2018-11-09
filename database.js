var mongoose=require('mongoose')
var Schema=mongoose.Schema(
{
text:String,
done:Boolean	
});
var todo=mongoose.model('todo',Schema);
module.exports=todo;