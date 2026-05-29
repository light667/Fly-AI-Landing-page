import sharp from "sharp";
import toIco from "to-ico";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src/assets/logo.png");
const out = join(root, "public");

await mkdir(out, { recursive: true });

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(src)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(out, name));
  console.log(`✓ ${name}`);
}

const png16 = await sharp(src).resize(16, 16, { fit: "cover" }).png().toBuffer();
const png32 = await sharp(src).resize(32, 32, { fit: "cover" }).png().toBuffer();
await writeFile(join(out, "favicon.ico"), await toIco([png16, png32]));
console.log("✓ favicon.ico");
