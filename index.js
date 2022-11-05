const hourEl=document.getElementById("hour")
const minutesEl=document.getElementById("minutes")
const secondsEl=document.getElementById("seconds")
const amPM_El=document.getElementById("ampm")

let updateClock=()=>{
   //getHours,GetMinutes,GetSeconds methode qui retourne lheure,minutes,seocndes d une date
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let amPM='AM';
    //si l heure depasse 12 il affichera 1 (13-12=1) Affichage
     if(h>12){
        h=h-12
        amPM="PM";
     }
     //pour Afficher l heure => 01-02-40,heure,minutes,secondes
     h=h<10? "0" +  h : h;
     m=m<10? "0" +  m: m;
     s=s<10? "0" +  s : s;

     //innertext ecrit dynamiquement sur l element html (hourEl)
     hourEl.innerText=h;
     minutesEl.innerText=m;
     secondsEl.innerText=s;
     amPM_El.innerText=amPM;
     //SetTimeout execute la fonction apres un millieme de seconde
     setTimeout(()=>{
        updateClock( )
     },1000)
}
updateClock();