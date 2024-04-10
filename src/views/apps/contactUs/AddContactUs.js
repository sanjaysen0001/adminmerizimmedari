import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddContectUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      msg: "",
      //   subject: "",
      mobile: "",
      mobileError: false,
      errorValidation: "Please Enter Correct Mobile Number",
      isError: false,
    };
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  validatePhone = (text) => {
    // debugger;
    if (/^[6789][0-9]{9}$/.test(text)) {
      return true;
    }
    return false;
  };
  changeHandler = async (e) => {
    // debugger;
    this.setState({ [e.target.name]: e.target.value });
    // const { mobile } = this.state;
    if (this.state.mobile === e.target.name) {
      var isValid = await this.validatePhone(e.target.value);
      if (isValid === false) {
        this.setState({ isError: true });

        return true;
      }
    }
    // if (this.state.mobile.length <= 10) {

    // } else {
    //   this.setState({ isError: true });
    // }
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(
      this.state.name,
      this.state.email,
      this.state.mobile,
      this.state.msg
    );
    // axiosConfig
    //   .post("admin/add_contactus", this.state)

    //   .then((response) => {
    //     console.log(response.data);

    //     swal("Success!", "Submitted SuccessFull!", "success");
    //     this.props.history.push("/app/pagesetup/contactus/contactUsList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
                <BreadcrumbItem
                  href="/app/pagesetup/contactus/contactUsList"
                  tag="a"
                >
                  Contact Us List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Contact Us</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Contact Us
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/ContactUs/ContactUsList")}
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
                  <Label>Name</Label>
                  <Input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email Id</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    required
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    placeholder="Mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                  {/* <span>Monile</span> */}
                  <span style={{ color: "red" }}>
                    {this.state.isError ? this.state.errorValidation : null}
                  </span>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Message</Label>
                  <Input
                    required
                    type="text"
                    name="msg"
                    placeholder="Enter Message"
                    value={this.state.msg}
                    onChange={this.changeHandler}
                  ></Input>
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
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col> */}
              </Row>
              <Row className="submitbtn">
                <Col className=""></Col>
                <Col className="float-right">
                  <Button.Ripple color="primary" type="submit" className="">
                    Submit
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
