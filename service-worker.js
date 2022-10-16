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
    "revision": "77ad514ed2f1640cece95a2213c7e66d"
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
    "url": "assets/img/bigdata.0c79f709.png",
    "revision": "0c79f709972b7202b9e09ab947a56e9c"
  },
  {
    "url": "assets/img/pic.8479f063.jpg",
    "revision": "8479f063c2ac172ddb29bb6960245c4f"
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
    "url": "assets/js/10.981e237d.js",
    "revision": "42b0ad09fd9e47561567fe387c4e8344"
  },
  {
    "url": "assets/js/11.82770061.js",
    "revision": "db689ab4336452e0c5161e3998fd8637"
  },
  {
    "url": "assets/js/12.5e868388.js",
    "revision": "ca66fcd31081500c2a6c0748255f70bd"
  },
  {
    "url": "assets/js/13.0f760ad0.js",
    "revision": "9ff8a378a00512904ff044bc5848c9d1"
  },
  {
    "url": "assets/js/14.cda2554c.js",
    "revision": "2f3c2c2d4dd9a8c8adf297049d13a784"
  },
  {
    "url": "assets/js/15.7e872bc4.js",
    "revision": "a17e3929bc11beb44363ac469c5bffe3"
  },
  {
    "url": "assets/js/16.01dc3e53.js",
    "revision": "86342066bdf14c275a39acf06c753b65"
  },
  {
    "url": "assets/js/17.d738bb6a.js",
    "revision": "0a37c3bf9bba1b0b4a6a2d6071709c71"
  },
  {
    "url": "assets/js/18.0c20813e.js",
    "revision": "9c5d93e1f1e8ac3bdfed6fe4ec822670"
  },
  {
    "url": "assets/js/19.ac2dd2b8.js",
    "revision": "99cb3d27068a2cd27101887c0699f926"
  },
  {
    "url": "assets/js/2.071b6a53.js",
    "revision": "dbd1e922056abcc1b3e83dbfdadffd94"
  },
  {
    "url": "assets/js/20.aba009c6.js",
    "revision": "a89143fb2df956c8ab68106f9cb3a788"
  },
  {
    "url": "assets/js/21.4316b3db.js",
    "revision": "45ce1fb2cc4832c210e4e1d43bba26bd"
  },
  {
    "url": "assets/js/22.ec5f8fc0.js",
    "revision": "60fee9c544d9d14e778ab54d4c1d2d70"
  },
  {
    "url": "assets/js/23.2c7645c6.js",
    "revision": "846114191bab27047c267df731b29c32"
  },
  {
    "url": "assets/js/24.6f1507e8.js",
    "revision": "5174f5c99a321a22c4e5db682e975703"
  },
  {
    "url": "assets/js/25.b4b53c72.js",
    "revision": "5008e6344d3b282fe3d9f6ed1809ea7d"
  },
  {
    "url": "assets/js/26.4e380b39.js",
    "revision": "8a666a6b4e3f18ca15015ce96951257c"
  },
  {
    "url": "assets/js/27.14094d50.js",
    "revision": "4d9b76121751d141272742e0529d78f4"
  },
  {
    "url": "assets/js/28.c173c485.js",
    "revision": "b24572b4e9c718c4e7fd19483d11b431"
  },
  {
    "url": "assets/js/29.4b616977.js",
    "revision": "6efa26cbc69bfd2dcc0073043ee5e6f7"
  },
  {
    "url": "assets/js/3.34e61601.js",
    "revision": "40e7552941d0feeeef8da6ef48ccae30"
  },
  {
    "url": "assets/js/30.eac7c2e9.js",
    "revision": "8d1d70a1eb42f41981f404a507e1eeb6"
  },
  {
    "url": "assets/js/31.b5e346dc.js",
    "revision": "645a8b74e6e51b6c1943999bce600f83"
  },
  {
    "url": "assets/js/32.80aed821.js",
    "revision": "2a0c9c138ee67b46fd579ddae1b03ae9"
  },
  {
    "url": "assets/js/33.553fcc4f.js",
    "revision": "1ae5f09f9d574ce558423a88b69aeb37"
  },
  {
    "url": "assets/js/34.ff6568bc.js",
    "revision": "d85effd8bb62fb3c9e743dcacd21a8d7"
  },
  {
    "url": "assets/js/35.e0702b95.js",
    "revision": "8e208543531c73deb6069900b0229040"
  },
  {
    "url": "assets/js/36.012bf860.js",
    "revision": "edb9cb6b748bac4881df60f87480ef38"
  },
  {
    "url": "assets/js/37.14f71eed.js",
    "revision": "89622d9e059f0427c96a3c2afc4e98d6"
  },
  {
    "url": "assets/js/38.f6f713cf.js",
    "revision": "2e0ff6958982d4b7c0a7684887c751f6"
  },
  {
    "url": "assets/js/39.565a770d.js",
    "revision": "ac6059bb4ed0f8195845332435611560"
  },
  {
    "url": "assets/js/40.7503c0a7.js",
    "revision": "f8f61e851def115a7d0b69144ce160ce"
  },
  {
    "url": "assets/js/41.eb99674f.js",
    "revision": "8cbdd70e3196fb5ec4c37322a156f09e"
  },
  {
    "url": "assets/js/42.855bcbaf.js",
    "revision": "df7bf7f01a28c7d329f28ac4075849f1"
  },
  {
    "url": "assets/js/43.99d6f7b5.js",
    "revision": "f9c4019341ba496a13c4e0af6baff795"
  },
  {
    "url": "assets/js/44.fe285c81.js",
    "revision": "e85ddcc26f47d650c0745143b0f07848"
  },
  {
    "url": "assets/js/45.937a2707.js",
    "revision": "bd7a8b221fbf42887451eb4efeed7747"
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
    "url": "assets/js/8.3dc94002.js",
    "revision": "040b5e90379dfc0f97505cbaae930577"
  },
  {
    "url": "assets/js/9.adc3c429.js",
    "revision": "5e5150a0c047387afdd4d43bbe29034e"
  },
  {
    "url": "assets/js/app.bd292d74.js",
    "revision": "43acd4ea0123a138cc1303395bf86b4e"
  },
  {
    "url": "assets/js/vendors~docsearch.5579fd67.js",
    "revision": "0a4404e77d8e25a49878893e7615d667"
  },
  {
    "url": "bigdata/index.html",
    "revision": "565a0474606962d390bbd352a7cc8c23"
  },
  {
    "url": "blog/index.html",
    "revision": "7326b32d9cf026b3154af796004e138e"
  },
  {
    "url": "blog/jianshu-blog.html",
    "revision": "46b462429c0b0e382f472bd7b5f5eb2e"
  },
  {
    "url": "data-structure/index.html",
    "revision": "74117fd7fceb3703452e0b092c97ded8"
  },
  {
    "url": "design-pattern/index.html",
    "revision": "46975c67983d28c402cd22207440b8bd"
  },
  {
    "url": "en/application/index.html",
    "revision": "56db1cddffb264de14d44dba38dee933"
  },
  {
    "url": "en/index.html",
    "revision": "6f3fd9a10f7199cce3da6b7d6b9213cb"
  },
  {
    "url": "go/index.html",
    "revision": "9f838054ce9d2de5dd707cb03e89f3b7"
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
    "revision": "772774a4183337ddc2f6c00289f4cb0c"
  },
  {
    "url": "java/index.html",
    "revision": "fb38484410d801cb71c622c05cd3204e"
  },
  {
    "url": "java/java-collection.html",
    "revision": "517d17645141406209ae7b14f2582c3b"
  },
  {
    "url": "jvm/index.html",
    "revision": "b74f191e27c1c7b652f5677902129b4f"
  },
  {
    "url": "leetcode/index.html",
    "revision": "721eec2d974cba7d84eaf56952fae5c2"
  },
  {
    "url": "localization/index.html",
    "revision": "9412d5f40949b51143c4f58718b6735f"
  },
  {
    "url": "localization/五等分花嫁SWITCH汉化.html",
    "revision": "a54af790dae4f8ebba0ae1e730be8efc"
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
    "revision": "15660294ca069f3119cef6c2e5adf1a9"
  },
  {
    "url": "network/index.html",
    "revision": "b6a9baf7fad9d87dadf892b84d62f8ed"
  },
  {
    "url": "zh/application/index.html",
    "revision": "3941260f1556489e8c38bca1fc1a50e4"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "3a27f61859059d20f3ebb0dfec3a079b"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "670638d72485ccbfd479c4db8bb5b847"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "fc1df0f3381fc4f16d46851dd5c8eb4d"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "6d4417ce2a80c053736de72ae52229a0"
  },
  {
    "url": "zh/article/index.html",
    "revision": "67f17ebead986ec0354e68c70148593a"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "74398be16149cfd31ff4661499d13676"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "79a98271e3e528040cf5ce4036f624b9"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "92a8cb4bd4d360a6f6f9a79606dcb13f"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "9c42c46feb18ddc6f3a77412b800d41b"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "45f10e0fb8ac713fca5dd9676083b73e"
  },
  {
    "url": "zh/index.html",
    "revision": "da19134388bdae5f429135ccfdd50558"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "afca937013edec36200f25a2e834d520"
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
