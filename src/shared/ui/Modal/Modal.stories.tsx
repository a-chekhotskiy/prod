import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: { open: true },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Modal text',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Modal text',
};
PrimaryLight.decorators = [themeDecorator(Theme.LIGHT)];
