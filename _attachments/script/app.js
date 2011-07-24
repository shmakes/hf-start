// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {  
  
  // setup the account widget
  $("#account").evently("account", app);  

  $("#home").evently("home", app);
  $.evently.connect($("#account"), $("#home"), ["loggedIn", "loggedOut"]);
});
