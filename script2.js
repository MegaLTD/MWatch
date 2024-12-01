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
}

// Générer un temps aléatoire
function generateRandomTime() {
    const minutes = Math.floor(Math.random() * 30) + 30;  // Générer une minute aléatoire entre 30 et 59
    const seconds = Math.floor(Math.random() * 60);  // Générer une seconde aléatoire entre 0 et 59
    
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}

// Mettre à jour le contenu de l'élément avec l'ID 'time-display'
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    timeDisplay.textContent = generateRandomTime();
}
