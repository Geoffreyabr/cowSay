const geof = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : geof.campus.name + " " + geof.campus.college,
    e : "oO",
    T : "U "
}));
