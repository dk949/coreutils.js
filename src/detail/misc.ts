export const scomb = <T, U, V>(x: (a: T, b: U) => V, y: (a: T) => U, z: T): V => x(z, y(z));
export const kcomb = <T, U>(x: T, _: U): T => x;
export const icomb = <T>(x: T): T => x;
