let score= 33
//const {score}=req.body
console.log(typeof score);
console.log(typeof (score));
let score1 ="33"
let valueInNumber=Number(score1)
console.log(typeof valueInnumber);
 console.log(null>0);
 console.log(null>=0);
 console.log(null==0);
 /*the reason is that an equality check "=="and comparisons ">,<,>=,<="work differently.
 comparisons convert null to a number, treating it as 0 that's why (3) null==0 is true and (1) null > 0 is false */
 //"=== it will check value and data type"
 console.log("2"==2)//false output
 console.log("2"===2)//true output
 

