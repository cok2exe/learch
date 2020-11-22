import React, { useState } from 'react'
import styles from './index.module.scss'
import { Summoner } from '../../../api'
import withLoader from '../../../withLoader'
import { ILoadingFunction } from '../../../interface/common'
import ModalForSummonerInfo from '../ModalForSummonerInfo'
import { TextField } from '@material-ui/core'

const FormForLogin: React.FC<ILoadingFunction> = ({ setLoading }) => {
  const [name, setName] = useState('')
  const [summonerInfo, setSummonerInfo] = useState({})
  const [profileIconSrc, setProfileIconSrc] = useState('')
  const [visibleModal, setVisibleModal] = useState(false)

  const getSummonerInfo = async (e: { preventDefault: () => void }) => {
    try {
      setLoading(true)
      e.preventDefault()
      const summonerInfo = await Summoner.getSummonerInfo(name)
      setSummonerInfo(summonerInfo)
      setProfileIconSrc(
        `http://ddragon.leagueoflegends.com/cdn/${process.env.REACT_APP_VERSION}/img/profileicon/${summonerInfo.profileIconId}.png`,
      )

      setVisibleModal(true)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
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

      {visibleModal && (
        <ModalForSummonerInfo
          summonerInfo={summonerInfo}
          profileIconSrc={profileIconSrc}
          onHide={() => setVisibleModal(false)}
        />
      )}
    </>
  )
}

// @ts-ignore
export default withLoader(FormForLogin)
