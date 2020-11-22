import React, { useState } from 'react'
import Routes from './Routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import { ETheme } from './interface/common'

const App: React.FC = () => {
  const [type, setType] = useState<ETheme>(ETheme.dark)

  const theme = createMuiTheme({
    palette: {
      // Switching the dark mode on is a single property value change.
      type,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout type={type} setType={setType}>
        <Routes />
      </Layout>
    </ThemeProvider>
  )
}

export default App
