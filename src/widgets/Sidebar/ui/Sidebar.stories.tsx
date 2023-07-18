import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [themeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
