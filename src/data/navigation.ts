/**
 * Navigation structure shared by every locale: stable ids, unlocalised paths
 * and social URLs. The label for each id lives in the copy tables
 * (`copy.nav.labels`, `copy.nav.footer.sections`), so translators never touch
 * a path and code never keys on a translated label.
 */
export type NavLinkId = 'home' | 'products' | 'enlighteners' | 'blog' | 'koans';

export const navLinks: { id: NavLinkId; path: string }[] = [
  { id: 'home', path: '/' },
  { id: 'enlighteners', path: '/enlighteners' },
  { id: 'koans', path: '/koans' },
  { id: 'blog', path: '/blog' },
  { id: 'products', path: '/products' },
];

export type FooterSectionId = 'ecosystem' | 'company';
export type FooterLinkId =
  | 'documentation'
  | 'tools'
  | 'services'
  | 'about'
  | 'blog'
  | 'careers'
  | 'customers';

export const footerSections: {
  id: FooterSectionId;
  links: { id: FooterLinkId; path: string; badge?: 'hiring' }[];
}[] = [
  {
    id: 'ecosystem',
    links: [
      { id: 'documentation', path: '/welcome-to-docs/' },
      { id: 'tools', path: '/products' },
      { id: 'services', path: '/services' },
    ],
  },
  {
    id: 'company',
    links: [
      { id: 'about', path: '#' },
      { id: 'blog', path: '/blog' },
      { id: 'careers', path: '#', badge: 'hiring' },
      { id: 'customers', path: '#' },
    ],
  },
];

export const charity = {
  reshare: 'https://tram.reshare.vn/',
  nnl: 'https://www.facebook.com/nhanhieula.7122020/',
  cnyt: 'https://www.facebook.com/ChuNhatYeuThuong/',
};

export const socialLinks = {
  facebook: {
    label: 'Tông Phong Tổ Sư Thiền',
    url: 'https://www.facebook.com/Nhohoivanhin/',
  },
  facebook2: {
    label: 'Hien Phap',
    url: 'https://www.facebook.com/hien.thichphap/',
  },
  youtube: {
    label: 'THAM TỔ SƯ THIỀN',
    url: 'https://www.youtube.com/@thamtosuthien000',
  },
  youtube2: {
    label: 'Tổ Sư Thiền',
    url: 'https://www.youtube.com/@tổsưthiền',
  },
  youtube3: {
    label: 'Tổ Sư Thiền Hà Nội',
    url: 'https://www.youtube.com/@tosuthienhanoi',
  },
  youtube4: {
    label: 'Tông Phong Tổ Sư Thiền',
    url: 'https://www.youtube.com/@TôngPhongTổSưThiền',
  },
  youtube5: {
    label: 'Tổ Sư Thiền',
    url: 'https://www.youtube.com/@thientosu9432',
  },
  youtube6: {
    label: 'Thích Duy Lực',
    url: 'https://www.youtube.com/@thichduyluc4355',
  },
  youtube7: {
    label: 'Đạo Hiền Official',
    url: 'https://www.youtube.com/@Daohien-z2o',
  },
  youtube8: {
    label: 'Tổ Sư Thiền',
    url: 'https://www.youtube.com/@tosuthien_org',
  },
  bookcase: {
    label: 'Tủ sách Tổ Sư Thiền',
    url: 'https://pubhtml5.com/bookcase/wuxzq/',
  },
  bookcase2: {
    label: 'Tủ sách Tổ Sư Thiền',
    url: 'https://pubhtml5.com/bookcase/cunen/',
  },
};