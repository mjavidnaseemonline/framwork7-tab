// Dom7
var $$ = Dom7;

// Framework7 App main instance

var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.torkcnc.proformer', // App bundle ID
  name: 'TORKProformer', // App name
  theme: 'md', // Automatic theme detection ios md auto
  
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});



// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});

var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
