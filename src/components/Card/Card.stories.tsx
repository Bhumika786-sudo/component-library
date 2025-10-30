import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
    title: 'Card Title',
    content:
      'This is the card content. It can contain any text or information you want to display.',
    imageUrl: 'https://via.placeholder.com/400x200',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is in a disabled state.',
    imageUrl: 'https://via.placeholder.com/400x200',
    disabled: true,
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card Without Image',
    content: 'This card does not have an image.',
    disabled: false,
  },
};
