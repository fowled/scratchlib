// Type definitions for scratchlib module
// Project: ScratchLib-core
// Definitions by: mazzlabs - https://mazz.fun

declare module 'scratchlib' {
    export function getFeatured(proxy?: string): Promise<JSON>;
    export function getNews(proxy?: string): Promise<JSON>;
    export function getProfile(user: string, proxy?: string): Promise<JSON>;
    export function getProject(id: string, proxy?: string): Promise<JSON>;
    export function getProjectsCount(proxy?: string): Promise<JSON>;
    export function getRoot(proxy?: string): Promise<JSON>;
    export function getStatus(proxy?: string): Promise<JSON>;
    export function getUserFavorites(user: string, proxy?: string): Promise<JSON>;
    export function getUserFollowers(user: string, proxy?: string): Promise<JSON>;
    export function getUserFollowing(user: string, proxy?: string): Promise<JSON>;
    export function getUserMessages(user: string, proxy?: string): Promise<JSON>;
    export function getUserProjects(user: string, proxy?: string): Promise<JSON>;
}