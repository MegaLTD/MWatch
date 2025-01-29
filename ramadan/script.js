fetch("../series.json")
    .then(response => response.json())
    .then((seriesData) => {
        const urlParams = new URLSearchParams(window.location.search);
        const seriesId = urlParams.get("id");

        if (!seriesId || isNaN(parseInt(seriesId, 10))) {
            window.location.href = "../";
            return;
        }

        const numericId = parseInt(seriesId, 10);
        const series = seriesData.find(item => item.id === numericId);

        if (series) {
            const header = document.getElementById("series-header");
            header.style.backgroundImage = `url('${series.image}')`;

            const title = document.getElementById("series-title");
            title.textContent = `مشاهدة حلقات ${series.titre}`;

            const episodesContainer = document.getElementById("episodes-container");
            episodesContainer.className = "episode-grid";

            const episodeCount = series.nbr_episodes;
            const imgEpisodes = series.img_ep || [];

            for (let i = 1; i <= episodeCount; i++) {
                // Créer une carte pour chaque épisode
                const episodeCard = document.createElement("div");
                episodeCard.className = "episode-card";

                // Ajouter une miniature si disponible
                if (imgEpisodes[i - 1]) {
                    const thumbnail = document.createElement("img");
                    thumbnail.src = imgEpisodes[i - 1];
                    thumbnail.alt = `الحلقة ${i}`;
                    thumbnail.className = "episode-thumbnail";
                    episodeCard.appendChild(thumbnail);

                    // Ajouter un gestionnaire de clic sur l'image
                    thumbnail.addEventListener("click", () => {
                        const redirectUrl = `../episode.html?id=${numericId}&ep=${i}`;
                        window.location.href = redirectUrl;
                    });
                }

                // Créer le bouton
                const button = document.createElement("button");
                button.textContent = `الحلقة ${i}`;
                button.className = "episode-button";
                button.addEventListener("click", () => {
                    const redirectUrl = `../episode.html?id=${numericId}&ep=${i}`;
                    window.location.href = redirectUrl;
                });

                // Ajouter le bouton à la carte
                episodeCard.appendChild(button);

                // Ajouter la carte au conteneur
                episodesContainer.appendChild(episodeCard);

                // Ajouter un gestionnaire de clic sur la carte entière
                episodeCard.addEventListener("click", () => {
                    const redirectUrl = `../episode.html?id=${numericId}&ep=${i}`;
                    window.location.href = redirectUrl;
                });
            }
        } else {
            window.location.href = "../";
            return;
        }
    })
    .catch(error => {
        console.error("Error", error);
        window.location.href = "https://megawatch.eu.org";
    });

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
