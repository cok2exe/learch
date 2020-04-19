import axios from "axios"

axios.defaults.headers["X-Riot-Token"] = process.env.REACT_APP_APIKEY

axios.interceptors.response.use(
  (response) => {
    return response.data
  },

  (reject) => {
    throw reject.response.data
  }
)

export const getChampions = async () => await axios.get("/data/ko_KR/champion.json")
