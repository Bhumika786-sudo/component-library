import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    headerBackgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
    rows: [
      ['John Doe', '30', 'New York'],
      ['Jane Smith', '25', 'Los Angeles'],
      ['Bob Johnson', '35', 'Chicago'],
    ],
    footer: ['Total', '3', ''],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ['Product', 'Price', 'Stock'],
    rows: [
      ['Laptop', '$999', '5'],
      ['Mouse', '$25', '50'],
    ],
    disabled: true,
  },
};
