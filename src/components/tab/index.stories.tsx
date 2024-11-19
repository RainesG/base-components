import { Meta, StoryObj } from '@storybook/react/*'
import { Tab as TabComp } from '.'

const meta = {
  title: 'Tab',
  component: TabComp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  args: {},
  tags: ['autodocs']
} satisfies Meta<typeof TabComp>

export default meta

type Story = StoryObj<typeof meta>

export const Tab: Story = { args: { tabList: ['tab1', 'tab2', 'tab3'] } }
