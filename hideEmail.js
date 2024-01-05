/*6)Write a JavaScript program that hides email addresses to prevent unauthorized access
     shubhamranjane16@gmail.com  = shubhamr......@gmail.com*/

let email="shubhamranjane16@gmail.com";
let split_mail=email.trim().split("@");
words=split_mail.toString()     //convert it into the string
word1=split_mail[0];            //shubhamranjane16
word2=split_mail[1];            //gmail.com
avg=(word1.length/2);           //7
result=word1.slice(0,avg)+".....@"+word2;
console.log(result);

