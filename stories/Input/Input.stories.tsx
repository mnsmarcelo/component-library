import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    render: () => (
      <Input
        type="text"
        name="file"
        label="Label"
      />
    )
};

export const WithError: Story = {
    render: () => (
      <Input
        type="text"
        name="file"
        label="Label"
        error={{
            message: 'Input with error',
        }}
      />
    )
};
