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

  const $dieHard = $('<button>').text('Die Hard')
  $('body').append($dieHard)

  const $dieHard2 = $('<button>').text('Die Hard 2')
  $('body').append($dieHard2)

  const $dieHard3 = $('<button>').text('Die Hard 3')
  $('body').append($dieHard3)

  const $dieHard4 = $('<button>').text('Die Hard 4')
  $('body').append($dieHard4)

  const $dieHard5 = $('<button>').text('Die Hard 5')
  $('body').append($dieHard5)


$dieHard.on('click', () => {
  $('.invisible').css('color', 'white')

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard',
  }).then(
    (data) => {
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#run-time').html(data.Runtime);
      $('#release-date').html(data.Released);
      $('#rating').html(data.Rated);
    },
  )
})

$dieHard2.on('click', () => {
  $('.invisible').css('color', 'white')

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard%202',
  }).then(
    (data) => {
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#run-time').html(data.Runtime);
      $('#release-date').html(data.Released);
      $('#rating').html(data.Rated);
    },
  )
})

$dieHard3.on('click', () => {
  $('.invisible').css('color', 'white')

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard%20with%20a%20vengeance',
  }).then(
    (data) => {
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#run-time').html(data.Runtime);
      $('#release-date').html(data.Released);
      $('#rating').html(data.Rated);
    },
  )
})

$dieHard4.on('click', () => {
  $('.invisible').css('color', 'white')

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=live%20free%20or%20die%20hard',
  }).then(
    (data) => {
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#run-time').html(data.Runtime);
      $('#release-date').html(data.Released);
      $('#rating').html(data.Rated);
    },
  )
})

$dieHard5.on('click', () => {
  $('.invisible').css('color', 'white')
  
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=a%20good%20day%20to%20die%20hard',
  }).then(
    (data) => {
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#run-time').html(data.Runtime);
      $('#release-date').html(data.Released);
      $('#rating').html(data.Rated);
    },
  )
})

const randNum = () => {
  return Math.floor(Math.random() * quotes.length)
}

const quotes = ['Come out to the coast, we’ll get together, have a few laughs…',
                'Just a fly in the ointment, Hans...a monkey in the wrench.',
                'Welcome to the party, Pal!',
                'Yippie Ki Yay, M*th*rf*ck*r!',
                'Nine million terrorists in the world and I gotta kill one with feet smaller than my sister...',
                'No f*cking sh*t lady, does it sound like I\'m ordering a pizza?',
                'Happy trails, Hans!']


const randQuote = () => {
  return quotes[randNum()]
}

const $button = $('<button>').text('McClane-ables').css({'height':'75px',
                'width':'200px','background-color':'red','border-radius':'5%',
                'border':'black','line-height':'1.5','cursor':'pointer','font-family':
                'Rock Salt','font-size':'18px','color':'black'}).addClass('button')
$('.container').append($button)

$button.on('mouseover', () => {
  $button.css('color', 'white');
}).on('mouseout', () => {
  $button.css('color', 'black');
})

$button.on('click', () => {
  $('.middle').empty()
  const $quote = $('<p>' + randQuote() + '</p>').addClass('random-quote')
  $('.middle').append($quote)
})

})
