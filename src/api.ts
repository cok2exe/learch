import axios from 'axios'
import { IFreeChampionIds, IChampionJson } from './interface/rotation'

axios.defaults.headers["X-Riot-Token"] = process.env.REACT_APP_APIKEY

axios.interceptors.response.use(
  (response) => {
    return response.data
  },

  (reject) => {
    throw reject.response.data
  }
)

export const getChampions:() => Promise<IChampionJson> = async () => await axios.get("/data/ko_KR/champion.json")

export const getChampionRotations = async (): Promise<IFreeChampionIds> => await axios.get("/lol/platform/v3/champion-rotations")
