import {argv} from "process";
import {die, internalError} from './io';
import {icomb} from './misc';
export interface Flags {[key: string]: boolean};

export interface ArgRule {
    same: string[],
    exclusive: string[]
}

export type ArgRules = ArgRule[];

export interface ArgsInfo {
    "name": string,
    "usage"?: string[],
    "description"?: string,
    "version"?: string,
}


function usage(info: ArgsInfo): string {
    let out: string[] = [];
    if (info.description) {
        out.push(info.description);
    }
    if (info.usage) {
        info.usage.forEach(use => {
            out.push(`${info.name} ${use}`);
        });
    }
    out.push(`${info.name} -h -v`)
    return out.join("\n\n");
}



export const parseArgs = (flags: Flags, rules: ArgRules, info: ArgsInfo): [string[], Flags] =>
    [argv
        .slice(2)
        .filter(arg => {
            if (!arg.startsWith('-') || arg.length === 1) return true;
            arg
                .slice(1)
                .split('')
                .forEach(flag => {
                    if (flag === 'h') die(0, usage(info));
                    if (flag === 'v') die(0, info.version ? info.version : "version unknown");
                    if (!(flag in flags)) {
                        rules
                            .map(rule => {
                                if (rule.same.includes(flag)) {
                                    flag = rule.same.filter(f => f in flags)[0] || internalError("flag alias not found in flag list");
                                    return true;
                                }
                                return false;
                            })
                            .some(icomb) || die(1, `Unrecognised argumet -${flag}`);
                    }
                    rules.forEach(rule => {
                        if (rule.exclusive.includes(flag)) {
                            rule.exclusive.forEach(f => {
                                (f in flags) || internalError("exclusive flag not found in flag list");
                                flags[f] = false
                            });
                        }
                    });
                    flags[flag] = true;
                })
            return false;
        }), flags];
