// Vendor code
var angular = require('angular');
var ngMaterial = require('angular-material');
var angularUI = require('angular-ui-bootstrap');
var ngSanitize = require('angular-sanitize');
var ngAnimate = require('angular-animate');
//var ngAria = require('angular-aria');
var ngMessages = require('angular-messages');
var ngUIRouter = require('angular-ui-router');

//app
var app = require('app');

var parseAngular = require('vendors/angular-parse-patch.js');

window.taTools = {};
window.rangy = require('rangy/lib/rangy-core');
require('rangy/lib/rangy-selectionsaverestore');
require('textangular/dist/textAngular-sanitize');
require('textangular/dist/textAngularSetup');
require('textangular/dist/textAngular');

//Configs
var routes = require('configs/routes');
var run = require('configs/run');
var themes = require('configs/themes');
// Controllers
var MainController = require('controllers/MainController');
var HomeController = require('controllers/HomeController');
var EmailController = require('controllers/EmailController');
var NewsController = require('controllers/NewsController');

// Directives

//Services
var MailService = require('services/EmailService');
// Templates
var HomeTemplate = require('home.html');
var MenuTemplate = require('menu.html');
var ToolbarTemplate = require('toolbar.html');
var EmailTemplate = require('email.html');
var NewsTemplate = require('news.html');
// Less/CSS files

var bootstrap = require('bootstrap/dist/css/bootstrap.min.css');
var materialcss = require('angular-material/angular-material.min.css');
var stylesheetsLess = require('stylesheets.less');
var textAngularCss = require('textangular/dist/textAngular.css');
