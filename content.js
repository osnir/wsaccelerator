const interval = setInterval(() => {
    const header = document.querySelector("._2O84H");
    
    if (header) {
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");

            audios.forEach((audio) => {
                if (audio.playbackRate === 2) {
                    audio.playbackRate = 1;
                    button.innerHTML = "2x";
                    button.title = "Velocidade 2x";
                } else {
                    audio.playbackRate = 2;
                    button.innerHTML = "1x";
                    button.title = "Velocidade 1x";
                }               
            });
        });
        header.appendChild(button);

    }
}, 1000);


