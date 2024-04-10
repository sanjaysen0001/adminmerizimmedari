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
  FormGroup,
} from "reactstrap";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";

class AddPlanType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planType: "",
      desc: "",
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  handleFileChange1 = (event) => {
    console.log(event.target.files[0]);
    this.setState({ files: event.target.files[0] });
  };
  handleFileChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler1 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.files);
    axiosConfig
      .post("/admin/import-data", formData)
      .then((response) => {
        // console.log(response.data.message);
        swal("Success!", response.data.message, "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      Asset_Type: this.state.assetType,
      Field_1: this.state.field1,
      Field_2: this.state.field2,
      Field_3: this.state.field3,
      Field_4: this.state.field4,
      Drop_down_Menu_Options: this.state.company,
      // Offered_by_Post_office: this.state.field4,
    };
    console.log(payload);
    // const formData = new FormData();
    // formData.append("file", this.state.files);
    axiosConfig
      .post("/admin/save-field", payload)
      .then((response) => {
        console.log(response.data.message);
        swal("Success!", response.data.message, "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Assets"
          breadCrumbParent="Home"
          breadCrumbActive="Add Assets"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Assets
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
            <Form className="m-1" onSubmit={this.submitHandler1}>
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px',textTransform:'capitalize',marginBottom:'10px'}}>bulk upload</Label>
                  <Input
                    type="file"
                    name="assetName"
                    onChange={this.handleFileChange1}
                  />
                </Col>
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
              <h2>Asset Fields</h2>
            </Form>
            <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
            <Col lg="6" md="6" sm="12" className="mb-2">
            <Label style={{fontSize:'18px'}}>Asset Name</Label>
            <Input
            style={{fontSize:'18px'}}
              type="text"
              name="assetType"
              value={this.state.assetType}
              placeholder="Asset Name"
              onChange={this.handleFileChange}
            />
          </Col>
            </Row>
              <Row>
               

                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Filed 1</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    placeholder="Field 1"
                    name="field1"
                    value={this.state.field1}
                    onChange={this.handleFileChange}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Filed 2</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    placeholder="Field 2"
                    name="field2"
                    value={this.state.field2}
                    onChange={this.handleFileChange}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Filed 3</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    placeholder="Field 3"
                    name="field3"
                    value={this.state.field3}
                    onChange={this.handleFileChange}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Filed 4</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    placeholder="Field 4"
                    name="field4"
                    value={this.state.field4}
                    onChange={this.handleFileChange}
                  />
                </Col>
                {/*
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">Drop_down_Menu_Options</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="company"
                      value={this.state.company}
                      onChange={this.handleFileChange}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Company
                      </option>
                      <option value="5">All Insurance companies</option>
                      <option value="Employees' Provident Fund Organization & Trusts">
                        Employees' Provident Fund Organization & Trusts
                      </option>
                      <option value="Pension Fund Regulatory and Development Authority (PFRDA)">
                        Pension Fund Regulatory and Development Authority
                        (PFRDA)
                      </option>
                      <option value="Post Office & All Banks">
                        Post Office & All Banks
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                 */}
              </Row>
              <Row>
                <div style={{justifyContent:'right',display:'flex'}}>
                <Button.Ripple
                color="primary"
                type="submit"
                className="mr-1 mb-1"
              >
                Submit
              </Button.Ripple>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddPlanType;
