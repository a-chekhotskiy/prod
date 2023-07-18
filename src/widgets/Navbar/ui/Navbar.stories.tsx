import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

export default {
  title: 'widgets/PageError',
  component: Navbar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
