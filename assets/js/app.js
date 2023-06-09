function guess(){

let num=document.querySelector("#num").value;
if (num == 143){
    document.querySelector("#result").innerHTML=
    "<font color='lightgreen'>  CONGRATULATIONS.....<br> Your Guess Was Right</font>" 
    document.querySelector("#num").style.display='none'
    document.querySelector("#btn").style.display='none'
}   

else if( num >0 && num <= 10){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: the number is a 3 figured number</font>" 
    document.querySelector("#num").value="";
}
else if( num >11 && num <= 20){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: sum of the 3 digits gives 8</font>" 
    document.querySelector("#num").value="";
}

else if( num >21 && num <= 50){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: it is an odd number</font>" 
    document.querySelector("#num").value="";
}
else if( num >51 && num <= 70){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: try a larger Number</font>" 
    document.querySelector("#num").value="";
}
else if( num >71 && num <= 139){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: the number is divisble by 11</font>" 
    document.querySelector("#num").value="";
}
else if( num >140 && num <= 1499){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: If you add 1 to this number it becomes a perfect square</font>" 
    document.querySelector("#num").value="";
}

else if( num >150 && num <= 300){
    document.querySelector("#result").innerHTML=
    "<font color='Red'>  Opps... TRY AGAIN<br> Hint: Number too Large</font>" 
    document.querySelector("#num").value="";
}
else{document.querySelector("#result").innerHTML=
"<font color='Red'>  Nawao... <br> Simple Instruction you no follow. the number should be less than 300</font>" 

}
}