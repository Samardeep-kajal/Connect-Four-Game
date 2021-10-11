document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grids div");
  const result = document.querySelector("#result");
  const showCurrentPlayer = document.querySelector("#current-player");
  let currentPlayer = 1;

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      // If the square below your current square is taken, you can go on the top of it
      if (squares[i + 7].classList.contains("taken")) {
        if (currentPlayer == 1) {
          squares[i].classList.add("taken");
          squares[i].classList.add("playerone");
          currentPlayer = 2;
          showCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          squares[i].classList.add("taken");
          squares[i].classList.add("playertwo");
          currentPlayer = 1;
          showCurrentPlayer.innerHTML = currentPlayer;
        }
      } else alert("You cannot go there!");
    };
  }
});
