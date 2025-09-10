 function playGame(userChoice) {
      let randomNum = Math.random() * 3;
      let computerChoice;

      if (randomNum < 1) {
        computerChoice = 'Bat';
      } else if (randomNum < 2) {
        computerChoice = 'Ball';
      } else {
        computerChoice = 'Stump';
      }

      let result;
      if (userChoice === computerChoice) {
        result = 'Draw';
      } else if (
        (userChoice === 'Bat' && computerChoice === 'Ball') ||
        (userChoice === 'Ball' && computerChoice === 'Stump') ||
        (userChoice === 'Stump' && computerChoice === 'Bat')
      ) {
        result = 'You Win';
      } else {
        result = 'You Lose';
      }

      alert(`You chose ${userChoice}, Computer chose ${computerChoice} → ${result}`);
    }