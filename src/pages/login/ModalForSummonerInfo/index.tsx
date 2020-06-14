import React from 'react'
import Modal from '../../../components/Modal'
import { ISummonerInfo } from '../../../interface/summoner'

interface IModalForSummonerInfoProps {
  summonerInfo: ISummonerInfo
  profileIconSrc: string
  onHide: () => void
}

const ModalForSummonerInfo:React.FC<IModalForSummonerInfoProps> = ({ summonerInfo, profileIconSrc, onHide }) => {
  const { name, summonerLevel, profileIconId } = summonerInfo

  return (
    <Modal title="소환사 정보" onHide={onHide}>
      <p>{name}</p>
      <p>{summonerLevel}</p>
      <img src={profileIconSrc} alt={`${profileIconId}`}/>
    </Modal>
  )
}

export default ModalForSummonerInfo