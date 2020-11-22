import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { ILoadingFunction } from '../../interface/common'
import ModalForSummonerInfo from './ModalForSummonerInfo'
import withLoader from '../../withLoader'
import { Summoner } from '../../api'
import styled from 'styled-components'
import { flex } from '../../styles/values'

const StyledLogin = styled.div`
  ${flex};
  min-height: 100vh;
`
const StyledForm = styled.form`
  max-width: 500px;
`

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
    <StyledLogin>
      <StyledForm autoComplete="off" onSubmit={getSummonerInfo}>
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
      </StyledForm>

      <ModalForSummonerInfo
        visible={visible}
        summonerInfo={summonerInfo}
        profileIconSrc={profileIconSrc}
        onClose={() => setVisible(false)}
      />
    </StyledLogin>
  )
}

// @ts-ignore
export default withLoader(Login)
