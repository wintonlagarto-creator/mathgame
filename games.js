/* =====================================================
   MATH QUEST 2D LOADING SYSTEM
===================================================== */

let loadingValue2D = 0;

const loadingTimer2D = setInterval(() => {

    loadingValue2D += 1;

    const progress =
        document.getElementById("loadingProgress2D");

    const percent =
        document.getElementById("loadingPercent2D");

    const playButton =
        document.getElementById("playButton2D");

    if (progress) {
        progress.style.width =
            loadingValue2D + "%";
    }

    if (percent) {
        percent.textContent =
            loadingValue2D + "%";
    }

    if (loadingValue2D >= 100) {

        clearInterval(loadingTimer2D);

        if (percent) {
            percent.textContent =
                "100% - MATH WORLD READY!";
        }

        if (playButton) {
            playButton.style.display =
                "block";
        }

    }

}, 35);