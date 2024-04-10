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
import { element } from "prop-types";
import { Item } from "react-contexify";
export default class ViewNominee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      nomineeName: "",
      nomineeEmailId: "",
      NomineePhoneNumber: "",
      percentageofShar: "",
      relationWithNominee: "",
    };
  }
  async componentDidMount() {
    // console.log(this.props.location.state);
    let array = this.props.location.pathname.split("/");
    let id = array[array.length - 1];

    try {
      const response = await axiosConfig.get(
        `/nominee/view-nominee-by-id/${id}`
      );
      // console.log(response?.data?.Nominee?.nominee);
      console.log(response?.data?.Nominee?.nominee);
      this.setState({ listData: response?.data?.Nominee?.nominee });
      // let newState = {
      //   nomineeName: "",
      //   nomineeEmailId: "",
      //   NomineePhoneNumber: "",
      //   percentageofShar: "",
      //   relationWithNominee: "",
      // };
      // const nominee = response?.data?.Nominee?.nominee;
      // if (nominee && nominee.length > 0) {
      //   const firstNominee = nominee[0];
      //   newState = {
      //     nomineeName: firstNominee.nomineeName,
      //     nomineeEmailId: firstNominee.nomineeEmailId,
      //     NomineePhoneNumber: firstNominee.NomineePhoneNumber,
      //     percentageofShar: firstNominee.percentageofShar,
      //     relationWithNominee: firstNominee.relationWithNominee,
      //   };
      // }

      // this.setState(newState);
    } catch (error) {
      console.log(error);
    }
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
                <BreadcrumbItem active> View Nominee</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Nominee
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
                    <th scope="row">1</th>
                    <td>{Item?.nomineeName}</td>
                    <td>{Item?.relationWithNominee}</td>
                    <td>{Item?.percentageofShar}</td>
                    <td>{Item?.NomineePhoneNumber}</td>
                    <td>{Item?.nomineeEmailId}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* <Form className="m-1">
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>NomineeName</Label>
                  <Input
                    readOnly
                    type="text"
                    name="nomineeName"
                    placeholder="nomineeName"
                    value={this.state.nomineeName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>NomineeEmail</Label>
                  <Input
                    readOnly
                    type="text"
                    name="nomineeEmailId"
                    placeholder="nomineeEmailId"
                    value={this.state.nomineeEmailId}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Nominee Phone</Label>
                  <Input
                    readOnly
                    type="text"
                    name="NomineePhoneNumber"
                    placeholder="NomineePhoneNumber"
                    value={this.state.NomineePhoneNumber}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Relation With Nominee</Label>
                  <Input
                    readOnly
                    type="text"
                    name="relationWithNominee"
                    placeholder="relationWithNominee"
                    value={this.state.relationWithNominee}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Percentage of Share</Label>
                  <Input
                    readOnly
                    type="text"
                    name="percentageofShar"
                    placeholder="percentageofShar"
                    value={this.state.percentageofShar}
                    onChange={this.changeHandler}
                  />
                </Col>
             
              </Row>
            </Form> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}
