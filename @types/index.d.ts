// Type definitions for scratchlib module
// Project: ScratchLib-core
// Definitions by: mazzlabs - https://mazz.fun

declare module 'scratchlib' {
    export function getFeatured(): Promise<JSON>;
    export function getNews(): Promise<JSON>;
    export function getProfile(user: string): Promise<JSON>;
    export function getProject(id: string): Promise<JSON>;
    export function getProjectsCount(): Promise<JSON>;
    export function getRoot(): Promise<JSON>;
    export function getStatus(): Promise<JSON>;
    export function getUserActivity(user: string): Promise<JSON>;
    export function getUserFavorites(user: string): Promise<JSON>;
    export function getUserFollowers(user: string): Promise<JSON>;
    export function getUserFollowing(user: string): Promise<JSON>;
    export function getUserMessages(user: string): Promise<JSON>;
    export function getUserProjects(user: string): Promise<JSON>;
}