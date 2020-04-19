import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, createTheme } from '../../theme/src'
import CardReadme from '../README.md'

import Label from '.'

// the only reason onClick was written like this, and not just
// `onClick = action('clicked')` is due to a cleaner export in the JSX tab
const onClick = (e) => {
  action('clicked')(e)
}

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(CardReadme))
  .addWithJSX('default', () => {
    // data
    const cardTitle = text('Card Title', 'Card', 'Data')
    const cardText = text(
      'Card Text',
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    )
    const buttonText = text('Button Text', 'Click me', 'Data')

    // styling and theme
    const accent = color('Accent Color', '#9FB1BC', 'Colors')
    const bodyColor = color('Body Color', '#465775', 'Colors')
    const theme = createTheme({ colors: { bodyColor, accent } })

    return (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '0 auto', width: '300px' }}>
          <GlobalStyle />
          <Label buttonText={buttonText} onClick={onClick} title={cardTitle}>
            {cardText}
          </Label>
        </div>
      </ThemeProvider>
    )
  })
