export type BuildMode = "production" | "development";

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    port: number;
    mode: BuildMode;
    path: BuildPath;
    isDev: boolean;
}

export interface BuildEng {
    mode: BuildMode;
    port: number;
}
