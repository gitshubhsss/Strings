/*10)Write a JavaScript function to capitalize the first letter of each word in a string.
   console.log(capitalize_Words('shubham shivaji ranjane'));
  output string -> "Shubham Shivaji Ranjane" */

let string="shubham shivaji ranjane";
let words=string.trim().split(" ");
for (let i = 0; i < words.length; i++) 
{
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    console.log(" ");
}
let capitalize_words= words.join(" ");
console.log(capitalize_words);