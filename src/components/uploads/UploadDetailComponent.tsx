import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import { UploadI } from 'interfaces/upload'
import { format } from 'date-fns'

const Wrapper = styled.div`
  margin-top: 10px;
`

interface PropsI {
  upload?: UploadI
}

const UploadDetailComponent = ({ upload }: PropsI) => {
  function formatDate(date: string): string {
    return format(new Date(date), "dd MMMM', ' HH:mm")
  }

  return (
    <Wrapper>
      {upload && (
        <Card>
          <Card.Body>
            <Card.Title>YardCode: {upload.yardCode}</Card.Title>
            <Card.Text>EmployeeCode: {upload.employeeCode}</Card.Text>
            <Card.Text>Clock In: {formatDate(upload.clockIn)}</Card.Text>
            <Card.Text>Clock Out: {formatDate(upload.clockOut)}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Wrapper>
  )
}

export default UploadDetailComponent
