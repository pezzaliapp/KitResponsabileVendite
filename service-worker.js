const CACHE_NAME = 'kitresponsabilevendite-v1';
const ASSETS = [
    "index.html",
    "app.js",
    "style.css",
    "manifest.json",
    "icon/KitResponsabileVendite-192.png",
    "icon/KitResponsabileVendite-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
