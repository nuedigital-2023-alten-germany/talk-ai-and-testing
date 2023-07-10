export function add(first: number, second: number): number {
    if (first > 10 || second > 10) {
        throw new Error('Parameters too big');
    }
    return first + second;
}
