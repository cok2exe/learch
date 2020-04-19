import React, {useEffect, useState} from 'react'
import {getChampionRotations, getChampions} from './api'
import { Container, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core'

function App() {
  const [rotationChampions, setRotationChampions] = useState([])

  useEffect(() => {
    ;(async () => {
      const champions = await getChampions()

      const { freeChampionIds } = await getChampionRotations()
      let championObject = {}
      const championData = champions.data
      for (let key in championData) {
        if (championData.hasOwnProperty(key)) {
          const champion = championData[key]
          championObject[champion.key] = champion
        }
      }

      const _rotationChampions = []
      freeChampionIds.forEach(freeId => {  // 15
        _rotationChampions.push(championObject[freeId])
      })
      setRotationChampions(_rotationChampions)
    })()
  }, [])

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center">챔피언 로테이션</Typography>
      <GridList cols={5}>
        {rotationChampions.map(champion => <GridListTile key={champion.key}>
          <img src={`http://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/${champion.id}.png`} alt={champion.id} />
          <GridListTileBar title={champion.name} />
        </GridListTile>)}
      </GridList>
    </Container>
  )
}

export default App

