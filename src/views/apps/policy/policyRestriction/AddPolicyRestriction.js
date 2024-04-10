import React from "react";
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
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";

import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
class AddPolicyRestriction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policyName: "",
      policyNumber: "",
    };
  }

  componentDidMount() {
    axiosConfig
      .get("/admin/get_pt")
      .then((response) => {
        console.log(response.data.data);

        this.setState({ policyTypeList: response.data.data });
        console.log(response.data.data);
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const adminId = localStorage.getItem("AdminId");
    const formdata = new FormData();
    formdata.append("policyName", this.state.policyName);

    if (this.state.plan_image !== null) {
      formdata.append("planimg", this.state.plan_image);
    }
    formdata.append("status", this.state.policyActive);
    axiosConfig
      .post(`/admin/add_policy/${adminId}`, formdata)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/policy/PolicyList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add PolicyRestriction"
          breadCrumbParent="Home"
          breadCrumbActive="Add PolicyRestriction"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add PolicyRestriction
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/policy/PolicyRestriction")
                    }
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
                  <Label>policyName_fk</Label>
                  <Input
                    type="text"
                    name="policyName"
                    placeholder="policyName"
                    value={this.state.policyName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Arrival_days_restrict</Label>
                  <Input
                    type="text"
                    name="policyNumber"
                    placeholder="PolicyNumber"
                    value={this.state.policyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>

                {/* <Col lg="6" md="6" sm="12" className="mb-2">
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
                </Col> */}
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
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

export default AddPolicyRestriction;
