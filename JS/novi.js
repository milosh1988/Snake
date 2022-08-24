function soriranjaDva (red)
{
  let a = red[0]
  let b = red[1]

  if (a > b){
    return [b, a]
  }  
  else {
    return [a, b]
  }
}

var a = [4,5]
var b = [8,4]
var c = [3,2]

var sortA = soriranjaDva(a)
var sortB = soriranjaDva(b)
var sortC = soriranjaDva(c)

console.log(a,'sort', sortA)
console.log(b,'sort', sortB)
console.log(c,'sort', sortC)

function sortiraj (red) {
    let rez = [];
    let len = red.length
    let orgLen = len;

    for(let n=0; n<orgLen; n++){
        let minBr = Math.min( ...red )
        rez.push(minBr)
        let el = red.indexOf(minBr);
        let tmp =  [...red]
        tmp.splice(el, 1);
        red = tmp;
        len = red.length
    }
    return rez
}

var f = [8,4,6,5, 20, 15, 18, 6, 5]
console.log(f,'sta oces', sortiraj(f))
var sortiranRed = sortiraj(f)
sortiranRed.shift()

console.log(sortiranRed)

//svaki drugi broj

var allNumb = [1, 5, 58, 68, 3, 7]
function evrySecondNumber(evry) {
  
  var numbers = [];
  for (var i = 1; i < evry.length; i += 2){
  numbers.push(evry[i])
}
//ovde

  return numbers
}
console.log(evrySecondNumber(allNumb))

const subNumb = evrySecondNumber(allNumb)

let subAllNumb = 0;

for (let index = 0; index < subNumb.length; index++) {
  subAllNumb += subNumb[index];
}

console.log(subAllNumb);

function isEqual(a, b, nesto){
  if(a == b){
      nesto(a+b)
  }
}

isEqual(1,1, function(zbir){
  console.log("mika", ' i zbir je ',zbir)
})

function sumWith(a){
  return function (b){
      return a + b
  }
}

var sumWith7 = sumWith(7);

var sum7and5 = sumWith7(5);

console.log('7 + 5 = ', sum7and5)

console.log('7 + 8 = ', sumWith7(8))

console.log('7 + 12 = ', sumWith7(12))
