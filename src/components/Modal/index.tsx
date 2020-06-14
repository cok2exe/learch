import React, { ReactNode } from 'react'
import styles from './index.module.scss'

interface IModalProps {
  children?: ReactNode
  title: string
  onHide: () => void
}

const Modal:React.FC<IModalProps> = ({ children, title, onHide }) => {
  return (
    <>
      <div className={styles.modalDim} />
      <div className={styles.modal}>
        <div className={styles.modalDialog}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={onHide}>X</button>

            <h4>{title}</h4>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal