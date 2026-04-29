document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // ignore non-html files (like PDF)
        if (!href.endsWith(".html")) return;

        e.preventDefault();

        fetch(href, { method: "HEAD" })
            .then(response => {

                if (response.ok) {
                    window.location.href = href; // page exists
                } else {
                    window.location.href = "coming-soon.html"; // not ready
                }

            })
            .catch(() => {
                window.location.href = "coming-soon.html";
            });

    });

});