let button = document.querySelector('button');
let change1 = document.querySelector('div');
const innie = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
let outie;
let red;
let blue;
let green;
let ftoc = false;
let farenval = outie;
let theFtemp = 100;
let theColor = 'blue'

function getcha() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById('thermo_5');
  
    if (theFtemp > 124) {
        theFtemp = 124;
    }
    context.beginPath();
    context.fillStyle = 'white';
    context.rect(0, 0, 160, 400);
    context.fill();
    
    context.beginPath();
    context.rect(0, (300 - (theFtemp * 2)), 160, 400);
    context.fillStyle = theColor;
    context.fill();
    // context.lineWidth = 7;
    // context.strokeStyle = 'black';
    // context.stroke();
    context.drawImage(img, 0, 0);
}

window.onload = getcha() 


function convert1() {
    if (ftoc == false) {
        outie = innie.value * (9/5) + 32 ;
        farenval = outie;
        out1.innerHTML = outie.toFixed(1) + '°F ' + innie.value + '°C';
        red = Math.floor(outie / 100 * 255);
        blue = Math.floor((100 - outie)/100 * 255);
        green = Math.floor(((50 - Math.abs (50 - outie)) / 50) * 196);
        farenval = outie;
    } else {
        outie = (innie.value - 32) * (5/9);
        out1.innerHTML = outie.toFixed(1) + '°C ' + innie.value + '°F';
        red = Math.floor(innie.value / 100 * 255);
        blue = Math.floor((100 - innie.value)/100 * 255);
        green = Math.floor(((50 - Math.abs (50 - innie.value)) / 50) * 220);
        farenval = innie.value;
    }

    if (farenval < 10) {
        out2.innerHTML = 'Layer! Layer! Layer!'
    } else if (farenval >= 10 && farenval < 20) {
        out2.innerHTML = 'Really bundle up!'
    } else if (farenval >= 20 && farenval < 30) {
        out2.innerHTML = 'Wear a fleece, a jacket, and some gloves.'
    } else if (farenval >= 30 && farenval < 40) {
        out2.innerHTML = 'Break out the winter coat (and maybe a sweater)'
    } else if (farenval >= 40 && farenval < 50) {
        out2.innerHTML = 'Just a light jacket'
    } else if (farenval >= 50 && farenval < 60) {
        out2.innerHTML = 'Sweater Weather!'
    } else if (farenval >= 60 && farenval < 70) {
        out2.innerHTML = 'Comfort zone, no coat or sweater needed!'
    } else if (farenval >= 70 && farenval < 80) {
        out2.innerHTML = "Time for short sleeves, it's beautiful!"
    } else if (farenval >= 80 && farenval < 90) {
        out2.innerHTML = "It's getting hot! Go sleeveless!"
    } else if (farenval >= 90 && farenval < 100) {
        out2.innerHTML = "It's just too hot, stay hydrated and good luck!"
    } else if (farenval >100) {
        out2.innerHTML = "You're in hell! Head to the mountains!"
    }
    if (innie.value == '') {
        out1.innerHTML = '';
        out2.innerHTML = '';
    }
    
    theFtemp = farenval;
    theColor = `rgb(${red}, ${green}, ${blue})`;
    getcha();
    innie.value = '';
}

function switch1() {
    if (ftoc == false) {
        ftoc = true
        innie.placeholder = 'Enter Fahrenheit'
        innie.value = '';
        out1.innerHTML = null
    } else {
        ftoc = false
        innie.placeholder = 'Enter Celcius'
        innie.value = '';
        out1.innerHTML = null
    }
}