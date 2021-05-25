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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_saber/css/styles.16dd7cc3.chunk.css",
    "revision": "56e19e06ca5023ed352968ba362896d0"
  },
  {
    "url": "_saber/images/20200906001-293e5377.jpg",
    "revision": "8335d609a0c6483ebb0a4be148d2bee8"
  },
  {
    "url": "_saber/images/20200906001-749eb1be.jpg",
    "revision": "1b3465b2e2b29a25ffbcc6df31e3415d"
  },
  {
    "url": "_saber/images/20200906001-fa8ca9a2.jpg",
    "revision": "24826399f97f17f23f2728ccafa59a32"
  },
  {
    "url": "_saber/images/20200906003-75e1059c.jpg",
    "revision": "878650ea40b1dd60cbdc925a66b396cf"
  },
  {
    "url": "_saber/images/20200906003-8130ddbb.jpg",
    "revision": "a88ee61aa28f31bb827336f91a55183b"
  },
  {
    "url": "_saber/images/20200906003-c1bdc5cd.jpg",
    "revision": "635007c3615c7e0ab5791f7b59901641"
  },
  {
    "url": "_saber/images/20200906005-1-28cb2d68.jpg",
    "revision": "060a5ee18bd0478eca992ed2ee82d470"
  },
  {
    "url": "_saber/images/20200906005-1-99a7f7e3.jpg",
    "revision": "a05250414aa2738cdb9c3d774db939ed"
  },
  {
    "url": "_saber/images/20200906005-1-c40828e1.jpg",
    "revision": "22ccc50ac6e720683690b554134578e7"
  },
  {
    "url": "_saber/images/20200906005-1ad49911.jpg",
    "revision": "305ba24824042e42ee7b8c7e7935cc95"
  },
  {
    "url": "_saber/images/20200906005-72eaae25.jpg",
    "revision": "2bffb61bbb689df62181ce2a6d38b411"
  },
  {
    "url": "_saber/images/20200906006-1-783f7ec6.jpg",
    "revision": "ad79a2b4469422087e729fd539cb36cf"
  },
  {
    "url": "_saber/images/20200906006-1-86e64ff7.jpg",
    "revision": "3c6107962d702ef1210d2fb11de20e63"
  },
  {
    "url": "_saber/images/20200906006-1-cf562d31.jpg",
    "revision": "dc55ac2984cd2aea8297146144786b5f"
  },
  {
    "url": "_saber/images/20200906006-3a02f6de.jpg",
    "revision": "13c53cd6a6446c5cc808fa51c0ee2c8a"
  },
  {
    "url": "_saber/images/20200906006-5860c907.jpg",
    "revision": "f32ba659287b943c6f326e48b4217f9a"
  },
  {
    "url": "_saber/images/20200906006-8a537860.jpg",
    "revision": "7991deef4d41fbea692d35014c312888"
  },
  {
    "url": "_saber/images/20200906007-08946d63.jpg",
    "revision": "4808df81458de1665069b27b1b78bb0a"
  },
  {
    "url": "_saber/images/20200906007-35f0c9e7.jpg",
    "revision": "c5d4eefd12b5a3d620d8fc670417907c"
  },
  {
    "url": "_saber/images/20200906007-dbe686f3.jpg",
    "revision": "8b2c0f8ce11ea732be42b99c3fc74155"
  },
  {
    "url": "_saber/images/20200906008-3006e687.jpg",
    "revision": "e7695d7f37ee6972a31b7a1cbe5205eb"
  },
  {
    "url": "_saber/images/20200906008-55e1b70b.jpg",
    "revision": "7a225ad8afea742cf2d1a3fdde2e7403"
  },
  {
    "url": "_saber/images/20200906008-92a4c6be.jpg",
    "revision": "5594ef28456737ac75adcaf1366c7074"
  },
  {
    "url": "_saber/images/20200906009-b947ea7a.jpg",
    "revision": "212b9b4682e42d813f1a4d43d732e207"
  },
  {
    "url": "_saber/images/20200906009-bd861723.jpg",
    "revision": "ad35935fef3a7be38e6f0b52dd9a5063"
  },
  {
    "url": "_saber/images/20200906009-ec9afd09.jpg",
    "revision": "61de6fadded714a94b73874a0b2b69d0"
  },
  {
    "url": "_saber/images/20200906010-1d5d0093.jpg",
    "revision": "d7c75e8c276f1d07076cdfe2b2714972"
  },
  {
    "url": "_saber/images/20200906010-dfd10b7a.jpg",
    "revision": "3dcb4df001c84de7657e3985ab871df0"
  },
  {
    "url": "_saber/images/20200906010-e14a8c09.jpg",
    "revision": "452b435a015073ca3cf596907a621e2e"
  },
  {
    "url": "_saber/images/20200906011-44bd665b.jpg",
    "revision": "1508ae8d32c6495594e98d2bc803029c"
  },
  {
    "url": "_saber/images/20200906011-77365c89.jpg",
    "revision": "cbdb78ce9230158d6b20216fae80f5cb"
  },
  {
    "url": "_saber/images/20200906011-f9e7ecd1.jpg",
    "revision": "201204c4857e2fe8589d93a1b0274bb1"
  },
  {
    "url": "_saber/images/20200906012-3fd90602.jpg",
    "revision": "7cc2604de913bede34ff43e468b42cd2"
  },
  {
    "url": "_saber/images/20200906012-71694d4a.jpg",
    "revision": "ad482427b97df07b892b77a3defbd751"
  },
  {
    "url": "_saber/images/20200906012-89410914.jpg",
    "revision": "d1901cdc9ff8f1ecbcbc0375f82d9e3f"
  },
  {
    "url": "_saber/images/20200906013-32fa7676.jpg",
    "revision": "cf0000cc623b275275dfa7bd23788530"
  },
  {
    "url": "_saber/images/20200906013-6990f8e7.jpg",
    "revision": "c23af03876f924419b1f72ba04127843"
  },
  {
    "url": "_saber/images/20200906013-f3c21612.jpg",
    "revision": "f7efe0f3e227b34ca050c339aabdd02a"
  },
  {
    "url": "_saber/images/20200906014-13502685.jpg",
    "revision": "9f5f96b99f7861b3ec4c4f1aefc1d097"
  },
  {
    "url": "_saber/images/20200906014-3a26399b.jpg",
    "revision": "dfce378eb49b63754b5a8b411c28b8e8"
  },
  {
    "url": "_saber/images/20200906014-9426fdbc.jpg",
    "revision": "b4d597fcfaca6571ebe6f4d3dd0a0a9a"
  },
  {
    "url": "_saber/images/20200906015-0d1b6602.jpg",
    "revision": "3523a9ebbaf3d15403aadcd1544a0a2c"
  },
  {
    "url": "_saber/images/20200906015-41b75d83.jpg",
    "revision": "0a90bfb4ac69f0a4746d29ec2d91ef05"
  },
  {
    "url": "_saber/images/20200906015-911d4454.jpg",
    "revision": "6e8af5b978b0ea17a07ec1d9aa593748"
  },
  {
    "url": "_saber/images/20200906016-a630cb80.jpg",
    "revision": "804cd96616ab571374b65661909836c9"
  },
  {
    "url": "_saber/images/20200906016-b5efcf11.jpg",
    "revision": "2f8c322cb1447a0a2619fcc0e63d3529"
  },
  {
    "url": "_saber/images/20200906016-e5763b7e.jpg",
    "revision": "18972df1221fd2e57018db043cd55af8"
  },
  {
    "url": "_saber/images/20200906017_1-34679ca2.jpg",
    "revision": "8a82a9e78c3b06ad9594bf00302dbd8d"
  },
  {
    "url": "_saber/images/20200906017_1-baaea520.jpg",
    "revision": "7f537f0dab41a71fc28e9514c3b62f6c"
  },
  {
    "url": "_saber/images/20200906017-1-b821da75.jpg",
    "revision": "bc90a1a6d7110bf58286e73b1728c4d9"
  },
  {
    "url": "_saber/images/20200906017-1-cdaae033.jpg",
    "revision": "3c8384799038d08e99fe87fe863a2dd2"
  },
  {
    "url": "_saber/images/20200906017-1-e87c13b8.jpg",
    "revision": "a5041b863b185199695b05fb8b37bca5"
  },
  {
    "url": "_saber/images/20200906017-649900fa.jpg",
    "revision": "5309893d6c7f3cb6cc5542933a61b0ec"
  },
  {
    "url": "_saber/images/20200906017-bc67e229.jpg",
    "revision": "ab13d570ce413d1b82207fa7acce2324"
  },
  {
    "url": "_saber/images/20200906017-d29402a7.jpg",
    "revision": "c4c7ee2cc3df7d0d5320abd4a6f75cea"
  },
  {
    "url": "_saber/images/20200906018-28b8a674.jpg",
    "revision": "842aba369c8b36a39671452ecd65e472"
  },
  {
    "url": "_saber/images/20200906018-6aaf541d.jpg",
    "revision": "da2101566d6e5dff55f350348dd23767"
  },
  {
    "url": "_saber/images/20200906018-b7cc40f3.jpg",
    "revision": "7e629f9b7eb3fdedc454ecaf62529db8"
  },
  {
    "url": "_saber/images/20200915001-1d76e28e.png",
    "revision": "ed78dc5e20af761601bd1044a8decd6a"
  },
  {
    "url": "_saber/images/20200915001-36c11988.png",
    "revision": "bda34e159f37d88f3e0ab0b8788e934b"
  },
  {
    "url": "_saber/images/20200915001-5669097b.png",
    "revision": "28e4adee86618d61b0743d0974b14485"
  },
  {
    "url": "_saber/images/20201013001-4ea08994.png",
    "revision": "6c8026380738c77fa9b0f824aefeee0f"
  },
  {
    "url": "_saber/images/20201013001-b1700fc6.png",
    "revision": "a3dac102b13e5e5e6d8258d963ae462b"
  },
  {
    "url": "_saber/images/20201013001-e9278d63.png",
    "revision": "abed2dda1577668e84c38117703a468e"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-1619bc2c.jpg",
    "revision": "4cfcfd063d2d0b2bb7113df3e5310838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-58cd415a.jpg",
    "revision": "10bc82e41df9d03a6437fa471e696903"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-c6ac21fd.jpg",
    "revision": "aa2661dd4dc1b5521d38f5e1a733c838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-1d88d65e.png",
    "revision": "6b0bf6c537188f2f8a87ae3afa393851"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-6e1b23fc.png",
    "revision": "120d7d2db4a1e7617b8f912ae150cf71"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-b3a8b115.png",
    "revision": "38b78d1545103872212fa61aec0086bd"
  },
  {
    "url": "_saber/images/2021-01-04-1-4d30c0fc.jpg",
    "revision": "a7d4116c65046e5a448b63299d7d7564"
  },
  {
    "url": "_saber/images/2021-01-04-1-8446c2d5.jpg",
    "revision": "08fbc4b378dafb1dd4c5a36c3e5c5895"
  },
  {
    "url": "_saber/images/2021-01-04-1-c9e046ad.jpg",
    "revision": "57725f227c28823f61d24870fc1d614a"
  },
  {
    "url": "_saber/images/2021-01-04-b7e23f52.jpg",
    "revision": "de6a2f43de25b89c54e742b116ef0373"
  },
  {
    "url": "_saber/images/2021-01-28-1-5e96c64b.jpg",
    "revision": "591821b462bda797ecd18c4739b29cd5"
  },
  {
    "url": "_saber/images/2021-01-28-1-6039300c.jpg",
    "revision": "1d13cf9f17a118cf43684c919e0dea52"
  },
  {
    "url": "_saber/images/2021-01-28-1-fc23debb.jpg",
    "revision": "2844b853d3017a7e96a80213e314dc5a"
  },
  {
    "url": "_saber/images/2021-01-28-5464fc5f.jpg",
    "revision": "d3bb495018dbe6c48dc4cdab5834bd28"
  },
  {
    "url": "_saber/images/2021-01-28-a9df1d7c.jpg",
    "revision": "9823a8d00a3757582edfda074b1fc7c9"
  },
  {
    "url": "_saber/images/2021-01-28-fe6de14d.jpg",
    "revision": "637678a1af3b50100c26107de7ab46ec"
  },
  {
    "url": "_saber/images/2021-01-29-29ae4964.jpg",
    "revision": "a2b23cea5cc687e62f0a2ad23248bcb0"
  },
  {
    "url": "_saber/images/2021-01-29-a98a413c.jpg",
    "revision": "72d1a429ce274e0391840ed4cfff4261"
  },
  {
    "url": "_saber/images/2021-01-29-f5708645.jpg",
    "revision": "7da85557d0e1881e93c09d917cfbde5e"
  },
  {
    "url": "_saber/images/home-page-1-7ee27199.jpg",
    "revision": "19fb3c5d128b13002286918841c01811"
  },
  {
    "url": "_saber/images/home-page-1-a3bcab18.jpg",
    "revision": "4bc8b7a1e36d18aaaaa13ca5b53afde4"
  },
  {
    "url": "_saber/images/home-page-1-b4a392d3.jpg",
    "revision": "13b7188fd1bbeb0cf9731434e8ef657e"
  },
  {
    "url": "_saber/js/404-page.f8f7358a.js",
    "revision": "614162ec8ff2124f3186328705a2338a"
  },
  {
    "url": "_saber/js/client.83a65249.js",
    "revision": "a26271e0cb60b68e7cb17d3983978824"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23-my-whole-life-md.d728269e.js",
    "revision": "f977fad68ed970ff76db1b3e1c7308ea"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.e2ec447b.js",
    "revision": "fffa2f344c4ca95af0fa853e2e9ff9e8"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.3556afe0.js",
    "revision": "59a224e99f6cb4ce032529cd1cb7e047"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.afee56e8.js",
    "revision": "c3b56145140f59b13002e1731f5bd1f4"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.d7cee233.js",
    "revision": "41b5c91f7b07231a34a3948befe88585"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.771343e7.js",
    "revision": "a3d153521814df72656f6384b281b2b9"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.5f1981f1.js",
    "revision": "12dba7fdaa01f22a3bae6515ab9b83a8"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.01335a73.js",
    "revision": "982ebdc07a75af036b379b2bd88f0b04"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.38a978de.js",
    "revision": "f4783dcb6761e4ab2bed7ef5bf0fca44"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.9dd28b2d.js",
    "revision": "184802557aa4f5c463fa9cf26d3829b1"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.69b3d592.js",
    "revision": "297c29275bdce140e19317140a21741c"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.f52a1115.js",
    "revision": "7deb302e67c3b58860ff3e745ff46fa2"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.c67df779.js",
    "revision": "deb21dfa10dfe8306c600ffd984c8e10"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.4f1b4338.js",
    "revision": "c2462a4d8c8dbcf58608010c63b9fc3c"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.feea08a8.js",
    "revision": "9338a0f6e626c1e7f6f44f5ab1da5c15"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.033eae2a.js",
    "revision": "d5e4512dc547f5357e18e5e0501eab9d"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.a8def0e8.js",
    "revision": "3f04cd6e70e1cb0ac227ce25b7c868ea"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.5a698e96.js",
    "revision": "771b0fb7aadc4a28e8701e4035d8016f"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.4a44a37d.js",
    "revision": "2ab97155cf59226dca745ab2d185286b"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.e9664e9f.js",
    "revision": "b0435ed1d331c3810b58879a41f22096"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.06368d83.js",
    "revision": "ca765a1f35c40bf7eeaff79cf3e29f8f"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.3cbfcef5.js",
    "revision": "7cb64dc940fd6c2ff0e2df484c1d8ea7"
  },
  {
    "url": "_saber/js/page--about-md.f6fb3f8a.js",
    "revision": "a41411361c08c2608bba80d2c754b1d0"
  },
  {
    "url": "_saber/js/page--blog-index-md.dc861788.js",
    "revision": "8c8d418a98390910934edc207ecc48ff"
  },
  {
    "url": "_saber/js/page--guestbook-md.1c04866b.js",
    "revision": "a80e1024c8d5b0bc70f86924109487e3"
  },
  {
    "url": "_saber/js/page--index-md.e2c2840a.js",
    "revision": "c28f576bb23e26a88b49a5a75f18043c"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv.2667ff9f.js",
    "revision": "2dfd3bb8ba2d643c3952dde8a9b4f5cf"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.0d6a5ce5.js",
    "revision": "a6e875768d2f96dc78273288dae97e82"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.6398d7cf.js",
    "revision": "1ea88340d972a06772294e4f8fdc3296"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.fba8eedf.js",
    "revision": "2b70f3e6be5298828a4458a58444beaa"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.34680d54.js",
    "revision": "6a8423a74d96cd4223798d2a27710bed"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.c8400abb.js",
    "revision": "9434564a73e867c6c800dbdd504ac1d9"
  },
  {
    "url": "_saber/js/page--internal_blog__category__科技.80dc0f2c.js",
    "revision": "1b5129be7a0d609b79cc7f3bbe53c4ed"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.7647c473.js",
    "revision": "7123cc6362227159d4e1bde4bae32ad2"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.ce38a66a.js",
    "revision": "60038deaacd174fe7bfb8f9a4d3cdbe1"
  },
  {
    "url": "_saber/js/styles.16dd7cc3.js",
    "revision": "35e2afa4537015a09bfcc2ef4cc5569d"
  },
  {
    "url": "404.html",
    "revision": "1445c17e4cb7c34779d06d1aecc149ed"
  },
  {
    "url": "about/index.html",
    "revision": "43125a3b9203ffcb64d964728693b894"
  },
  {
    "url": "blog/2016/09/my-whole-life/index.html",
    "revision": "86356bc187395a69a994304503922ba9"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "59a4b5de7bc67e5085615872d38218b8"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "5fdd57bdc154a24abd137721287cdf0e"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "ff7d4217d0eaff3403e07fd69442cecd"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "883dc0d702fe697be057bad69a7a93e9"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "630b7c6622e6831e1d51660c45d1e391"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "f91d8bd792b960f62cea2c1b718d6afe"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "f1316c2323f3cbacb742bb270a69a960"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "1d6e4a9f590be29d8d48ffb48fea2f5b"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "03dac3f6d7abc86302a3797517c5f3df"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "b782bccd4644f762bdf60a4ce172b529"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "ea7e105153b3d4135bedbf34a1337d84"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "47db3e47cdf2088a37238b5fce85e438"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "3ecb9b5180a6089eb47c0ce260361677"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "3a8be8cd89dccd9032e5625f8fa4875f"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "9b5bf7b212b710690afc533f4cde9328"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "ccb0bcdf92f39089bb88ab59b6a85599"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "1e91e8ae1e010fdbd0fa224497bef94a"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "b8de085f5fe340d0718fb8ee981f1f01"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "e8f4addf46ba84faec6a55d930cdea80"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "90f2b702ac11d203e35d9582ce515623"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "4fc40cbc95722fc09cf3193ce83707d5"
  },
  {
    "url": "blog/category/googletv/index.html",
    "revision": "deced56a9ce1a0d0ff94c0356acc8a64"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "a33c70c6192253add5068a46aa30cf61"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "fa2a0d6f8d5639ef9e6edc0c863d0fc3"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "8b6830fe67b8650dfec4ce76f504be5a"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "ce321d419212b2035a03d820772b3b47"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "1661d1f3593e91dcd23489621f23c12a"
  },
  {
    "url": "blog/category/科技/index.html",
    "revision": "7ff742d33a16c19f0806513a87b1b968"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "69fa33aeebf4b79510316f1fa6e49a6e"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "9b369ae64e5c44cea415276216df0c34"
  },
  {
    "url": "blog/index.html",
    "revision": "cadcf72ad7e4fdef0dac383d4c8f11da"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "3bbae5e7c09cd036aeb253edc3bf1170"
  },
  {
    "url": "guestbook/index.html",
    "revision": "71deec579b61e3eb086646908b875249"
  },
  {
    "url": "index.html",
    "revision": "34b56c2c5450dbe90964099f22b9c1fd"
  },
  {
    "url": "page/2/index.html",
    "revision": "0db4515bcb0dc23fd236ab8154f19c5b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
