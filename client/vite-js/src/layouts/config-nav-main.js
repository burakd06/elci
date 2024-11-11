import { paths } from 'src/routes/paths';
import { CONFIG } from 'src/config-global';

const imagePath = (name) => `${CONFIG.assetsDir}/assets/images/ürünler/${name}`;

export const pageLinks = [
  {
    subheader: 'Anasayfa',
    link: "/",
    items: [],
  },
  {
    subheader: 'Hakkımızda',
    link: "/company/about",
    items: [],
  },
  {
    subheader: 'Ürünlerimiz',
    items: [
      { 
        title: 'E-Belge',
        subItems: [
         { title: 'E-Fatura', path: paths.urunler.efatura }, 
         { title: 'E-Arşiv Fatura', path: paths.urunler.earsivfatura },
         { title: 'E-İrsaliye', path: paths.urunler.eirsaliye },
         { title: 'E-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu },
         { title: 'E-Müstahsil Makbuzu', path: paths.urunler.emustahsil }, 
         
        ]
      },
      { title: 'E-Defter', path: paths.urunler.edefter },
      { title: 'E-Saklama', path: paths.urunler.esaklama },
      { title: 'E-İmza', path: paths.urunler.eimza },
      { title: 'Kep', path: paths.urunler.kep },
      { title: 'Beyan', path: paths.urunler.beyan },
      { title: 'Aktarım', path: paths.urunler.aktarim },
    ],
  },
  {
    subheader: 'İletişim',
    link: "/company/contact",
    items: []
  },
  {
    subheader: 'Blog',
    link: "/company/blog",
    items: [],
  },
  {
    subheader: 'İnsan Kaynakları',
    link: "/company/İnsanKaynaklari",
    items: [],
  },
];

export const pageLinks2 = [
  {
    title: 'E-Belge',
    items: [
      { title: 'E-Müstahsil Makbuzu', path: paths.urunler.emustahsil },
      { title: 'E-Fatura', path: paths.urunler.efatura },
      { title: 'E-Arşiv Fatura', path: paths.urunler.earsivfatura },
      { title: 'E-İrsaliye', path: paths.urunler.eirsaliye },
      { title: 'E-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu },
      { title: 'E-Defter', path: paths.urunler.edefter },
    ]
  },
  {
    title: 'E-Saklama', path: paths.urunler.esaklama,
    items: [
      { title: 'E-Saklama', path: paths.urunler.esaklama },
      { title: 'E-İmza', path: paths.urunler.eimza },
      { title: 'Kep', path: paths.urunler.kep },
      { title: 'Beyan', path: paths.urunler.beyan },
      { title: 'Aktarım', path: paths.urunler.aktarim },
    ],
  },
  
];


export const navData = [
  { title: 'Anasayfa', path: '/' },
  { title: 'Hakkımızda', path: '/company/about' },
  { 
    title: 'Ürünlerimiz', 
    path: paths.pages,
    children: pageLinks2
  },
  { title: 'İletişim', path: '/company/contact' },
  { title: 'Blog', path: '/company/blog' },
];

