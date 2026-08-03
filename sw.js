const CACHE_NAME = "curriculo-europass-v1";

const ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icon.svg"
];

// Instala e guarda os arquivos essenciais em cache
self.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );

    self.skipWaiting();

});

// Remove caches antigos quando uma nova versão é ativada
self.addEventListener("activate", (event) => {

    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            )
        )
    );

    self.clients.claim();

});

// Estratégia: tenta a rede primeiro, cai para o cache se estiver offline
self.addEventListener("fetch", (event) => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        fetch(event.request)
            .then((response) => {

                const respostaClone = response.clone();

                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, respostaClone);
                });

                return response;

            })
            .catch(() => caches.match(event.request))

    );

});
