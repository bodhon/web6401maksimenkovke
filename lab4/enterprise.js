document.addEventListener('DOMContentLoaded', function() {
    const classesTable = document.getElementById('otherClasses');

    fetch('http://localhost:8000/starshipClasses')
        .then(response => {
            console.log('Ответ от сервера (response):', response); // Проверяем ответ
            return response.json();
        })
        .then(data => {
            console.log('Полученные данные (data):', data); // Проверяем данные
            data.forEach(item => {
                console.log('Обрабатываемый элемент (item):', item); // Проверяем каждый элемент
                let row = classesTable.insertRow();
                let classCell = row.insertCell();
                let descriptionCell = row.insertCell();
                classCell.textContent = item.class;
                descriptionCell.textContent = item.description;
            });
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
            classesTable.innerHTML = '<tr><td colspan="2">Ошибка загрузки данных.</td></tr>';
        });
});