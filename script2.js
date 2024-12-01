// Fonction pour récupérer un paramètre spécifique de l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Vérifier si les paramètres 'id' et 'ep' sont vides ou nuls
function checkParamsAndRedirect() {
    const serieId = getQueryParam('id');
    const episodeId = getQueryParam('ep');

    // Si 'id' ou 'ep' est vide ou null, rediriger vers la page d'accueil
    if (!serieId || !episodeId) {
        window.location.href = 'https://megawatch.eu.org';  // Rediriger vers index.html si les paramètres sont manquants
        return true;  // Retourner true pour indiquer qu'une redirection a eu lieu
    }
    return false;  // Aucun problème avec les paramètres, continuer l'exécution
}

// Vérifier les paramètres avant de procéder
if (!checkParamsAndRedirect()) {
    // Charger les séries depuis series.json
    fetch('series.json')
        .then(response => response.json())
        .then(series => {
            // Récupérer l'ID depuis les paramètres de l'URL
            const serieId = getQueryParam('id');
            const episodeId = getQueryParam('ep');  // Récupérer le paramètre 'ep'
            
            if (serieId) {
                // Trouver la série correspondante
                const serie = series.find(item => item.id === parseInt(serieId));
                if (serie) {
                    // Mettre à jour le background-image
                    const posterElement = document.getElementById('poster');
                    posterElement.style.backgroundImage = `url(${serie.image})`;
                    console.log(`Série trouvée : ${serie.titre}, ID: ${serieId}, Episode: ${episodeId}`);
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
                const episodeId = getQueryParam('ep');
                
                // Construire l'URL avec les paramètres 'id' et 'ep'
                linkElement.href = `${selectedServer}?id=${serieId || ''}&ep=${episodeId || ''}`;
                console.log(`Serveur sélectionné : ${selectedServer}, Lien : ${linkElement.href}`);
            } else {
                console.error("Aucune adresse serveur disponible dans servers.json.");
            }
        })
        .catch(error => console.error("Erreur lors du chargement des serveurs:", error));
}
