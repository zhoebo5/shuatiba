// 產生 tailwind.css 用的設定（與原本 index.html 內的 tailwind.config 相同）
// 重新產生：npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/tailwind.in.css -o tailwind.css --minify
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const scale = name => Object.fromEntries(shades.map(k => [k, `rgb(var(--${name}-${k}) / <alpha-value>)`]));

module.exports = {
  content: ['./index.html', './chapters.js'],
  theme: {
    extend: {
      colors: {
        slate: scale('slate'), cyan: scale('cyan'), amber: scale('amber'), emerald: scale('emerald'), rose: scale('rose'),
        ink: 'rgb(var(--ink) / <alpha-value>)',
      },
      fontFamily: { sans: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'system-ui', 'sans-serif'] },
    },
  },
};
