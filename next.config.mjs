/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: Netlify bekommt reines HTML aus /out.
  // Kein Server, keine Functions, keine Runtime-Kosten — und Netlify Forms
  // findet die Formulare direkt im ausgelieferten HTML.
  output: 'export',
  trailingSlash: true,
  images: {
    // Wir benutzen bewusst kein next/image: jedes Bild bekommt width/height
    // und alt-Text von Hand aus kaffee/README.md. Kein Layout-Shift, kein JS.
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
