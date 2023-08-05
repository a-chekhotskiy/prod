export type BuildMode = 'production' | 'development';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    port: number;
    mode: BuildMode;
    path: BuildPath;
    isDev: boolean;
    apiUrl: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}
