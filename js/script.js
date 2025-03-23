'use strict'

const contents = document.querySelectorAll('.program-line__content');
contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        const isActive = descr.classList.contains('active');
        // descr.classList.toggle('active')

        contents.forEach(otherElem => {
            const otherDescr = otherElem.querySelector('.program-line__descr');
            otherDescr.classList.remove('active');
        });

        if (!isActive) {
            descr.classList.add('active');
        }
    });

});