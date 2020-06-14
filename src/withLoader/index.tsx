import React, { useState } from 'react'
import styles from './index.module.scss'

export default function withLoader (WrappedComponent: React.FC) {
  return function (props: any) {
    const [loading, setLoading] = useState(false)

    return (
      <>
        <WrappedComponent {...props} setLoading={setLoading} />
        {loading && (
          <div className={styles.loader}>
            <img src={`${process.env.PUBLIC_URL}/images/poro.gif`} alt="poro"/>
          </div>
        )}
      </>
    )
  }
}