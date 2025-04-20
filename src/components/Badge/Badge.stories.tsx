import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import { BadgeVariant } from './Badge.types';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error'] as BadgeVariant[],
    },
    label: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Badge component used to display labels or status indicators.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: 'Primary Badge',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Badge',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Badge',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Badge',
    variant: 'error',
  },
};
