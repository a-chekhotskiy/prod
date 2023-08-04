import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storeDecorator, themeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import AuthForm from './AuthForm';

export default {
    title: 'feature/AuthForm',
    component: AuthForm,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    storeDecorator({
        login: {
            username: '',
            password: '',
            isLoading: false,
        },
    }),
];

export const DefaulLight = Template.bind({});
Default.args = {};
Default.decorators = [
    storeDecorator({
        login: {
            username: '',
            password: '',
            isLoading: false,
        },
    }),
    themeDecorator(Theme.LIGHT),
];

export const DefaultDisabled = Template.bind({});
Default.args = {};
Default.decorators = [
    storeDecorator({
        login: {
            username: '',
            password: '',
            isLoading: true,
        },
    }),
];

export const DefaultDisabledLight = Template.bind({});
Default.args = {};
Default.decorators = [
    storeDecorator({
        login: {
            username: '',
            password: '',
            isLoading: true,
        },
    }),
    themeDecorator(Theme.LIGHT),
];
