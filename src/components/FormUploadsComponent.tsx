import React, { useState } from 'react'
import styled from 'styled-components'
import UploadsResourceService from 'services/UploadsResourceService'

const Wrapper = styled.div``

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
    <Wrapper>
      <form noValidate>
        <input type="file" name="file" onChange={onFileUpload} />

        <button type="button" onClick={submit}>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default FormUploadsComponent
