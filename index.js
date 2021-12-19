var fs = require("fs");
var Handlebars = require("handlebars");
var moment = require("moment");
var lookup = require("country-code-lookup");

var render = (resume) => {
  var main_css = fs.readFileSync(__dirname + "/main.css", "utf-8");
  var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");

  return Handlebars.compile(tpl)({
    css: main_css,
    resume: resume,
  });
};

module.exports = {
  render: render,
};

/* HANDLEBARS HELPERS */
Handlebars.registerHelper("paragraphSplit", function (plaintext) {
  var lines = plaintext.split(/\r\n|\r|\n/g);
  var output = "";
  var i;

  for (i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      output += "<p>" + lines[i] + "</p>";
    }
  }
  return new Handlebars.SafeString(output);
});

Handlebars.registerHelper("toLowerCase", function (str) {
  return str.toLowerCase();
});

Handlebars.registerHelper("spaceToDash", function (str) {
  return str.replace(/\s/g, "-").toLowerCase();
});

Handlebars.registerHelper("toCountryFull", function (countryCode) {
  var result = lookup.byIso(countryCode);

  if (result.country != undefined) {
    return result.country;
  }

  return countryCode;
});

Handlebars.registerHelper("MY", function (date) {
  var d = date.toString();
  return moment(d).format("MMMM YYYY");
});

Handlebars.registerHelper("Y", function (date) {
  var d = date.toString();
  return moment(d).format("YYYY");
});

Handlebars.registerHelper("DMY", function (date) {
  var d = date.toString();
  return moment(d).format("D MMMM YYYY");
});

var humanReadableDuration = (seconds) => {
  var formatUnit = (num, unit) => {
    if (num > 0) {
      return `${num} ${num > 1 ? unit + "s" : unit}`;
    }
    return "";
  };

  var numYears = Math.floor(seconds / 31536000);
  var numDays = Math.floor((seconds % 31536000) / 86400);
  var numMonths = Math.ceil(numDays / 31);
  var yearOutput = formatUnit(numYears, "Year");

  if (yearOutput.length == 0) {
    return formatUnit(numMonths, "Month");
  } else {
    return (
      yearOutput + (numMonths > 0 ? ", " + formatUnit(numMonths, "Month") : "")
    );
  }
};

Handlebars.registerHelper(
  "periodToNow",
  function (startDate, endDate, present) {
    if (present == true) endDate = moment.now();
    var duration = moment.duration(
      moment(moment(endDate)).diff(startDate.toString())
    );
    return humanReadableDuration(duration.asSeconds());
  }
);
