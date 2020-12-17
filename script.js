const color = (st) => {
    for(let i = 0; i < st.length; i++){
        st[i].style.backgroundColor = "rgb(255, 255, 0)";
    }
}

const unitude = (multi) => {
    return multi % 10;
}

const multi = (m) => { 
    return Math.floor(m/10);
}

const count = (number) =>{
    let name;
    switch(number){
        case 0: name = "zero";
        break;
        case 1: name = "one";
        break;
        case 2: name = "two";
        break;
        case 3: name = "three";
        break;
         case 4: name = "four";
        break;
        case 5: name = "five";
        break;
        case 6: name = "six";
        break;
        case 7: name = "seven";
        break;
        case 8: name = "eight";
        break;
        case 9: name = "nine";
        break;
    }
    return name;
}

const timer = () => {
    const today = new Date();

    const hourUni = unitude(today.getHours());
    const hourMulti = multi(today.getHours());
    const minuteUni = unitude(today.getMinutes());
    const minuteMulti = multi(today.getMinutes());
    const secondUni = unitude(today.getSeconds());
    const secondMulti = multi(today.getSeconds());

    for(let w = 0; w < document.getElementsByClassName("eight").length; w++){
        document.getElementsByClassName("eight")[w].style.backgroundColor = "rgb(120, 110, 110)";
    }

    color(document.getElementById("hourMulti").getElementsByClassName(count(hourMulti)));
    color(document.getElementById("hourUni").getElementsByClassName(count(hourUni)));
    color(document.getElementById("minuteMulti").getElementsByClassName(count(minuteMulti)));
    color(document.getElementById("minuteUni").getElementsByClassName(count(minuteUni)));
    color(document.getElementById("secondMulti").getElementsByClassName(count(secondMulti)));
    color(document.getElementById("secondUni").getElementsByClassName(count(secondUni)));

    setTimeout("timer()", 1000);
}

let music = new Audio(src="1.wav");
func = () => {
    document.getElementById("play").style.background="rgb(80,80,80)";
    document.getElementById("play").style.color="rgb(200,80,80)";
    document.getElementById("play").style.width="340px";
    document.getElementById("play").style.cursor="default";
    document.getElementById("play").onClick="this.disabled=true";
    document.getElementById("play").value="Muzyka jest odtwarzana";
    music.volume = 0.3;
    music.play();
    setTimeout("musicEnded()", music.duration*1000+150);
}

function musicEnded() {
    document.getElementById("play").style.background=null;
    document.getElementById("play").style.color=null;
    document.getElementById("play").style.width=null;
    document.getElementById("play").style.cursor=null;
    document.getElementById("play").onClick="this.disabled=false";
    document.getElementById("play").value="Włącz muzykę";
}