
$(() => {
////////modal///////////////////////////////////////
  const $modal = $('#modal');

  const $closeBtn = $('.modal-button');

  const openModal = () => {
    $modal.css('display', 'block');
  }

  setTimeout(openModal, 1000)

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  $closeBtn.on('click', closeModal);

  $closeBtn.on('mouseover', () => {
    $('.modal-button').css({'color':'black'});
  }).on('mouseout', () => {
    $('.modal-button').css({'color':'red'});
  })
////////modal//////////////////////////////////////////////

////////header buttons///////////////////////////////////////
  $('.header-button').on('mouseover', () => {
    $(event.currentTarget).css('color', 'white');
  }).on('mouseout', () => {
    $(event.currentTarget).css('color', 'black');
  })
////////header buttons///////////////////////////////////////

////////image carousel///////////////////////////////////////
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
  ////////image carousel///////////////////////////////////////

  ///////info buttons///////////////////////////////////////
  const $arrowsLeft = $('<div>').text('movie info > > >').addClass('arrows').addClass('blinker')
  $('.info-buttons').append($arrowsLeft)

  const $dieHard = $('<button>').text('1').css({'margin':'0 10px','background-color':'red',
    'border-radius':'50%','border':'red','width':'35px','height':'35px','font-family':'Rock Salt','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'1px 1px 4px white','outline':'none'})
  $('.info-buttons').append($dieHard)

  const $dieHard2 = $('<button>').text('2').css({'margin':'0 10px','background-color':'red',
    'border-radius':'50%','border':'red','width':'35px','height':'35px','font-family':'Rock Salt','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'1px 1px 4px white','outline':'none'})
  $('.info-buttons').append($dieHard2)

  const $dieHard3 = $('<button>').text('3').css({'margin':'0 10px','background-color':'red',
    'border-radius':'50%','border':'red','width':'35px','height':'35px','font-family':'Rock Salt','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'1px 1px 4px white','outline':'none'})
  $('.info-buttons').append($dieHard3)

  const $dieHard4 = $('<button>').text('4').css({'margin':'0 10px','background-color':'red',
    'border-radius':'50%','border':'red','width':'35px','height':'35px','font-family':'Rock Salt','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'1px 1px 4px white','outline':'none'})
  $('.info-buttons').append($dieHard4)

  const $dieHard5 = $('<button>').text('5').css({'margin':'0 10px','background-color':'red',
    'border-radius':'50%','border':'red','width':'35px','height':'35px','font-family':'Rock Salt','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'1px 1px 4px white','outline':'none'})
  $('.info-buttons').append($dieHard5)

  const $arrowsRight = $('<div>').text('< < < movie info').addClass('arrows').addClass('blinker')
  $('.info-buttons').append($arrowsRight)

  $arrowsLeft.on('mouseover', () => {
    $arrowsLeft.css('color', 'red');
  }).on('mouseout', () => {
    $arrowsLeft.css('color', 'white');
  })

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

  $arrowsRight.on('mouseover', () => {
    $arrowsRight.css('color', 'red');
  }).on('mouseout', () => {
    $arrowsRight.css('color', 'white');
  })

  $dieHard.on('click', () => {
    $('.invisible').css('color', 'white')
    $arrowsLeft.css('animation-name', 'none')
    $arrowsRight.css('animation-name', 'none')

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
    $('.invisible').css('color','white')
    $arrowsLeft.css('animation-name', 'none')
    $arrowsRight.css('animation-name', 'none')

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
    $arrowsLeft.css('animation-name', 'none')
    $arrowsRight.css('animation-name', 'none')

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
    $arrowsLeft.css('animation-name', 'none')
    $arrowsRight.css('animation-name', 'none')

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
    $arrowsLeft.css('animation-name', 'none')
    $arrowsRight.css('animation-name', 'none')

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
  ///////info buttons///////////////////////////////////////

  ///////random quote generator///////////////////////////////////////
  const randNum = () => {
    return Math.floor(Math.random() * quotes.length)
  }

  const quotes = ['Come out to the coast, we’ll get together, have a few laughs…',
                  'Just a fly in the ointment, Hans...a monkey in the wrench.',
                  'Welcome to the party, Pal!',
                  'Yippie-ki-yay, M*th*rf*ck*r!',
                  'Nine million terrorists in the world and I gotta kill one with feet smaller than my sister...',
                  'No f*cking sh*t lady, does it sound like I\'m ordering a pizza?',
                  'Happy trails, Hans!',
                  'Now I have a machine gun. Ho-Ho-Ho']

  const randQuote = () => {
    return quotes[randNum()]
  }

  const $button = $('<button>').text('QUOTE ME!').css({'height':'100px',
    'width':'250px','background-color':'red','border-radius':'3%','border':'1px solid red',
    'line-height':'1.5','cursor':'pointer','outline':'none','font-family':'Rock Salt','font-size':'18px','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'2px 2px 8px white'})
  $('.quote-button-container').append($button)

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
  ///////random quote generator///////////////////////////////////////

  ///////rock, paper, scissors, machine gun game///////////////////
  const jMoves = ['rock','paper','scissors','machine gun'];
  const hMoves = ['rock','paper','scissors'];

  const jRandomMove = () => {
    const randomNumber = Math.floor(Math.random() * jMoves.length);
    return jMoves[randomNumber];
  }

  const hRandomMove = () => {
    const randomNumber = Math.floor(Math.random() * hMoves.length);
    return hMoves[randomNumber];
  }

  const $throw = $('<button>').text('THROW!').css({'height':'100px','width':'250px',
    'background-color':'red','border-radius':'3%','border':'1px solid red','line-height':'1.5','cursor':'pointer','outline':'none','font-family':'Rock Salt','font-size':'18px','color':'white','text-shadow':'1px 1px 5px black','box-shadow':'2px 2px 8px white'}).addClass('throw-button')
  $('.outcome-container').append($throw)

  $throw.on('mouseover', () => {
    $throw.css('color', 'black');
  }).on('mouseout', () => {
    $throw.css('color', 'white');
  })

  $throw.on('click', () => {

    let johnMove = jRandomMove();
    let hansMove = hRandomMove();

    let rockPSMG = (hansMove, johnMove) => {
      $('.hans-throw').text(`Hans chooses: ${hansMove}`);
      $('.johns-throw').text(`John chooses: ${johnMove}`);

    if (hansMove === johnMove) {
      $('.outcome').text('Hans and John tie!');
    } else if (hansMove === 'rock') {
      if (johnMove === 'paper') {
        $('.outcome').text('John wins...paper beats rock!')
      } else if (johnMove === 'scissors') {
        $('.outcome').text('Hans wins...rock beats scissors!')
      } else if (johnMove === 'machine gun') {
          $('.outcome').text('John wins with his machine gun! Ho Ho Ho!').addClass('blinker2')
      }
    } else if (hansMove === 'paper') {
      if (johnMove === 'rock') {
        $('.outcome').text('Hans wins...paper beats rock!')
      } else if (johnMove === 'scissors') {
        $('.outcome').text('John wins...scissors beat paper!')
      } else if (johnMove === 'machine gun') {
          $('.outcome').text('John wins with his machine gun! Ho Ho Ho!').addClass('blinker2')
      }
    } else if (hansMove === 'scissors') {
      if (johnMove === 'rock') {
        $('.outcome').text('John wins...rock beats scissors!')
      } else if (johnMove === 'paper') {
        $('.outcome').text('Hans wins...scissors beat paper!')
      } else if (johnMove === 'machine gun') {
          $('.outcome').text('John wins with his machine gun! Ho Ho Ho!').addClass('blinker2')
      }
    }
    }
  rockPSMG(hansMove, johnMove);
  })
  ///////rock, paper, scissors, machine gun game///////////////////
})
