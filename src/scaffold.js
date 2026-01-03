import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import * as helpers from "./helpers.js";

const templateDir = fileURLToPath(
    new URL("../template", import.meta.url)
);

export const run = async (projectFolder) => {
    if (!projectFolder) {
        throw new Error("Project folder name is required");
    }

    const destDir = path.join(process.cwd(), projectFolder);

    await fs.mkdir(destDir, { recursive: true });

    const entries = await fs.readdir(destDir);
    if (entries.length > 0) {
        throw new Error("Destination folder must be empty");
    }

    await helpers.copyDir(templateDir, destDir);

    // --- FIX: rename gitignore → .gitignore ---
    const gitignoreSrc = path.join(destDir, "gitignore");
    const gitignoreDest = path.join(destDir, ".gitignore");

    try {
        await fs.rename(gitignoreSrc, gitignoreDest);
    } catch {
        // ignore if not present
    }
    // ------------------------------------------

    console.log("\n✔ Project created");
    console.log(`Location: ${destDir}\n`);
    console.log("Next steps:");
    console.log(`  cd ${projectFolder}`);
    console.log("  npm install");
    console.log("  npm run dev\n");
};
