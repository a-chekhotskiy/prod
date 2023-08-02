import { ComponentStory, ComponentMeta } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor ...',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor ...',
};
PrimaryLight.decorators = [themeDecorator(Theme.LIGHT)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor ...',
    theme: TextTheme.ERROR,
};

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor ...',
    theme: TextTheme.ERROR,
};
ErrorLight.decorators = [themeDecorator(Theme.LIGHT)];
