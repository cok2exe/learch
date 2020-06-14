export interface ISummonerInfo {
  id?: string
  accountId?: string
  puuid?: string
  name?: string
  profileIconId?: number
  revisionDate?: number
  summonerLevel?: number
}

export interface IProfileIconJson {
  type: string
  version: string
  data: IProfileIconObject
}

export interface IProfileIconObject {
  [key: number]: IProfileIcon
}

export interface IProfileIcon {
  id: string
  image: IImage
}

export interface IImage {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}