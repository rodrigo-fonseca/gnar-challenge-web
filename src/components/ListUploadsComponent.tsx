import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UploadsResourceService from 'services/UploadsResourceService'
import UploadComponent from 'components/UploadComponent'
import { UploadI } from 'interfaces/upload'
import { Container, Row, Col } from 'react-bootstrap'

const Wrapper = styled(Container)`
  padding-top: 10px;
`

const UploadRow = styled(Row)``

const UploadCol = styled(Col)`
  padding-bottom: 10px;
`

const ListUploadsComponent = () => {
  const [uploads, setUploads] = useState<Array<UploadI>>([])

  useEffect(get, [])

  function get() {
    const uploadsResourceService = new UploadsResourceService()
    uploadsResourceService.get().then((response: { data: Array<UploadI> }) => {
      setUploads(response.data)
    })
  }

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
