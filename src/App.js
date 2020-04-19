import React, {useEffect} from 'react'
import {getChampions} from './api'
import { Container, Typography } from '@material-ui/core'

function App() {
  useEffect(() => {
    ;(async () => {
      const champions = await getChampions()

      console.log(champions)
    })()
  }, [])

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center">챔피언 로테이션</Typography>
    </Container>
  )
}

export default App
