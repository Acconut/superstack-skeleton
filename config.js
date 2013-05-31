var config = {};
    
config.domain = "";
config.port = 80;

config.template = {};
config.template.url = "/_templates";
config.template.directory = "templates/";
config.template.compiler = "compiler.js";

config.locals = {};
config.locals.default = "en";
config.locals.directory = "locals/";
config.locals.url = "/_locals";

config.static = {};
config.static.directory = "www/";
config.static.index = "index.html";
config.static.assetsUrl = "/_assets";

config.methods = {};
config.methods.dir = "methods/";
config.methods.url = "/_methods";

config.routes = {}
config.routes.router = "routes.js";
config.routes.url = "/_routes";
    
module.exports = config;