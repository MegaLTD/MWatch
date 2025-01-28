function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const serieId = parseInt(getQueryParam('id'));
const epId = getQueryParam('ep');

function checkParamsAndRedirect() {
    if (!serieId || !epId) {
        window.location.href = 'https://megawatch.eu.org';
        return true;
    }
    return false;
}

if (!checkParamsAndRedirect()) {
    fetch('series.json')
        .then(response => response.json())
        .then(seriesData => {
            const serie = seriesData.find(s => s.id === serieId);
            if (serie) {
                document.getElementById('series-title').textContent = `مشاهدة ${serie.titre}`;
                document.getElementById('episode-info').textContent = `الحلقة ${parseInt(epId, 10)} - رمضان ${serie.annee}`;

                const episodeImage = serie.img_ep[parseInt(epId, 10) - 1] || serie.image;
                document.getElementById('series-image').src = episodeImage;

                const nbrEpisodes = serie.nbr_episodes;
                const previousButton = document.getElementById('previous-button');
                const nextButton = document.getElementById('next-button');

                if (parseInt(epId, 10) > 1) {
                    previousButton.disabled = false;
                    previousButton.addEventListener('click', () => {
                        window.location.href = `?id=${serieId}&ep=${parseInt(epId, 10) - 1}`;
                    });
                } else {
                    previousButton.disabled = true;
                }

                if (parseInt(epId, 10) < nbrEpisodes) {
                    nextButton.disabled = false;
                    nextButton.addEventListener('click', () => {
                        window.location.href = `?id=${serieId}&ep=${parseInt(epId, 10) + 1}`;
                    });
                } else {
                    nextButton.disabled = true;
                }

                fetch('servers.json')
                    .then(response => response.json())
                    .then(servers => {
                        if (servers.length > 0) {
                            const randomServer = servers[Math.floor(Math.random() * servers.length)];
                            const videoUrl = `https://${randomServer}/?id=${serieId}&ep=${parseInt(epId, 10)}`;
                            const playerIcon = document.getElementById('player-icon');
                            const seriesImage = document.getElementById('series-image');

                            playerIcon.addEventListener('click', () => {
                                window.location.href = videoUrl;
                            });

                            seriesImage.addEventListener('click', () => {
                                window.location.href = videoUrl;
                            });
                        } else {
                            alert('عذرا، عطل مفاجئ أصاب الموقع.');
                            window.location.href = 'https://megawatch.eu.org';
                        }
                    })
                    .catch(error => console.error('Error fetching servers:', error));
            } else {
                alert('عذرا، المسلسل غير موجود.');
                window.location.href = 'https://megawatch.eu.org';
            }
        })
        .catch(error => {
            console.error('Error', error);
            window.location.href = 'https://megawatch.eu.org';
        });
}
