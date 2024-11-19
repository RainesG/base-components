import { Meta, StoryObj } from '@storybook/react/*'
import { BulletScreenType } from '.'
import { BulletScreen as BulletScreenComp } from '.'

const meta = {
  title: 'BulletScreen',
  component: BulletScreenComp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  args: {},
  tags: ['autodocs']
} satisfies Meta<BulletScreenType>

export default meta

type Story = StoryObj<typeof meta>

export const BulletScreen: Story = {
  args: {
    bullets: [
      { avatar: '', text: 'aaaaaa' },
      { avatar: '', text: 'Culpa do sit culpa cupidatat.' },
      { avatar: '', text: 'Ex pariatur.' },
      { avatar: '', text: 'Esse amet aliquip est reprehenderit.' },
      {
        avatar: '',
        text: 'Elit proident dolor laboris excepteur do eu amet non.'
      },
      {
        avatar: '',
        text: 'Aliquip voluptate do laborum sunt ullamco ex aute aute esse reprehenderit ullamco eu sit laborum.'
      },
      {
        avatar: '',
        text: 'Laboris aliqua veniam est ullamco sunt nostrud sunt Lorem adipisicing.'
      },
      {
        avatar: '',
        text: 'Minim consectetur ea excepteur ipsum proident nisi sint excepteur eiusmod anim veniam est sunt fugiat.'
      },
      {
        avatar: '',
        text: 'Dolor veniam sit tempor in est ad eu enim officia velit.'
      }
    ]
  }
}
