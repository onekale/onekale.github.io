'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b345b849f5b8e3a1d52da4722db7a4e3",
".git/config": "b12ce06420df975e931dafeb27d4f24e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4f537853806a00a6fcf82a5a10d9d896",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20e0ac2c69dd7826e1af502454a61264",
".git/logs/refs/heads/master": "20e0ac2c69dd7826e1af502454a61264",
".git/logs/refs/remotes/origin/master": "fde5d1a4f0062b8adda6d88fee405793",
".git/objects/00/585c4a557947dc62a687bcece887755de1b0ea": "a83d0de0f2a4c41594e17a81f0203711",
".git/objects/01/116bdff4ed93ebafeec2d33ab767b37f1c5ced": "7fcb01f6276c563249af5b00da62d6a9",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/8dc60f2995a6f34fe0d4926b1f872468c63f6f": "d5ce9e494cbf1d697f4a6a556ea00e2c",
".git/objects/09/2218c35c707f8acb517feaa348fa5d2dc419f0": "9228eaf4e6a7c9e975d3442e1db12db0",
".git/objects/0a/4dfb3cf0be7ed8b3e340ac7a0a749599a8c657": "d1b7913340c67310b7b2f9cb03c4e0d2",
".git/objects/0b/6f4e1ccb2a53a1f48101ac5405882a3cfe8cbd": "4d194ac5c7edef7cc21e64d249e49613",
".git/objects/0c/17f5311edb78b99ed90eabf1da785213a086a7": "74c9ba5c2bf90a7f20cbcbccbada3495",
".git/objects/0d/757eed3b7e0680095fe928a6dc36834d5585f6": "0ea2a636973c4e2254a3aeb315c2d4b4",
".git/objects/0d/860dfa47d0066b85064c2b3d588b29d6a19947": "5f0b7d00b15e94c32c98349e38d07605",
".git/objects/11/69a277ac08d419de5dffdc42793d73253dd6c1": "7f8c98a1bc8d46d64e62af2db9eba74e",
".git/objects/12/d6b82405257aa80e9fc0dcbf2d904abd49df71": "ed5a52b70614c5501b551838f1083a78",
".git/objects/13/5a3bec248d98fb478c2b9106a05e96cd6f5fa9": "8d3da3f39cf46fb7aa945ea7c5c4ed35",
".git/objects/15/eabfee2858c97b41cd7d463537e908b073b21e": "2f21e6eb1ceb2ae72e23008a33b2501b",
".git/objects/16/55aebc20d1ceb9fa0966fa5775eed20fe22bc2": "a61c7ca940e26a6083aad215ea9ed548",
".git/objects/17/8c3f1d90d96a494c0854acf9bfe734626c74d1": "3573d0abf65719021bb8af8c717e3c62",
".git/objects/18/40e01c58d82cb78c7d9be1a22d85639591bc5d": "1997eca01bcae9b26b691be75f65df3d",
".git/objects/19/5bdd1a82059fc17bd7791037261a8ab0453672": "9c76776dbc7fff76adc620bdaa8d5760",
".git/objects/1a/3855aa035a49e7e7d223a86e49bc94c88d2a06": "aec72d790e9879289f826f6218734023",
".git/objects/1a/51bc58a50658c6948b6facbef11b0138e3858d": "5d5936ddbe01ac04274a3e3936c9be22",
".git/objects/1c/f52677642eb14b004541dfc47a5ed77c7fe399": "e6d2b974f81462dc4952dcc579f78ef9",
".git/objects/1d/189a4e93c48c284f9f11d3359ec9771c96c3e7": "bb4f197ac1b588f58491b73ea5c5dee8",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1e/7a47ef7414a3c744d2aecef7e34370d6a3e63c": "58af9d32a2e609dc52f09b9e421297f9",
".git/objects/1f/5f48a5e5b3948bcc3fc805762902b62a115a3f": "9507bb4413ace604ee0db6147576abd4",
".git/objects/20/0dc4bffba5c07d15b06cb0d554d3bcc34a3f13": "c8d4028df0dbe6be0b79bad22e7d3fc3",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/24/164b5976c59a8656c23bc47a3c6368ead06805": "ade9fa611a5c574671e59a09bdadf52b",
".git/objects/24/fdae7c47bb348ba5891b9081ba071ab232304a": "906c97fab7e60013bb2d08fb2a00ea68",
".git/objects/26/ebac78bf5b83b1615aa0cc627a9dbaf5072c7a": "036ea78c570c77de37d8edf9a42c38f7",
".git/objects/2a/cb0ebafed5841915e0ca437dbf74ad4413698f": "0fc5cee2491209df53c523d5ff31345a",
".git/objects/2b/66646167bdc8368d816f07cf7929edd50492ee": "ac7e4bebeb8738556034a019bfad8240",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/2f/a0b9a31488909dc11f384d0d61e5d26c743e42": "4cc4d149eb4e260cac5be6249d6138ee",
".git/objects/2f/bbc13dcaa72a9e79baf4e4d6fb336734c38ece": "1ab60be164cb30d4b4b30c54bd7d14d0",
".git/objects/2f/ccf1dec0dc0ac6e3d0345f235a18a009dacc41": "4cfc02db85e900b18c0976f6e01639a7",
".git/objects/31/ee3bf535a3c5cd7e8b37f2988c71cdbe40ccdc": "a3c4c08ffb07d986b769c3f208d5b90f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/6eb352836acc173ff314f90ba8cb3eb691faa8": "a99039138e0cef60869c905de7735c65",
".git/objects/33/861b581ebd82a5378da7ef21413358f6674ec0": "2e671a3c1a8b40bf20eea85f6ff969d3",
".git/objects/33/9268a0d1d6d6dd300d4610fe39e247bf82b866": "93303b599c6ece8103ae752e2e9ea628",
".git/objects/33/cce270c89fe6cd0f0ff1ecbf4e913116d5295e": "18246700aa340d824897f6714ccb65db",
".git/objects/34/8f5229380dc9825cab9c1fe7557a992eb48cbd": "5cfdb41a286dc90c884f049e90113b56",
".git/objects/34/bf9e383dfff6ce8e12cc411f3437cf984c2da5": "7a7631ffc15482df6121f950df436095",
".git/objects/35/084eefe57c1fe4eb491d842a58cde0d144a315": "de38aefaf99abe9e1386306c8d09ad0d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/e84908eeff824b10cc193cbf6928cfe620a468": "d8009695ea4ccec08c138b8f9fdedad7",
".git/objects/37/df162376db3d934d6ffcffad08ea857e4c9a7c": "83c63ddb15681746508cee1d93d1efcf",
".git/objects/38/130dae6bc6e4502432ffe6888c08d18574c385": "06c81e1e941a3fe74495944af07a9527",
".git/objects/39/ed42e0b5923574420bc1f1605b5c1a4bce62c3": "dce5a850e4a208edd89266e88e52766a",
".git/objects/3a/0416790a13b3be51583c4a122b5f5a6adbc02f": "9cee9966a1bd7a7f50a094737a7273b7",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/3c/6ccc2cc8ef5329ffa56c163ca6a8c8d7d68673": "4a26548d8f3bdc31f3b79343fbe4075b",
".git/objects/3e/357d4205e1a7ad372dc041c6420254064d9ff2": "243b965da817d3456a224e1a2d1e1564",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/91264ee1c08d70ea986bea2f9db19195e64337": "a60fc3a6a3d8b8ebc64178dd2603ecf7",
".git/objects/40/9203d3873aae0b6ed52d69792d2192d9e8fba7": "c298810d365ead00ece69bd13bc77565",
".git/objects/41/18743ea8540705b23f2f3039141c2a40505a07": "846a02f6af59bd059f6d599d3dfb27aa",
".git/objects/41/1d80cb302bb4bc63218000c68a020f250cb9b5": "1d3a47b6ef03d744c093d489fd3776a3",
".git/objects/44/e610b02bd6a0e414f203820e669a2fde0258d9": "325948974d5cf6281d9bccd9feebd08d",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/47/b8cc37775cfbaf144eff995f60035b755fcaee": "e8f2c0b4d8d73729e2dd96a2a204f757",
".git/objects/4b/0aaf7400e1dd86dc591cf1c9f38868db95d0c6": "0ae52518bbf81e50d07fdd3ccd0989f6",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/52/90e8e4f0aaefb4c92fb38e40cab957f0fd4588": "3f5f0d611d92e21e445e63e22e6df83c",
".git/objects/52/faa9a9421b088829e3af09934bea463364de90": "44089dd5e151d4321f5c82c77e525015",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/54/f200e36b4964391560c00fffbe4d2450a826c7": "15fdb69a1c90e66764c7304d02fa63f4",
".git/objects/55/bc17d809b537738874e350255894b838cc9135": "3cfba8edee49963aa53e60b3ff3767ca",
".git/objects/57/3a26b2f2b3fcc8955db9eb461f1b2e5c50fc35": "7c2ac5786871fec7399f2cd09712f200",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/a9d2c3737c44bc9468ed60d31e0e2318a69677": "e44a0b522dbb661e8bc791a8e93746c3",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/59/d02356c001abaf3d68d3854813e8ef3d413d1a": "295c11faa9044a848245c0ea77158f8b",
".git/objects/59/fc95ab9832a09ad68b487c17a1703e5422cacf": "1e488acd358ce2cb89784f67d484be5a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/1d7595446ff89181833d58ee8dba43e892d5af": "767aa5010419db6c888eef4ba9416516",
".git/objects/5b/236a6354a92d08b97b77e3a351b58c9b6f196c": "849dd01a57b53bda5762e02e38263c38",
".git/objects/5d/7b115900d364630dc1bf03d0219acdb100ef29": "bca9ab29350be707cc60ab5c409ae555",
".git/objects/5d/e0abfe7c9420d68998664d68e3c02faf9e98e6": "bdafc81131f41b889def5d6daf685601",
".git/objects/5d/edc9032c992916a56b40311a0d3fc99daa201f": "b8d5c5766897eea53871975d4ef3dc34",
".git/objects/5e/4eb47a3a8355f9d4700341c43f08a6c8498fcb": "5df8360c830bf85bf3264918dfa11f46",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/5f/25987e428bd8d03bd521f9a74e7347c03fa7a3": "8442a2e3f3416b770b2cf1500cf56592",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/77331a2bc6ea3532b150fe4e88e675e2a88edb": "6b8ab3070b728c99c6ba205589fce8e0",
".git/objects/61/1358aca38df6e3256d03256bd29d2501c6cfe4": "aaed0bfc6741a186eee405129e0f1ede",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/6f500562f3ef30494d2795faf06113070f5a1e": "de107af9e063cd69366c14cacb1b3b9a",
".git/objects/65/dea7bb450a5a275af364298bddedf0c944a6f6": "8ed5b398a7da21ed46ef6354a9d4a75b",
".git/objects/66/f5a03443fe3fb701cf0a2a320d2ff3580d4de4": "1d0d7025109c3efc66c6c9005c25d815",
".git/objects/67/320b0402016c756f8948b8de28d63a87f9c923": "50ef278059b326201291c629b203368f",
".git/objects/67/52d4a18113fd7a9f34cea1a7326cdd26badf19": "0b85e139da3d30304394f6e49470ce16",
".git/objects/69/09e17fdf6eaf77490d45fff089cc8199691c25": "09a814a428655cc6a201b2e90b336eec",
".git/objects/69/4ae195490d89b07aeb9f81303ab851ebf3ed2a": "06ca3a3ea68043e1b6c3e4d8541aca4a",
".git/objects/6a/39b5e1b354f0f46f41da9f66c71ab6babf3fdc": "a411116f0d12d784f0f9d9bc26902310",
".git/objects/6b/60625543b7649d7215852c34343f690afe0751": "f1389b287657ad0077dd37fc4706a169",
".git/objects/70/ffc5a94108b021ed1eb8a7a6c46e3ff4e25c1f": "f49ee293078b8139df32cefe4df1c8f8",
".git/objects/72/f64a872e083362f51d5e99853d5c91f407b7ce": "81c34a46509f164cef586bf76b2aa9d1",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/76/7330dc0a7ae745b3ce783bab8143fa7033be03": "0619f7d95c485d0198f34db6c6651cfb",
".git/objects/76/93c39eb3a38068012e90933bf6635827757722": "45ce33bfb96875de8c2b7a0295e28f51",
".git/objects/7a/34759fda65d08e609cdd381f5145ff24d68f7c": "5a8ff523e9f293a5daa50d562e7b65ae",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/7d/d63f09dfd543d5ac9cd1f83ab02d0d17c6bce6": "147b43be14c05515e4f4e83df7862378",
".git/objects/7e/e016fed3b7b4918e023d8fbef47167f95c35f3": "678f2de9e85826b2e6ab994ac5b4f010",
".git/objects/7f/8168823b2e761bfc215b4e573083e790eab9d7": "e3d064f5cd40159d0f5bc6cdb07956f8",
".git/objects/81/374692f900a94b3ba83ad0bb3837f72b34c5f4": "efc7feffe18849046864ecb98f1a7499",
".git/objects/81/64ccad6ecf6f5fe77ef2ba13f06b2b191ce48d": "00959fc04412af7abde17100c64535d3",
".git/objects/82/82ef159fac1392c7245a9890209f10f2c068b7": "b4e0f821e383cd5b71f416fbfe0cc618",
".git/objects/83/6c780ca7ec29b7c7d2505009d85e8b2f4c26b1": "e54572b22d3ec867696b108771e9d94f",
".git/objects/84/c5d1d9780be07dba0b7a4de45aad336d161612": "feebb5e9986974dabc91ebbff11d8d0d",
".git/objects/86/21dd6270f5eb5282b5cf3757fcd064535b382a": "237e9fb8de36cb30ae1737bcc870d189",
".git/objects/86/acc84faffe2ae3e2b15391cdbaf8efa6984752": "b8114426d14922ff8aabe657e817f03d",
".git/objects/87/31d4104843039c3b118d01e359aff35a6d3fc9": "27971a9af696b80e2ba6b72f2701d565",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9dda9cb046619a394cb5f39c86a0f838c7a13b": "1b5d8a387e351463660fe4707bfaa02f",
".git/objects/8a/058ef508751a91ea2ebfe0e4c99a3ba77c0996": "025cea70ec43c79cef94802fcd1eda6a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/29442bae816f67bd2ccfe0c46bfeb0d70419c9": "560ae2f4e832208cc99e878a1433be4e",
".git/objects/8c/f9bc3408fc42a32972b7748749eec240e10145": "b7948af1e4ad088b5bc8c584c99d62c5",
".git/objects/8e/3762b643f95d5a7f2925c252f2c69c28c7eb45": "29051ce70e5a1710f3115825bf9485b3",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/92/0e0fc0a7190bda847c22a705e9751e8ff305dd": "47dd79476839b9c2f398e69b17520bbd",
".git/objects/92/4be1bd2ebb96311b427463aa98cae27aa77188": "190b5f737ec4d491d1b0d7dc5e7ea00d",
".git/objects/92/788eed4a3b65922be0f8d6abe177ffaf976842": "ff2438048b5b17fb37d5224acf9f2e94",
".git/objects/93/7953bc97975246eb3d357b1cc074eb07f4a678": "5a6b2593389470a707468195704edeb6",
".git/objects/96/125180285f7dd2008f90f03fce3f4c4de50ba8": "128ab3fec40348f6ace042809950c089",
".git/objects/9a/547e172949270547bbf1d0357a1dcf6a7abef6": "0f51cb045e106f98bbd1d4f018d8c1ce",
".git/objects/9b/65e86b513731189326eca2566c46540c099f5c": "996fea54f52c1e3f223d3eed992f9715",
".git/objects/9c/2b3bf1f9e1eee278c45f4db16649afdb3010e3": "946d772b595c24270276d8cd586e184a",
".git/objects/9c/f17d6748e0a1b6818ca6a8b9cd73f4050e97fb": "730e41bbdd4acb9cec2ffe6a40104e97",
".git/objects/9d/b166872bbf48db1fec659637c16354b1bca624": "cafe15eac2dbef9dd8ee671e1541c488",
".git/objects/9e/7f3a22b469042d2d659e5ba9c12720d8c5bf02": "4d002ff9ddc00215da322380a23175b1",
".git/objects/a1/fc0af609d9db978f52636a7b4e6043e68cd1ed": "b45a9206201e704fdba39594d55cb045",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a4/e8c22c3ef17219f5aa5be84954ab75ccc2e0bd": "ebea49dba7d32965357924ebec9b5b60",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/4c81a5892f75de957f601b2d9d6f83f70a467c": "0e85d3cb02896e7aff6870bfc0c4b5d2",
".git/objects/a7/0d404bb91322ecdf3d8f53cb2fc48c893a8de1": "2aa71ac209ef1e995d427bac9ee4d771",
".git/objects/a8/29539912a1ae8291ff51a1d8c6ab5c5b5bb10a": "ed1c4b63204a1adf3453b14c5ed8b06e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/664040b160adcf975c1193e9c7f15ee81b067d": "a0f9a75b1ab90c8e69451218d18c23af",
".git/objects/ab/f5f0bb1074dc17b9205b8bb9edb44380a44540": "6646023a860f89c7a66b9ebf7c1814f0",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/af/2b6d7184626edf523bafe976a6e4c5103a2a13": "0f92e3f01788215755779ae53974149d",
".git/objects/af/363ffcc9e0a7c762c84246f491da328902d461": "0aaf6100eaa16e513e179d2ac07ea975",
".git/objects/b1/793632073f4b9bd82c9661a86b4d9b1767db9d": "d25fbfd7970ceccb56bbd3457015e6f2",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/b2/d5a5a8d36756a7f5911c8db9dcfaa6e8de0e41": "ee93ebe4c68186090e23d9d7da9f4e5f",
".git/objects/b3/dffe5e7b82f7faf81f85e36d1d90bd13f0e827": "b6fbc0e5ba301b969d5370d212ea184b",
".git/objects/b5/4970e24ce428c97575e1559616d2a06d773814": "a376391f1fb353edea9a056df7ef07ad",
".git/objects/b5/5dfd89853be28daa8510ce19d618f4b4a1589b": "f3c75c9c98aa2d4a9ca6be309c7a0797",
".git/objects/b6/70865ee5e2deebfc0611c753c52bd76e0c6461": "ee502339b211c164712544dde248afc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad71ebad505e49ae88f15316b78834e6c74993": "515ae84aa7fbb0370178ab305afccdc6",
".git/objects/b7/be08be0e1217a339b8456c85e87dd7f60687fa": "bb18743051a81ebf42264ef1701df997",
".git/objects/ba/3743e92d2be6ca310861f339195fb13974c533": "da0fb67f9a379b4a85f73e4302331333",
".git/objects/bb/29b95303704e72cdd24b58161997783e112432": "969b38985ec186d7a71b38f9fea533b8",
".git/objects/bd/e78181146aa8d59eb75a8f7fa8f0709114e9e3": "76eec3ec25f63efde2d759c3d201e7ec",
".git/objects/c4/fb109c80d0e9e608d3fda9a1dbb913dcd118d8": "a329d9b485b1bbc79d84b9b4086188d6",
".git/objects/c6/7c46fd62d5592392a8f8d40d3ea501c4ae28a9": "b28315fb26db137c1803dc689a59c460",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/c8/c34e8466db2b6cc1363ca73612707ce284bce7": "aeaa30d6858ced0a6a2e44a0fb794ad6",
".git/objects/c9/b266b86f029b497c2dd46a3c47059a127cd57a": "b3c46eb2b10236984127676c07bdc866",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cb/e2ee35a2b49fc777e1d9c60057d15899dd57bc": "e7815089e128f01542779187cf96650c",
".git/objects/cd/0c3605f55465919721077d13d12126177bbcba": "7034ad78d17d383f73e492de093114eb",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/d1/169dee3db7b1442428d501d54c1b137ddc15e3": "5d91220c377f38f27cb89121844848f8",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/d1/b7102d9d81c7eebef724613a3f0f8063b4afe3": "96ddc5a647af265e3c4255580f13403b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/872d21810434d2dfadfdafeb86203047b0fb0e": "04f36eb43d761e29171cb0d3072757e8",
".git/objects/d5/beef05defe287a0027548fbb38e44517fd86de": "3771ed2f33d2fc8f6b9ed638fcb1d81d",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a6f21ce4015b60d2e45053d32a8c349477bb81": "4600ceffff4fb9d1823611bc5580e67d",
".git/objects/d9/358116aecd0bdb053326d73b7d6a496354d281": "b559e13011072fb95a20014bf886143f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/620179f0830c05d80924b9629ac86fb7622598": "5173caa1528eb2ef3125658351642be9",
".git/objects/de/f32c434b402c5f728f45ae5fe8cc0625cf5424": "fbb7f84a3bdaea0cb759e6e95a8ae6b2",
".git/objects/df/78df02021bb98e27e985dc13e387bcd59295ac": "2b5bdc9e9adec8937483c898e2c0ba18",
".git/objects/e0/27dfa843ad554895e4f8f3f9188de279f19b79": "91d386c9687a461456c011e598b21fa8",
".git/objects/e4/0f93bd1d782a6d81dcadeef6669f848925a807": "eb1672e88c52c1b763caf3c8d26d4589",
".git/objects/e6/25413b5798ece0fedb596cf89408f4e0b5f9ba": "2bcbe4f421eb906b737a2c1bb919a1a1",
".git/objects/e7/746e4b7eda5e72f4f9b654c3e37213b4da88e2": "3d80c363be00d96ff593a2c71ea784a5",
".git/objects/e8/ca24a641289684be3b7f1b15b9e4a0bc9c0b38": "d45c25dcc7fd65c153224a84bdc4a6c6",
".git/objects/e8/cf97ce7b12cc5aefd3c467de1f5ad56af3582d": "c63e345209962c01c6190ae51936dd3a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c299f2e309b55969e04e60e655ad26dc94a80f": "dd09381ffb9e7f6a5a2b88ceb4bf3fa3",
".git/objects/ed/bd857c9b48f6f2d97215a829688067ea667bc7": "0a41a90a287f79a4467ff22e6cd5743e",
".git/objects/ee/a4983eb16151cce709ad5ccfd3db0d9b942755": "59d1b8f83bb865c2f0eb041c0129cb23",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/ef/ab2115625abafd4d58ac2ba84a1f6230e748da": "ad3234e94a5d627b97e7d8c09aa2e0fb",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f8/88837824f50d03a55fd6947242cd0d562ef1e5": "fa4aa795fd15e6121e7939fbbce2fb7e",
".git/objects/fa/84cb53e2eba86b467c599e89d697c1487dc930": "8155906b26b2e03142d3172b299b1023",
".git/objects/fa/d5f6e53866d1bfddde6c00dccdcd7e09f796eb": "db9a5a26c1ab35256938d21de985bfc0",
".git/objects/fc/7539c9fcf5c1b75a5ae5edfb4d603a1c3a8e2b": "5e43a6e03ab5a7f7779f83f06164b27f",
".git/objects/fd/20a4b2e713f4040ae9bf9e7584e40e33943aef": "fb609f8e546cc6b146aec2138b5036ba",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/refs/heads/master": "3c0d3a4e733e94a766068c70ac4eb408",
".git/refs/remotes/origin/master": "3c0d3a4e733e94a766068c70ac4eb408",
"assets/AssetManifest.bin": "101562f5d0796857f317804739fca7d1",
"assets/AssetManifest.bin.json": "6ea8fc5b3793d749f79fd288c005c271",
"assets/AssetManifest.json": "855194ead4fb3273db083978fc5cb7d7",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts_1/Geez%2520Brana.ttf": "43d17e568566590c5cce3a05fffdffad",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/david_legend_1.jpg": "81ea90380463289bb6f38313f1aa92b7",
"assets/assets/images/david_legend_3.png": "2a30426f1d75d6432a8f533f843d1b2a",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/eshe_1.png": "1c6cf33d4aa52e6315c7669c9a229485",
"assets/assets/images/eshe_2.png": "097c93d826e3c8a6733015342fa265c5",
"assets/assets/images/eshe_3.png": "15108e515b7d33e9b0f5fd46ded310aa",
"assets/assets/images/eshe_4.png": "5edc489609180d7af735877480cb1722",
"assets/assets/images/eshe_5.png": "2fb1abe3145bc74194c369c5de184f4b",
"assets/assets/images/eshe_6.png": "3adf5c2d3a1e5218d2cfe6e48ed09971",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/kale_chill.png": "b232245e5473b8bc7c3af676aed802d2",
"assets/assets/images/kale_shewanhe.png": "adfcff3b78e5c03b123ae66330024084",
"assets/assets/images/kale_shewanhe_CV-01.png": "5ba155b2eed6bea058b4c56e3a148c80",
"assets/assets/images/kale_shewanhe_CV.pdf": "a056f21192481f1e449f9cb7ef5db3cb",
"assets/assets/images/photo_2025-05-06_08-35-18.jpg": "308e2195448f7cfd23d83b9f34d58716",
"assets/assets/images/photo_2025-05-06_08-35-25.jpg": "5e9bde6528d70bad73d149e13e9b4c9d",
"assets/assets/images/photo_2025-05-06_08-35-32.jpg": "b8d053ee7d94f8d411f21a71aa46a988",
"assets/assets/images/Profile.pdf": "d2c910cbfded71ae8827704350660d94",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "a00c043d6aa66c05f25dde823c024225",
"assets/assets/images/projects/aerium-v1/portfolio_cover_1.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/aerium-v2/last.png": "72f9897b296d404de73c888f08341608",
"assets/assets/images/projects/aerium-v2/last_1.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/disneyplus/disneyplus_components.png": "74d9e2263cebd38337ac2ae9d2f23b16",
"assets/assets/images/projects/disneyplus/disneyplus_cover.png": "af66b4377ee7ea1fe30a6cf25639ceb6",
"assets/assets/images/projects/disneyplus/disneyplus_cover_1.png": "ffa11a0c8f114e0a24b31bb1790f2ef8",
"assets/assets/images/projects/disneyplus/disneyplus_description.png": "e87d815b20e60ddfd26e9e2f216691b1",
"assets/assets/images/projects/disneyplus/disneyplus_description_1.png": "f049e03a0d786b44d57f80e702f10a5c",
"assets/assets/images/projects/disneyplus/disneyplus_designs.png": "0be6be513beaeae52d91c85256cbe3db",
"assets/assets/images/projects/disneyplus/disneyplus_designs_1.png": "084289a49e4ec07af37d41eb0b919123",
"assets/assets/images/projects/disneyplus/disneyplus_downloads_feature.png": "3bb3d18e2b7af7b62e3bc90a8deed037",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu.png": "27b7932d0d8ed97cca8a2d7569c2282c",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu_1.png": "d13b01ee672be2e3e884fe866db90359",
"assets/assets/images/projects/disneyplus/disneyplus_header.png": "baea9379c8e592cb3f5999aab7bae916",
"assets/assets/images/projects/disneyplus/disneyplus_header_1.png": "1ef584f42c10fd2f994f44e35d281751",
"assets/assets/images/projects/disneyplus/disneyplus_home.png": "09664ccb8655d4f41c1a8abe2a223c41",
"assets/assets/images/projects/disneyplus/disneyplus_home_1.png": "7c3f46edc91974a22db6ecab11e49cbd",
"assets/assets/images/projects/disneyplus/disneyplus_mockups.png": "8b782d8bb65d453c5b76f238d370a7c9",
"assets/assets/images/projects/disneyplus/disneyplus_mockups_1.png": "ec3d2333044bc2622030e38eb84a1b90",
"assets/assets/images/projects/disneyplus/disneyplus_more_description.png": "54c40930e0035fee095cc5f26e09e8d4",
"assets/assets/images/projects/disneyplus/disneyplus_profiles.png": "ee5c8f987396dbb6157911982b9e983d",
"assets/assets/images/projects/disneyplus/disneyplus_theme.png": "b4a28335035d4b169f1033313801fcc5",
"assets/assets/images/projects/disneyplus/disneyplus_the_end.png": "32e658209ce45e9227860a8c0fbf1b54",
"assets/assets/images/projects/disneyplus/mockups.png": "2b601e2fd52c6196f16b075bbde5bf12",
"assets/assets/images/projects/disneyplus/mockups_1.png": "bfec31223be46e6c269d8bc71f3f707e",
"assets/assets/images/projects/drop/drop_cover.png": "dd0de8ce5d4b5bf51c04fc17fb2962be",
"assets/assets/images/projects/drop/drop_cover_1.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "93dd21cc79f8d89c9a924f04f687e43e",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover_1.png": "529c018ceb7db5d85e0bba13a4cd19c3",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover_2.png": "90441205cb4be0a2e190795d25d7e60f",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/screens.png": "2e7018daf1d79a61b0d95f0e94d15b0c",
"assets/assets/images/projects/flutter_catalog/screens_1.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/login_catalog/login_catalog_cover.png": "143282eb4a4e93524b848bc133f9e4a4",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.png": "58b019cca28616d30268477c371ad795",
"assets/assets/images/projects/nimbus/nimbus_cover_1.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/outfitr/outfitr_1.png": "9b4dbdb71fdbccb37fb2faad88c1f007",
"assets/assets/images/projects/outfitr/outfitr_12.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/roam/roam_cover.png": "87262c6dfc60bc6b6efb8dad1972be48",
"assets/assets/images/projects/roam/roam_cover_1.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/FontManifest.json": "417d58938534dd3163e8a3e9c6b8a8ba",
"assets/fonts/MaterialIcons-Regular.otf": "c3a6a6dc5288829863b6a6e747e0ee72",
"assets/NOTICES": "ff1ef3bdc383b13d76064f80204759d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "291d064ed83e52f7ecc395c8471f987b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"index.html": "1cd0f6990e6489d213184a897a8f273c",
"/": "1cd0f6990e6489d213184a897a8f273c",
"main.dart.js": "e1273b30fbda9897ca225d4794fc91bf",
"manifest.json": "da69749930e92946419ec199701fc137",
"version.json": "3906fc5d38199c243ab81a45fee32c66"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
