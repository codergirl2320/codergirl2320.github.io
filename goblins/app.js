//////////////////////////////////////
// STEP ONE //////////////////////////
//////////////////////////////////////

// //empty array for goblins
// let goblinArray = [];
// //for loop to push 100 uncured/false goblins into the array
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
// console.log(goblinArray)


//////////////////////////////////////
// STEP TWO //////////////////////////
//////////////////////////////////////

// let goblinArray = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// //iterates through array and cures each goblin (changes to true)
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
// console.log(goblinArray)


//////////////////////////////////////
// STEP THREE ////////////////////////
//////////////////////////////////////

// let goblinArray = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
//
// //uncure (change to false) all odd goblins
// function iterTwo() {
//   for(i=0; i<=goblinArray.length; i++){
//     if (i % 2 !== 0){
//       goblinArray[i] = false
//     }
//   }
// }
// iterTwo()
// console.log(goblinArray)


//////////////////////////////////////
// STEP FOUR /////////////////////////
//////////////////////////////////////

// let goblinArray = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
//
// function iterTwo() {
//   for(i=0; i<=goblinArray.length; i++){
//     if (i % 2 !== 0){
//       goblinArray[i] = false
//     }
//   }
// }
// iterTwo()
// //toggle for every third goblin, starting with the third goblin
// function iterThree() {
//   for(i=2; i<=goblinArray.length; i++){
//     if ((i + 1) % 3 === 0){
//       goblinArray[i] = !goblinArray[i]
//           console.log(i)
//     }
//   }
// }
// iterThree()
// console.log(goblinArray)


//////////////////////////////////////
// STEP FIVE /////////////////////////
//////////////////////////////////////

// let goblinArray = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
//
// function iterTwo() {
//   for(i=0; i<=goblinArray.length; i++){
//     if (i % 2 !== 0){
//       goblinArray[i] = false
//     }
//   }
// }
// iterTwo()
//
// function iterThree() {
//   for(i=2; i<=goblinArray.length; i++){
//     if ((i + 1) % 3 === 0){
//       goblinArray[i] = !goblinArray[i]
//     }
//   }
// }
// iterThree()
// //toggle for every fourth goblin, starting with the fourth goblin
// function iterFour() {
//   for(i=3; i<=goblinArray.length; i++){
//     if ((i + 1) % 4 === 0){
//       goblinArray[i] = !goblinArray[i]
//       console.log(i)
//     }
//   }
// }
// iterFour()
// console.log(goblinArray)


//////////////////////////////////////
// STEP SIX //////////////////////////
//////////////////////////////////////

// let goblinArray = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
//
// function iterTwo() {
//   for(i=0; i<=goblinArray.length; i++){
//     if (i % 2 !== 0){
//       goblinArray[i] = false
//     }
//   }
// }
// iterTwo()
//
// function iterThree() {
//   for(i=2; i<=goblinArray.length; i++){
//     if ((i + 1) % 3 === 0){
//       goblinArray[i] = !goblinArray[i]
//     }
//   }
// }
// iterThree()
//
// function iterFour() {
//   for(i=3; i<=goblinArray.length; i++){
//     if ((i + 1) % 4 === 0){
//       goblinArray[i] = !goblinArray[i]
//     }
//   }
// }
// iterFour()
//
////variables so I can increment them within the nested loop
// let x = 3
// let y = 4
////toggle for every fifth goblin, starting with the fifth goblin, and so on...loop
// function iterFive() {
//   for(let j=0; j<=goblinArray.length; j++){
//     x++ && y++
//     for(i=x; i<=99; i++){
//       if ((i + 1) % y === 0){
//         goblinArray[i] = !goblinArray[i]
//       }
//     }
//   }
// }
// iterFive()
// console.log(goblinArray)


//////////////////////////////////////
// STEP SEVEN ////////////////////////
//////////////////////////////////////

// let goblinArray = [];
// let index = [];
//
// function createArray() {
//   for(let i=1; i<=100; i++){
//     goblinArray.push(false)
//   }
// }
// createArray()
//
// function iterOne() {
//   goblinArray.forEach((item, i) => {
//     if (goblinArray[i] === false){
//       goblinArray[i] = true
//     }
//   })
// }
// iterOne()
//
// function iterTwo() {
//   for(i=0; i<=goblinArray.length; i++){
//     if (i % 2 !== 0){
//       goblinArray[i] = false
//     }
//   }
// }
// iterTwo()
//
// function iterThree() {
//   for(i=2; i<=goblinArray.length; i++){
//     if ((i + 1) % 3 === 0){
//       goblinArray[i] = !goblinArray[i]
//     }
//   }
// }
// iterThree()
//
// function iterFour() {
//   for(i=3; i<=goblinArray.length; i++){
//     if ((i + 1) % 4 === 0){
//       goblinArray[i] = !goblinArray[i]
//     }
//   }
// }
// iterFour()
//
// let x = 3
// let y = 4
//
// function iterFive() {
//   for(let j=0; j<=goblinArray.length; j++){
//     x++ && y++
//     for(i=x; i<=99; i++){
//       if ((i + 1) % y === 0){
//         goblinArray[i] = !goblinArray[i]
//       }
//     }
//   }
// }
// iterFive()
//
// //function to find the index numbers of all the true values (cured goblins) and add 1 to get the
// //goblin number rather than the index number
// function getIndex(array, value) {
//   for(z = 0; z < goblinArray.length; z++)
//     if (goblinArray[z] === true)
//       index.push(z + 1)
//       return index
// }
// getIndex()
//
// // console.log(goblinArray)
// console.log(index)



//////////////////////////////////////
// DRY CODE //////////////////////////
//////////////////////////////////////

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
