import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://screwfast.uk',
  image: {
    domains: ['images.unsplash.com'],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi', // All urls that don't contain language prefix will be treated as default locale
        locales: {
          en: 'en', // The `defaultLocale` value must present in `locales` keys
          fr: 'fr',
          zh: 'zh',
        },
      },
    }),
    starlight({
      title: 'ScrewFast Docs',
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
      // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
      // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
      // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
      locales: {
        root: {
          label: 'Vietnamese',
          lang: 'vi',
        },
        en: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        zh: { label: '中文', lang: 'zh' },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: 'Tra cứu nhanh',
          translations: {
            en: 'Quick Start Guides',
            fr: 'Guides de Démarrage Rapide',
            zh: '快速入门指南',
          },
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'Công cụ & Thiết bị',
          // Translated guide intros exist per locale; these pages fall back to English.
          translations: {
            en: 'Tools & Equipment',
            fr: 'Outils et Équipement',
            zh: '工具与设备',
          },
          items: [
            { label: 'Tool Guides', link: 'tools/tool-guides/' },
            { label: 'Equipment Care', link: 'tools/equipment-care/' },
          ],
        },
        {
          label: 'Dịch vụ xây dựng',
          translations: {
            en: 'Construction Services',
            fr: 'Services de Construction',
            zh: '施工服务',
          },
          items: [{ autogenerate: { directory: 'construction' } }],
        },
        {
          label: 'Advanced Topics',
          items: [{ autogenerate: { directory: 'advanced' } }],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/trannhukhoinguyen',
        },
      ],
      disable404Route: true,
      customCss: ['./src/assets/styles/starlight.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/ui/starlight/SiteTitle.astro',
        Head: './src/components/ui/starlight/Head.astro',
        MobileMenuFooter:
          './src/components/ui/starlight/MobileMenuFooter.astro',
        ThemeSelect: './src/components/ui/starlight/ThemeSelect.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://tosuthien.org' + '/social.webp',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: 'https://tosuthien.org' + '/social.webp',
          },
        },
      ],
    }),
    mdx(),
    AutoImport({
      imports: [
        // Hoặc bạn cũng có thể dùng alias (nếu project đã setup alias @/)
        '@/components/post/SutraFieldset.astro',
        '@/components/post/DharmaFieldset.astro',
        '@/components/ui/DialogueBubble.astro',
        '@/components/ui/links/Link2Post.astro',
      ],
    }),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
