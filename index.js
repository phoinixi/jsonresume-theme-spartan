var fs = require("fs");
var Handlebars = require("handlebars");

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

function render(resume) {
	var octicons = fs.readFileSync(__dirname + "/octicons.css", "utf-8");
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	return Handlebars.compile(tpl)({
		octicons: octicons,
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
