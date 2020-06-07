import React, { useEffect, useState } from 'react'
import { getChampionRotations, getChampions } from './api'
import {IChampionRotationIds, IDynamicObject} from "./interface/rotation";

function App() {
  const [rotationChampions, setRotationChampions] = useState<Array<any>>([]);

  const setChampionRotation = async ():Promise<void> => {
    try {
      const champions = await getChampions();

      const { freeChampionIds }:IChampionRotationIds = await getChampionRotations();
      let championObject:IDynamicObject = {};
      const championData = champions.data;
      for (let key in championData) {
        if (championData.hasOwnProperty(key)) {
          const champion = championData[key];
          championObject[champion.key] = champion
        }
      }

      const _rotationChampions:Array<any> = [];
      freeChampionIds.forEach((freeId:number) => {  // 15
        _rotationChampions.push(championObject[freeId]);
      });
      setRotationChampions(_rotationChampions)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    ;(async () => {
      await setChampionRotation();
    })()
  }, []);

  return (
    <div className="container">
      <h4>챔피언 로테이션</h4>
      <div>
        {rotationChampions.map(champion => <div key={champion.key}>
          <img src={`http://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/${champion.id}.png`} alt={champion.id} />
          <span title={champion.name} />
        </div>)}
      </div>
    </div>
  )
}

export default App

