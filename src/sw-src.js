import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

console.log("Yarn's service worker is caching files");
registerRoute(/\.\/YarnClassic\//, new NetworkFirst());
precacheAndRoute(self.__WB_MANIFEST);
