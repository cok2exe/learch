import React, { useState } from 'react'
import styled from 'styled-components'
import { flex } from '../styles/values'

const PoroLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  ${flex};
  z-index: 999;
`

export default function withLoader (WrappedComponent: React.FC) {
  return function (props: any) {
    const [loading, setLoading] = useState(false)

    return (
      <>
        <WrappedComponent {...props} setLoading={setLoading} />
        {loading && (
          <PoroLoader>
            <img src={`${process.env.PUBLIC_URL}/images/poro.gif`} alt="poro"/>
          </PoroLoader>
        )}
      </>
    )
  }
}