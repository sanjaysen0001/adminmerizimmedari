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
let planTypeList = "";
export default class EditPlan extends Component {
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
      list: [{ name: "BASIC" }, { name: "PRE-EX" }],
      planBenefitsCode_fk: "",
      policy_ID_fk: "",
      planBenefitsList: [],
      policyList: [],
      planView: "",
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.PlanBenefitsList();
    this.AllPolicyList();
    this.ViewOne(id);
  }

  PlanBenefitsList = () => {
    axiosConfig.get("/benefite/view-benefite").then((response) => {
      this.setState({ planBenefitsList: response.data.Benefite });
    });
  };
  AllPolicyList = () => {
    axiosConfig
      .get("/admin/get_policies")
      .then((response) => {
        this.setState({ policyList: response.data.data });
      })
      .catch((er) => {
        console.log(er);
      });
  };
  ViewOne = (id) => {
    axiosConfig
      .get(`/plan/view-plan-by-id/${id}`)
      .then((response) => {
        console.log(response.data.Plan);
        const {
          planMinDays,
          preexCoverage,
          agesupportMin,
          agesupportMax,
          planMaximum,
          preexMaxCoverage,
          CoverageCntry,
          planDeductible,
          policy_ID_fk,
          planType,
          planBenefitsCode_fk,
        } = response.data.Plan;
        planTypeList = planType.map((el) => el.name);
        this.setState({
          planView: response.data.Plan,
          planMinDays: planMinDays,
          planType: planTypeList,
          agesupportMin: agesupportMin,
          agesupportMax: agesupportMax,
          planMaximum: planMaximum,
          planDeductible: planDeductible,
          preexCoverage: preexCoverage,
          // preexDeductible: "",
          preexMaxCoverage: preexMaxCoverage,
          CoverageCntry: CoverageCntry,
          // policy_combination_active: "",
          // selectedValue: "",
          // list: [{ name: "BASIC" }, { name: "PRE-EX" }],
          planBenefitsCode_fk: planBenefitsCode_fk?.policyNum,
          policy_ID_fk: policy_ID_fk?.policyName,
          // planBenefitsList: [],
          // policyList: [],
          // planView:"",
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSelect(selectedList, selectedItem) {
    console.log(selectedList);
    if (selectedList) {
      this.setState({ planType: selectedList });
    } else {
      this.setState({ planType: planTypeList });
    }
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
    };
    axiosConfig
      .post("/plan/save-plan", payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/plans/PlanList");
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
                  Plan List
                </BreadcrumbItem>
                <BreadcrumbItem active>EditPlan</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Plan
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
                    displayValue="name"
                    defaultValue={this.state.planType}
                  />
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
                      id="data-category"
                      name="policy_ID_fk"
                      value={this.state.policy_ID_fk}
                      onChange={this.handlePlanBenefits}
                      defaultValue={this.state.policy_ID_fk}
                    >
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
                      name="planBenefitsCode_fk"
                      value={this.state.planBenefitsCode_fk}
                      onChange={this.handlePlanBenefits}
                      defaultValue={this.state.planBenefitsCode_fk}
                    >
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
                      name="preexDeductible"
                      value={this.state.preexDeductible}
                      onChange={this.handlePlanBenefits}
                      defaultValue={this.state.preexDeductible}
                    >
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
                    EditPlan
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
