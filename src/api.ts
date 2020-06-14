import axios from 'axios'
import { IFreeChampionIds, IChampionJson } from './interface/rotation'
import { IProfileIconJson, ISummonerInfo } from './interface/summoner'

axios.defaults.headers["X-Riot-Token"] = process.env.REACT_APP_APIKEY

axios.interceptors.response.use(
  (response) => {
    return response.data
  },

  (reject) => {
    throw reject.response.data
  }
)

const Champions = {
  getChampions: async (): Promise<IChampionJson> => await axios.get("/data/ko_KR/champion.json"),
  getChampionRotations: async (): Promise<IFreeChampionIds> => await axios.get("/lol/platform/v3/champion-rotations")
}

const Summoner = {
  getProfileIcons: async (): Promise<IProfileIconJson> => await axios.get('/data/ko_KR/profileicon.json'),
  getSummonerInfo: async (name: string): Promise<ISummonerInfo> => await axios.get(`/lol/summoner/v4/summoners/by-name/${encodeURI(name)}`)
}

export { Champions, Summoner }