
const color = (st) => {
    for(let i = 0; i < st.length; i++){
        st[i].style.backgroundColor = "rgb(19, 9, 114)";
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
    /*
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    */

    const hourUni = unitude(today.getHours());
    const hourMulti = multi(today.getHours());
    const minuteUni = unitude(today.getMinutes());
    const minuteMulti = multi(today.getMinutes());
    const secondUni = unitude(today.getSeconds());
    const secondMulti = multi(today.getSeconds());

    for(let w = 0; w < document.getElementsByClassName("eight").length; w++){
        document.getElementsByClassName("eight")[w].style.backgroundColor = " rgb(199, 52, 52)";
    }

    color(document.getElementById("hourMulti").getElementsByClassName(count(hourMulti)));
    color(document.getElementById("hourUni").getElementsByClassName(count(hourUni)));
    color(document.getElementById("minuteMulti").getElementsByClassName(count(minuteMulti)));
    color(document.getElementById("minuteUni").getElementsByClassName(count(minuteUni)));
    color(document.getElementById("secondMulti").getElementsByClassName(count(secondMulti)));
    color(document.getElementById("secondUni").getElementsByClassName(count(secondUni)));

    setTimeout("timer()", 1000);
}
