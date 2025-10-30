import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
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
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero Image',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing content',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Disabled Hero',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    disabled: true,
  },
};
