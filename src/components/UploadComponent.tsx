import React from 'react'
import { UploadI } from 'interfaces/upload'
import styled from 'styled-components'

const Wrapper = styled.div``

interface PropsI {
  upload: UploadI
}

const UploadComponent = ({ upload }: PropsI) => {
  return (
    <Wrapper>
      <h2>{upload.yardCode}</h2>
    </Wrapper>
  )
}

export default UploadComponent
