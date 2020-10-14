import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListUploadsComponent from 'components/uploads/ListUploadsComponent'
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
  const [file, setFile] = useState<File>()
  const [uploads, setUploads] = useState<Array<UploadI>>([])
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

    setFile(event.target.files[0])
  }

  function onFileName(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) return
    if (!event.target.value) return

    setFileName(event.target.value)
  }

  function submit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    if (!fileName) return alert('What is the filename?')
    if (!file) return alert('Please add your file')

    setLoading(true)
    const formData = getFormData(file, fileName)

    const uploadsResourceService = new UploadsResourceService()
    uploadsResourceService
      .create(formData)
      .then(onSubmitResponse)
      .catch(onSubmitError)
      .finally(onSubmitFinished)
  }

  function onSubmitResponse(res: { data: Array<UploadI> }) {
    setUploads([...uploads, ...res.data])
    setFileName('')
  }

  function onSubmitError() {
    alert('Ops, something goes wrong :(')
  }

  function onSubmitFinished() {
    setLoading(false)
  }

  function getFormData(file: File, filename: string): FormData {
    const formData = new FormData()
    formData.append('file', file, filename)

    return formData
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
                    value={fileName}
                    placeholder="Nome do arquivo..."
                    onChange={onFileName}
                  />
                </Col>
                <Col>
                  <Form.File
                    id="exampleFormControlFile1"
                    name="file"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
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
