var todos = require('../models/todoModel.js');

// get all todos
function getTodos(res){
    todos.find(function(err, todos){
        if(err){
            // res.send(err);
            res.status(500).json(err);
        }
        res.json(todos);

    });
}

// get one todo by id
function getTodoById(req,res){
    todos.findById({ _id: req.params.id}, function (err, todo){
        if (err){
            res.status(500).json(err);
        }

        res.json(todo);
    })
}

module.exports = function(app){
    // get all todos
    app.get('/api/todos', function (req, res){
        getTodos(res);
    });

    // get todo by id
    app.get('/api/todo/:id', function (req, res){
        getTodoById(req, res);
    });
}