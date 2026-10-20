 document.addEventListener('DOMContentLoaded', function() {
            // Массив с данными о слайдах
            const images2 = [
                { src: 'Students/Yaroslav/progect/slides/photo_1.jpg', caption: 'розы' },
                { src: 'bird.jpg', caption: '..' },
                { src: 'bromeliad.jpg', caption: '..' },
                { src: 'bush-panorama.jpg', caption: '..' },
                { src: 'canal.jpg', caption: '..' },
                { src: 'church.jpg', caption: '..' },
                { src: 'cityscape.jpg', caption: '..' },
                { src: 'emu.jpg', caption: '..' },
                { src: 'gum-nuts.jpg', caption: '..' },
                { src: 'hanging-rock.jpg', caption: '..' },
                { src: 'hut.jpg', caption: '..' },
                { src: 'koala.jpg', caption: '.. ...' },
                { src: 'kookaburra.jpg', caption: '..' },
                { src: 'lake.jpg', caption: '..' },
                { src: 'lantern.jpg', caption: '..' },
                { src: 'light-house.jpg', caption: '..' },
                { src: 'lorikeet.jpg', caption: 'A..' },
                { src: 'mountain-panorama.jpg', caption: '..' },
                { src: 'rocks.jpg', caption: '..' },
                { src: 'rose.jpg', caption: '..' },
                { src: 'steps.jpg', caption: '..' },
                { src: 'sunset.jpg', caption: 'Sunset in the Clouds' },
                { src: 'tall-trees.jpg', caption: 'Trees in Australian Bush' },
                { src: 'tea-leaf.jpg', caption: 'A Leaf of the Camellia Sinensis Plant' },
                { src: 'train.jpg', caption: 'Train approaching the Station' },
                { src: 'waterfall.jpg', caption: 'Waterfall in the Wood' }
            ];
// Если у вас нет локальных картинок, раскомментируйте строки ниже,
            // чтобы использовать случайные изображения с picsum.photos (вместо реальных файлов).
            // Тогда массив будет выглядеть так:
            // images2 = images2.map((item, index) => ({
            //     src: `https://picsum.photos/seed/${index}/800/500`,
            //     caption: item.caption
            // }));

            // Функция запуска слайдшоу
            function doSlides(images, containerSelector, delay = 3000) {
                const container = document.querySelector(containerSelector);
                if (!container) {
                    console.error(`Контейнер "${containerSelector}" не найден`);
                    return;
                }

                // Очищаем контейнер (на случай, если там уже что-то есть)
                container.innerHTML = '';

                // Создаём элементы
                const img = document.createElement('img');
                container.appendChild(img);

                const caption = document.createElement('p');
                container.appendChild(caption);

                // Кнопки управления (по желанию)
                const controls = document.createElement('div');
                controls.className = 'controls';
                const btnPrev = document.createElement('button');
                btnPrev.textContent = '◀ Назад';
                const btnNext = document.createElement('button');
                btnNext.textContent = 'Вперед ▶';
                controls.appendChild(btnPrev);
                controls.appendChild(btnNext);
                container.appendChild(controls);

                // Индикатор текущего слайда
                const status = document.createElement('div');
                status.className = 'status';
                container.appendChild(status);

                let slideNumber = 0;
                let timer = null;

                // Функция показа слайда по индексу
                function showSlide(index) {
                    // Зацикливаем индекс
                    if (index < 0) index = images.length - 1;
                    if (index >= images.length) index = 0;
                    slideNumber = index;

                    const current = images[slideNumber];
                    const imgPath = `images/slides/${current.src}`;

                    // Устанавливаем изображение и подпись
                    img.src = imgPath;
                    img.alt = current.caption;
                    img.title = current.caption;
                    caption.textContent = current.caption;

                    // Обновляем статус
                    status.textContent = `${slideNumber + 1} / ${images.length}`;

                    // Обработчик ошибки загрузки (если картинка не найдена)
                    img.onerror = function() {
                        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect fill="%23eee" width="800" height="500"/%3E%3Ctext x="400" y="250" font-family="Arial" font-size="24" text-anchor="middle" fill="%23999"%3EИзображение не найдено%3C/text%3E%3C/svg%3E';
                        this.alt = 'Ошибка загрузки';
                        caption.textContent = `[Ошибка] ${current.caption}`;
                    };
                }

                // Функция переключения на следующий слайд
                function next() {
                    showSlide(slideNumber + 1);
                }

                // Функция переключения на предыдущий слайд
                function prev() {
                    showSlide(slideNumber - 1);
                }

                // Привязываем кнопки
                btnNext.addEventListener('click', function() {
                    clearInterval(timer);
                    next();
                    timer = setInterval(next, delay);
                });
btnPrev.addEventListener('click', function() {
                    clearInterval(timer);
                    prev();
                    timer = setInterval(next, delay);
                });

                // Запускаем автоматическую смену
                function startAutoPlay() {
                    if (timer) clearInterval(timer);
                    timer = setInterval(next, delay);
                }

                // Показываем первый слайд
                showSlide(0);
                startAutoPlay();

                // Возвращаем объект с методами управления (если нужно)
                return {
                    next,
                    prev,
                    goTo: showSlide,
                    stop: () => clearInterval(timer),
                    start: startAutoPlay
                };
            }

            // Запускаем слайдшоу в контейнере div#slides
            const slideshow = doSlides(images2, 'div#slides', 3000);

            // Если хотите остановить/запустить вручную из консоли, используйте:
            // slideshow.stop();  slideshow.start();
        });