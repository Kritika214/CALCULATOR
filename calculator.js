let output=document.querySelector('#ans');
let del=document.querySelector('#refresh');
let erase=document.querySelector('#fact');
let div=document.querySelector('#div');
let mul=document.querySelector('#mul');
let seven=document.querySelector('#sev');
let eight=document.querySelector("#eig");
let nine=document.querySelector('#nine');
let sub=document.querySelector('#sub');
let four=document.querySelector('#four');
let five=document.querySelector('#five');
let six=document.querySelector('#six');
let add=document.querySelector('#add');
let one=document.querySelector("#one");
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let dot=document.querySelector('#dot');
let zero=document.querySelector('#zero');
let equal=document.querySelector('#equal');

var val=output.innerText;
one.addEventListener("click",function(){
    if(val.length<22){
        val=val+'1';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
two.addEventListener("click",function(){
    if(val.length<22){
        val=val+'2';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
three.addEventListener("click",function(){
    if(val.length<22){
        val=val+'3';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
four.addEventListener("click",function(){
    if(val.length<22){
        val=val+'4';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
five.addEventListener("click",function(){
    if(val.length<22){
        val=val+'5';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
six.addEventListener("click",function(){
    if(val.length<22){
        val=val+'6';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
seven.addEventListener("click",function(){
    if(val.length<22){
        val=val+'7';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
eight.addEventListener("click",function(){
    if(val.length<22){
        val=val+'8';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
nine.addEventListener("click",function(){
    if(val.length<22){
        val=val+'9';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
zero.addEventListener("click",function(){
    if(val.length<22){
        val=val+'0';
        output.innerText=val;
    }
    else{
        alert("exceed limit of number")
    }
})
add.addEventListener("click",function(){
   if(val[val.length-1]=='+' || val[val.length-1]=='.'|| val[val.length-1]=='-'|| val[val.length-1]=='/'||val[val.length-1]=='*'){
    alert("already a symbol");
   }
   else if(val.length<22){
      val=val+'+';
      output.innerText=val;
   }
})
sub.addEventListener("click",function(){
    if(val[val.length-1]=='+'|| val[val.length-1]=='.'|| val[val.length-1]=='-'|| val[val.length-1]=='/'||val[val.length-1]=='*'){
        alert("already a symbol");
       }
       else if(val.length<22){
          val=val+'-';
          output.innerText=val;
       }
})
mul.addEventListener("click",function(){
    if(val[val.length-1]=='+' || val[val.length-1]=='-'|| val[val.length-1]=='/'||val[val.length-1]=='*' || val[val.length-1]=='.'){
        alert("already a symbol");
       }
       else if(val.length<22){
          val=val+'*';
          output.innerText=val;
       }
})
div.addEventListener("click",function(){
    if(val[val.length-1]=='+' || val[val.length-1]=='-'|| val[val.length-1]=='/'||val[val.length-1]=='*' || val[val.length-1]=='.'){
        alert("already a symbol");
       }
       else if(val.length<22){
          val=val+'/';
          output.innerText=val;
       }
})
dot.addEventListener("click",function(){
    if(val[val.length-1]=='.'){
        alert("already a symbol");
       }
       else if(val.length<22){
          val=val+'.';
          output.innerText=val;
       }
})
equal.addEventListener("click",function(){
    try {
        let result = eval(val);
        output.innerText = result;
        val = result.toString();
    } catch (error) {
        alert("Invalid expression");
    }
})
erase.addEventListener("click",function(){
    if(val.length>0){
       var answ=val.slice(0,-1);
       output.innerText=answ
       val=answ;
    }
})
del.addEventListener("click",function(){
    if(val.length>0){
        output.innerText="";
        val="";
    }
})
