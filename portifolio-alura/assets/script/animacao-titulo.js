const frontEndText = document.getElementById('titulo-bio');

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function changeColor() {
      const randomColor = getRandomColor();
      frontEndText.style.color = randomColor;
    }

    frontEndText.addEventListener('mouseover', () => {
      const intervalId = setInterval(changeColor, 100);
      frontEndText.addEventListener('mouseout', () => {
        clearInterval(intervalId);
        frontEndText.style.color = 'var(--cor-laranja)';
      });
    });