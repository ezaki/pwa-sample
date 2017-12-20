const CACHE_NAME = 'ezaki-pwa-sample';
const urlsToCache = [
  './',
  'index.html',
  'index.css',
  'index.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(                          // インストール完了までの Promise
    caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.addAll(urlsToCache)      // キャッシュを行う
      .then(() => {self.skipWaiting()});
    })
    .catch((err) => {
      console.error(err);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());    // 内容更新を請求する
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, {
      ignoreSearch: true
    })
    .then((response) => {
      return response || fetch(event.request);
    })
    .catch((err) => {
      console.error(err);
    })
  );
});