// Fonction pour récupérer les paramètres de l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Charger les séries depuis series.json
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
    .catch(error => console.error("Erreur lors du chargement des séries:", error));

// Charger les serveurs depuis servers.json
fetch('servers.json')
    .then(response => response.json())
    .then(servers => {
        if (servers.length > 0) {
            // Générer un ID aléatoire pour les serveurs
            const randomIndex = Math.floor(Math.random() * servers.length);
            const selectedServer = servers[randomIndex];

            // Modifier dynamiquement le lien <a>
            const linkElement = document.querySelector('.xtgo');
            const serieId = getQueryParam('id');
            linkElement.href = `${selectedServer}?id=${serieId || ''}`; // Ajouter l'ID s'il est disponible
        } else {
            console.error("Aucune adresse serveur disponible dans servers.json.");
        }
    })
    .catch(error => console.error("Erreur lors du chargement des serveurs:", error));
