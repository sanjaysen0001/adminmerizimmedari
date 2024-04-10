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
  Table,
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
export default class ViewNominee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      //   nomineeName: "",
      //   nomineeEmailId: "",
      //   NomineePhoneNumber: "",
      //   percentageofShar: "",
      //     relationWithNominee: "",
      nominee: [
        {
          nomineeName: "",
          nomineeEmailId: "",
          percentageofShar: null,
          NomineePhoneNumber: null,
          relationWithNominee: "",
        },
      ],
    };
  }
  async componentDidMount() {
    let array = this.props.location.pathname.split("/");
    let id = array[array.length - 1];

    try {
      const response = await axiosConfig.get(
        `/nominee/view-nominee-by-id/${id}`
      );
      this.setState({ listData: response?.data?.Nominee?.nominee });
      //   console.log(response?.data?.Nominee?.nominee);

      //   let newState = {
      //     nomineeName: "",
      //     nomineeEmailId: "",
      //     NomineePhoneNumber: "",
      //     percentageofShar: "",
      //     relationWithNominee: "",
      //   };
      //   const nominee = response?.data?.Nominee?.nominee;
      //   if (nominee && nominee.length > 0) {
      //     const firstNominee = nominee[0];
      //     newState = {
      //       nomineeName: firstNominee.nomineeName,
      //       nomineeEmailId: firstNominee.nomineeEmailId,
      //       NomineePhoneNumber: firstNominee.NomineePhoneNumber,
      //       percentageofShar: firstNominee.percentageofShar,
      //       relationWithNominee: firstNominee.relationWithNominee,
      //     };
      //   }
      //   this.setState(newState);
      //   this.setState({ nominee: newState });
    } catch (error) {
      console.log(error);
    }
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (i, e) => {
    let newFormValues = [...this.state.listData];
    newFormValues[i][e.target.name] = e.target.value;
    console.log(newFormValues);
    this.setState({ nominee: newFormValues });
  };
  submitHandler = (e) => {
    debugger;
    e.preventDefault();
    const payload = {
      nominee: this.state.nominee,
    };
    console.log(payload);

    let array = this.props.location.pathname.split("/");
    let id = array[array.length - 1];
    console.log(id);
    axiosConfig
      .put(`/nominee/update-nominee/${id}`, payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/nominee/NomineeList`);
      })
      .catch((error) => {
        console.log(error.response);
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
                <BreadcrumbItem active> Edit Nominee</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Nominee
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nominee Name</th>
                    <th>Relation with Nominee</th>
                    <th>Percentage of share</th>
                    <th>Nominee Phone No. </th>
                    <th>Nominee e-mail ID</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listData.map((Item, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <Input
                          type="text"
                          name="nomineeName"
                          placeholder="nomineeName"
                          value={Item?.nomineeName}
                          onChange={(e) => this.changeHandler(i, e)}
                        />
                      </td>
                      <td>
                        <CustomInput
                          type="select"
                          name="relationWithNominee"
                          value={Item?.relationWithNominee}
                          onChange={(e) => this.changeHandler(i, e)}
                        >
                          <option value="Father">Father</option>
                          <option value="Wife">Wife</option>
                          <option value="Son">Son</option>
                        </CustomInput>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="percentageofShar"
                          placeholder="percentageofShar"
                          value={Item?.percentageofShar}
                          onChange={(e) => this.changeHandler(i, e)}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="NomineePhoneNumber"
                          placeholder="NomineePhoneNumber"
                          value={Item?.NomineePhoneNumber}
                          onChange={(e) => this.changeHandler(i, e)}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="nomineeEmailId"
                          placeholder="nomineeEmailId"
                          value={Item?.nomineeEmailId}
                          onChange={(e) => this.changeHandler(i, e)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

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
                    Update Nominee
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
