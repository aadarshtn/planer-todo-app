const Tasks = require('../models/tasks');

module.exports.home = function(req,res){

    Tasks.find({}, function(err,tasks){
        if(err){
            console.log('Error in fetchinf task data from Database');
            return;
        }
        return res.render('home.ejs', {
            title : "Planer - ToDo App",
            tasks : tasks
        });
    });
    
};

module.exports.readForm = function(req,res){
    if(req.body.add != undefined){
        Tasks.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        }, function(err, newTask){
            if(err){
                console.log('Error while adding task to database');
                return;
            }
            console.log('Added Details Are', newTask);
            return res.redirect('back');
        });
    }
    if(req.body.delete != undefined){
        res.redirect('back');
    }
}

module.exports.deleteTasks = function(req,res){

}