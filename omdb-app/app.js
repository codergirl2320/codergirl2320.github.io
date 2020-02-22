// console.log('js file is connected');

$(() => {

  let currentImgIndex = 0;

  let highestIndex = $('.carousel-images').children().length - 1

  $('.next').on('click', () => {
    const $currentImg = $('.carousel-images').children().eq(currentImgIndex)
    $currentImg.css('display', 'none')
    currentImgIndex++

    if (currentImgIndex > highestIndex) {
      currentImgIndex = 0;
    }

  const $nextImg = $('.carousel-images').children().eq(currentImgIndex)
  $nextImg.css('display', 'block')

})

  $('.previous').on('click', () => {
    const $currentImg = $('.carousel-images').children().eq(currentImgIndex)
    $currentImg.css('display', 'none')
    currentImgIndex--

    if (currentImgIndex < 0) {
      currentImgIndex = highestIndex;
    }

    const $nextImg = $('.carousel-images').children().eq(currentImgIndex)
    $nextImg.css('display', 'block')

  })
})

const randNum = () => {
  return Math.floor(Math.random() * quotes.length)
}

const quotes = ['Come out to the coast, we’ll get together, have a few laughs…',
                'Just a fly in the ointment, Hans. A monkey in the wrench.',
                'Welcome to the party, Pal!',
                'Yippie Ki Yay, M*th*rf*ck*r!',
                'Nine million terrorists in the world and I gotta kill one with feet smaller than my sister.',
                'No f*cking sh*t lady, does it sound like I\'m ordering a pizza?',
                'Happy trails, Hans!']

const randQuote = () => {
  return quotes[randNum()]
}

// randNum()
// console.log(randNum())

randQuote()
console.log(quotes[randNum()])
