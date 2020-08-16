declare module 'scratchlib' {
    export function getProfile(user: string): Promise<any>;
    export let parsedJSON: JSON;
}