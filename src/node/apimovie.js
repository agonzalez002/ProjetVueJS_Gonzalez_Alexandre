var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');
var obj;

fs.readFile('database.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
});

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }
    else {
        //move on
        next();
    }
});

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});

var myRouter = express.Router(); 

myRouter.route('/')
.all(function(req,res){ 
    //console.log(obj);
    res.json(obj);
});

myRouter.route('/movies/:id')
.get(function(req,res){
    res.send(obj.movie[req.params.id]);
	//res.json({message : "Vous souhaitez accéder aux informations du film n°" + req.params.id});
})
.delete(function(req,res){
    obj.movies[req.params.id].titre = "";

    var json = JSON.stringify(obj);

    fs.writeFile("database.json", json, 'utf8', function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
	//res.json({message : "Vous souhaitez supprimer le film n°" + req.params.id});
});

myRouter.route('/movies/:id/edit')
.put(function(req,res){
    //console.log(obj.movie.vue[req.params.id].titre);
    obj.movies[req.params.id].titre = req.body.titre;
    obj.movies[req.params.id].annee = req.body.annee;
    obj.movies[req.params.id].langue = req.body.langue;
    obj.movies[req.params.id].affiche = req.body.affiche;
    obj.movies[req.params.id]["realisateur"].nom = req.body.nom;
    obj.movies[req.params.id]["realisateur"].prenom = req.body.prenom;
    obj.movies[req.params.id]["realisateur"].natio = req.body.natio;
    obj.movies[req.params.id]["realisateur"].naissance = req.body.naissance;
    obj.movies[req.params.id].genre = req.body.genre;
    obj.movies[req.params.id].note = req.body.note;

    var json = JSON.stringify(obj);

    fs.writeFile("database.json", json, 'utf8', function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});

myRouter.route('/movies')
.get(function(req,res){
	console.log(obj.movie);
    res.send(obj);
})
.post(function(req,res) {

	var id = (parseInt(obj.movies.length));

	obj.movies.push({ "id": id, "titre": req.body.titre, "affiche": req.body.affiche, "annee": req.body.annee, "langue" : req.body.langue, "realisateur" : {"nom" : req.body.nom,
        "prenom" : req.body.prenom, "natio" : req.body.natio, "naissance" : req.body.naissance} , "genre" : req.body.genre, "note" : ""});

	var json = JSON.stringify(obj);

	fs.writeFile("database.json", json, 'utf8', function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
})
 
// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);


// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});