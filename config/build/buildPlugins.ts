import { BuildOptions } from "./types/config";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(
    options: BuildOptions
): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: options.path.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[id].[contenthash:8].css",
        }),
    ];
}
