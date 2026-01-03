import fs from "node:fs/promises";
import path from "node:path";

export const pathExists = async (p) => {
    try {
        await fs.access(p);
        return true;
    } catch {
        return false;
    }
};

export const copyDir = async (srcDir, destDir) => {
    await fs.mkdir(destDir, { recursive: true });

    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
            continue;
        }

        if (entry.isFile()) {
            await fs.copyFile(srcPath, destPath);
        }
    }
};
