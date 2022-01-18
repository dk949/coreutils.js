/*
true implementation in accordance with IEEE Std 1003.1-2017
(https://pubs.opengroup.org/onlinepubs/9699919799/utilities/true.html)
*/
import {exit} from "process";
import {parseArgs} from "./detail/args";

async function main() {
    parseArgs(
        {},
        [],
        {
            "name": "true",
            "usage": [""],
            "description": "return with exit code zero.",
            "version": "0.1.0",
        }
    );
    exit(0);
}

main();
