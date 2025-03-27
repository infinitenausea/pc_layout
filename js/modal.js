'use strict'

const modal = () => {
    const modalBtn = document.querySelector('.modal__button');
    const modal = document.querySelector('.modal');
    const modalInner = document.querySelector('.modal__inner');
    const courseBtn = document.querySelector('.course__button');

    //Создаём "крестик" для закрытия модального окна
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
position: absolute; 
top: 15px; 
right: 15px; 
font-size: 34px; 
color: #888; 
cursor: pointer; 
transition: color 0.3s ease;
z-index: 100;
line-height: 1;
`;

    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.color = '#000';
    });

    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.color = '#888';
    });

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        //Добавляем "крестик" в модальное окно
        modalInner.style.position = 'relative'
        modalInner.append(closeBtn);
    });

    courseBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        //Добавляем "крестик" в модальное окно
        modalInner.style.position = 'relative'
        modalInner.append(closeBtn);
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = '';
        //Сбрасываем позиционирование при закрытии модального окна
        modalInner.style.position = ''
    });

    modal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner');
        if (!modalContent) {
            modal.style.display = '';
            //Сбрасываем позиционирование при закрытии модального окна
            modalInner.style.position = ''
        }
    });
};
modal();