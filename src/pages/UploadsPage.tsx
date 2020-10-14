import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListUploadsComponent from 'components/ListUploadsComponent'
import UploadsResourceService from 'services/UploadsResourceService'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import LoadingComponent from 'components/LoadingComponent'
import { UploadI } from 'interfaces/upload'

const FormWrapper = styled(Container)`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;

  .send-btn-wrapper {
    margin-top: 10px;
  }
`

function UploadsPage() {
  const [uploads, setUploads] = useState<Array<UploadI>>([])
  const [formData, setFormData] = useState<FormData | undefined>()
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(getUploads, [])

  function getUploads() {
    const uploadsResourceService = new UploadsResourceService()

    uploadsResourceService
      .get()
      .then((response: { data: Array<UploadI> }) => {
        setUploads(response.data)
      })
      .catch(() => {
        alert('Ops, something goes wrong :(')
      })
      .finally(() => setLoading(false))
  }

  function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) return
    if (!event.target.files) return
    if (!event.target.files[0]) return

    handleFormData(event.target.files[0])
  }

  function onFileName(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) return
    if (!event.target.value) return

    setFileName(event.target.value)
  }

  function handleFormData(file: File) {
    const formData = new FormData()
    formData.append('file', file)

    setFormData(formData)
  }

  function submit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    if (!fileName) return alert('What is the filename?')

    setLoading(true)

    const uploadsResourceService = new UploadsResourceService()
    uploadsResourceService
      .create(formData)
      .then(res => {
        setUploads([...uploads, ...res.data])
        setFileName('')
        setFormData(undefined)
      })
      .catch(() => {
        alert('Ops, something goes wrong :(')
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <LoadingComponent loading={loading} />

      <FormWrapper fluid>
        <Row>
          <Col>
            <Form onSubmit={submit} noValidate>
              <Form.Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Nome do arquivo..."
                    onChange={onFileName}
                  />
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
                  <Button type="submit" variant="primary">
                    Enviar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </FormWrapper>

      <ListUploadsComponent uploads={uploads} />
    </>
  )
}

export default UploadsPage
