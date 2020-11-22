import { Dispatch } from 'react'

export interface ILoadingFunction {
  setLoading: Dispatch<boolean>
}

export enum ETheme {
  dark = 'dark',
  light = 'light',
}
