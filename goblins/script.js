$(() => {

  let goblinArray = [];
  let index = [];
  let x = 0;
  let y = 1;

  function createArray() {
    for(let i=1; i<=100; i++){
      goblinArray.push(false)
    }
    return(goblinArray.join(', '))
  }

  const $createArrayBtn = $('<button>').text('Execute Step One')
  $('.step-one-button').append($createArrayBtn)

  $createArrayBtn.on('click', () => {
    const $stepOne = $('<p>' + '[' + createArray() + ']' + '</p>')
    $('.step-one').append($stepOne)
  })

  function iterOne() {
    goblinArray.forEach((item, i) => {
      goblinArray[i] = !goblinArray[i]
    })
    return(goblinArray.join(', '))
  }

  const $iterOneBtn = $('<button>').text('Execute Step Two')
  $('.step-two-button').append($iterOneBtn)

  $iterOneBtn.on('click', () => {
    const $stepTwo = $('<p>' + '[' + iterOne() + ']' + '</p>')
    $('.step-two').append($stepTwo)
  })

  function iterTwo() {
    for(let j=0; j<=goblinArray.length; j++){
      x++ && y++
      for(i=x; i<=goblinArray.length - 1; i++){
        if ((i + 1) % y === 0){
          goblinArray[i] = !goblinArray[i]
        }
      }
    }
    return(goblinArray.join(', '))
  }

  const $iterTwoBtn = $('<button>').text('Execute Step Three')
  $('.step-three-button').append($iterTwoBtn)

  $iterTwoBtn.on('click', () => {
    const $stepThree = $('<p>' + '[' + iterTwo() + ']' + '</p>')
    $('.step-three').append($stepThree)
  })

  function getIndex(array, value) {
    for(z = 0; z < goblinArray.length; z++)
      if (goblinArray[z] === true)
        index.push(z + 1)
        return index
  }

  const $getIndexBtn = $('<button>').text('Execute Step Four')
  $('.step-four-button').append($getIndexBtn)

  $getIndexBtn.on('click', () => {
    const $stepFour = $('<p>' + '[' + getIndex() + ']' + '</p>')
    $('.step-four').append($stepFour)
  })

})
