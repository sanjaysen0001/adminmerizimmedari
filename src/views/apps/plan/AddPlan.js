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
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
class AddPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planBenefitsCode: "",
      preExistingCoverage: "",
      Inacuteonset: "",
      preExMax: "",
      Inhospital_room: "",
      Inhostpital_intensive: "",
      Insurgeon: "",
      Inanesthtist: "",
      Inassistant_surgeon: "",
      Indoctors_nonsurgical: "",
      Inconsultant_doctor: "",
      Inpreadmission_tests: "",
      Outsurgical_room: "",
      Outsurgeon: "",
      Outanesthetist: "",
      Outassistant_surgeon: "",
      Outdoctors_nonsurgical: "",
      Outdiagnostic_xray: "",
      Outcat_scan: "",
      Outhostpital_emergency: "",
      Outprescription_drugs: "",
      Outambulance_services: "",
      Outrehabilation_braces: "",
      Outdental_treatment: "",
      Outchemotherapy: "",
      Outphysical_occupational: "",
      Outprivate_duty: "",
      Outpregnancy_childbirth: "",
      Outchiropractic_care: "",
      Outmisc_test_procedures: "",
      Outpsychotherapy: "",
      Outshots_injections: "",
      Outtelehealth: "",
      OutMental_Nervous_Disorder: "",
      Outmedical_evacuation: "",
      Outrepariation_remains: "",
      Outintercollegiate: "",
      Trip_HospitalAdmission_Guarantee: "",
      Trip_MedicalExpense_Guarantee: "",
      Trip_Baggage_Delay: "",
      Trip_Burial_Cremation: "",
      Trip_CheckedLostStolen_Baggage: "",
      Trip_FeloniousAssult_ViolentCrime: "",
      Trip_HospitalStay_Confinement: "",
      Trip_SeatBelt: "",
      Trip_Airbag: "",
      Trip_Cancellation: "",
      Trip_Delay: "",
      Trip_Interruption: "",
      policy_ID_fk: "",
      policyName_fk: "",
      policyUnderWriter_fk: "",
      policy_active_fk: "",
    };
  }

  onEditorStateChangePara = (editorState) => {
    console.log("para", editorState);
    this.setState({
      editorState,
      paraDescription: draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      ),
    });
  };
  onEditorStateChangepolicy = (editorState1) => {
    console.log("policy", editorState1);
    this.setState({
      editorState1,
      policyDescription: draftToHtml(
        convertToRaw(editorState1.getCurrentContent())
      ),
    });
  };
  componentDidMount() {
    axiosConfig
      .get("/admin/get_pt")
      .then((response) => {
        this.setState({ policyTypeList: response.data.data });
        console.log(response.data.data);
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  }
  changeHandler1 = (e) => {
    this.setState({ policyActive: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlePolicyType = (e) => {
    this.setState({ policyType: e.target.value });
  };
  handleImage = (e) => {
    this.setState({ plan_image: e.target.files[0] });
  };
  submitHandler = (e) => {
    e.preventDefault();
    // debugger;clg
    console.log(this.state);
    // const adminId = localStorage.getItem("AdminId");

    // const formdata = new FormData();
    // formdata.append("policyName", this.state.policyName);
    // formdata.append("policyNumL", this.state.policyNumber);
    // formdata.append("policyDesc", this.state.policyDescription);
    // formdata.append("policyUnderWriter", this.state.policyUnderWriter);
    // formdata.append("proproetary", this.state.proprietary);
    // formdata.append("policyType", this.state.policyType);
    // formdata.append("policyAdtional", this.state.policyAdditionalFeatures);
    // formdata.append("paraDesc", this.state.paraDescription);
    // formdata.append("policyPage", this.state.policy_page);
    // formdata.append("policyDocument", this.state.policy_document);
    // formdata.append("policyFAQ", this.state.policy_FAQ);
    // formdata.append("purchesLink", this.state.purchase_link);
    // formdata.append("brochureLink", this.state.brochure_link);
    // formdata.append("purched", this.state.purchased);
    // formdata.append("renewed", "csdccs");
    // if (this.state.plan_image !== null) {
    //   formdata.append("planimg", this.state.plan_image);
    // }
    // formdata.append("status", true);
    // axiosConfig
    //   .post(`/admin/add_policy/${adminId}`, formdata)
    //   .then((response) => {
    //     debugger;
    //     console.log(response);
    //     swal("Success!", "Submitted SuccessFull!", "success");
    //    })
    //   .catch((error) => {
    //     debugger;
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Add Plan"
          breadCrumbParent="Home"
          breadCrumbActive=" Add Plan "
        />
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
                    onClick={() => history.push("/app/plans/CreatedPlanList")}
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
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>PlanBenefitsCode </Label>
                  <Input
                    type="text"
                    name="PlanBenefitsCode"
                    placeholder="PlanBenefitsCode"
                    value={this.state.PlanBenefitsCode}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>PreExistingCoverage</Label>
                  <Input
                    type="text"
                    name="preExistingCoverage"
                    placeholder="preExistingCoverage"
                    value={this.state.preExisingCoverage}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inacuteonset </Label>
                  <Input
                    type="text"
                    name="Inacuteonset"
                    placeholder="Inacuteonset"
                    value={this.state.Inacuteonset}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>preExMax </Label>
                  <Input
                    type="text"
                    name="preExMax"
                    placeholder="preExMax"
                    value={this.state.preExMax}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inhospital_room </Label>
                  <Input
                    type="text"
                    name="Inhospital_room"
                    placeholder="Inhospital_room"
                    value={this.state.Inhospital_room}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inhostpital_intensive</Label>
                  <Input
                    type="text"
                    name="Inhostpital_intensive"
                    placeholder="Inhostpital_intensive"
                    value={this.state.Inhostpital_intensive}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Insurgeon </Label>
                  <Input
                    type="text"
                    name="Insurgeon"
                    placeholder="Insurgeon"
                    value={this.state.Insurgeon}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inanesthtist </Label>
                  <Input
                    type="text"
                    name="Inanesthtist"
                    placeholder="Inanesthtist"
                    value={this.state.Inanesthtist}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inassistant_surgeon </Label>
                  <Input
                    type="text"
                    name="Inassistant_surgeon"
                    placeholder="Inassistant_surgeon"
                    value={this.state.Inassistant_surgeon}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Indoctors Nonsurgical </Label>
                  <Input
                    type="text"
                    name="Indoctors_nonsurgical"
                    placeholder="Indoctors_nonsurgical"
                    value={this.state.Indoctors_nonsurgical}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inconsultant_doctor </Label>
                  <Input
                    type="text"
                    name="Inconsultant_doctor"
                    placeholder="Purchased"
                    value={this.state.Inconsultant_doctor}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Inpreadmission_tests </Label>
                  <Input
                    type="text"
                    name="Inpreadmission_tests"
                    placeholder="Inpreadmission_tests"
                    value={this.state.Inpreadmission_tests}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outsurgical_room </Label>
                  <Input
                    type="text"
                    name="Outsurgical_room"
                    placeholder="Outsurgical_room"
                    value={this.state.Outsurgical_room}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outsurgeon </Label>
                  <Input
                    type="text"
                    name="Outsurgeon"
                    placeholder="Outsurgeon"
                    value={this.state.Outsurgeon}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outanesthetist </Label>
                  <Input
                    type="text"
                    name="Outanesthetist"
                    placeholder="Outanesthetist"
                    value={this.state.Outanesthetist}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outassistant_surgeon </Label>
                  <Input
                    type="text"
                    name="Outassistant_surgeon"
                    placeholder="Outassistant_surgeon"
                    value={this.state.Outassistant_surgeon}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outdoctors_nonsurgical </Label>
                  <Input
                    type="text"
                    name="Outdoctors_nonsurgical"
                    placeholder="Outdoctors_nonsurgical"
                    value={this.state.Outdoctors_nonsurgical}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outdiagnostic_xray </Label>
                  <Input
                    type="text"
                    name="Outdiagnostic_xray"
                    placeholder="Outdoctors_nonsurgical"
                    value={this.state.Outdiagnostic_xray}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outcat_scan </Label>
                  <Input
                    type="text"
                    name="Outcat_scan"
                    placeholder="Outdoctors_nonsurgical"
                    value={this.state.Outcat_scan}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outhostpital_emergency </Label>
                  <Input
                    type="text"
                    name="Outhostpital_emergency"
                    placeholder="Outdoctors_nonsurgical"
                    value={this.state.Outhostpital_emergency}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outprescription_drugs </Label>
                  <Input
                    type="text"
                    name="Outprescription_drugs"
                    placeholder="Outprescription_drugs"
                    value={this.state.Outprescription_drugs}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outambulance_services </Label>
                  <Input
                    type="text"
                    name="Outambulance_services"
                    placeholder="Outambulance_services"
                    value={this.state.Outambulance_services}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outrehabilation_braces </Label>
                  <Input
                    type="text"
                    name="Outrehabilation_braces"
                    placeholder="Outrehabilation_braces"
                    value={this.state.Outrehabilation_braces}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outdental_treatment </Label>
                  <Input
                    type="text"
                    name="Outdental_treatment"
                    placeholder="Outdental_treatment"
                    value={this.state.Outdental_treatment}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outchemotherapy </Label>
                  <Input
                    type="text"
                    name="Outchemotherapy"
                    placeholder="Outchemotherapy"
                    value={this.state.Outchemotherapy}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outphysical_occupational </Label>
                  <Input
                    type="text"
                    name="Outphysical_occupational"
                    placeholder="Outphysical_occupational"
                    value={this.state.Outphysical_occupational}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outprivate_duty </Label>
                  <Input
                    type="text"
                    name="Outprivate_duty"
                    placeholder="Outprivate_duty"
                    value={this.state.Outprivate_duty}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outpregnancy_childbirth </Label>
                  <Input
                    type="text"
                    name="Outpregnancy_childbirth"
                    placeholder="Outpregnancy_childbirth"
                    value={this.state.Outpregnancy_childbirth}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outchiropractic_care </Label>
                  <Input
                    type="text"
                    name="Outchiropractic_care"
                    placeholder="Outchiropractic_care"
                    value={this.state.Outchiropractic_care}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outmisc_test_procedures </Label>
                  <Input
                    type="text"
                    name="Outmisc_test_procedures"
                    placeholder="Outmisc_test_procedures"
                    value={this.state.Outmisc_test_procedures}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outpsychotherapy </Label>
                  <Input
                    type="text"
                    name="Outpsychotherapy"
                    placeholder="Outpsychotherapy"
                    value={this.state.Outpsychotherapy}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outshots Injections </Label>
                  <Input
                    type="text"
                    name="Outshots_injections"
                    placeholder="Outshots Injections"
                    value={this.state.Outshots_injections}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>OutteleHealth </Label>
                  <Input
                    type="text"
                    name="Outtelehealth"
                    placeholder="Outtelehealth"
                    value={this.state.Outtelehealth}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>OutMental Nervous Disorder </Label>
                  <Input
                    type="text"
                    name="OutMental_Nervous_Disorder"
                    placeholder="OutMental Nervous Disorder"
                    value={this.state.OutMental_Nervous_Disorder}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outmedical Evacuation </Label>
                  <Input
                    type="text"
                    name="Outmedical_evacuation"
                    placeholder="Outmedical_evacuation"
                    value={this.state.Outmedical_evacuation}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outrepariation_remains </Label>
                  <Input
                    type="text"
                    name="Outrepariation_remains"
                    placeholder="Outrepariation_remains"
                    value={this.state.Outrepariation_remains}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outintercollegiate </Label>
                  <Input
                    type="text"
                    name="Outintercollegiate"
                    placeholder="Outintercollegiate"
                    value={this.state.Outintercollegiate}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Outaccidental_death </Label>
                  <Input
                    type="text"
                    name="Outaccidental_death"
                    placeholder="Outaccidental_death"
                    value={this.state.Outaccidental_death}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip_HospitalAdmission_Guarantee </Label>
                  <Input
                    type="text"
                    name="Trip_HospitalAdmission_Guarantee"
                    placeholder="Trip_HospitalAdmission_Guarantee"
                    value={this.state.Trip_HospitalAdmission_Guarantee}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip MedicalExpense Guarantee </Label>
                  <Input
                    type="text"
                    name="Trip_MedicalExpense_Guarantee"
                    placeholder="Trip_MedicalExpense_Guarantee"
                    value={this.state.Trip_MedicalExpense_Guarantee}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip Baggage Delay </Label>
                  <Input
                    type="text"
                    name="Trip_Baggage_Delay"
                    placeholder="Trip_Baggage_Delay"
                    value={this.state.Trip_Baggage_Delay}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip Burial Cremation </Label>
                  <Input
                    type="text"
                    name="Trip_Burial_Cremation"
                    placeholder="Trip_Burial_Cremation"
                    value={this.state.Trip_Burial_Cremation}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip CheckedLostStolen Baggage </Label>
                  <Input
                    type="text"
                    name="Trip_CheckedLostStolen_Baggage"
                    placeholder="Trip_CheckedLostStolen_Baggage"
                    value={this.state.Trip_CheckedLostStolen_Baggage}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip FeloniousAssult ViolentCrime </Label>
                  <Input
                    type="text"
                    name="Trip_FeloniousAssult_ViolentCrime"
                    placeholder="Trip_FeloniousAssult_ViolentCrime"
                    value={this.state.Trip_FeloniousAssult_ViolentCrime}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip HospitalStay Confinement </Label>
                  <Input
                    type="text"
                    name="Trip_HospitalStay_Confinement"
                    placeholder="Trip_HospitalStay_Confinement"
                    value={this.state.Trip_HospitalStay_Confinement}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip SeatBelt </Label>
                  <Input
                    type="text"
                    name="Trip_SeatBelt"
                    placeholder="Trip_SeatBelt"
                    value={this.state.Trip_SeatBelt}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip Airbag </Label>
                  <Input
                    type="text"
                    name="Trip_Airbag"
                    placeholder="Trip_Airbag"
                    value={this.state.Trip_Airbag}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip Cancellation </Label>
                  <Input
                    type="text"
                    name="Trip_Cancellation"
                    placeholder="Trip_Cancellation"
                    value={this.state.Trip_Cancellation}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip Delay </Label>
                  <Input
                    type="text"
                    name="Trip_Delay"
                    placeholder="Trip_Delay"
                    value={this.state.Trip_Delay}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Trip_Interruption </Label>
                  <Input
                    type="text"
                    name="Trip_Interruption"
                    placeholder="Trip_Interruption"
                    value={this.state.Trip_Interruption}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Policy_ID_fk </Label>
                  <Input
                    type="text"
                    name="policy_ID_fk"
                    placeholder="policy_ID_fk"
                    value={this.state.policy_ID_fk}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>PolicyName_fk </Label>
                  <Input
                    type="text"
                    name="policyName_fk"
                    placeholder="policyName_fk"
                    value={this.state.policyName_fk}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>PolicyUnderWriter_fk </Label>
                  <Input
                    type="text"
                    name="policyUnderWriter_fk"
                    placeholder="policyUnderWriter_fk"
                    value={this.state.policyUnderWriter_fk}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>Policy Active_fk </Label>
                  <Input
                    type="text"
                    name="policy_active_fk"
                    placeholder="policy_active_fk"
                    value={this.state.policy_active_fk}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="4" md="4" sm="12" className="mb-2">
                <Label for="data-category">Policy Type</Label>
                  <Input
                    type="select"
                    id="data-category"
                    value={this.state.policyType}
                    onChange={this.handlePolicyType}
                  >
                    <option value="">Select PolicyType</option>
                    {this.state.policyTypeList?.map((itm) => (
                      <option key={itm._id} value={itm._id}>
                        {itm.pt_type}
                      </option>
                    ))}
                  </Input>
                </Col> */}
                {/* <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>ParaDescription </Label>
                  <Input
                    type="text"
                    name="paraDescription"
                    placeholder="ParaDescription"
                    value={this.state.paraDescription}
                    onChange={this.changeHandler}
                  />
                </Col>{" "} */}
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
                </Col> */}
                {/* <Col lg="6" md="6" sm="12" className="mb-2">
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
                {/* <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Plan Image </Label>
                  <Input
                    type="file"
                    name="plan_image"
                    onChange={this.handleImage}
                  />
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
                      value="Active"
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

export default AddPlan;
