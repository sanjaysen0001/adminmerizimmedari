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

export default class AddPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planMinDays: "",
      planType: [],
      agesupportMin: null,
      agesupportMax: null,
      planMaximum: "",
      planDeductible: "",
      preexCoverage: "",
      preexDeductible: "",
      preexMaxCoverage: null,
      CoverageCntry: "",
      policy_combination_active: "",
      selectedValue: "",
      list: [],
      planBenefitsCode_fk: "",
      policy_ID_fk: "",
      planBenefitsList: [],
      policyList: [],
      error: "",
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  componentDidMount() {
    this.PlanBenefitsList();
    this.AllPolicyList();
    this.planTypeList();
  }
  planTypeList = () => {
    axiosConfig
      .get("/admin/get_plan_typ")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ list: response.data.data });
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  };
  PlanBenefitsList = () => {
    axiosConfig.get("/benefite/view-benefite").then((response) => {
      this.setState({ planBenefitsList: response.data.Benefite });
    });
  };
  AllPolicyList = () => {
    axiosConfig.get("/admin/get_policies").then((response) => {
      this.setState({ policyList: response.data.data });
    });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSelect(selectedList, selectedItem) {
    console.log(selectedList.length);
    this.setState({ planType: selectedList });
  }
  handlePlanBenefits = (e) => {
    const { name, value } = e.target;
    console.log(value);
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
      planMinDays: this.state.planMinDays,
      planType: this.state.planType,
      agesupportMin: this.state.agesupportMin,
      agesupportMax: this.state.agesupportMax,
      planMaximum: this.state.planMaximum,
      planDeductible: this.state.planDeductible,
      preexCoverage: this.state.preexCoverage,
      preexMaxCoverage: this.state.preexMaxCoverage,
      CoverageCntry: this.state.CoverageCntry,
      planBenefitsCode_fk: this.state.planBenefitsCode_fk,
      preexDeductible: this.state.preexDeductible,
      // policy_combination_active: this.state.preexCoverage,
      policy_ID_fk: this.state.policy_ID_fk,
      status: this.state.status,
    };
    console.log(payload);

    axiosConfig
      .post("/plan/save-plan", payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/plans/PlanList");
      })
      .catch((error) => {
        console.log(error);
      });
    // }
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
                  Plan List
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
                Add Plan
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/plans/PlanList")}
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
                  <Label for="data-category">PlanMinDays</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      required
                      id="data-category"
                      name="planMinDays"
                      value={this.state.planMinDays}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select PlanMinDays
                      </option>
                      <option value="5">5</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="60">60</option>
                      <option value="90">90</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="" lg="6" md="6" sm="12">
                  <Label for="data-category">Plan Type</Label>
                  <Multiselect
                    options={this.state.list}
                    selectedValues={this.state.selectedValue}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                    displayValue="plan_type"
                  />
                  <span style={{ color: "red" }}>{this.state.error}</span>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>AgesupportMin</Label>
                  <Input
                    required
                    type="number"
                    name="agesupportMin"
                    placeholder="AgesupportMin"
                    value={this.state.agesupportMin}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>AgesupportMax</Label>
                  <Input
                    required
                    type="number"
                    name="agesupportMax"
                    placeholder="AgesupportMax"
                    value={this.state.agesupportMax}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>planMaximum</Label>
                  <Input
                    required
                    type="number"
                    name="planMaximum"
                    placeholder="planMaximum"
                    value={this.state.planMaximum}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">PlanDeductible</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      required
                      name="planDeductible"
                      value={this.state.planDeductible}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select planDeductible
                      </option>
                      <option value="0">0</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                      <option value="250">250</option>
                      <option value="500">500</option>
                      <option value="1000">1000</option>
                      <option value="2500">2500</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">PreexCoverage</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      required
                      name="preexCoverage"
                      value={this.state.preexCoverage}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select PreexCoverage
                      </option>
                      <option value="NO">NO</option>
                      <option value="YES">YES</option>
                      <option value="ACUTE">ACUTE</option>
                    </Input>
                  </FormGroup>
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
                  <Label for="data-category">PlanBenefits </Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      required
                      name="planBenefitsCode_fk"
                      value={this.state.planBenefitsCode_fk}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select PlanBenefit
                      </option>
                      {this.state.planBenefitsList?.map((val) => {
                        return (
                          <option value={val?._id}>
                            {val?.planBenefitsCode}
                          </option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="12" className="">
                  <Label for="data-category">PreexDeductible</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      required
                      name="preexDeductible"
                      value={this.state.preexDeductible}
                      onChange={this.handlePlanBenefits}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select PreexDeductible
                      </option>
                      <option value="0">0</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                      <option value="250">250</option>
                      <option value="500">500</option>
                      <option value="750">750</option>
                      <option value="1000">1000</option>
                      <option value="1500">1500</option>
                      <option value="2000">2000</option>
                      <option value="2500">2500</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>PreexMaxCoverage</Label>
                  <Input
                    required
                    type="number"
                    name="preexMaxCoverage"
                    placeholder="preexMaxCoverage"
                    value={this.state.preexMaxCoverage}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>CoverageCntry</Label>
                  <Input
                    required
                    type="number"
                    name="CoverageCntry"
                    placeholder="CoverageCntry"
                    value={this.state.CoverageCntry}
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
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col> */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Plan
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
