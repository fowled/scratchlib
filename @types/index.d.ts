declare module 'scratchlib' {
    export function getProfile(user: string): Promise<JSON>;
    export let parsedJSON: JSON;

    export function getStatus(): Promise<JSON>;
}