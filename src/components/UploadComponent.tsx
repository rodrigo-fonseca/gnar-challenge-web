import React from 'react'
import { UploadI } from 'interfaces/upload'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'

const Wrapper = styled.div``

interface PropsI {
  upload: UploadI
}

const UploadComponent = ({ upload }: PropsI) => {
  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>YardCode: {upload.yardCode}</Card.Title>
          <Card.Text>
            <p>EmployeeCode: {upload.employeeCode}</p>
          </Card.Text>

          <Button variant="info">Visualizar</Button>
        </Card.Body>
      </Card>
    </Wrapper>
  )
}

export default UploadComponent
