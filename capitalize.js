/*9)Write a JavaScript program to capitalize the first letter of a string.
   console.log(capitalize('shubham ranjane'));
    output - "Shubham ranjane" */

    let string="shubham ranjane";
    let split_string=string.trim().split(" ");
    words=split_string.toString() 
    word1=split_string[0];           
    word2=split_string[1]; 
    result=word1.charAt(0).toUpperCase()+word1.slice(1)+" "+word2;
    console.log(result);
    


