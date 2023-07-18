import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './Main';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

export default {
  title: 'Pages/Main',
  component: Main,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const DefaultDark = Template.bind({});
DefaultDark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [themeDecorator(Theme.LIGHT)];
