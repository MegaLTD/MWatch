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
            title.textContent = `مشاهدة حلقات ${series.titre} ${series.name}`;

            const episodesContainer = document.getElementById("episodes-container");
            episodesContainer.className = "episode-grid";

            const episodeCount = series.nbr_episodes;

            for (let i = 1; i <= episodeCount; i++) {
                const button = document.createElement("button");
                button.textContent = `الحلقة ${i}`;
                button.className = "episode-button";

                // Ajouter l'événement de redirection
                button.addEventListener("click", () => {
                    const redirectUrl = `../episode.html?id=${numericId}&ep=${i}`;
                    window.location.href = redirectUrl;
                });

                episodesContainer.appendChild(button);
            }
        } else {
            window.location.href = "../";
            return;
        }
    })
    .catch(error => {
        console.error("Erreur lors du chargement des données:", error);
        window.location.href = "index.html";
    });
