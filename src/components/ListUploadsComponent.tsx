import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UploadsResourceService from 'services/UploadsResourceService'
import UploadComponent from 'components/UploadComponent'
import { UploadI } from 'interfaces/upload'
import { Container, Row, Col } from 'react-bootstrap'
import LoadingComponent from 'components/LoadingComponent'

const Wrapper = styled(Container)`
  padding-top: 10px;
`

const UploadRow = styled(Row)``

const UploadCol = styled(Col)`
  padding-bottom: 10px;
`

const ListUploadsComponent = () => {
  const [uploads, setUploads] = useState<Array<UploadI>>([])
  const [loading, setLoading] = useState(true)

  useEffect(get, [])

  function get() {
    const uploadsResourceService = new UploadsResourceService()
    uploadsResourceService.get().then((response: { data: Array<UploadI> }) => {
      setUploads(response.data)
      setLoading(false)
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
    <>
      <LoadingComponent loading={loading} />

      <Wrapper fluid>
        <UploadRow md={2} xs={1} sm={1} lg={4}>
          {renderUploads()}
        </UploadRow>
      </Wrapper>
    </>
  )
}

export default ListUploadsComponent
