import React from 'react'
import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core'
import { ISummonerInfo } from '../../../interface/summoner'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface IModalForSummonerInfoProps {
  visible: boolean
  summonerInfo: ISummonerInfo
  profileIconSrc: string
  onClose: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }),
)
const ModalForSummonerInfo: React.FC<IModalForSummonerInfoProps> = ({
  visible,
  summonerInfo,
  profileIconSrc,
  onClose,
}) => {
  const { name, summonerLevel } = summonerInfo
  const classes = useStyles()

  return (
    <Dialog open={visible} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>소환사 정보</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Badge color="secondary" badgeContent={summonerLevel} max={9999}>
              <Avatar className={classes.large} variant="square" src={profileIconSrc} />
            </Badge>
          </Grid>
          <Grid item>
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" disableElevation>
          LEARCH!
        </Button>
        <Button onClick={onClose} variant="contained" disableElevation>
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalForSummonerInfo
