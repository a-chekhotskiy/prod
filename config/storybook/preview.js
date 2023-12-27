import { addDecorator } from '@storybook/react';
import { styleDecorator, themeDecorator, routerDecorator, storeDecorator } from '../../src/shared/config/storybook';
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
