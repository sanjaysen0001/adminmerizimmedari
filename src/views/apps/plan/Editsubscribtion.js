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
export default class Editsubscribtion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file(uploadPolicy),
      planType: "",
      price: "",
     
      // status:""
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
   
    axiosConfig
    
      .get(`/plan/view-plan-by-id/${id}`)
      .then((response) => {
        console.log(response.data);
        const { planType, price,  } =
          response.data.Plan;
        this.setState({
            price: price,
            planType: planType,
        

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
        planType: this.state.planType,
        price: this.state.price,
       
      
      // file (uploadPolicy),policynumber,policyIssuersName,ReEnterPolicyNumber,userId
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/plan/update-plan/${id}`, payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/Managesubscription`);
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
                Edit Subscription
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/Managesubscription")}
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
                  <Label style={{fontSize:'18px'}}>Plan Type</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="planType"
                    placeholder="Plan Type"
                    value={this.state.planType}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Price</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
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
              style={{backgroundColor:'#2966ac'}}
               type="submit"
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
