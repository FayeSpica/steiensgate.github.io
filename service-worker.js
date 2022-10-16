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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1ab7dbf3284c7c6e578dbfa9739f70c"
  },
  {
    "url": "assets/css/0.styles.edfd9fb6.css",
    "revision": "d6ad7adc4585821cda16fe0f012dcd1e"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9d2c7a65.js",
    "revision": "cc62863d4ef7fd43ea394c39442b8a65"
  },
  {
    "url": "assets/js/10.d679fe96.js",
    "revision": "b2718b09939ae7a0fde01e1f7bbf21fd"
  },
  {
    "url": "assets/js/11.4ae80174.js",
    "revision": "0ed53e5a70abd15308fd29c3c5af08ba"
  },
  {
    "url": "assets/js/12.f7ce7232.js",
    "revision": "dd19ac3d15ca7ba809ed4c8945cdd729"
  },
  {
    "url": "assets/js/13.af313219.js",
    "revision": "4b6e8bb5627af8fbd87b2d0fbdcaf902"
  },
  {
    "url": "assets/js/14.faff9800.js",
    "revision": "9dffa4c90e348badfe3688ebfbf75fc6"
  },
  {
    "url": "assets/js/15.c867b39c.js",
    "revision": "807493d6f0bba4364c9558ceefa13a5e"
  },
  {
    "url": "assets/js/16.803856f5.js",
    "revision": "c38e016ade96e4e96fd2b156bc6162ef"
  },
  {
    "url": "assets/js/17.cf8cdcb5.js",
    "revision": "fa18c7994cdc9e0527f6c4e27baf6ec8"
  },
  {
    "url": "assets/js/18.c8ed23b1.js",
    "revision": "362f197519c4a7323a67f274f923c5ae"
  },
  {
    "url": "assets/js/19.b20d29b3.js",
    "revision": "38e34e686397c526454cc790dcb8a3b1"
  },
  {
    "url": "assets/js/2.071b6a53.js",
    "revision": "dbd1e922056abcc1b3e83dbfdadffd94"
  },
  {
    "url": "assets/js/20.bff782be.js",
    "revision": "a9bef81952412374dd0d1bf0d0e865b3"
  },
  {
    "url": "assets/js/21.e15e338a.js",
    "revision": "e7cbf9fd628d6527c54ce75ceaf70f23"
  },
  {
    "url": "assets/js/22.096e674f.js",
    "revision": "287fbecd9f3e7128f2b15d658f8b5050"
  },
  {
    "url": "assets/js/23.12c88c1e.js",
    "revision": "7bf818e46ffdfc8c7ca8d6f794a006a6"
  },
  {
    "url": "assets/js/24.b32425a4.js",
    "revision": "51dd4cf731ec08f7f48a0c4c5be93855"
  },
  {
    "url": "assets/js/25.77a6c738.js",
    "revision": "041d3f59b3dcd196dc85340114212311"
  },
  {
    "url": "assets/js/26.6c938b18.js",
    "revision": "9972a6663e0108cc519804e8c2f3d503"
  },
  {
    "url": "assets/js/27.170ca613.js",
    "revision": "00540caf6a39a32064c83064c01b1912"
  },
  {
    "url": "assets/js/28.fb8e6e60.js",
    "revision": "dae5cb31c691236ccbf808b80e8e5abe"
  },
  {
    "url": "assets/js/29.628bbb5f.js",
    "revision": "71e6cdf7b35ed5e84638798cae3ed3f2"
  },
  {
    "url": "assets/js/3.af613c7a.js",
    "revision": "ea4f9445a78f3eff10c96f120b7ec364"
  },
  {
    "url": "assets/js/30.defc11d1.js",
    "revision": "7b99c38418746baa0e82d7912b04f11f"
  },
  {
    "url": "assets/js/31.ac1753e4.js",
    "revision": "9d8d71574306cde1585257993aa6d5c9"
  },
  {
    "url": "assets/js/32.5733d80c.js",
    "revision": "ad1c41344093424fd54b17923477480f"
  },
  {
    "url": "assets/js/33.b9088ad0.js",
    "revision": "b93e878e755363d1036894db66c43a9f"
  },
  {
    "url": "assets/js/34.fb38c050.js",
    "revision": "591a257ff4a4dfcf2993dacd47c698aa"
  },
  {
    "url": "assets/js/35.38ff86ba.js",
    "revision": "5cf9f32ab638a22f279f8dbe6be48537"
  },
  {
    "url": "assets/js/36.3e297e20.js",
    "revision": "b7ef1c42613934f17b57094f718420e9"
  },
  {
    "url": "assets/js/37.89f56542.js",
    "revision": "35999db1196acafd88d854ebe3089094"
  },
  {
    "url": "assets/js/38.1c269a98.js",
    "revision": "baa1e5a0ce31a15c26ebd8af4896c8e2"
  },
  {
    "url": "assets/js/39.b3670fbe.js",
    "revision": "e97ab4ec0af369f42ab1d812b23a34c8"
  },
  {
    "url": "assets/js/40.9a96cf8a.js",
    "revision": "ab01c6dc66c4738abeeff8d369e8bc45"
  },
  {
    "url": "assets/js/41.7c0200ec.js",
    "revision": "b80889ca4c469919a186749299c8dc6b"
  },
  {
    "url": "assets/js/42.cd312244.js",
    "revision": "e025cde56c015fde4ecf083306b34da3"
  },
  {
    "url": "assets/js/43.5cdf5d38.js",
    "revision": "1d0b5382fcd47652b1e2187aa718bd07"
  },
  {
    "url": "assets/js/6.3409ea58.js",
    "revision": "d1cb9e0f080117242e8ed3da38a74932"
  },
  {
    "url": "assets/js/7.075b82ad.js",
    "revision": "8f8e28e98a7c8f6c10e6bfd9d7070512"
  },
  {
    "url": "assets/js/8.51a26772.js",
    "revision": "dc55dfac56994607cd5e31739a4ebf5e"
  },
  {
    "url": "assets/js/9.adf6b190.js",
    "revision": "cbddcc97d3807302ad269ad2f09aaf26"
  },
  {
    "url": "assets/js/app.2d969032.js",
    "revision": "7ff426b3cc1e8b80426470703e34f652"
  },
  {
    "url": "assets/js/vendors~docsearch.f35af923.js",
    "revision": "973df0d8c9cc5bbd063f7afeb8316822"
  },
  {
    "url": "blog/index.html",
    "revision": "a3677ed9c922d83ce5191c6ebbb55342"
  },
  {
    "url": "blog/jianshu-blog.html",
    "revision": "1f482afcd8bf779cc3a595bc90336455"
  },
  {
    "url": "data-structure/index.html",
    "revision": "3a447463a94405474ba29309b1f1588c"
  },
  {
    "url": "design-pattern/index.html",
    "revision": "4f941c7e5bfeafa95d3b40f3f084323a"
  },
  {
    "url": "en/application/index.html",
    "revision": "c43c3a172c141f3301ad9385cb95f542"
  },
  {
    "url": "en/index.html",
    "revision": "071f4c6d39a623a59a851b984b9ca0f8"
  },
  {
    "url": "go/index.html",
    "revision": "903437ed438d16cdac703fcb61405094"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "03e7e8d7bb84ed6ad7ccff088ccc7552"
  },
  {
    "url": "java/index.html",
    "revision": "1997ea4b79679c750891983d46f394ce"
  },
  {
    "url": "java/java-collection.html",
    "revision": "444f1a8c7127961dd880eb66e8b2e17e"
  },
  {
    "url": "jvm/index.html",
    "revision": "a9b275997ada30b0af85e9975b0877c4"
  },
  {
    "url": "leetcode/index.html",
    "revision": "94b19a8c51f7be1a9e01d23c8f7213be"
  },
  {
    "url": "localization/index.html",
    "revision": "5ec78b76a985500c60d239f63ed7fe43"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "2a30fc343248d34e8877640b92ce967b"
  },
  {
    "url": "micro-service/index.html",
    "revision": "dfe551c6bc2143f06055dd51504bfdce"
  },
  {
    "url": "network/index.html",
    "revision": "c7b93712fdd718c5b63713568299c928"
  },
  {
    "url": "zh/application/index.html",
    "revision": "50fb33b04804e3a4fae6841211e3ea14"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "fcc71b15fba5c66d29384a55edaddcb2"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "a945e0ab48960aadb5802184639ae93d"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "8075341c2f251b5caaab9671ef73a391"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "a5f6f8bddb3b57c1209ca2453117e862"
  },
  {
    "url": "zh/article/index.html",
    "revision": "3df29234621c58a406c44d25ff9e3246"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "11432bd746ad4da33d9a26a9d7e24bdc"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "f239b1a7dfd4bba2215adeb2b2b08340"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "1c5f79e89b23b10e5834bd78dec14697"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "0bf1106f353f7adb0cd3cb5780da68b3"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "486c35479a779bc544b13e968bd1df34"
  },
  {
    "url": "zh/index.html",
    "revision": "1a21bae37280487e675b55524ebe0b12"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "1a3347a37495ede7505f38b3e1fe4b8c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
