import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCSSLoader } from '../build/loaders/buidCSSLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
  });

  config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCSSLoader(true));

  return config;
};
