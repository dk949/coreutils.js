/*
  MIT License

  Copyright (c) 2022, dk949.
*/

/*
rm implementation according to IEEE Std 1003.1-2017
(https://pubs.opengroup.org/onlinepubs/9699919799/utilities/rm.html)
*/

import {Flags, parseArgs} from "./detail/args";
import {diagnostic, /*die,*/ boolPrompt, closeReadln, openReadln} from "./detail/io";
import fs from "fs";
import path from "path";

// For each file the following steps shall be taken:
async function rm(flags: Flags, file: string): Promise<void> {
    // If either of the files dot or dot-dot are specified as the basename portion of an operand or if an operand resolves to the root directory,
    // rm shall write a diagnostic message to standard error and do nothing more with such operands.
    switch (file) {case ".": case "..": case "/": return diagnostic(`cannot remove ${file}`);}

    // 1. If the file does not exist:
    if (!fs.existsSync(file) /*&& !stat.isSymbolicLink()*/) {
        //If the -f option is not specified, rm shall write a diagnostic message to standard error.
        if (!flags['f']) {
            diagnostic(`file '${file}' does not exist. skipping it`);
        }
        // Go on to any remaining files.
        return;
    }

    const stat = fs.lstatSync(file);

    // 2. If file is of type directory, the following steps shall be taken:
    if (stat.isDirectory()) {
        // a. If neither the -R option nor the -r option is specified, rm shall write a diagnostic message to standard error, do nothing more with file, and go on to any remaining files.
        if (!flags['r']) {
            diagnostic(`${file} is a directory. skipping it`);
            return;
        }
        const dir = fs.readdirSync(file);

        // b. If file is an empty directory, rm may skip to step 2d.
        if (dir.length) {
            // If the -f option is not specified,
            if (!flags['f'] &&
                // and either the permissions of file do not permit writing and the standard input is a terminal or the -i option is specified,
                ((!(stat.mode & 0o200) /*&& is stdin temrinal?*/) || flags['i'])) {
                // rm shall write a prompt to standard error and read a line from the standard input.
                if (!await boolPrompt(`remove file ${file}?`)) {
                    // If the response is not affirmative, rm shall do nothing more with the current file and go on to any remaining files.
                    return;
                }
            }
            // c. For each entry contained in file, other than dot or dot-dot, the four steps listed here (1 to 4) shall be taken with the entry as if it were a file operand.
            dir.forEach(subFile => rm(flags, path.join(file, subFile)));
        }

        // d. If the -i option is specified, rm shall write a prompt to standard error and read a line from the standard input.
        if (flags['i'] && !await boolPrompt(`remove file ${file}?`)) {
            //  If the response is not affirmative, rm shall do nothing more with the current file, and go on to any remaining files.
            return;
        }
    }

    // 3. If file is not of type directory,
    if (!stat.isDirectory() &&
        // the -f option is not specified,
        !flags['f'] &&
        // and either the permissions of file do not permit writing and the standard input is a terminal or the -i option is specified,
        ((!(stat.mode & 0o200) /*&& is stdin temrinal?*/) || flags['i'])
    ) {
        // rm shall write a prompt to the standard error and read a line from the standard input.
        if (!await boolPrompt(`remove file ${file}?`)) {
            // If the response is not affirmative, rm shall do nothing more with the current file and go on to any remaining files.
            return;
        }

    }

    // 4. If the current file is a directory,
    if (stat.isDirectory()) {
        //rm shall perform actions equivalent to the rmdir() ... [see System Interfaces volume of POSIX.1-2017]
        fs.rmdirSync(file);
        return;
    }

    // If the current file is not a directory, rm shall perform actions equivalent to the unlink() ... [see the System Interfaces volume of POSIX.1-2017]
    fs.unlinkSync(file);
}


async function main() {
    const [args, flags] = parseArgs(
        {
            "f": false,
            "i": false,
            "r": false,
        },
        [{
            same: ['r', 'R'],
            exclusive: ['f', 'i']
        }],
        {
            "name": "rm",
            "usage": ["[-iRr] file...", "-f [-iRr] [file...]"],
            "description": "remove directory entries",
            "version": "0.1.0",
        }
    );

    openReadln();

    for (const file of args) {
        await rm(flags, file);
    }
    closeReadln();
}

main();
