import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme) => (story: () => any) => <div className={`app ${theme}`}>{story()}</div>;
