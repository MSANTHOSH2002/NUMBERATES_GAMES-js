let submitbutton=document.getElementById("checkButton"); 
console.log(submitbutton);
let message=document.getElementById("message");
console.log(message); 
var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber); 
var chance=10;
var text;

submitbutton.onclick=()=>{
   var inputvalue=document.getElementById("inputnumber").value; 
   console.log(inputvalue); 
   chance--; 
   if(inputvalue==randomNumber)   
   location.href='./win.html'; 
   else if(inputvalue>randomNumber)
   {
      text=`your guess is too high.${chance} remaining.`;
   }  
   else if(inputvalue<randomNumber)
   {
      text=`your guess is too low.${chance} remaining.`;

   }   
   if(chance==0)
   {
      location.href='./lose.html';
   }
console.log(chance); 
console.log(text); 
message.innerHTML=text; 
attemptCount.innerHTML=chance;
}

     