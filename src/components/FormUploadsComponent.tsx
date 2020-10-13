import React, { useState } from 'react'
import styled from 'styled-components'
import UploadsResourceService from 'services/UploadsResourceService'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const Wrapper = styled(Container)`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;

  .send-btn-wrapper {
    margin-top: 10px;
  }
`

const FormUploadsComponent = () => {
  const [formData, setFormData] = useState<FormData | undefined>()
  // const [fileName, setFileName] = useState('')

  function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) return
    if (!event.target.files) return
    if (!event.target.files[0]) return

    handleFormData(event.target.files[0])
  }

  function handleFormData(file: File) {
    const formData = new FormData()
    formData.append('file', file)

    setFormData(formData)
  }

  function submit() {
    const uploadsResourceService = new UploadsResourceService()
    uploadsResourceService.create(formData)
  }

  return (
    <Wrapper fluid>
      <Row>
        <Col>
          <Form noValidate>
            <Form.Row>
              <Col>
                <Form.Control type="email" placeholder="Nome do arquivo..." />
              </Col>
              <Col>
                <Form.File
                  id="exampleFormControlFile1"
                  name="file"
                  onChange={onFileUpload}
                />
              </Col>
            </Form.Row>

            <Form.Row className="send-btn-wrapper">
              <Col>
                <Button type="button" variant="primary" onClick={submit}>
                  Enviar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default FormUploadsComponent
