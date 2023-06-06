import path from 'path';
import webpack from 'webpack';
import { BuildEng, BuildPath } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buidWebpackConfig';

export default (env: BuildEng) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const port = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        port,
        mode,
        path: paths,
        isDev,
    });

    return config;
};
