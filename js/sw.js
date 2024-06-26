var cacheName = "podyplomowe";
var filesToCache = ["./", "./index.html", "./css/style.css",
"./js/main.js"];

self.addEventListener('install', function(event) {
// Perform install steps
console.log('installing sw');
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache) {
console.log('Opened cache');
var x = cache.addAll(urlsToCache);
console.log('cache added');
return x;
})

);
});

self.addEventListener('fetch', function(event) {
event.respondWith(
caches.match(event.request)
.then(function(response) {

// Cache hit - return response
if (response) {
return response;
}return fetch(event.request);
}
)
);
});

window.onload = () => {
     'use strict';
     
     if ('serviceWorker' in navigator) {
     navigator.serviceWorker
     .register('./sw.js');
     
     }
     }