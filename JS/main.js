var yourHead = document.getElementById('head1');
var yourApple =  document.getElementById('apple');
var yourScore = document.getElementById('score');
var score = 0;
if (yourHead){
    if(yourHead.style) {
    yourHead.style.height = '49px';
    yourHead.style.width = '49px';
}}
//Isto, drugacije napisano
function resize(element) {
    if (element && element.style) {
        element.style.height = '49px'
        element.style.width = '49px'
    }
}
var toResize = ['bodyOne', 'bodySecond', 'bodyThird', 'apple']
for (var i = 0; i < toResize.length; i++) {
    resize(document.getElementById(toResize[i]))
}
var yourBox = document.getElementById('box');
//Fukcija pomeranja 
let myHead = document.getElementById('head1');

window.addEventListener('load', () => {
    myHead.style.position = 'absolute';
    myHead.style.left = '910px';
    myHead.style.top = '230px';
});
let myBodyOne = document.getElementById('bodyOne');

window.addEventListener('load', () => {
    myBodyOne.style.position = 'absolute';
    myBodyOne.style.left = '860px';
    myBodyOne.style.top = '230px';
});


//Fukcija pomeranje telo 2
let myBodySecond = document.getElementById('bodySecond');

window.addEventListener('load', () => {
    myBodySecond.style.position = 'absolute';
    myBodySecond.style.left = '810px';
    myBodySecond.style.top = '230px';
});


//Fukcija pomeranja telo 3

let myBodyThird = document.getElementById('bodyThird');

window.addEventListener('load', () => {
    myBodyThird.style.position = 'absolute';
    myBodyThird.style.left = '760px';
    myBodyThird.style.top = '230px';
});
//Fukcija pozicija jabuke

let myApple = document.getElementById('apple');

window.addEventListener('load', () => {
    myApple.style.position = 'absolute';
    myApple.style.left = '960px';
    myApple.style.top = '330px';
});

window.addEventListener('keyup', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            if (current_rotation == 180) {
                calculateNewPosition()
            }
            if (last_rotation != 0) {
                current_rotation = 180;
            }
            document.querySelector("#head1").style.transform = 'rotate(' + current_rotation + 'deg)';
            break;

        case 'ArrowRight':
            if (current_rotation == 0) {
                calculateNewPosition()
            }
            if (last_rotation != 180) {
                current_rotation = 0;
            }
            document.querySelector("#head1").style.transform = 'rotate(' + current_rotation + 'deg)';
            break;

        case 'ArrowUp':
            if (current_rotation == -90) {
                calculateNewPosition()
            }
            if (last_rotation != 90) {
                current_rotation = -90;
            }
            document.querySelector("#head1").style.transform = 'rotate(' + current_rotation + 'deg)';
            break;

        case 'ArrowDown':
            if (current_rotation == 90) {
                calculateNewPosition()
            }
            if (last_rotation != -90) {
                current_rotation = 90;
            }
            document.querySelector("#head1").style.transform = 'rotate(' + current_rotation + 'deg)';
            break;

        default:

    }
});
var current_rotation = 0;
var last_rotation = 0;

var bodyParts = [myHead, myBodyOne, myBodySecond, myBodyThird];

function calculateNewPosition() {
    for (var i = bodyParts.length - 1; i > 0; i--) {
        var selectedParts = bodyParts[i]
        var prevouesParts = bodyParts[i - 1]
        selectedParts.style.left = prevouesParts.style.left
        selectedParts.style.top = prevouesParts.style.top
    }

    var headPart = bodyParts[0]
    last_rotation = current_rotation
    switch (current_rotation) {

        case 180:
            headPart.style.left = parseInt(headPart.style.left) - 50 + 'px';

            break;
        case 0:
            headPart.style.left = parseInt(headPart.style.left) + 50 + 'px';
            break;
        case -90:
            headPart.style.top = parseInt(headPart.style.top) - 50 + 'px';
            break;
        case 90:
            headPart.style.top = parseInt(headPart.style.top) + 50 + 'px';
            break;

    }
}

function snakeMoving() {
    calculateNewPosition()
    var died = false;
    if (headBlock()) {
        died = true;
    }
    if (headSometning(yourApple)){
        appelAppear()
        addBodyPart()
        addScore()
        incrisingSpeadApple()
    }
    
    for(var i = 1; i< bodyParts.length; i++){
        if(headSometning(bodyParts[i])){
            died = true
        }
    }
    if(!died){
        setTimeout(snakeMoving, timeSnakeMove)
    }
    else{
        alert("Game over!")   
    }
}

//Ubrzavanje zmije

var timeSnakeMove = 1000
var myInterval = setTimeout(snakeMoving, timeSnakeMove);

function increaseSnakeSpeed() {
    if (timeSnakeMove > 100) {
        timeSnakeMove -= 1
    }


}
setInterval(increaseSnakeSpeed, 2000);

//Granicnik

function headBlock() {

    var rectHead = yourHead.getBoundingClientRect()
    var rectBox = yourBox.getBoundingClientRect()

    if (rectHead.y < rectBox.y) {
        return true
    }
    if (rectHead.x < rectBox.x) {
        return true
    }
    if (rectHead.y + rectHead.height > rectBox.y + rectBox.height) {
        return true
    }
    if (rectHead.x + rectHead.width > rectBox.x + rectBox.width) {
        return true
    }
    return false
}
//Jedenje jabuke

function isEndSmallerThanBegining(end, begining){
    return end <= begining
}

function headSometning(something) {

        var rectHead = yourHead.getBoundingClientRect()
        var rectSometning = something.getBoundingClientRect()
    
        if (isEndSmallerThanBegining(rectHead.height + rectHead.y , rectSometning.y)) {
            return false
        }
        if (isEndSmallerThanBegining(rectSometning.height + rectSometning.y , rectHead.y)) {
            return false
        }
        if (isEndSmallerThanBegining(rectHead.width + rectHead.x , rectSometning.x)) {
            return false
        }
        if (isEndSmallerThanBegining(rectSometning.width + rectSometning.x , rectHead.x)) {
            return false
        }
        return true
    }
//Radom pozicija

function appelAppear(){

    var bbApple = yourApple.getBoundingClientRect();
    var bbBox = yourBox.getBoundingClientRect();
    var newTop = parseInt(bbBox.y) + Math.random() * (parseInt(bbBox.height)-parseInt(bbApple.height)) + 'px'
    var newLeft = parseInt(bbBox.x) + Math.random() * (parseInt(bbBox.width)-parseInt(bbApple.width)) + 'px'
    yourApple.style.top = newTop

    yourApple.style.left = newLeft

}

function addBodyPart(){
    var newPart = document.createElement('img');
    newPart.style.position = 'absolute';
    newPart.src = "/Pictures/body-fococlipping-standard.png"
    resize(newPart)
    document.getElementsByTagName('body')[0].appendChild(newPart)
    bodyParts.push(newPart)
}
//Score
function addScore (){
score = score + 1
yourScore.innerHTML = score

}
function incrisingSpeadApple (){
timeSnakeMove = timeSnakeMove - 10
}





