const sendForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // const text = form.querySelector('input[type=text]');
        // const tel = form.querySelector('input[type=tel]');
        // const email = form.querySelector('input[type=email]');
        // const sendObj = {
        //     name: text.value,
        //     phone: tel.value,
        //     email: email.value,

        const formData = new FormData(form);

        let isValid = true;

        // проверка инпутов
        formData.forEach((value, key) => {

            const trimmedValue = value.toString().trim();

            switch (key) {
                case 'name':
                    if (trimmedValue.length < 2) {
                        alert('Имя должно содержать минимум 2 символа');
                        isValid = false;
                    }
                    break;

                case 'phone':
                    // проверка номера телефона
                    if (!/\d/.test(trimmedValue)) {
                        alert('Введите корректный номер телефона');
                        isValid = false;
                    }
                    break;

                case 'email':
                    // проверка email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(trimmedValue)) {
                        alert('Введите корректный email');
                        isValid = false;
                    }
                    break;
            }
        });

        // прерываем отправку, если валидация с ошибками
        if (!isValid) return;

        const sendObj = Object.fromEntries(formData.entries());

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendObj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                alert('Ошибка при отправке данных: ' + error.message);
            })
            .finally(() => {
                // Очищаем форму после отправки
                form.reset()
            });

    });
};

sendForm();