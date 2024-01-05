/*8)Write a JavaScript function to parameterize a string.
   console.log(string_parameterize("Robin Singh from USA."));
  output - "robin-singh-from-usa" */

let string="Robin Singh from USA";
lower_string=string.toLowerCase();
result=lower_string.replaceAll(" ","-");
console.log(result);
