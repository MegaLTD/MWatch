fetch('series.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('grid-container');
        
        data.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.setAttribute(
                'data-type', 
                item.nbr_episodes === 0 || item.nbr_episodes === null ? 'film' : 'serie'
            );

            gridItem.innerHTML = `
            <div class="card">
                <a href="../ramadan/?id=${item.id}">
                    <img src="${item.image}" alt="${item.titre}" class="card-image">
                </a>
                <div class="card-content">
                    <a href="../ramadan/?id=${item.id}" class="card-title">
                        <h3>${item.titre}</h3>
                    </a>
                    <p class="card-description">
                        ${item.annee} - ${item.nbr_episodes === 0 || item.nbr_episodes === null ? 'Film' : 'Série'}
                    </p>
                    <center><a href="../ramadan/?id=${item.id}" class="watch-button">شاهد الآن</a></center>
                </div>
            </div>
        `;
        

            container.appendChild(gridItem);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des données:', error));

function filterContent(type) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        if (type === 'all' || item.getAttribute('data-type') === type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


function searchContent(event) {
    const query = event.target.value.toLowerCase(); 
    const items = document.querySelectorAll('.grid-item');

    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });
}
