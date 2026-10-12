// Згенеровано scripts/build-pwa.mjs
const CACHE = 'chytanka-f2057bf106c2';
const FILES = ["./","app.js","apple-touch-icon.png","dict.json","fonts/literata-cyrillic-400-italic.woff2","fonts/literata-cyrillic-400-normal.woff2","fonts/literata-cyrillic-600-normal.woff2","fonts/literata-latin-400-italic.woff2","fonts/literata-latin-400-normal.woff2","fonts/literata-latin-600-normal.woff2","fonts/manrope-cyrillic-400-normal.woff2","fonts/manrope-cyrillic-600-normal.woff2","fonts/manrope-cyrillic-700-normal.woff2","fonts/manrope-latin-400-normal.woff2","fonts/manrope-latin-600-normal.woff2","fonts/manrope-latin-700-normal.woff2","icon-192.png","icon-512.png","icon-maskable-512.png","index.html","manifest.webmanifest","style.css"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
