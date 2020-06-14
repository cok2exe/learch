import React from 'react'
import FormForLogin from './FormForLogin'
import styles from './index.module.scss'

const Login:React.FC = () => {
  return (
    <div className={styles.login}>
      <FormForLogin />
    </div>
  )
}

export default Login