import React, { useState, useEffect } from 'react'
import UploadDetailComponent from 'components/uploads/UploadDetailComponent'
import UploadsResourceService from 'services/UploadsResourceService'
import { UploadI } from 'interfaces/upload'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import LoadingComponent from 'components/LoadingComponent'

const UploadDetailPage = () => {
  const params: { id: string } = useParams()
  const [upload, setUpload] = useState<UploadI | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(get, [])

  function get() {
    const id = Number(params.id)
    const uploadsResourceService = new UploadsResourceService()

    uploadsResourceService.get(id).then((response: { data: UploadI }) => {
      setUpload(response.data)
      setLoading(false)
    })
  }

  return (
    <>
      <LoadingComponent loading={loading} />

      <Container fluid>
        <Row>
          <Col>
            <UploadDetailComponent upload={upload} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UploadDetailPage
