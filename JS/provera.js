var jabukaDom = document.createElement('img');
jabukaDom.src = '/Pictures/apple.png'
jabukaDom.className = 'jabuka'
var teren = document.getElementById('main')

teren.appendChild(jabukaDom);



setInterval(function(){
jabukaDom.style.top = Math.random() * 500 + 'px'
jabukaDom.style.left = Math.random() * 500 + 'px'
}, 1000)

var noviSt = 'Misko pije'

function dodavanje(ona){
    return ona + ' Pivo'
}
noviSt = dodavanje(noviSt)
console.log(noviSt)

var pas = 'Hana'

function spic(mali){
    return mali + ' je cupa'
}

pas = spic(pas)
console.log(pas)