import axios, { AxiosResponse } from "axios"
import { IChampionRotationIds } from "./interface/rotation";

axios.defaults.headers["X-Riot-Token"] = process.env.REACT_APP_APIKEY;

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (reject) => {
    throw reject.response.data;
  }
)

export const getChampions = async () => await axios.get("/data/ko_KR/champion.json");

export const getChampionRotations = async ():Promise<AxiosResponse> => await axios.get("/lol/platform/v3/champion-rotations")
