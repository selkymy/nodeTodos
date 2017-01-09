var todos = require('../models/todoModel.js');

module.exports = function (app){
    app.get('/api/setupTodos', function(req, res){
        var seedTodos = [
            {
                text : 'Hoc Node.js',
                isDone : 'false'
            },
            {
                text: "Hoc Angular Js",
                isDone: "false"
            },
            {
                text: "Viet App",
                isDone: "false"
            }
        ];

        todos.create(seedTodos, function (err, result){
            if (err)
                console.log("err creating data : %s", err);

            res.send(result);
        });

    });
}