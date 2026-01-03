import fs from "fs/promises";
import path from "path";
import * as helpers from "./helpers.js";

const templateDir = new URL("../template", import.meta.url);

export const run = async (projectFolder) => {
    const destDir =
        projectFolder === "."
            ? process.cwd()
            : path.join(process.cwd(), projectFolder);

    const exists = await helpers.pathExists(destDir);

    if (exists) {
        const entries = await fs.readdir(destDir).catch(() => []);
        if (entries.length > 0) {
            throw new Error(
                `Destination is not empty:\n  ${destDir}`
            );
        }
    } else {
        await fs.mkdir(destDir, { recursive: true });
    }

    await helpers.copyDir(templateDir.pathname, destDir);

    console.log("\n✔ Project created\n");
    console.log(`Location:\n  ${destDir}\n`);
    console.log("Next steps:");
    console.log(`  cd ${projectFolder}`);
    console.log("  npm install");
    console.log("  npm run dev\n");
};
