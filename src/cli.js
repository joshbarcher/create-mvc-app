#!/usr/bin/env node

import * as scaffold from "./scaffold.js";

const printUsage = () => {
    console.log(`
Usage:
    create-mvc-app <project-folder>

Example:
    create-mvc-app my-api
`);
};

const main = async () => {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
        printUsage();
        process.exit(1);
    }

    const projectFolder = args[0];

    await scaffold.run(projectFolder);
};

main().catch((err) => {
    console.error(err && err.message ? err.message : err);
    process.exit(1);
});
