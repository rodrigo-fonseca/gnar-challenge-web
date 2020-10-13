import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UploadsResourceService from 'services/UploadsResourceService'
import UploadComponent from 'components/UploadComponent'
import { UploadI } from 'interfaces/upload'

const Wrapper = styled.div``

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
      <UploadComponent key={upload.id} upload={upload} />
    ))
  }

  return <Wrapper>{renderUploads()}</Wrapper>
}

export default ListUploadsComponent
