import {stderr, stdin} from 'process';

export function internalError(s: string): never {
    stderr.write(`INTERNAL ERROR: ${s}\n`);
    process.exit(-1);
}


export function die(code: number, msg: string): never {
    stderr.write(`${msg}\n`);
    process.exit(code);
}

export function diagnostic(msg: string) {
    stderr.write(`${msg}\n`);
}

export async function boolPrompt(msg: string, def: boolean = false): Promise<boolean> {
    stderr.write(`${msg} ${def ? "(Y/n)" : "(y/N)"}\n`);
    return (await readStdin())
        .slice(0, 1)
        .toLowerCase() === (def ? 'n' : 'y');
}

async function readStdin(): Promise<string> {
    for await (const chunk of stdin) {
        return (chunk as Buffer)
            .toString()
            .trim();
    }
    internalError("failed reading stdin");
}
