var servi = require('servi');
var app = new servi(true);

port(3000);


serveFiles('public');
var db = useDatabase('positions');



route('/getAll', getAll);


route('/addPos', addPos);

function getAll(request) {
  db.getAll(gotEm);

  function gotEm(data) {
    request.header('application/json');
    request.respond(JSON.stringify(data));
  }
}

function addPos(request) {
	// for post requests, the values come in the request.fields object
  var xval = request.fields.x;
  var yval = request.fields.y;

	console.log(xval, yval); // check what came in 
  
  // add to database
  db.add({x: xval, y: yval });

  request.respond(true); // do I need this?
 
}





start();