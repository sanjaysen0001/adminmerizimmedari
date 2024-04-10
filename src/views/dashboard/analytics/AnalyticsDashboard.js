import React from 'react'
import { Form } from 'react-bootstrap'
import { Col, Row } from 'reactstrap'


const AnalyticsDashboard = () => {
  
  return (
    <>
        <Row className="match-height">
          <Col lg="4" md="12">
        <div className="cssforselectdashboarddiv">
        <Form.Select aria-label="Default select example" className="cssforselectdashboard">
        <option>Complete Status</option>
        <option value="1">Today’s Status</option>
        <option value="2">MTD Status </option>
        <option value="3">YTD Status</option>
      </Form.Select>
        </div>
          </Col>
          <Col lg="4" md="12">
          <div className="cssforselectdashboarddiv">
          <button className="cssfordashboardbutton">
         <span>
         TOTAL REGISTERED USER
         </span><br></br>
         <span>
         xxxxxxxx
         </span>

          </button>
          </div>
          </Col>
          <Col lg="4" md="12">
          <div className="cssforselectdashboarddiv">
          <button className="cssfordashboardbutton">
         <span>
         TOTAL SUBSCRIBER
         </span><br></br>
         <span>
         xxxxxxxx
         </span>

          </button>
          </div>
          </Col>
          
        </Row>
<div>

</div>

       
      
    </>
  )
}

export default AnalyticsDashboard