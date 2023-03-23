var secs=0;
var mins=0;
var count=0;
var acount=0;
var aclick=0;
var sclick=0;
var health=0;
var bonus=1;
var dmg = 1;
var bought1=false;
var bought2=false;
var bought3=false;
var ready=true;
var start=true;
var victory=false;
var time;

setInterval(avail,1);

function wait(){
    ready=true;
}

}
function add(){
    if(ready){
        if(mins+secs==0&&(start)){
            time=setInterval(timer,1000);
            start=false;
        }
        health+=dmg;
        document.getElementById("health").style.width=200-health*70+"px";
        ready=false;
        setTimeout(wait, 1);
        if(health>2){
            count += bonus;
            document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
            health=0;
            document.getElementById("health").style.width="200px";
        }   
    }
}

function avail(){
    
    if((count>49)&&(!bought1)){
        document.getElementById("me1").style.backgroundColor='Lightgreen';
        document.getElementById("imgme1").style.opacity='1';
    }else{
        document.getElementById ("me1").style.backgroundColor='Lightgray';
        document.getElementById("imgme1").style.opacity='0.5';
    }

    if((count>99)&&(!bought2)){
        document.getElementById("me2").style.backgroundColor='Lightgreen';
        document.getElementById("imgme2").style.opacity='1';
    }else{
        document.getElementById ("me2").style.backgroundColor='Lightgray';
        document.getElementById("imgme2").style.opacity='0.5';
    }

    if(count>999){
        document.getElementById("win1").style.backgroundColor='Lightgreen';
    }else{
        document.getElementById("win1").style.backgroundColor='Lightgray';
    }

    if(count>10*(aclick+1)-1){
        document.getElementById("miner").style.backgroundColor='Lightgreen';
        document.getElementById("imgm1").style.opacity='1';
    }else{
        document.getElementById("miner").style.backgroundColor='Lightgray';
        document.getElementById("imgm1").style.opacity='0.5';
    }

    if(count>100*(sclick+1)-1){
        document.getElementById("sc").style.backgroundColor='Lightgreen';
    }else{
        document.getElementById("sc").style.backgroundColor='Lightgray';
    }

}

function aadd(){
    count+=1;
    document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
}

function miner(){
    if(count>=10*(aclick+1)&&(!victory)){
        count-=10*(aclick+1);
        aclick+=1;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        document.getElementById("costa").innerHTML="Cost: " + (10*(aclick+1));
        document.getElementById("amountofminers").innerHTML="Miner x " + aclick;
        setInterval(aadd,5000/aclick);
    }
}

function auto2(){
    if(count>=100*(sclick+1)&&(!victory)){
        count-=100*(sclick+1);
        sclick+=1;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        document.getElementById("costs").innerHTML="Cost: " + (100*(sclick+1));
        document.getElementById("scnt").innerHTML="Driller x " + sclick;
        setInterval(aadd,1000/sclick);
    }
}

function upgrade1(){
    if((count>49)&&(!bought1)){
        bought1=true;
        bonus += 2;
        count = count - 50;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        document.getElementById("cost1").innerHTML="Upgrade cost: Bought";
        document.getElementById("cp").innerHTML="Currency per click: " + bonus;
    }
}

function upgrade2(){
    if((count>99)&&(!bought2)){
        bought2=true;
        bonus += 3;
        count = count - 100;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        document.getElementById("cost2").innerHTML="Upgrade cost: Bought";
        document.getElementById("cp").innerHTML="Currency per click: " + bonus;
    }
}


function upgrade5(){
    if((count>149)&&(!bought5)){
        bought5=true;
        dmg += 1;
        count = count - 150;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        document.getElementById("cost2").innerHTML="Upgrade cost: Bought";
        document.getElementById("dp").innerHTML="Damage per click: "+dmg;
    }
}

function win(){
    if((count>999)&&(!victory)){
        alert('you win!');
        victory=true;
        count -= 1000;
        document.getElementById("crystals").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
        clearInterval(time);
    }
}

function timer(){
    secs+=1;
    if (secs==60){
        secs-=60;
        mins+=1;
    }
    document.getElementById("time").innerHTML="Time: "+mins+" m, "+secs+" s";   
}