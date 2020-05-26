let goblinArray = [];
let index = [];
let x = 0;
let y = 1;

function createArray() {
  for(let i=1; i<=100; i++){
    goblinArray.push(false)
  }
}
createArray()

function iterOne() {
  goblinArray.forEach((item, i) => {
    goblinArray[i] = !goblinArray[i]
  })
}
iterOne()

function iterTwo() {
  for(let j=0; j<=goblinArray.length; j++){
    x++ && y++
    for(i=x; i<=goblinArray.length - 1; i++){
      if ((i + 1) % y === 0){
        goblinArray[i] = !goblinArray[i]
      }
    }
  }
}
iterTwo()

function getIndex(array, value) {
  for(z = 0; z < goblinArray.length; z++)
    if (goblinArray[z] === true)
      index.push(z + 1)
      return index
}
getIndex()

console.log(goblinArray)
console.log(index)
