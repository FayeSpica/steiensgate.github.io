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
    "revision": "13373ef422d71ceba9610424d9dbe5a0"
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
    "url": "assets/js/app.e05ba732.js",
    "revision": "2aeb5a5bc6778122ef907aa8237f6d26"
  },
  {
    "url": "assets/js/vendors~docsearch.f35af923.js",
    "revision": "973df0d8c9cc5bbd063f7afeb8316822"
  },
  {
    "url": "blog/index.html",
    "revision": "70622d2180cf400b6e7d34c6cf924474"
  },
  {
    "url": "blog/jianshu-blog.html",
    "revision": "3cb60a164af7ee490e2b492352bf6acf"
  },
  {
    "url": "data-structure/index.html",
    "revision": "ef97e2143ca13aea7851d2e6fc89847c"
  },
  {
    "url": "design-pattern/index.html",
    "revision": "e880e2e8da2a0084c75a2ac101d36d17"
  },
  {
    "url": "en/application/index.html",
    "revision": "3b120899dcc93a43a9c984f286ff0e0a"
  },
  {
    "url": "en/index.html",
    "revision": "af29508542ba3f819ac51992d11f58b2"
  },
  {
    "url": "go/index.html",
    "revision": "1bf0a44550b8ea9c0085397976fe68ba"
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
    "revision": "59d353b5d46df2bd713a9c45c1c21685"
  },
  {
    "url": "java/index.html",
    "revision": "559ed8ddd21b99d168ab01e15f42739d"
  },
  {
    "url": "java/java-collection.html",
    "revision": "d18beb0a4d1b6f43cecb0aa1f53bfa73"
  },
  {
    "url": "jvm/index.html",
    "revision": "ace72ae211fb6366640f0d43d6767356"
  },
  {
    "url": "leetcode/index.html",
    "revision": "530ec06d20c9bb50be0aebd78ac7f77d"
  },
  {
    "url": "localization/index.html",
    "revision": "fe5cf5273c9e8119bb021c521c399907"
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
    "revision": "cd827a6b694ab25388d23b9e05419e48"
  },
  {
    "url": "network/index.html",
    "revision": "e3548eed6be4f70bf1f342bd318871c6"
  },
  {
    "url": "zh/application/index.html",
    "revision": "a7cdf0dfe6082425af2bf481a727dec6"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "75c7260013aa169a76dd791acb4b405b"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "a6262156cccb88133a28efd2f3f73176"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "cb800aa5ceb0ede9105673f7d7204c5b"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "a3006937e70c44065266bcdb5037b80f"
  },
  {
    "url": "zh/article/index.html",
    "revision": "098fba7b9f91c3a0a3e2aa9be6ef16dc"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "77ebe2a3a813f28172bc0114277d967b"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "0546591ba09ec98219515269284e48ee"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "32a75ffbbeaf4c551fd65126705e8eb9"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "5b760e1219f5123257ab9eec51248e54"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "596de0ca6eda97de35997aa7ba054931"
  },
  {
    "url": "zh/index.html",
    "revision": "c633fc21797f978c1792a798ddafa0ad"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "9d5e9da5c756c7a51c1726fea72bde31"
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
