const moment = require('moment');

console.log(moment().format('DD-MM-YYYY HH:mm')); 

console.log(moment().add(7, "days").format('DD-MM-YYYY HH:mm')); 
console.log(moment().format('dddd')); 
console.log(moment());

console.log(moment().subtract(10, "days").format('DD-MM-YYYY HH:mm'));
console.log(moment);

console.log(moment().startOf('year'));

