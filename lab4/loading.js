// window.addEventListener('load', function() {
//     const loadingOverlay = document.getElementById('loading-overlay');
//     // Добавляем задержку в 0.5 секунды (500 миллисекунд) перед скрытием
//     setTimeout(function() {
//         loadingOverlay.style.display = 'none';
//     }, 500);
// });

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем немедленный переход

            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href; // Переходим на новую страницу после затухания
            }, 300); // Задержка должна соответствовать длительности transition в CSS
        });
    });
});

