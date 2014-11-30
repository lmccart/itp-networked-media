// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3111);  // make sure "port()" line comes before "start()"
start();
// set up the routes
route('/',showHome);
route('/about',myAboutPage);

function showHome(request){
	request.respond("This is the home page.");
}

function myAboutPage(request){
	request.respond("<h1>About Me!!!</h1>");
}

route('/profile/:username',showProfile);

function showProfile(request){
	var content = "<h1>" + request.params.username + "</h1>";
	content += "<p>All the user's info here</p>";
    request.respond(content);
}

