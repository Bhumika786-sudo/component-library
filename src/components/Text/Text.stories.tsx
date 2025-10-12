import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold', 'lighter'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is some text',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This is disabled text',
    disabled: true,
  },
};

export const Bold: Story = {
  args: {
    content: 'This is bold text',
    fontWeight: 'bold',
  },
};