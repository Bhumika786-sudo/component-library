import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option',
    disabled: false,
    backgroundColor: '#5c2020',
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option',
    disabled: true,
  },
};
