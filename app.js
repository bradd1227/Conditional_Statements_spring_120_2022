//***apologies for spaghetti code***

//prompt questions
let question = prompt("Enter a number");
let question2 = prompt("Enter an operator (- + * /)");
let question3 = prompt("Enter a second number");

//global variables. result = question, result2 = question2, result3 = question3. answer is final "result."
let answer;
let result;
let result2;
let result3;

//check if first user input (first number) is not a number. if isNaN print result
if(isNaN(question)){
    result="Please enter a valid number"
}else{
    result=""
}

//check if third user input (second number) is not a number. if isNaN print result3
if(isNaN(question3)){
    result3="Please enter a valid second number"
}else{
    result3=""
}

//check for operators. if isNaN print result2. not sure how to define that we're only asking for operators here.
//addition sign is "linking strings?" instead of actually adding and solving. all other operators are working as intended
if(question2 === "+"){
    answer=question + question3
}
else if(question2 === "-"){
    answer=question - question3
}
else if(question2 === "*"){
    answer=question * question3
}
else if(question2 === "/"){
    answer=question / question3
}
else if(isNaN(question2)){
    result2="Please enter a valid operator"
}else{
    result2=""
}

//string everything together. something is wrong here, this is really shitty. probably need to rewrite variables
document.body.innerHTML=question+" "+question2+" "+question3+"="+answer+" "+result+" "+result2+" "+result3;
