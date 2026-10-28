// Hamburger meni: odpiranje in zapiranje navigacije na telefonu
(function () {
    "use strict";

    const gumb = document.querySelector(".meni-gumb");
    const navigacija = document.getElementById("glavna-navigacija");

    if (!gumb || !navigacija) {
        return;
    }

    const ikona = gumb.querySelector("i");

    // Odpre ali zapre meni in uskladi gumb (aria atributa in ikono)
    function nastaviMeni(odprt) {
        navigacija.classList.toggle("odprto", odprt);
        gumb.setAttribute("aria-expanded", String(odprt));
        gumb.setAttribute("aria-label", odprt ? "Zapri meni" : "Odpri meni");
        ikona.classList.toggle("fa-bars", !odprt);
        ikona.classList.toggle("fa-xmark", odprt);
    }

    // Klik na gumb: meni se odpre, ob ponovnem kliku se zapre
    gumb.addEventListener("click", function () {
        nastaviMeni(!navigacija.classList.contains("odprto"));
    });

    // Tipka Esc zapre odprt meni
    document.addEventListener("keydown", function (dogodek) {
        if (dogodek.key === "Escape" && navigacija.classList.contains("odprto")) {
            nastaviMeni(false);
            gumb.focus();
        }
    });

    // Če se okno razširi na 600px ali več (npr. obrat tablice), se meni ponastavi
    window.matchMedia("(min-width: 600px)").addEventListener("change", function (dogodek) {
        if (dogodek.matches) {
            nastaviMeni(false);
        }
    });
})();