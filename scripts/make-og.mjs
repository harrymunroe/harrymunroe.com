// Renders the default share image (public/og-default.png).
// Run with: node scripts/make-og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#faf7f2"/>
	<rect x="96" y="210" width="160" height="6" fill="#8a2d1f"/>
	<text x="96" y="320" font-family="Helvetica, Arial, sans-serif" font-size="84" font-weight="700" fill="#26231f">Harry Munroe</text>
	<text x="96" y="400" font-family="Helvetica, Arial, sans-serif" font-size="42" fill="#6b6459">Turning technology into capability</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og-default.png', import.meta.url).pathname);
console.log('Wrote public/og-default.png');
