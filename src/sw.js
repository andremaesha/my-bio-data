importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

workbox.routing.registerRoute(
    new RegExp("/images/"),
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    new RegExp("https://fonts.googleapis.com/icon?family=Material+Icons"),
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
    new RegExp("https://fonts.googleapis.com/css?family=Montserrat:500"),
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
    new RegExp("https://fonts.googleapis.com/css?family=Roboto:700"),
    new workbox.strategies.StaleWhileRevalidate()
);