importScripts("https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/index.js");
importScripts("https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet/dist/scramjet.bundle.js");
importScripts("/scramjet.config.js");

const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(location.origin + self.__scramjet$config.prefix)) {
        event.respondWith(scramjet.fetch(event));
    }
});
