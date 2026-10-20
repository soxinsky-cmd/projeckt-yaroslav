const greenRect = document.getElementById('greenRectDiv');
    const wrapperDiv = document.getElementById('wrapperDiv');

    // Скорость движения в пикселях за кадр
    const speed = 3;

    function animateDiagonal() {
      // Получаем актуальные размеры и позиции каждый кадр
      const wrapperRect = wrapperDiv.getBoundingClientRect();
      const rect = greenRect.getBoundingClientRect();

      // Вычисляем позицию квадрата относительно контейнера
      const currentLeft = rect.left - wrapperRect.left;
      const currentTop = rect.top - wrapperRect.top;

      // Целевая позиция: правый нижний угол внутри контейнера
      const targetLeft = wrapperRect.width - greenRect.offsetWidth;
      const targetTop = wrapperRect.height - greenRect.offsetHeight;

      let moved = false;

      // Двигаем по горизонтали
      if (currentLeft < targetLeft) {
        const step = Math.min(speed, targetLeft - currentLeft);
        greenRect.style.left = (currentLeft + step) + 'px';
        moved = true;
      } else {
        greenRect.style.left = targetLeft + 'px';
      }

      // Двигаем по вертикали
      if (currentTop < targetTop) {
        const step = Math.min(speed, targetTop - currentTop);
        greenRect.style.top = (currentTop + step) + 'px';
        moved = true;
      } else {
        greenRect.style.top = targetTop + 'px';
      }

      // Если ещё есть куда двигаться — продолжаем анимацию
      if (moved) {
        requestAnimationFrame(animateDiagonal);
      }
    }

    // Запуск анимации
    animateDiagonal();