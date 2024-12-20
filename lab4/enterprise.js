document.addEventListener('DOMContentLoaded', function() {
    const classesTable = document.getElementById('otherClasses');

    fetch('http://localhost:5500/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Заполняем таблицу полученными данными
            data.forEach(item => {
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