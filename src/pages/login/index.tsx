import React, { useState } from 'react'
import styles from './index.module.scss'
import { TextField } from '@material-ui/core'
import { ILoadingFunction } from '../../interface/common'
import ModalForSummonerInfo from './ModalForSummonerInfo'
import withLoader from '../../withLoader'
import { Summoner } from '../../api'

const Login: React.FC<ILoadingFunction> = ({ setLoading }) => {
  const [name, setName] = useState('')
  const [summonerInfo, setSummonerInfo] = useState({})
  const [profileIconSrc, setProfileIconSrc] = useState('')
  const [visible, setVisible] = useState(false)

  const getSummonerInfo = async (e: { preventDefault: () => void }) => {
    try {
      setLoading(true)
      e.preventDefault()
      const summonerInfo = await Summoner.getSummonerInfo(name)
      setSummonerInfo(summonerInfo)
      setProfileIconSrc(
        `http://ddragon.leagueoflegends.com/cdn/${process.env.REACT_APP_VERSION}/img/profileicon/${summonerInfo.profileIconId}.png`,
      )

      setVisible(true)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} autoComplete="off" onSubmit={getSummonerInfo}>
        <img src={`${process.env.PUBLIC_URL}/images/lol_logo.png`} alt="league of legends" />
        <TextField
          label="롤 닉네임"
          id="id"
          name="id"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </form>

      <ModalForSummonerInfo
        visible={visible}
        summonerInfo={summonerInfo}
        profileIconSrc={profileIconSrc}
        onClose={() => setVisible(false)}
      />
    </div>
  )
}

// @ts-ignore
export default withLoader(Login)
