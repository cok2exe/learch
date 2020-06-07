export interface IFreeChampionIds {
  freeChampionIds: Array<number>
}

export interface IChampionJson {
  data: IChampionObject
  format: string
  type: string
  version: string
}

export interface IChampionObject {
  [key: string]: IChampion
}

export interface IChampion {
  blurb: string
  id: string
  image: IChampionImage
  info: IChampionInfo
  key: string
  name: string
  partype: string
  stats: IChampionStats
  tags: Array<string>
  title: string
  version: string
}

export interface IChampionImage {
  full: string
  group: string
  h: number
  sprite: string
  w: number
  x: number
  y: number
}

export interface IChampionInfo {
  attack: number
  defense: number
  difficulty: number
  magic: number
}

export interface IChampionStats {
  armor: number
  armorperlevel: number
  attackdamage: number
  attackdamageperlevel: number
  attackrange: number
  attackspeed: number
  attackspeedperlevel: number
  crit: number
  critperlevel: number
  hp: number
  hpperlevel: number
  hpregen: number
  hpregenperlevel: number
  movespeed: number
  mp: number
  mpperlevel: number
  mpregen: number
  mpregenperlevel: number
  spellblock: number
  spellblockperlevel: number
}