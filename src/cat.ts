/*
cat implementation in accordance with IEEE Std 1003.1-2017
(https://pubs.opengroup.org/onlinepubs/9699919799/utilities/cat.html)
*/
import {readFileSync} from "fs";
import {stdin, stdout} from "process";
import {parseArgs} from "./detail/args";
import {closeReadln, readNoTTY} from "./detail/io";

async function main() {

    const [args, _] = parseArgs(
        {
            "u": false,
        },
        [],
        {
            "name": "cat",
            "usage": ["cat [-u] [file...]"],
            "description": "concatenate and print files",
            "version": "0.1.0",
        }
    );
    // If no file operands are specified, the standard input shall be used.
    if (!args.length) {
        stdin.pipe(stdout)
    }


    for await (const file of args) {
        //If a file is '-', the cat utility shall read from the standard input at that point in the sequence.
        if (file === '-') {
            stdin.unpipe(stdout);
            await readNoTTY();
            continue;
        }
        stdout.write(readFileSync(file));
    }
    closeReadln();
}

main();
