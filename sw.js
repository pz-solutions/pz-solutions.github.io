/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-919eca1245a74b181c70.js"
  },
  {
    "url": "app-33681e5a16924ef7db53.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d90d75fd13e149d9f2f2.js"
  },
  {
    "url": "index.html",
    "revision": "307d1456476588f16d6ecdb6f5975d69"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4fc71f4fc0523629d8148f8ec968c169"
  },
  {
    "url": "0.7fb57c0c7142440e5e27.css"
  },
  {
    "url": "1.4fb3af3a5bf4cffb294b.css"
  },
  {
    "url": "component---src-pages-index-js-2167044028907ef506e7.js"
  },
  {
    "url": "1-2833965b16d64aab5297.js"
  },
  {
    "url": "2-399610b9852fbae4f4e1.js"
  },
  {
    "url": "0-5eb1d26c121055c780c6.js"
  },
  {
    "url": "17-78445026d37440b6fe79.js"
  },
  {
    "url": "static/d/138/path---index-6a9-qJYvQuniWiUAEWR9iVs6j0usNw.json",
    "revision": "31932cb7697514951dd3282b85a420a6"
  },
  {
    "url": "component---src-pages-404-js.9d836b3dc8318f7639c2.css"
  },
  {
    "url": "component---src-pages-404-js-a68b27530993bf491761.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c4e0f447acf88725b90c283b15a9cdfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});