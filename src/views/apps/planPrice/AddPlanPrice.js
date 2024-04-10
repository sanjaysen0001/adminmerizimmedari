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
  FormGroup,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const ageList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
];
export default class AddPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageMin: "",
      ageMax: "",
      dependentPrice: "",
      canSupportCouple: "",
      canSupportChild: "",
      individualFee: "",
      couple_singlechild_fee: "",
      couple_withChildren_fee: "",
      parent_with_children: "",
      parent_with_child: "",
      plantypeList: [],
      policy_combination_active: "",
      selectedValue: "",
      planType: "",
      planBenefitsCode_fk: "",
      policy_ID_fk: "",
      planBenefitsList: [],
      policyList: [],
      age: [],
      error: "",
      planList: [],
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  componentDidMount() {
    this.AllPolicyList();
    this.getPlanList();
    this.setState({ age: ageList });
  }
  getPlanList = () => {
    axiosConfig.get(`/plan/view-plan`).then((response) => {
      // const updatedPlanList = response.data.Plan?.filter(
      //   (st) => st.status === "true"
      // );
      this.setState({ plantypeList: response.data.Plan });
      console.log(response.data.Plan);
    });
  };
  AllPolicyList = () => {
    axiosConfig.get("/admin/get_policies").then((response) => {
      this.setState({ policyList: response.data.data });
    });
  };
  // planTypeList = () => {
  //   axiosConfig
  //     .get("/admin/get_plan_typ")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       this.setState({ plantypeList: response.data.data });
  //     })
  //     .catch((err) => {
  //       swal("Something Went Wrong");
  //     });
  // };
  // PlanBenefitsList = () => {
  //   axiosConfig
  //     .get("/benefite/view-benefite")
  //     .then((response) => {
  //       console.log(response.data.Benefite);
  //       this.setState({ planBenefitsList: response.data.Benefite });
  //     })
  //     .catch((err) => {
  //       swal("Something Went Wrong");
  //     });
  // };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSelect(selectedList, selectedItem) {
    console.log(selectedItem.plan_type);
    this.setState({ planType: selectedList });
    // this.setState({ error: selectedList });
  }
  handlePlanBenefits = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  onRemove(selectedList, removedItem) {
    console.log(selectedList);
    this.setState({ planType: selectedList });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.error);
    const payload = {
      // planPriceID: "PP001",
      ageMin: this.state.ageMin,
      ageMax: this.state.ageMax,
      dependentPrice: this.state.dependentPrice,
      cansupportCouple: this.state.canSupportCouple,
      cansupportChild: this.state.canSupportChild,
      IndividualFee: Number(this.state.individualFee) + Number(15),
      Couple_singlechild_fee: this.state.couple_singlechild_fee,
      Couple_withChildren_fee: this.state.couple_withChildren_fee,
      parent_with_child: this.state.parent_with_child,
      parent_with_children: this.state.parent_with_child,
      policy_ID_fk: this.state.policy_ID_fk,
      planType_fk: this.state.planType,
      // planType_fk: this.state.planBenefitsCode_fk,
      // status: this.state.status,
    };
    console.log(payload);

    axiosConfig
      .post("/plan-price/save-plan-price", payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/plan/ListPlanPrice");
      })
      .catch((error) => {
        console.log(error);
      });
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
                <BreadcrumbItem href="" tag="a">
                  AddPlanPrice List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Plan</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                AddPlanPrice
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/plan/ListPlanPrice")}
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
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">AgeMin</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="ageMin"
                      value={this.state.ageMin}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Age
                      </option>
                      {this.state.age?.map((ele) => (
                        <option value={ele}>{ele}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">AgeMax</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="ageMax"
                      value={this.state.ageMax}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Age
                      </option>
                      {this.state.age?.map((ele) => (
                        <option value={ele}>{ele}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>DependentPrice</Label>
                  <Input
                    required
                    type="number"
                    name="dependentPrice"
                    placeholder="DependentPrice"
                    value={this.state.dependentPrice}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>CanSupportCouple</Label>
                  <Input
                    required
                    type="number"
                    name="canSupportCouple"
                    placeholder="cansupportCouple"
                    value={this.state.canSupportCouple}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>CanSupportChild</Label>
                  <Input
                    required
                    type="number"
                    name="canSupportChild"
                    placeholder="CanSupportChild"
                    value={this.state.canSupportChild}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>IndividualFee</Label>
                  <Input
                    required
                    type="number"
                    name="individualFee"
                    placeholder="IndividualFee"
                    value={this.state.individualFee}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Couple_singlechild_fee</Label>
                  <Input
                    required
                    type="number"
                    name="couple_singlechild_fee"
                    placeholder="couple_singlechild_fee"
                    value={this.state.couple_singlechild_fee}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Couple_withChildren_fee</Label>
                  <Input
                    required
                    type="number"
                    name="couple_withChildren_fee"
                    placeholder="couple_withChildren_fee"
                    value={this.state.couple_withChildren_fee}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Parent_with_child</Label>
                  <Input
                    required
                    type="number"
                    name="parent_with_child"
                    placeholder="parent_with_child"
                    value={this.state.parent_with_child}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Parent_with_children</Label>
                  <Input
                    required
                    type="number"
                    name="parent_with_children"
                    placeholder="parent_with_children"
                    value={this.state.parent_with_children}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">Policy</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="policy_ID_fk"
                      value={this.state.policy_ID_fk}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Policy
                      </option>
                      {this.state.policyList?.map((val) => {
                        return (
                          <option value={val?._id}>{val?.policyName}</option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">Plan Type</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="planType"
                      value={this.state.planType}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Plan Type
                      </option>
                      {this.state.plantypeList?.map((ele) => (
                        <option value={ele._id}>
                          {ele?.planType[0]?.plan_type}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">Plan Benefits</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="planBenefitsCode_fk"
                      value={this.state.planBenefitsCode_fk}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select planBenefitsCode_fk
                      </option>
                      {this.state.plantypeList?.map((ele) => (
                        <option value={ele._id}>{ele.plan_type}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col> */}
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
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add PlanPrice
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
