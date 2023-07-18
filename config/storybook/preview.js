import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.DARK));
addDecorator(routerDecorator);
