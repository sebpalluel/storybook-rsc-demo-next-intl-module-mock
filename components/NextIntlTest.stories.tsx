import { Meta, StoryObj } from '@storybook/react';

import { NextIntlTest } from './NextIntlTest';

const meta = {
  component: NextIntlTest,
} satisfies Meta<typeof NextIntlTest>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};