// Type definitions for scratchlib
// Project: scratchlib
// Definitions by: Ma15fo43 https://mazz.fun

declare module "scratchlib" {
    export function getStatus(): string;
    export function getProfile(user: string): JSON;

    export class Scratcher {
        username: string;
        id: string;
        scratchteam: boolean;
        joined: Date;
        images: string[];
        status: string;
        bio: string;
        country: string
    }
}
