import type {
  Meta, StoryObj,
} from '@nuxtjs/storybook';
import MainButton from './main-button.vue';

const meta = {
  title: 'Buttons/MainButton',
  component: MainButton,
  tags: ['autodocs'],
} satisfies Meta<typeof MainButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
