import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

export default {
  title: 'InputCustom',
  component: InputCustom
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ margin: '12.5rem 5rem' }}>
    <InputCustom {...args} />
  </div>
)

export const DefaultMax: Story<InputProps> = (args) => (
  <div style={{ margin: '13rem 5rem', display: 'flex' }}>
    <InputCustom {...args} />
    <InputCustom {...args} />
    <InputCustom {...args} />
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

DefaultMax.parameters = {
  backgrounds: {
    values: [
      { name: 'input', value: '#000000' },
      { name: 'inputLight', value: '#fafafa' }
    ],
    default: 'input'
  },
  layout: 'fullscreen'
}

Default.args = {
  list: [
    {
      name: 'Brasil',
      // icon: '/img/flags/brasil.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png',
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      // icon: '/img/flags/emirate.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/800px-Flag_of_the_United_Arab_Emirates.svg.png',
      code: '971',
      mask: '999 999 9999'
    },
    {
      name: 'United Kingdom',
      // icon: '/img/flags/kingdom.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png?20190917170937',
      code: '44',
      mask: '99999 999999'
    },
    {
      name: 'United State',
      // icon: '/img/flags/states.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041',
      code: '1',
      mask: '(999) 999-9999'
    }
  ]
}

DefaultMax.args = {
  list: [
    {
      name: 'Brasil',
      // icon: '/img/flags/brasil.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png',
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      // icon: '/img/flags/emirate.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/800px-Flag_of_the_United_Arab_Emirates.svg.png',
      code: '971',
      mask: '999 999 9999'
    },
    {
      name: 'United Kingdom',
      // icon: '/img/flags/kingdom.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png?20190917170937',
      code: '44',
      mask: '99999 999999'
    },
    {
      name: 'United State',
      // icon: '/img/flags/states.png',
      icon:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041',
      code: '1',
      mask: '(999) 999-9999'
    }
  ]
}
