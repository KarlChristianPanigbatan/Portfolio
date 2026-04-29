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

const readyPages = [
    "index.html",
    "contact.html",
    "tech.html"
];

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // ignore PDFs and external links
        if (!href.endsWith(".html")) return;

        // if page is not ready → coming soon
        if (!readyPages.includes(href)) {
            e.preventDefault();
            window.location.href = "coming-soon.html";
        }

    });

});