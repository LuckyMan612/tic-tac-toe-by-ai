const cells = document.querySelectorAll('.cell');
let currentPlayer = 'o';

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function(e) {
    if (!e.target.textContent) {
      e.target.textContent = currentPlayer;
      e.target.classList.add(currentPlayer);

      if (checkWin()) {
        alert(`Gratulacje dla gracza ${currentPlayer}! Wygrałeś!`);
        return;
      }
      currentPlayer = currentPlayer === 'o' ? 'x' : 'o';
    }
  });
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}
