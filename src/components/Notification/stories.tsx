import { Story, Meta } from '@storybook/react/types-6-0'
import Notification from '.'

export default {
  title: 'Notification',
  component: Notification
} as Meta

export const Default: Story = (args) => (
  <div style={{ marginTop: 150 }}>
    <Notification {...args} />
  </div>
)

Default.parameters = {
  backgrounds: {
    values: [
      { name: 'input', value: '#000000' },
      { name: 'inputLight', value: '#fafafa' }
    ],
    default: 'input'
  },
  layout: 'fullscreen'
}
