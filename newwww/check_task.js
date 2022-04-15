function checkTask() {
   
    if ((document.getElementById("z1").value !='100') 
    || (document.getElementById("z2").value !='1100') 
    || (document.getElementById("z3").value !='6') 
    || (document.getElementById("z4").value !='14') 
    || (document.getElementById("z5").value !='25') 
    || (document.getElementById("z6").value !='23') 
    || (document.getElementById("z7").value !='37') 
    || (document.getElementById("z8").value !='25') 
    || (document.getElementById("z9").value !='010') 
    || (document.getElementById("z10").value !='15') 
    || (document.getElementById("z11").value !='28') 
    || (document.getElementById("z12").value !='11') 
    || (document.getElementById("z13").value !='001') 
    || (document.getElementById("z14").value !='110') 
    || (document.getElementById("z15").value !='20') 
    || (document.getElementById("z16").value !='12') 
    || (document.getElementById("z17").value !='00101101') 
    || (document.getElementById("z18").value !='15') 
    || (document.getElementById("z19").value !='21') 
    || (document.getElementById("z20").value !='101') 
    || (document.getElementById("z21").value !='23'))

    
    {
        alert("Не  идеально");
    }
    else {
        alert("Гений");
    }
   
}

document.querySelector(".send").addEventListener("click", checkTask);
