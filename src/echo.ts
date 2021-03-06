/*
  MIT License

  Copyright (c) 2022, dk949.
*/

/*
echo implementation according to IEEE Std 1003.1-2017
(https://pubs.opengroup.org/onlinepubs/9699919799/utilities/echo.html)
*/

import {parseArgs} from "./detail/args";
import {message} from "./detail/io";

async function main() {

    const [args, _] = parseArgs(
        {},
        [],
        {
            "name": "echo",
            "usage": ["[string...]"],
            "description": "write arguments to standard output",
            "version": "0.1.0",
        }
    );
    message(args.join(" "));
}

main();
