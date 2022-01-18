import {stdout, stderr, stdin} from 'process';
import {createInterface, Interface} from 'readline';


let readln: {tty: Interface, notty: Interface};
export function openReadln() {
    readln = {
        tty: createInterface(stdin, stderr, undefined, false),
        notty: createInterface(stdin, stderr, undefined, true),
    };

}

export function internalError(s: string): never {
    stderr.write(`INTERNAL ERROR: ${s}\n`);
    closeReadln();
    process.exit(-1);
}

export function die(code: number, msg: string): never {
    stderr.write(`${msg}\n`);
    closeReadln();
    process.exit(code);
}

export function diagnostic(msg: string) {
    stderr.write(`${msg}\n`);
}

export function message(msg: string) {
    stdout.write(`${msg}\n`);
}

export async function boolPrompt(msg: string, def: boolean = false): Promise<boolean> {
    return new Promise((res, rej) => {
        try {
            readln.tty.question(`${msg} ${def ? "(Y/n)" : "(y/N)"}\n`, (input: string) => {
                res(input
                    .slice(0, 1)
                    .toLowerCase() === (def ? 'n' : 'y'));
            });
        } catch (e) {
            rej(e);
        }
    });
}


export async function readNoTTY(): Promise<string> {
    let chunks: Buffer[] = [];
    for await (const chunk of stdin) {
        chunks.push(chunk);
    }
    return chunks.map(chunk => chunk.toString()).join('');
}

export async function closeReadln() {
    Object.values(readln).forEach(r => r.close());
}
