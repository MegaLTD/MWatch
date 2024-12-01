// Fonction pour récupérer les paramètres de l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Charger les données JSON
fetch('series.json')
    .then(response => response.json())
    .then(series => {
        // Récupérer l'ID depuis les paramètres de l'URL
        const serieId = getQueryParam('id');
        if (serieId) {
            // Trouver la série correspondante
            const serie = series.find(item => item.id === parseInt(serieId));
            if (serie) {
                // Mettre à jour le background-image
                const posterElement = document.getElementById('poster');
                posterElement.style.backgroundImage = `url(${serie.image})`;
            } else {
                console.error("Série non trouvée pour l'ID donné.");
            }
        } else {
            console.error("Aucun ID fourni dans l'URL.");
        }
    })
    .catch(error => console.error("Erreur lors du chargement des données JSON:", error));
