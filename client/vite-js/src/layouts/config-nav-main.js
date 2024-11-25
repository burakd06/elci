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
      { title: 'e-Fatura', path: paths.urunler.efatura }, 
      { title: 'e-Arşiv Fatura', path: paths.urunler.earsivfatura },
      { title: 'e-İrsaliye', path: paths.urunler.eirsaliye },
      { title: 'e-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu },
      { title: 'e-Müstahsil Makbuzu', path: paths.urunler.emustahsil }, 
      { title: 'e-Gider Pusulası', path: paths.urunler.pusula }, 
      { title: 'e-Defter', path: paths.urunler.edefter },
      { title: 'e-Saklama', path: paths.urunler.esaklama },
      { title: 'e-İmza', path: paths.urunler.eimza },
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
 
];

export const pageLinks2 = [
  {
    subheader: ' e-Belge',
    items: [
         { title: 'e-Fatura', path: paths.urunler.efatura }, 
         { title: 'e-Arşiv Fatura', path: paths.urunler.earsivfatura },
         { title: 'e-İrsaliye', path: paths.urunler.eirsaliye },
         { title: 'e-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu },
         { title: 'e-Müstahsil Makbuzu', path: paths.urunler.emustahsil },
         { title: 'e-Gider Pusulası', path: paths.urunler.pusula },  
    ],
  },
  {
    subheader: 'e-Defter Destek',
    items: [
      
      { title: 'e-Defter', path: paths.urunler.edefter },
    ],
  },
  {
    subheader: 'e-Aktarım',
    items: [
      
      { title: 'Aktarım', path: paths.urunler.aktarim },
    ],
  },
  {
    subheader: 'e-Beyan',
    items: [
      
      { title: 'Beyan', path: paths.urunler.beyan },
    ],
  },
  {
    subheader: 'e-Saklama',
    items: [
      { title: 'e-Saklama', path: paths.urunler.esaklama },
    ],
  },
  {
    subheader: 'Kep',
    items: [
      { title: 'Kep', path: paths.urunler.kep },
    ],
  },
  {
    subheader: 'e-İmza',
    items: [
      { title: 'e-İmza', path: paths.urunler.eimza },
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

