import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../exercise/02'

test('Ex: 2', () => {
  const container = render(<App />)

  const toggle = screen.getByLabelText(/toggle/i)

  // expect(screen.getByText(/the button is/i)).toHaveTextContent(/^*is off$/i)
})
