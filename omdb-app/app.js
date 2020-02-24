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

  const $dieHard = $('<button>').text('1').css({'margin':'10px','background-color':'red','border-radius':'50%','border':'red','width':'30px','height':'30px','font-family':'Rock Salt','color':'white'})
  $('.info-buttons').append($dieHard)

  const $dieHard2 = $('<button>').text('2').css({'margin':'10px','background-color':'red','border-radius':'50%','border':'red','width':'30px','height':'30px','font-family':'Rock Salt','color':'white'})
  $('.info-buttons').append($dieHard2)

  const $dieHard3 = $('<button>').text('3').css({'margin':'10px','background-color':'red','border-radius':'50%','border':'red','width':'30px','height':'30px','font-family':'Rock Salt','color':'white'})
  $('.info-buttons').append($dieHard3)

  const $dieHard4 = $('<button>').text('4').css({'margin':'10px','background-color':'red','border-radius':'50%','border':'red','width':'30px','height':'30px','font-family':'Rock Salt','color':'white'})
  $('.info-buttons').append($dieHard4)

  const $dieHard5 = $('<button>').text('5').css({'margin':'10px','background-color':'red','border-radius':'50%','border':'red','width':'30px','height':'30px','font-family':'Rock Salt','color':'white'})
  $('.info-buttons').append($dieHard5)

  $dieHard.on('mouseover', () => {
    $dieHard.css('color', 'black');
  }).on('mouseout', () => {
    $dieHard.css('color', 'white');
  })

  $dieHard2.on('mouseover', () => {
    $dieHard2.css('color', 'black');
  }).on('mouseout', () => {
    $dieHard2.css('color', 'white');
  })

  $dieHard3.on('mouseover', () => {
    $dieHard3.css('color', 'black');
  }).on('mouseout', () => {
    $dieHard3.css('color', 'white');
  })

  $dieHard4.on('mouseover', () => {
    $dieHard4.css('color', 'black');
  }).on('mouseout', () => {
    $dieHard4.css('color', 'white');
  })

  $dieHard5.on('mouseover', () => {
    $dieHard5.css('color', 'black');
  }).on('mouseout', () => {
    $dieHard5.css('color', 'white');
  })

  $('.previous').on('mouseover', () => {
    $('.previous').css({'background-color':'white','color':'red'});
  }).on('mouseout', () => {
    $('.previous').css({'background-color':'red','color':'white'});
  })

  $('.next').on('mouseover', () => {
    $('.next').css({'background-color':'white','color':'red'});
  }).on('mouseout', () => {
    $('.next').css({'background-color':'red','color':'white'});
  })


$dieHard.on('click', () => {
  $('.invisible').css('color', 'white')

  $.ajax({
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard',
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
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard%202',
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
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=die%20hard%20with%20a%20vengeance',
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
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=live%20free%20or%20die%20hard',
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
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=a%20good%20day%20to%20die%20hard',
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
                'border':'red','line-height':'1.5','cursor':'pointer','font-family':
                'Rock Salt','font-size':'18px','color':'white'}).addClass('button')
$('.container').append($button)

$button.on('mouseover', () => {
  $button.css('color', 'black');
}).on('mouseout', () => {
  $button.css('color', 'white');
})

$button.on('click', () => {
  $('.middle').empty()
  const $quote = $('<p>' + randQuote() + '</p>').addClass('random-quote')
  $('.middle').append($quote)
})

})
