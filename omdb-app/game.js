
const moves = ['rock','paper','scissors','machine gun'];

const randomMove = () => {
  const randomNumber = Math.floor(Math.random() * moves.length);
  return moves[randomNumber];
}

let johnMove = randomMove();
let hansMove = randomMove();

const rockPSMG = (hansMove, johnMove) => {
  alert(`Hans chooses: ${hansMove}`);
  alert(`John chooses: ${johnMove}`);

  if (hansMove === johnMove) {
    alert('Hans and John tie!');
  } else if (hansMove === 'rock') {
    if (johnMove === 'paper') {
      alert('John wins...paper beats rock!')
    } else if (johnMove === 'scissors') {
      alert('Hans wins...rock beats scissors!')
    } else if (johnMove === 'machine gun') {
        alert('John wins...machine gun beats rock!')
    }
  } else if (hansMove === 'paper') {
    if (johnMove === 'rock') {
      alert('Hans wins...paper beats rock!')
    } else if (johnMove === 'scissors') {
      alert('John wins...scissors beat paper!')
    } else if (johnMove === 'machine gun') {
        alert('John wins...machine gun beats paper!')
    }
  } else if (hansMove === 'scissors') {
    if (johnMove === 'rock') {
      alert('John wins...rock beats scissors!')
    } else if (johnMove === 'paper') {
      alert('Hans wins...scissors beat paper!')
    } else if (johnMove === 'machine gun') {
        alert('John wins...machine gun beats scissors!')
    }
  } else if (hansMove === 'machine gun') {
    if (johnMove === 'rock') {
      alert('Hans wins...machine gun beats rock!')
    } else if (johnMove === 'paper') {
      alert('Hans wins...machine gun beats paper!')
    } else if (johnMove === 'scissors') {
        alert('Hans wins...machine gun beats scissors!')
    }
  }
  }


rockPSMG(hansMove, johnMove);
