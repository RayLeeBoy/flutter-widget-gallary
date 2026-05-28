'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "803c4e4c4bc7f3ef38757822da080f5c",
"index.html": "195dd67eb4d4034bc68d7e10b1f6149d",
"/": "5cb510fe5214e39caa738abd50c7bb1a",
"main.dart.js": "1962c94286badf8fd014d6f6840ac948",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "814a7bd5f5d21554b66d3de66b09ed71",
"manage/index.html": "541ff92264f0e2a570cd2f16974c7e9e",
"manage/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manage/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manage/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manage/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manage/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manage/manifest.json": "c8250b5478ec67b8e544c9781bf758ad",
"assets/AssetManifest.json": "a991c54bc6a6a8b4559eaffaccbdaa87",
"assets/NOTICES": "2bf0b0a1fd421b3606a739f3fd4aac9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/ios/Phone.webp": "db716ea89e75de3d1e087d228634165b",
"assets/assets/ios/Keynote.webp": "5719a2ebc9cf0ef8721a9f46a8432eb1",
"assets/assets/ios/Find%2520My.webp": "5df599896443c83743b8481ce936320a",
"assets/assets/ios/Pages.webp": "963fbf28b23821e1690eeb06a0e7b3e3",
"assets/assets/ios/Apple%2520Wallet.webp": "e141dcd7526223d503421030620411ea",
"assets/assets/ios/Apple%2520Books.webp": "6cfe146d3fc758ca7c34e5ee94198ba6",
"assets/assets/ios/Apple%2520Support.webp": "8ae3b1d429ce779d6d81e40cc903728c",
"assets/assets/ios/Notes.webp": "d919d434dcba023106a141a681793a44",
"assets/assets/ios/Mail.webp": "e925ee7a095bc720d1a96d2aaeb0df14",
"assets/assets/ios/Apple%2520TV.webp": "d90e4a39d31857e30e40946807cc3d94",
"assets/assets/ios/Weather.webp": "f096180a92ccd87c6a4b777ef441aad0",
"assets/assets/ios/Apple%2520Developer.webp": "f35324f0776069a53a8ebe8177c31d8f",
"assets/assets/ios/FaceTime.webp": "36a9030e8d858a97138034d08a68d271",
"assets/assets/ios/Apple%2520Music.webp": "879b091dd7ed0943caaefe907290c231",
"assets/assets/ios/Photos.webp": "e9f438cf9a330c0ec93f0a52a5f44474",
"assets/assets/ios/Numbers.webp": "145b2b3874b1a42540794acf1695f3c7",
"assets/assets/ios/Apple%2520Store.webp": "0ce886aefbf5816eb099e40cba01c614",
"assets/assets/ios/Messages.webp": "5a62ceafd861af7ad80b3139ab4fe082",
"assets/assets/ios/Safari.webp": "38a8ecc6b5894907dc78e0bfee67ebf1",
"assets/assets/ios/Camera.webp": "e2b39762c3b3e1802c8d39cb654177e3",
"assets/assets/ios/TestFlight.webp": "386361004b3a189a2858562fb38f76d3",
"assets/assets/ios/Apple%2520Podcasts.webp": "ffdc37911269acbedcbe9a7b785c1711",
"assets/assets/ios/App%2520Store%2520Connect.webp": "c17ce8e1ab792276475155c605a214ea",
"assets/assets/ios/Clock.webp": "9217bb95c0aeaf4edabf204c9cd19fad",
"assets/assets/ios/iMovie.webp": "9fa63be99fd6814d0df1f811ea0b9fd3",
"assets/assets/manage/m_logo.png": "e9bbb9601c64dd1995eff08bfad75268",
"assets/assets/manage/login-bg.webp": "194f5423b304e578b69f087f09f9abc9",
"assets/assets/manage/company.png": "eaa5831e2c80311b3a7bed036fd2282d",
"assets/assets/manage/logo.png": "a1a5f7860d33881752578f26893f2fa4",
"assets/assets/manage/map_header_bg.png": "0524dfc91fb6c1e7d84cb39f93f88d4b",
"assets/assets/logo.svg": "02e5038b34425c277a61ba5f99b9a8c7",
"control/index.html": "682e8659a639da453c17b2ee6f47a5e8",
"control/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"control/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"control/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"control/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"control/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"control/manifest.json": "1485298c3da1ca90455159e272d720dc",
"travel/index.html": "5cb510fe5214e39caa738abd50c7bb1a",
"travel/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"travel/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"travel/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"travel/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"travel/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"travel/manifest.json": "e909439e3261bcfc6e9b0d83affdd860",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
