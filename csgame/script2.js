var secs=0;
var mins=0;
var count=0;
var acount=0;
var aclick=0;
var sclick=0;
var mine=0;
var bon=1;
var dmg = 1;
var bought1=false;
var bought2=false;
var ready=true;
var start=true;
var victory=false;
var time;

setInterval(avail,1);

function wait(){
	ready=true;
}
	
function add(){
	if(ready){
		if(mins+secs==0&&(start)){
			time=setInterval(timer,1000);
			start=false;
		}
		mine+=dmg;
		document.getElementById("health").style.width=200-mine*70+"px";
		ready=false;
		setTimeout(wait, 100);

		if(mine>=3){
			count += bon;
			document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;
			mine=0;
			document.getElementById("health").style.width="200px";
		}	
	}
}

function aadd(){
	if(!victory){
		count+=1;
		document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;	
	}
}

function avail(){
	
	document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Crystals: ' + count;

	if((count>49)&&(!bought1)){
        document.getElementById("lvl1").style.backgroundColor='Lightgreen';
    }else{
		document.getElementById("lvl1").style.backgroundColor='Lightgray';
	}

    if((count>149)&&(!bought2)){
		document.getElementById("lvl2").style.backgroundColor='Lightgreen';
    }else{
		document.getElementById("lvl2").style.backgroundColor='Lightgray';
	}

    if(count>999){
        document.getElementById("win1").style.backgroundColor='Lightgreen';
	}else{
		document.getElementById("win1").style.backgroundColor='Lightgray';
	}

	if(count>10*(aclick+1)-1){
		document.getElementById("ac").style.backgroundColor='Lightgreen';
	}else{
		document.getElementById("ac").style.backgroundColor='Lightgray';
	}

	if(count>100*(sclick+1)-1){
		document.getElementById("sc").style.backgroundColor='Lightgreen';
	}else{
		document.getElementById("sc").style.backgroundColor='Lightgray';
	}

}

function auto1(){
	if(count>=10*(aclick+1)&&(!victory)){
		count-=10*(aclick+1);
		aclick+=1;
		document.getElementById("costa").innerHTML="Cost: " + (10*(aclick+1));
		document.getElementById("acnt").innerHTML="Miner x " + aclick;
		setInterval(aadd,5000/aclick);
	}
}

function auto2(){
	if(count>=100*(sclick+1)&&(!victory)){
		count-=100*(sclick+1);
		sclick+=1;
		document.getElementById("costs").innerHTML="Cost: " + (100*(sclick+1));
		document.getElementById("scnt").innerHTML="Driller x " + sclick;
		setInterval(aadd,1000/sclick);
	}
}

function upgrade1(){
    if((count>49)&&(!bought1)){
		bought1=true;
        bon += 2;
        count = count - 50;
        document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Money: ' + count;
		document.getElementById("cost1").innerHTML="Upgrade cost: Bought";
		document.getElementById("cp").innerHTML="Currency per click: "+bon;
	}
}

function upgrade2(){
    if((count>149)&&(!bought2)){
		bought2=true;
		dmg += 1;
        count = count - 150;
        document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Money: ' + count;
		document.getElementById("cost2").innerHTML="Upgrade cost: Bought";
		document.getElementById("dp").innerHTML="Damage per click: "+dmg;
    }
}

function win(){
	if((count>999)&&(!victory)){
		alert('you win!');
		victory=true;
		count -= 1000;
		document.getElementById("par2").innerHTML = '<img src="https://www.wyvernwood.co.uk/wp-content/uploads/2022/05/Precious-Gems.png" alt="google" width="30">&nbsp; Money: ' + count;
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