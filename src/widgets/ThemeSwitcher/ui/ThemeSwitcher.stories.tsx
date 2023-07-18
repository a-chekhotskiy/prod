import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const DefaultDark = Template.bind({});
DefaultDark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [themeDecorator(Theme.LIGHT)];
