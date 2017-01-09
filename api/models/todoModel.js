// require thu vien mongoose
var mongoose = require('mongoose');
// khai bao schema
var schema = mongoose.Schema;
// tao model todo schema
var todoSchema = new schema({
    text: String,
    isDone: Boolean
});
// tao doi tuong todo
var todos = mongoose.model('Todos', todoSchema);

module.exports = todos;