import React, { useEffect, useState } from 'react'
import { getChampionRotations, getChampions } from './api'
import { IFreeChampionIds, IChampionObject, IChampion } from './interface/rotation'
import { Card, Col, Layout, Row, Typography } from 'antd'

function App() {
  const [rotationChampions, setRotationChampions] = useState<Array<IChampion>>([]);

  const setChampionRotation = async ():Promise<void> => {
    try {
      const champions = await getChampions()

      const { freeChampionIds }:IFreeChampionIds = await getChampionRotations()
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

  const { Header, Content, Footer } = Layout

  return (
    <Layout>
      <Header>LEARCH</Header>
      <Content>
        <Typography.Title level={2}>챔피언 로테이션</Typography.Title>

        <Row gutter={[16, 16]} justify="center">
          {rotationChampions.map(champion => <Col key={champion.key} span={7}>
            <Card
              hoverable
              cover={<img src={`http://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/${champion.id}.png`} alt={champion.name}/>}
            >
              <Card.Meta title={champion.name} description={champion.title}/>
            </Card>
          </Col>)}
        </Row>
      </Content>
      <Footer>learch by cok2exe</Footer>
    </Layout>
  )
}

export default App

