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
  Breadcrumb,
  BreadcrumbItem,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
export default class AddAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agentName: "",
      agentCode: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone: "",
      image: "",
      selectedFile: null,
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      short_desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleImage = (e) => {
    console.log(e.target.files[0]);
    this.setState({ selectedFile: e.target.files[0] });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("agentName", this.state.agentName);
    formData.append("agentCode", this.state.agentCode);
    formData.append("email", this.state.email);
    formData.append("address", this.state.address);
    formData.append("commision", this.state.commision);
    formData.append("city", this.state.city);
    formData.append("state", this.state.state);
    formData.append("zipcode", this.state.zipcode);
    formData.append("phone", this.state.phone);
    let adminId = localStorage.getItem("AdminId");
    if (this.state.selectedFile != null) {
      formData.append("image", this.state.selectedFile);
    }

    try {
      const response = await axiosConfig.post(
        `/admin/agentRegistration/${adminId}`,
        formData
      );
      console.log(response.data);
      this.setState({
        agentName: "",
        agentCode: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
        commision: "",
        selectedFile: "",
      });
      swal("Success!", "Submitted SuccessFull!", "success");
      this.props.history.push("/app/agent/AgentList");
    } catch (error) {
      console.log(error);
      swal("Something Went Wrong");
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/plans/CreatedPlanList" tag="a">
                  AgentList
                </BreadcrumbItem>
                <BreadcrumbItem active> Add Agent</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Agent
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/agent/AgentList")}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Agent Name</Label>
                  <Input
                    type="text"
                    name="agentName"
                    placeholder="AgentName"
                    value={this.state.agentName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Agent Code</Label>
                  <Input
                    type="number"
                    name="agentCode"
                    placeholder="AgentCode"
                    value={this.state.agentCode}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Agent Commision</Label>
                  <Input
                    type="number"
                    name="commision"
                    placeholder="Commision"
                    value={this.state.commision}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    type="number"
                    name="phone"
                    maxlength={10}
                    placeholder="Enter Mobile"
                    value={this.state.phone}
                    // onkeypress="return this.isNumber(event)11"
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={this.state.state}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Zipcode</Label>
                  <Input
                    type="number"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={this.state.zipcode}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Adhar Image</Label>
                  <Input
                    className="form-control"
                    type="file"
                    name="upload_pdf"
                    onChange={this.handleImage}
                  />
                </Col> */}

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={this.state.address}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input type="file" name="image" onChange={this.handleImage} />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>DOB</Label>
                  <Input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.changeHandler}
                  />
                </Col> */}
              </Row>
              <Row className="m-1">
                <Col lg="6" md="6" sm="6" className="mt-1">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Agent
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
