import React from 'react';
import { Meta, StoryObj ,ComponentMeta } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    render: () => <Button label="Button" primary={true}/>
}

export const Secondary: Story = {
    render: () => <Button label="Button" />
}

export const Small: Story = {
    render: () => <Button label="Button" size="small" />
}

export const Medium: Story = {
    render: () => <Button label="Button" size="medium" />
}

export const Large: Story = {
    render: () => <Button label="Button" size="large" />
}
