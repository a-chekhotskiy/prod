import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: "babel-loader",
    //         options: {
    //             presets: [["@babel/preset-env", { targets: "defaults" }]],
    //         },
    //     },
    // };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    // Если не использую ts, то нужен babel-loader для работы с jsx
    // в этом случае ts-loader обрабатывает и jsx тоже
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // const reactRefreshPlugin = {
    //     test: /\.[jt]sx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: require.resolve("babel-loader"),
    //             options: {
    //                 plugins: [
    //                     isDev && require.resolve("react-refresh/babel"),
    //                 ].filter(Boolean),
    //             },
    //         },
    //     ],
    // };

    return [cssLoader, typescriptLoader, svgLoader, fileLoader];
}
