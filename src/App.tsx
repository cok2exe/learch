import React, { useEffect, useState } from 'react'
import { Champions } from './api'
import { IFreeChampionIds, IChampionObject, IChampion } from './interface/rotation'

const App:React.FC = () => {
  const [rotationChampions, setRotationChampions] = useState<Array<IChampion>>([]);

  const setChampionRotation = async ():Promise<void> => {
    try {
      const champions = await Champions.getChampions()

      const { freeChampionIds }:IFreeChampionIds = await Champions.getChampionRotations()
      let championObject:IChampionObject = {}
      const championData = champions.data
      for (let key in championData) {
        if (championData.hasOwnProperty(key)) {
          const champion = championData[key]
          championObject[champion.key] = champion
        }
      }

      const _rotationChampions:Array<IChampion> = []
      freeChampionIds.forEach((freeId:number) => {  // 15
        _rotationChampions.push(championObject[freeId])
      });
      setRotationChampions(_rotationChampions)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    setChampionRotation()
  }, [])

  return (
    <div>
      <h1>LEARCH</h1>
      <div>
        <h2>챔피언 로테이션</h2>

        <div>
          {rotationChampions.map(champion => <div key={champion.key}>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/${champion.id}.png`} alt={champion.name}/>
              <h3 title={champion.name}>{champion.name}</h3>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default App

