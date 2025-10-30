import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Placeholder Image',
    width: '300px',
    height: '200px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Disabled Image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200',
    alt: 'Rounded Image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
};
