import React from 'react'
import styled from 'styled-components'
import UploadComponent from 'components/uploads/UploadComponent'
import { UploadI } from 'interfaces/upload'
import { Container, Row, Col } from 'react-bootstrap'

const Wrapper = styled(Container)`
  padding-top: 10px;
`

const UploadRow = styled(Row)``

const UploadCol = styled(Col)`
  padding-bottom: 10px;
`

interface PropsI {
  uploads: Array<UploadI>
}

const ListUploadsComponent = ({ uploads }: PropsI) => {
  function renderUploads(): Array<JSX.Element> {
    return uploads.map((upload: UploadI) => (
      <UploadCol key={upload.id}>
        <UploadComponent upload={upload} />
      </UploadCol>
    ))
  }

  return (
    <Wrapper fluid>
      <UploadRow md={2} xs={1} sm={1} lg={4}>
        {renderUploads()}
      </UploadRow>
    </Wrapper>
  )
}

export default ListUploadsComponent
