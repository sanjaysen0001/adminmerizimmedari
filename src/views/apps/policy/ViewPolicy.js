/* eslint-disable jsx-a11y/img-redundant-alt */
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
export default class ViewPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyName: "",
      policyNumber: "",
      policyUnderWriter: "",
      proprietary: "",
      policyType: "",
      policyAdditionalFeatures: "",
      policyDescription: "",
      paraDescription: "",
      policy_page: "",
      policy_document: "",
      policy_FAQ: "",
      purchase_link: "",
      plan_image: "",
      brochure_link: "",
      purchased: "",
      renewed: "",
      policyActive: "",
      policyTypeList: [],
      editorState: EditorState.createEmpty(),
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    axiosConfig
      .get("/admin/get_pt")
      .then((response) => {
        this.setState({ policyTypeList: response.data.data });
        console.log(response.data.data);
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
    axiosConfig
      .get(`/admin/getOnePolicy/${id}`)
      .then((response) => {
        console.log(response.data.data);
        const {
          paraDesc,
          brochureLink,
          planimg,
          policyAdtional,
          policyDesc,
          policyDocument,
          policyFAQ,
          policyName,
          policyPage,
          policyType,
          policyUnderWriter,
          purchesLink,
          renewed,
          status,
          purched,
          policyNum,
          proproetary,
        } = response?.data?.data;

        const contentState = ContentState.createFromBlockArray(
          convertFromHTML(paraDesc)
        );
        const contentState1 = ContentState.createFromBlockArray(
          convertFromHTML(policyDesc)
        );
        const editorState = EditorState.createWithContent(contentState);
        const editorState1 = EditorState.createWithContent(contentState1);
        console.log(policyType?.pt_type);
        this.setState({
          policyName: policyName,
          policyNumber: policyNum,
          policyUnderWriter: policyUnderWriter,
          proprietary: proproetary,
          policyType: policyType?.pt_type,
          policyAdditionalFeatures: policyAdtional,
          policyDescription: policyDesc,
          paraDescription: paraDesc,
          policy_page: policyPage,
          policy_document: policyDocument,
          policy_FAQ: policyFAQ,
          purchase_link: purchesLink,
          plan_image: planimg[0],
          brochure_link: brochureLink,
          purchased: purched,
          renewed: renewed,
          policyActive: status,
          editorState: editorState,
          editorState1: editorState1,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  onEditorStateChangePara = (editorState) => {
    this.setState({
      editorState,
      paraDescription: draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      ),
    });
  };
  onEditorStateChangepolicy = (editorState1) => {
    this.setState({
      editorState1,
      policyDescription: draftToHtml(
        convertToRaw(editorState1.getCurrentContent())
      ),
    });
  };
  handlePolicyType = (e) => {
    this.setState({ policyType: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    // const payload = {};
    // e.preventDefault();
    // let { id } = this.props.match.params;
    // axiosConfig
    //   .post(`/admin/edit_plantyp/${id}`, payload)
    //   .then((response) => {
    //     console.log(response);
    //     swal("Success!", "Submitted SuccessFull!", "success");
    //     this.props.history.push(`/app/policy/PolicyTypeList`);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
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
                <BreadcrumbItem active>View Policy</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Policy
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/policy/PolicyList")}
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
                  <Label>PolicyName </Label>
                  <Input
                    disabled
                    type="text"
                    name="policyName"
                    placeholder="policyName"
                    value={this.state.policyName}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>PolicyNumber</Label>
                  <Input
                    type="text"
                    disabled
                    name="policyNumber"
                    placeholder="PolicyNumber"
                    value={this.state.policyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>policyUnderWriter </Label>
                  <Input
                    type="text"
                    disabled
                    name="policyUnderWriter"
                    placeholder="PolicyUnderWriter"
                    value={this.state.policyUnderWriter}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Proprietary </Label>
                  <Input
                    type="text"
                    disabled
                    name="proprietary"
                    placeholder="Proprietary"
                    value={this.state.proprietary}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>PolicyAdditionalFeatures </Label>
                  <Input
                    type="text"
                    disabled
                    name="policyAdditionalFeatures"
                    placeholder="PolicyAdditionalFeatures"
                    value={this.state.policyAdditionalFeatures}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy Page </Label>
                  <Input
                    type="text"
                    disabled
                    name="policy_page"
                    placeholder="PolicyPage"
                    value={this.state.policy_page}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy Document </Label>
                  <Input
                    type="text"
                    disabled
                    name="policy_document"
                    placeholder="Policy Document"
                    value={this.state.policy_document}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy FAQ </Label>
                  <Input
                    type="text"
                    disabled
                    name="policy_FAQ"
                    placeholder="Policy FAQ"
                    value={this.state.policy_FAQ}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Purchase Link </Label>
                  <Input
                    type="text"
                    disabled
                    name="purchase_link"
                    placeholder="Purchase_link"
                    value={this.state.purchase_link}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Brochure Link </Label>
                  <Input
                    type="text"
                    disabled
                    name="brochure_link"
                    placeholder="Brochure Link"
                    value={this.state.brochure_link}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Purchased </Label>
                  <Input
                    type="text"
                    disabled
                    name="purchased"
                    placeholder="Purchased"
                    value={this.state.purchased}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Renewed</Label>
                  <Input
                    type="text"
                    disabled
                    name="renewed"
                    placeholder="Renewed"
                    value={this.state.renewed}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label for="data-category">Policy Type</Label>
                  <Input
                    type="select"
                    disabled
                    id="data-category"
                    value={this.state.policyType}
                    onChange={this.handlePolicyType}
                  >
                    {this.state.policyTypeList?.map((itm) => (
                      <option key={itm._id} value={itm._id}>
                        {itm.pt_type}
                      </option>
                    ))}
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Policy Descripition</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    readOnly={true} // Make the editor read-only
                    editorState={this.state.editorState1}
                    onEditorStateChange={this.onEditorStateChangepolicy}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Para Descripition</Label>
                  <Editor
                    readOnly={true} // Make the editor read-only
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChangePara}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <div>
                    <Label>Plan Image </Label>
                  </div>
                  <div>
                    <img
                      src={this.state.plan_image}
                      alt="Plan Image"
                      width={200}
                      height={200}
                    />
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
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
                      checked
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
                </Col>
              </Row>
              {/* <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Policy
                  </Button.Ripple>
                </Col>
              </Row> */}
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
