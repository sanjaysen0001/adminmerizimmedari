import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
 
} from "reactstrap";
// import ReactHtmlParser from "react-html-parser";
// import {
//   ContentState,
//   EditorState,
//   convertFromHTML,
//   convertToRaw,
// } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class EditPlanType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file(uploadPolicy),
      assettype: "",
      field1: "",
      field2: "",
      field3:"",
      field4:"",
      // status:""
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
   
    axiosConfig
    
      .get(`/admin/view-field-by-id/${id}`)
      .then((response) => {
        const { Asset_Type, Field_1, Field_2, Field_3, Field_4 } =
          response.data.Field;
        this.setState({
          assettype: Asset_Type,
          field1: Field_1,
          field2: Field_2,
          field3:Field_3,
          field4:Field_4

        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      Asset_Type: this.state.assettype,
      Field_1: this.state.field1,
      Field_2: this.state.field2,
      Field_3: this.state.field3,
      Field_4: this.state.field4,
      // file (uploadPolicy),policynumber,policyIssuersName,ReEnterPolicyNumber,userId
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/admin/update-field/${id}`, payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/assets/AsstesList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Asset
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/assets/AsstesList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
            <Col lg="6" md="6" sm="12" className="mb-2">
              <Label style={{fontSize:'18px'}}>Asset Name</Label>
              <Input
              style={{fontSize:'18px'}}
                type="text"
                name="assettype"
                placeholder="Asset Name"
                value={this.state.assettype}
                onChange={this.changeHandler}
              />
            </Col>
            </Row>
              <Row>
             
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 1</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="field1"
                    placeholder="Field 1"
                    value={this.state.field1}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 2</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="field2"
                    placeholder="Field 2"
                    value={this.state.field2}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 3</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="field3"
                    placeholder="Field 3"
                    value={this.state.field3}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 4</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="field4"
                    placeholder="Field 4"
                    value={this.state.field4}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col> */}
              </Row>
              <div style={{justifyContent:'right',display:'flex'}}>
              <Button.Ripple
              
               type="submit"
               color="primary"
               className="mr-1 mb-1"
             >
               Update 
             </Button.Ripple>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
