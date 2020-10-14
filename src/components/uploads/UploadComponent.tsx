import React from 'react'
import { UploadI } from 'interfaces/upload'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div``

interface PropsI {
  upload: UploadI
}

const UploadComponent = ({ upload }: PropsI) => {
  const history = useHistory()

  function view() {
    history.push(`/uploads/${upload.id}`)
  }

  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>YardCode: {upload.yardCode}</Card.Title>
          <Card.Text>EmployeeCode: {upload.employeeCode}</Card.Text>

          <Button variant="info" onClick={view}>
            Visualizar
          </Button>
        </Card.Body>
      </Card>
    </Wrapper>
  )
}

export default UploadComponent
