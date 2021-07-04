import * as React from 'react'
import {screen, render, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {AuthProvider} from '../../auth-context'
import * as userClient from '../../user-client'
import App from '../../exercise/01'

const mockUser = {username: 'jackiechan', tagline: '', bio: ''}

jest.mock('../../user-client.js', () => {
  return {updatedUser: jest.fn(() => Promise.resolve())}
})

function renderApp() {
  const utils = render(
    <AuthProvider user={{user: mockUser}}>
      <App />
    </AuthProvider>,
  )

  const userDisplayPre = utils.container.querySelector('pre')

  return {
    ...utils,
    submitButton: screen.getByText(/✔/),
    resetButton: screen.getByText(/reset/i),
    taglineInput: screen.getByLabelText(/tagLine/i),
    bioInput: screen.getByLabelText(/bio/i),
    waitForLoading: () =>
      waitForElementToBeRemoved(() => screen.getByText(/\.\.\./i)),
    userDisplayPre,
    getDisplayData: () => JSON.parse(userDisplayPre.textContent),
  }
}

test('Ex 1', () => {
  const {
    submitButton,
    resetButton,
    taglineInput,
    bioInput,
    waitForLoading,
    getDisplayData,
  } = renderApp()

  expect(submitButton).toHaveAttribute('disabled')
})
