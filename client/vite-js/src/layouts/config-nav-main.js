import { paths } from 'src/routes/paths';
import { CONFIG } from 'src/config-global';

// Resim yolunu oluşturma fonksiyonu
const imagePath = (name) => `${CONFIG.assetsDir}/assets/images/ürünler/${name}`;

// Sayfa bağlantıları
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
      { title: 'E-Müstahsil Makbuzu', path: paths.urunler.emustahsil },
      { title: 'E-Fatura', path: paths.urunler.efatura },
      { title: 'E-Arşiv Fatura', path: paths.urunler.earsivfatura },
      { title: 'E-İrsaliye', path: paths.urunler.eirsaliye },
      { title: 'E-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu },
      { title: 'E-Defter', path: paths.urunler.edefter },
      { title: 'E-Saklama', path: paths.urunler.esaklama },
      { title: 'E-İmza', path: paths.urunler.eimza },
      { title: 'Kep', path: paths.urunler.kep },
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

// Ürünler için görsel ve başlık bağlantıları
export const pageLinks2 = [
  {
    coverUrl: imagePath('efaturaarsiv.jpg'),
    items: [{ title: 'E-Müstahsil Makbuzu', path: paths.urunler.emustahsil }],
  },
  {
    coverUrl: imagePath('efatura1.jpg'),
    items: [{ title: 'E-Fatura', path: paths.urunler.efatura }],
  },
  {
    coverUrl: imagePath('efaturaarsiv2.jpeg'),
    items: [{ title: 'E-Arşiv Fatura', path: paths.urunler.earsivfatura }],
  },
  {
    coverUrl: imagePath('eirsaliye.jpg'),
    items: [{ title: 'E-İrsaliye', path: paths.urunler.eirsaliye }],
  },
  {
    coverUrl: imagePath('eserbestmeslek.jpg'),
    items: [{ title: 'E-Serbest Meslek Makbuzu', path: paths.urunler.eserbestmeslekmakbuzu }],
  },
  {
    coverUrl: imagePath('edefter.jpg'),
    items: [{ title: 'E-Defter', path: paths.urunler.edefter }],
  },
  {
    coverUrl: imagePath('esaklama.jpg'),
    items: [{ title: 'E-Saklama', path: paths.urunler.esaklama }],
  },
  {
    coverUrl: imagePath('eimza.jpg'),
    items: [{ title: 'E-İmza', path: paths.urunler.eimza }],
  },
  {
    coverUrl: imagePath('kep.jpg'),
    items: [{ title: 'Kep', path: paths.urunler.kep }],
  },
];

// Navigasyon verileri
export const navData = [
  { title: 'Anasayfa', path: '/' },
  { title: 'Hakkımızda', path: '/company/about' },
  { title: 'Ürünlerimiz', path: paths.pages, children: pageLinks2 },
  { title: 'İletişim', path: '/company/contact' },
  { title: 'Blog', path: '/company/blog' },
  { title: 'İnsan Kaynakları', path: '/company/İnsanKaynaklari' },
];
