import React, { Dispatch } from 'react'
import { AppBar, Container, Switch, Toolbar, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ETheme } from '../../interface/common'

interface ILayout {
  children: JSX.Element
  type: ETheme
  setType: Dispatch<ETheme>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
    },
  }),
)

const Layout: React.FC<ILayout> = ({ children, type, setType }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography>LEARCH</Typography>
          <Switch
            checked={type === ETheme.dark}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setType(e.target.checked ? ETheme.dark : ETheme.light)
            }
          />
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
