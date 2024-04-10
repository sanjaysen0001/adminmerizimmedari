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
import axiosConfig from "../../../../axiosConfig";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class EditPolicy extends Component {
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
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
    axiosConfig
      .get(`/admin/getOnePolicy/${id}`)
      .then((response) => {
        console.log(response.data?.data?.policyType.pt_type);
        console.log(response.data?.data?.policyType._id);
        const {
          paraDesc,
          brochureLink,
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
        this.setState({
          policyName: policyName,
          policyNumber: policyNum,
          policyUnderWriter: policyUnderWriter,
          proprietary: proproetary,
          policyType: policyType?._id,
          policyAdditionalFeatures: policyAdtional,
          policyDescription: policyDesc,
          paraDescription: paraDesc,
          policy_page: policyPage,
          policy_document: policyDocument,
          policy_FAQ: policyFAQ,
          purchase_link: purchesLink,
          brochure_link: brochureLink,
          purchased: purched,
          renewed: renewed,
          policyActive: status,
          editorState: editorState,
          editorState1: editorState1,
        });
      })
      .catch((error) => {
        swal("Something Went Wrong");
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
  handleImage = (e) => {
    this.setState({ plan_image: e.target.files[0] });
  };
  handlePolicyType = (e) => {
    console.log(e.target.value);
    this.setState({ policyType: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    const formdata = new FormData();
    formdata.append("policyName", this.state.policyName);
    formdata.append("policyNum", this.state.policyNumber);
    formdata.append("policyDesc", this.state.policyDescription);
    formdata.append("policyUnderWriter", this.state.policyUnderWriter);
    formdata.append("proproetary", this.state.proprietary);
    formdata.append("policyType", this.state.policyType);
    formdata.append("policyAdtional", this.state.policyAdditionalFeatures);
    formdata.append("paraDesc", this.state.paraDescription);
    formdata.append("policyPage", this.state.policy_page);
    formdata.append("policyDocument", this.state.policy_document);
    formdata.append("policyFAQ", this.state.policy_FAQ);
    formdata.append("purchesLink", this.state.purchase_link);
    formdata.append("brochureLink", this.state.brochure_link);
    formdata.append("purched", this.state.purchased);
    formdata.append("renewed", this.state.renewed);
    if (this.state.plan_image !== null) {
      formdata.append("planimg", this.state.plan_image);
    }
    formdata.append("status", this.state.policyActive);
    e.preventDefault();
    let { id } = this.props.match.params;
    console.log(this.state.policyType);
    axiosConfig
      .post(`/admin/editPolicy/${id}`, formdata)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/policy/PolicyList");
      })
      .catch((error) => {
        swal("Something Went Wrong");
      });
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
                <BreadcrumbItem active>Edit Policy</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Policy
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
                    type="text"
                    name="policyName"
                    placeholder="policyName"
                    value={this.state.policyName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>PolicyNumber</Label>
                  <Input
                    type="text"
                    name="policyNumber"
                    placeholder="PolicyNumber"
                    value={this.state.policyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>policyUnderWriter </Label>
                  <Input
                    type="text"
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
                    name="purchased"
                    placeholder="Purchased"
                    value={this.state.purchased}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label for="data-category">Policy Type</Label>
                  <Input
                    type="select"
                    id="data-category"
                    name="policyType"
                    value={this.state.policyType}
                    onChange={this.handlePolicyType}
                    defaultValue={this.state.policyType}
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
                  <Label>Plan Image </Label>
                  <Input
                    type="file"
                    name="plan_image"
                    onChange={this.handleImage}
                  />
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
                      value="true"
                      checked
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
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
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
