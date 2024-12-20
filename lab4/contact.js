document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Проверка имени: не должно быть пустым
        if (nameInput.value.trim() === '') {
            alert('Пожалуйста, введите ваше имя.');
            isValid = false;
        }

        // Проверка email: не должен быть пустым и должен содержать символ "@"
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            alert('Пожалуйста, введите корректный email.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Отменяем отправку формы, если есть ошибки
        } else {
            // Перенаправляем на страницу submit.html после успешной валидации
            window.location.href = 'submit.html';
            event.preventDefault(); // Предотвращаем стандартную отправку POST-запроса
        }
    });
});