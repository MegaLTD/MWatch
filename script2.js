function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function checkParamsAndRedirect() {
    const serieId = getQueryParam('id');

    if (!serieId) {
        window.location.href = 'https://megawatch.eu.org'; 
        return true;  
    }
    return false;  
}

if (!checkParamsAndRedirect()) {
    fetch('series.json')
        .then(response => response.json())
        .then(series => {
            const serieId = getQueryParam('id');
            if (serieId) {
                const serie = series.find(item => item.id === parseInt(serieId));
                if (serie) {
                    const posterElement = document.getElementById('poster');
                    posterElement.style.backgroundImage = `url(${serie.image})`;
                    console.log(`Série trouvée : ${serie.titre}, ID: ${serieId}`);
                }
            }
        })
        .catch(error => console.error("error:", error));

    // Générer le temps aléatoire une seule fois
    function generateRandomTime() {
        const minutes = Math.floor(Math.random() * 30) + 30;  // Minutes entre 30 et 59
        const seconds = Math.floor(Math.random() * 60);  // Secondes entre 0 et 59
        
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    // Mettre à jour l'élément 'time-display' avec le temps généré
    function updateTime() {
        const timeDisplay = document.getElementById('time-display');
        timeDisplay.textContent = generateRandomTime();
    }

    // Appeler updateTime une seule fois
    updateTime();
}
