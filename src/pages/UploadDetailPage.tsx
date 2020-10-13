import React, { useState, useEffect } from 'react'
import UploadDetailComponent from 'components/UploadDetailComponent'
import UploadsResourceService from 'services/UploadsResourceService'
import { UploadI } from 'interfaces/upload'
import { useParams } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const UploadDetailPage = () => {
  const params: { id: string } = useParams()
  const [upload, setUpload] = useState<UploadI | undefined>()

  useEffect(get, [])

  function get() {
    const id = Number(params.id)
    const uploadsResourceService = new UploadsResourceService()

    uploadsResourceService.get(id).then((response: { data: UploadI }) => {
      setUpload(response.data)
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <UploadDetailComponent upload={upload} />
        </Col>
      </Row>
    </Container>
  )
}

export default UploadDetailPage
