import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const requiredEnv = ["VITE_SUPABASE_URL", "VITE_SUPABASE_ANON_KEY"];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length) {
  console.error(`Missing required Supabase build environment: ${missingEnv.join(", ")}`);
  process.exit(1);
}

const outputDir = process.env.BUILD_OUTPUT_DIR ?? "dist";
const assetsDir = join(resolve(process.cwd(), outputDir), "assets");

let jsFiles = [];
try {
  jsFiles = readdirSync(assetsDir).filter((file) => file.endsWith(".js"));
} catch (err) {
  console.error(`Could not read built assets from ${assetsDir}`);
  process.exit(1);
}

if (!jsFiles.length) {
  console.error(`No JavaScript assets found in ${assetsDir}`);
  process.exit(1);
}

const builtJs = jsFiles.map((file) => readFileSync(join(assetsDir, file), "utf8")).join("\n");
const missingBundledValues = requiredEnv.filter((key) => !builtJs.includes(process.env[key]));

if (missingBundledValues.length) {
  console.error(
    `Supabase build values were provided but not bundled: ${missingBundledValues.join(", ")}`
  );
  process.exit(1);
}

console.log("Supabase build config verified.");
