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
} from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class ViewAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file(uploadPolicy),
      policynumber: "",
      policyIssuersName: "",
      ReEnterPolicyNumber: "",
      // status:""
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/asset/view-asset-by-id/${id}`)
      .then((response) => {
        const { policyIssuersName, policynumber, ReEnterPolicyNumber, status } =
          response.data.Asset;
        this.setState({
          policynumber: policynumber,
          policyIssuersName: policyIssuersName,
          ReEnterPolicyNumber: ReEnterPolicyNumber,
        });
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

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem active>View Asset</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Asset
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
            <Form className="m-1">
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy Number </Label>
                  <Input
                    type="text"
                    name="policynumber"
                    placeholder="policynumber"
                    value={this.state.policynumber}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy IssuersName</Label>
                  <Input
                    type="text"
                    name="policyIssuersName"
                    placeholder="policyIssuersName"
                    value={this.state.policyIssuersName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>ReEnter PolicyNumber</Label>
                  <Input
                    type="text"
                    name="ReEnterPolicyNumber"
                    placeholder="ReEnterPolicyNumber"
                    value={this.state.ReEnterPolicyNumber}
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
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
