/*
false implementation in accordance with IEEE Std 1003.1-2017
(https://pubs.opengroup.org/onlinepubs/9699919799/utilities/false.html)
*/

import {exit} from "process";
import {parseArgs} from "./detail/args";

async function main() {
    parseArgs(
        {},
        [],
        {
            "name": "false",
            "usage": [""],
            "description": "return with a non-zero exit code.",
            "version": "0.1.0",
        }
    );
    exit(1);
}

main();
