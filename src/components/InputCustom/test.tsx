import { render, screen } from '@testing-library/react'

import InputCustom from '.'

describe('<InputCustom />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputCustom />)

    expect(
      screen.getByRole('heading', { name: /InputCustom/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
