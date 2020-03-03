const maps = [
  {
    id: '0x080000000000005B',
    name: 'TEMPLE OF ANUBIS',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/temple-of-anubis-thumb.jpg',
    type: 'assault',
  },
  {
    id: '0x08000000000000D4',
    name: "KING'S ROW",
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/kings-row-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000165',
    name: 'HANAMURA',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/hanamura-thumb.jpg',
    type: 'assault',
  },
  {
    id: '0x0800000000000184',
    name: 'WATCHPOINT: GIBRALTAR',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/gibraltar-thumb.jpg',
    type: 'escort',
  },
  {
    id: '0x08000000000001D4',
    name: 'NUMBANI',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/numbani-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x08000000000001DB',
    name: 'VOLSKAYA INDUSTRIES',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/volskaya-thumb.jpg',
    type: 'assault',
  },
  {
    id: '0x08000000000002AF',
    name: 'Hollywood',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/hollywood-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x08000000000002C3',
    name: 'DORADO',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/dorado-thumb.jpg',
    type: 'escort',
  },
  {
    id: '0x08000000000004B7',
    name: 'Nepal',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/nepal-thumb.jpg',
    type: 'control',
  },
  {
    id: '0x08000000000005BB',
    name: 'Route 66',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/route-66-thumb.jpg',
    type: 'escort',
  },
  {
    id: '0x0800000000000661',
    name: 'TUTORIAL',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2723287e423a5cf49e49e9bef26d4bea1112f21106dae27d5b745a18d4a066ab.png',
    type: '',
  },
  {
    id: '0x0800000000000662',
    name: 'Lijiang Tower',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/lijiang-thumb.jpg',
    type: 'control',
  },
  {
    id: '0x080000000000066D',
    name: 'Ilios',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/ilios-thumb.jpg',
    type: 'control',
  },
  {
    id: '0x0800000000000688',
    name: 'Practice Range',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/770355721087378b3141bd30d68f59260540dc7bca64bf3ca0db10b62c8a9a66.png',
    type: '',
  },
  {
    id: '0x080000000000068D',
    name: 'Eichenwalde',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/germany-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x080000000000069E',
    name: 'Oasis',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/oasis-thumb.jpg',
    type: 'control',
  },
  {
    id: '0x08000000000006AB',
    name: 'Hollywood',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/hollywood-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x08000000000006B1',
    name: "KING'S ROW",
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/kings-row-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x08000000000006B3',
    name: 'Estádio das Rãs',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/66d42c457863a0f827c404dc31ad0dcbffd5f8007bf625d2142b2c7a207fbf76.png',
    type: 'lucioball',
  },
  {
    id: '0x08000000000006B5',
    name: 'HANAMURA',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/hanamura-thumb.jpg',
    type: 'assault',
  },
  {
    id: '0x08000000000006B7',
    name: 'Lijiang Tower',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/lijiang-thumb.jpg',
    type: 'control',
  },
  { id: '0x08000000000006C7', name: 'VPP Green Room', icon: '', type: '' },
  {
    id: '0x08000000000006C9',
    name: "Junkenstein's Revenge",
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bc9a58c8aa0448ac00597d797eadbdcf8ec3ca48b550451eca2706f3cf1b881.png',
    type: '',
  },
  {
    id: '0x08000000000006D1',
    name: 'Ecopoint: Antarctica',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/o5/O5PBEW7HQF4M1497479644412.jpg',
    type: 'arena',
  },
  {
    id: '0x08000000000006D3',
    name: 'Horizon Lunar Colony',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9a/9AE0ARWHZE7S1497480542404.jpg',
    type: 'assault',
  },
  {
    id: '0x08000000000006FE',
    name: "KING'S ROW",
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/kings-row-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000705',
    name: 'Necropolis',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/xi/XITFVIDCHUSX1497480792852.jpg',
    type: 'arena',
  },
  {
    id: '0x080000000000070C',
    name: 'Black Forest',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/7t/7TZM85O9OVKP1497479820368.jpg',
    type: 'arena',
  },
  {
    id: '0x080000000000070D',
    name: 'Ecopoint: Antarctica',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/o5/O5PBEW7HQF4M1497479644412.jpg',
    type: 'arena',
  },
  {
    id: '0x0800000000000711',
    name: 'Lijiang Garden',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b3d6a3579958d81db080a0c0e024d2aca963c324fa100ecf7ee5bc2fca8bed28.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000712',
    name: 'Lijiang Night Market',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/99cca66d0cf4e3c86c5b0d1096b0d6274dacabf55bce221b8715b6b0d09c5216.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000717',
    name: 'Nepal Sanctum',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/23b919d6b3d7b84c60f38c8678caa3187ad1f4214c340fb2868ae4bd6fa95580.png',
    type: 'arena',
  },
  {
    id: '0x080000000000071A',
    name: 'Lijiang Control Center',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/777fe416c1f9cb7d7e001b29f77bb1e0d719c764972b3b7cce13dca2040a8b19.png',
    type: 'arena',
  },
  {
    id: '0x080000000000071C',
    name: 'Castillo',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/2i/2IUEKN9SSRHT1497479900306.jpg',
    type: 'arena',
  },
  {
    id: '0x0800000000000736',
    name: 'Nepal Village',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c7588dd30dac08fa869d02b148d8d615f9996ab5b587f2a4978343f0a52f0da1.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000738',
    name: 'Nepal Shrine',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cc22199a8e4f6539ef7f78a4d5f859b53abc3fd49c4d5598ac3d68b870a48507.png',
    type: 'arena',
  },
  {
    id: '0x080000000000073A',
    name: 'Ilios Well',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf99a1c23f21a1fb99bdfa77f6b5eecb37484754d3b04a93989e685886368a51.png',
    type: 'arena',
  },
  {
    id: '0x080000000000073D',
    name: 'Ilios Lighthouse',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/03901fe82b0db4854231998e182d2e69d3d12ba25212a80decb8ea765f5dfd5a.png',
    type: 'arena',
  },
  {
    id: '0x080000000000073E',
    name: 'Ilios Ruins',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c54ca9034bd75c166615fcbd09329c2802111416e764e88e51227cc6c15eeb1e.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000744',
    name: 'Lijiang Control Center',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1364933e130f84eb10c06eac57838ba207a5f2b5903a13be53b27165afeac38c.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000745',
    name: 'Lijiang Garden',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e5b6e6b768c3bb5dab1df4894698e489d19c3bc4eeef00540c9cefcbae9dfdab.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000746',
    name: 'Lijiang Night Market',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/312a4bade8396354117c93b7804380ea8be7b4f24ae85067ca336b979ba5d477.png',
    type: 'arena',
  },
  {
    id: '0x080000000000074A',
    name: 'Oasis City Center',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e65565b2920f3e3b22c39c46223fb5b2ab43d27f13126382614a31a0c503d58.png',
    type: 'assault',
  },
  {
    id: '0x080000000000074C',
    name: 'Oasis Gardens',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/fdaa0e26155760d187a75236d6cc231dac731abb948000ca9ab6ac5324c1d2d5.png',
    type: 'assault',
  },
  {
    id: '0x080000000000074D',
    name: 'Oasis University',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4fd0d37aed1fafeb5324fcda186516174e1793e0550dcd8b9864bca3fde802ef.png',
    type: 'assault',
  },
  {
    id: '0x0800000000000751',
    name: 'NUMBANI',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/numbani-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000756',
    name: 'Junkertown',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3EDBV89EVDZG1504724220173.jpg',
    type: 'escort',
  },
  {
    id: '0x080000000000075E',
    name: 'Blizzard World',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9T3CRLFIY3HK1516141976434.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000793',
    name: 'Sydney Harbour Arena',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ec53a36d25c8af3e455d7f3cf4641597eeefcc1353c0fea1b5c6c9d2a8415782.png',
    type: 'lucioball',
  },
  {
    id: '0x080000000000079F',
    name: 'Rialto',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/YTCYLVCOC3IK1524791976813.jpg',
    type: 'escort',
  },
  {
    id: '0x08000000000007A1',
    name: 'Ayutthaya',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9fe4bfb92111d5469fabfa20f7981d2a03eb18ff8a4776e21b32035f109c89f1.png',
    type: 'ctf',
  },
  {
    id: '0x08000000000007A4',
    name: 'Château Guillard',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/if/IFSO13YI5HB91503000673807.jpg',
    type: 'deathmatch',
  },
  {
    id: '0x08000000000007E2',
    name: 'Busan',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8a5527129b3d9f4e8f7a12d2e05221771938bb2f883e68ac69e65e95f04b2179.png',
    type: 'control',
  },
  {
    id: '0x08000000000007F4',
    name: 'Eichenwalde',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/germany-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x08000000000007F7',
    name: 'Black Forest',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/7t/7TZM85O9OVKP1497479820368.jpg',
    type: 'arena',
  },
  {
    id: '0x08000000000007FD',
    name: 'Nepal Village',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/db9351ed2883da39a1a269a60d85249b134c9b373f942c2ac2993be77ce1ce59.png',
    type: 'arena',
  },
  {
    id: '0x0800000000000801',
    name: 'Junkertown',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3EDBV89EVDZG1504724220173.jpg',
    type: 'escort',
  },
  {
    id: '0x0800000000000836',
    name: 'Château Guillard',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/if/IFSO13YI5HB91503000673807.jpg',
    type: 'deathmatch',
  },
  {
    id: '0x080000000000083B',
    name: 'Oasis',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/oasis-thumb.jpg',
    type: 'control',
  },
  {
    id: '0x080000000000083E',
    name: 'Blizzard World',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9T3CRLFIY3HK1516141976434.jpg',
    type: 'hybrid',
  },
  {
    id: '0x080000000000085F',
    name: 'Black Forest',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/7t/7TZM85O9OVKP1497479820368.jpg',
    type: 'arena',
  },
  {
    id: '0x0800000000000871',
    name: 'Rialto',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/YTCYLVCOC3IK1524791976813.jpg',
    type: 'escort',
  },
  {
    id: '0x080000000000088C',
    name: 'Eichenwalde',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/germany-thumb.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000890',
    name: 'Petra',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5bbb36d297508c7f0212a9e823d3e0209d07d91f0f579a0296e5fa5565150c6d.png',
    type: 'deathmatch',
  },
  {
    id: '0x0800000000000891',
    name: 'Paris',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bb5f86d8dedfbd59ee06ac28a8e15d89355ec922a9f77474740419d8c6eb300.png',
    type: 'assault',
  },
  {
    id: '0x08000000000008B4',
    name: 'Rialto',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/YTCYLVCOC3IK1524791976813.jpg',
    type: 'escort',
  },
  {
    id: '0x08000000000008BE',
    name: 'Rialto',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/YTCYLVCOC3IK1524791976813.jpg',
    type: 'escort',
  },
  {
    id: '0x080000000000092A',
    name: 'Busan Stadium',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/519e2ae9d979419e95d125c0688614348fd498dccc6e0819e12027c05f7bfc78.png',
    type: 'lucioball',
  },
  {
    id: '0x0800000000000A14',
    name: 'Busan',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/519e2ae9d979419e95d125c0688614348fd498dccc6e0819e12027c05f7bfc78.png',
    type: 'control',
  },
  {
    id: '0x0800000000000A42',
    name: 'Busan',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8a5527129b3d9f4e8f7a12d2e05221771938bb2f883e68ac69e65e95f04b2179.png',
    type: 'control',
  },
  {
    id: '0x0800000000000A44',
    name: 'Havana',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/132214058ae211beb17ce674541170677d2f135f94bceb153bb407bf56d506d0.png',
    type: 'escort',
  },
  {
    id: '0x0800000000000A5A',
    name: 'Château Guillard',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/if/IFSO13YI5HB91503000673807.jpg',
    type: 'deathmatch',
  },
  {
    id: '0x0800000000000A5B',
    name: 'Blizzard World',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9T3CRLFIY3HK1516141976434.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000A7A',
    name: 'Busan Sanctuary',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/896604a0f66cc85a643d821788ea86c29a248ebd1578e84635abc8ef7c81d505.png',
    type: '',
  },
  {
    id: '0x0800000000000A84',
    name: 'Route 66',
    icon:
      'https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/route-66-thumb.jpg',
    type: 'escort',
  },
  {
    id: '0x0800000000000A86',
    name: 'Busan Downtown',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/502f00d7dedeef9f204b3f88ec4e20c8bf70284671c4ef5b37fb893dc852ac2f.png',
    type: '',
  },
  {
    id: '0x0800000000000A9E',
    name: 'Blizzard World',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9T3CRLFIY3HK1516141976434.jpg',
    type: 'hybrid',
  },
  {
    id: '0x0800000000000AF0',
    name: 'Paris',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bb5f86d8dedfbd59ee06ac28a8e15d89355ec922a9f77474740419d8c6eb300.png',
    type: 'assault',
  },
  {
    id: '0x0800000000000AFE',
    name: 'Havana',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/427c8de9a1c529f822ad570b8ad3012e705aa145b2ac5cbe0deb735e6d437736.png',
    type: 'escort',
  },
  {
    id: '0x0800000000000B55',
    name: 'Havana',
    icon:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/132214058ae211beb17ce674541170677d2f135f94bceb153bb407bf56d506d0.png',
    type: 'escort',
  },
]

export function getMapById(id: string) {
  return maps.find(map => map.id === id)
}
