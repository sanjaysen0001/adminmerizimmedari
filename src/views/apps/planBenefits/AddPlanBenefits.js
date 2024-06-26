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
import Multiselect from "multiselect-react-dropdown";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import "../../../assets/scss/pages/users.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import {
  optionsList,
  InacuteonsetList,
  preExMaxList,
  Inhospital_roomList,
  Inhostpital_intensiveList,
  Insurgeon,
  Inanesthtist,
  Inassistant_surgeon,
  Indoctors_nonsurgical,
  Inconsultant_doctor,
  Inpreadmission_tests,
  Outsurgical_room,
  Outsurgeon,
  Outanesthetist,
  Outassistant_surgeon,
  Outdoctors_nonsurgical,
  Outdiagnostic_xray,
  Outcat_scan,
  Outhostpital_emergency,
  Outprescription_drugs,
  Outrehabilation_braces,
  Outambulance_services,
} from "./contans";
class AddPlanBenefits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: "",
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
      selectedOptions: [],
      preExistingCoverageData: [{}],
      selectedValue: [],
      preExMaxarr: [],
      InhospitalRoomarr: [],
      InhostpitalIntensiveArr: [],
      InsurgeonArr: [],
      Inassistant_surgeonArr: [],
      InanesthtArr: [],
      Indoctors_nonsurgicalArr: [],
      Inconsultant_doctorArr: [],
      Inpreadmission_testsArr: [],
      Outsurgical_roomArr: [],
      OutsurgeonArr: [],
      OutanesthetistArr: [],
      Outassistant_surgeonArr: [],
      Outdoctors_nonsurgicalArr: [],
      Outdiagnostic_xrayArr: [],
      Outcat_scanArr: [],
      Outhostpital_emergencyArr: [],
      Outprescription_drugsArr: [],
      Outrehabilation_bracesArr: [],
      Outambulance_servicesArr: [],
    };
    this.state = {
      options: optionsList,
      InacuteonsetList: InacuteonsetList,
      preExMaxList: preExMaxList,
      InhospitalRoomList: Inhospital_roomList,
      InhostpitalIntensiveList: Inhostpital_intensiveList,
      // new list
      InsurgeonList: Insurgeon,
      InanesthtList: Inanesthtist,
      Inassistant_surgeonList: Inassistant_surgeon,
      Indoctors_nonsurgicalList: Indoctors_nonsurgical,
      Inconsultant_doctorList: Inconsultant_doctor,
      Inpreadmission_testsList: Inpreadmission_tests,
      Outsurgical_roomList: Outsurgical_room,

      OutsurgeonList: Outsurgeon,
      OutanesthetistList: Outanesthetist,
      Outassistant_surgeonList: Outassistant_surgeon,
      Outdoctors_nonsurgicalList: Outdoctors_nonsurgical,
      Outdiagnostic_xrayList: Outdiagnostic_xray,
      Outcat_scanList: Outcat_scan,
      Outhostpital_emergencyList: Outhostpital_emergency,
      Outprescription_drugsList: Outprescription_drugs,
      Outrehabilation_bracesList: Outrehabilation_braces,
      Outambulance_servicesList: Outambulance_services,
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSelect1 = this.onSelect1.bind(this);
    this.onRemove1 = this.onRemove1.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
    this.onRemove2 = this.onRemove2.bind(this);
    this.onSelect3 = this.onSelect3.bind(this);
    this.onRemove3 = this.onRemove3.bind(this);
    this.onSelect4 = this.onSelect4.bind(this);
    this.onRemove4 = this.onRemove4.bind(this);
    this.onSelect5 = this.onSelect5.bind(this);
    this.onRemove5 = this.onRemove5.bind(this);
    this.onSelect6 = this.onSelect6.bind(this);
    this.onRemove6 = this.onRemove6.bind(this);
    this.onSelect7 = this.onSelect7.bind(this);
    this.onRemove7 = this.onRemove7.bind(this);
    this.onSelect8 = this.onSelect8.bind(this);
    this.onRemove8 = this.onRemove8.bind(this);
    this.onSelect9 = this.onSelect9.bind(this);
    this.onRemove9 = this.onRemove9.bind(this);
    this.onSelect10 = this.onSelect10.bind(this);
    this.onRemove10 = this.onRemove10.bind(this);
    this.onSelect11 = this.onSelect11.bind(this);
    this.onRemove11 = this.onRemove11.bind(this);
    this.onSelect12 = this.onSelect12.bind(this);
    this.onRemove12 = this.onRemove12.bind(this);
    this.onSelect13 = this.onSelect13.bind(this);
    this.onRemove13 = this.onRemove13.bind(this);
    this.onSelect14 = this.onSelect14.bind(this);
    this.onRemove14 = this.onRemove14.bind(this);
    this.onSelect15 = this.onSelect15.bind(this);
    this.onRemove15 = this.onRemove15.bind(this);
    this.onSelect16 = this.onSelect16.bind(this);
    this.onRemove16 = this.onRemove16.bind(this);
    this.onSelect17 = this.onSelect17.bind(this);
    this.onRemove17 = this.onRemove17.bind(this);
    this.onSelect18 = this.onSelect18.bind(this);
    this.onRemove18 = this.onRemove18.bind(this);
    this.onSelect19 = this.onSelect19.bind(this);
    this.onRemove19 = this.onRemove19.bind(this);
    this.onSelect20 = this.onSelect20.bind(this);
    this.onRemove20 = this.onRemove20.bind(this);
  }

  // onEditorStateChangePara = (editorState) => {
  //   this.setState({
  //     editorState,
  //     paraDescription: draftToHtml(
  //       convertToRaw(editorState.getCurrentContent())
  //     ),
  //   });
  // };
  // onEditorStateChangepolicy = (editorState1) => {
  //   this.setState({
  //     editorState1,
  //     policyDescription: draftToHtml(
  //       convertToRaw(editorState1.getCurrentContent())
  //     ),
  //   });
  // };

  componentDidMount() {
    this.AllPolicyList();
    this.policyType();
  }
  policyType = () => {
    axiosConfig
      .get("/admin/get_pt")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ policyTypeList: response.data.data });
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  };
  AllPolicyList = () => {
    axiosConfig.get("/admin/get_policies").then((response) => {
      console.log(response.data.data);
      this.setState({ policyList: response.data.data });
    });
  };
  onSelect(selectedList, selectedItem) {
    console.log(selectedList);
    this.setState({ preExistingCoverageData: selectedList });
  }

  onRemove(selectedList, removedItem) {
    console.log(removedItem);
    this.setState({ preExistingCoverageData: selectedList });
  }
  onSelect1(selectedList, selectedItem) {
    this.setState({ selectedValue: selectedList });
  }

  onRemove1(selectedList, removedItem) {
    this.setState({ selectedValue: selectedList });
  }
  onSelect2(selectedList, selectedItem) {
    this.setState({ preExMaxarr: selectedList });
  }

  onRemove2(selectedList, removedItem) {
    this.setState({ preExMaxarr: selectedList });
  }
  onSelect3(selectedList, selectedItem) {
    this.setState({ InhospitalRoomarr: selectedList });
  }

  onRemove3(selectedList) {
    this.setState({ InhospitalRoomarr: selectedList });
  }
  onSelect4(selectedList) {
    this.setState({ InhostpitalIntensiveArr: selectedList });
  }

  onRemove4(selectedList) {
    this.setState({ InhostpitalIntensiveArr: selectedList });
  }
  onSelect5(selectedList) {
    this.setState({ InsurgeonArr: selectedList });
  }

  onRemove5(selectedList) {
    this.setState({ InsurgeonArr: selectedList });
  }
  onSelect6(selectedList) {
    this.setState({ InanesthtArr: selectedList });
  }

  onRemove6(selectedList) {
    this.setState({ InanesthtArr: selectedList });
  }
  onSelect7(selectedList) {
    this.setState({ Inassistant_surgeonArr: selectedList });
    console.log(this.state.Inassistant_surgeonArr);
  }

  onRemove7(selectedList) {
    this.setState({ Inassistant_surgeonArr: selectedList });
  }
  onSelect8(selectedList) {
    this.setState({ Indoctors_nonsurgicalArr: selectedList });
    console.log(this.state.Inassistant_surgeonArr);
  }

  onRemove8(selectedList) {
    this.setState({ Indoctors_nonsurgicalArr: selectedList });
  }

  onSelect9(selectedList) {
    this.setState({ Inconsultant_doctorArr: selectedList });
  }

  onRemove9(selectedList) {
    this.setState({ Inconsultant_doctorArr: selectedList });
  }
  onSelect10(selectedList) {
    this.setState({ Inpreadmission_testsArr: selectedList });
  }

  onRemove10(selectedList) {
    this.setState({ Inpreadmission_testsArr: selectedList });
  }
  onSelect11(selectedList) {
    this.setState({ Outsurgical_roomArr: selectedList });
  }

  onRemove11(selectedList) {
    this.setState({ Outsurgical_roomArr: selectedList });
  }
  onSelect12(selectedList) {
    this.setState({ OutsurgeonArr: selectedList });
  }

  onRemove12(selectedList) {
    this.setState({ OutsurgeonArr: selectedList });
  }
  onSelect13(selectedList) {
    this.setState({ OutanesthetistArr: selectedList });
  }

  onRemove13(selectedList) {
    this.setState({ OutanesthetistArr: selectedList });
  }
  onSelect14(selectedList) {
    this.setState({ Outassistant_surgeonArr: selectedList });
  }

  onRemove14(selectedList) {
    this.setState({ Outassistant_surgeonArr: selectedList });
  }
  onSelect15(selectedList) {
    this.setState({ Outdoctors_nonsurgicalArr: selectedList });
  }

  onRemove15(selectedList) {
    this.setState({ Outdoctors_nonsurgicalArr: selectedList });
  }
  onSelect16(selectedList) {
    this.setState({ Outdiagnostic_xrayArr: selectedList });
  }

  onRemove16(selectedList) {
    this.setState({ Outdiagnostic_xrayArr: selectedList });
  }
  onSelect17(selectedList) {
    this.setState({ Outcat_scanArr: selectedList });
  }

  onRemove17(selectedList) {
    this.setState({ Outcat_scanArr: selectedList });
  }
  onSelect18(selectedList) {
    this.setState({ Outhostpital_emergencyArr: selectedList });
  }

  onRemove18(selectedList) {
    this.setState({ Outhostpital_emergencyArr: selectedList });
  }
  onSelect19(selectedList) {
    console.log(selectedList);
    this.setState({ Outprescription_drugsArr: selectedList });
  }

  onRemove19(selectedList) {
    console.log(selectedList);
    this.setState({ Outprescription_drugsArr: selectedList });
  }
  onSelect20(selectedList) {
    this.setState({ Outrehabilation_bracesArr: selectedList });
  }

  onRemove20(selectedList) {
    this.setState({ Outrehabilation_bracesArr: selectedList });
  }
  onSelect21(selectedList) {
    this.setState({ Outambulance_servicesArr: selectedList });
  }

  onRemove21(selectedList) {
    this.setState({ Outambulance_servicesArr: selectedList });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePlanBenefits = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const adminId = localStorage.getItem("AdminId");
    const payload = {
      planBenefitsCode: this.state.planBenefitsCode,
      policy_ID_fk: this.state.policyName,
      preExistingCoverage: this.state.preExistingCoverageData,
      preExMax: this.state.preExMaxarr,
      Inacuteonset: this.state.selectedValue,
      Inhospital_room: this.state.InhospitalRoomarr,
      Inhostpital_intensive: this.state.InhostpitalIntensiveArr,
      Insurgeon: this.state.InsurgeonArr,
      Inanesthtist: this.state.InanesthtArr,
      Inassistant_surgeon: this.state.Inassistant_surgeonArr,
      Indoctors_nonsurgical: this.state.Indoctors_nonsurgicalArr,
      Inconsultant_doctor: this.state.Inconsultant_doctorArr,
      Inpreadmission_tests: this.state.Inpreadmission_testsArr,
      Outsurgical_room: this.state.Outsurgical_roomArr,
      Outsurgeon: this.state.OutsurgeonArr,
      Outanesthetist: this.state.OutanesthetistArr,
      Outassistant_surgeon: this.state.Outassistant_surgeonArr,
      Outdoctors_nonsurgical: this.state.Outdoctors_nonsurgicalArr,
      Outdiagnostic_xray: this.state.Outdiagnostic_xrayArr,
      Outcat_scan: this.state.Outcat_scanArr,
      Outhostpital_emergency: this.state.Outhostpital_emergencyArr,
      Outprescription_drugs: this.state.Outprescription_drugs,
      Outambulance_services: this.state.Outambulance_servicesArr,
      Outrehabilation_braces: this.state.Outrehabilation_bracesArr,
      Outdental_treatment: this.state.Outdental_treatmentArr,
      Outchemotherapy: this.state.OutchemotherapyArr,
      Outphysical_occupational: this.state.Outphysical_occupationalArr,
      Outprivate_duty: this.state.Outprivate_dutyArr,
      Outpregnancy_childbirth: this.state.Outpregnancy_childbirthArr,
      Outchiropractic_care: this.state.Outchiropractic_careArr,
      Outpsychotherapy: this.state.OutpsychotherapyArr,
      Outmisc_test_procedures: this.state.Outmisc_test_proceduresArr,
      Outtelehealth: this.state.OuttelehealthArr,
      Outshots_injections: this.state.Outshots_injectionsArr,
      OutMental_Nervous_Disorder: this.state.OutMental_Nervous_DisorderArr,
      Outmedical_evacuation: this.state.Outmedical_evacuationArr,
      Outrepariation_remains: this.state.Outrepariation_remainsArr,
      Outintercollegiate: this.state.OutintercollegiateArr,
      Outaccidental_death: this.state.Outaccidental_deathArr,
      Trip_HospitalAdmission_Guarantee:
        this.state.Trip_HospitalAdmission_GuaranteeArr,
      Trip_MedicalExpense_Guarantee:
        this.state.Trip_MedicalExpense_GuaranteeArr,
      Trip_Baggage_Delay: this.state.Trip_Baggage_DelayArr,
      Trip_Burial_Cremation: this.state.Trip_Burial_CremationArr,
      Trip_CheckedLostStolen_Baggage:
        this.state.Trip_CheckedLostStolen_BaggageArr,
      Trip_FeloniousAssult_ViolentCrime:
        this.state.Trip_FeloniousAssult_ViolentCrimeArr,
      Trip_HospitalStay_Confinement:
        this.state.Trip_HospitalStay_ConfinementArr,
      Trip_SeatBelt: this.state.Trip_SeatBeltArr,
      Trip_Airbag: this.state.Trip_AirbagArr,
      Trip_Cancellation: this.state.Trip_CancellationArr,
      Trip_Delay: this.state.Trip_DelayArr,
      Trip_Interruption: this.state.Trip_InterruptionArr,
      created_by: adminId,
    };
    console.log(payload);
    debugger;
    axiosConfig
      .post(`/benefite/save-benefite`, payload)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/plans/PlanBenefitList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Add PlanBenefits"
          breadCrumbParent="Home"
          breadCrumbActive=" Add PlanBenefits "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add PlanBenefits
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/plans/PlanBenefitList")}
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
                  <Label for="data-category">PlanBenefitsCode</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      name="planBenefitsCode"
                      value={this.state.planBenefitsCode}
                      onChange={this.handlePlanBenefits}
                    >
                      <option value="">Select PlanBenefitsCode</option>
                      <option value="classico_10">classico_10</option>
                      <option value="DIP_AME_100_ST">DIP_AME_100_ST</option>
                      <option value="DIP_AME_1000_ST">DIP_AME_1000_ST</option>
                      <option value="DIP_AME_20_ST">DIP_AME_20_ST</option>
                      <option value="DIP_AME_250_ST">DIP_AME_250_ST</option>
                      <option value="DIP_AME_50_ST">DIP_AME_50_ST</option>
                      <option value="DIP_AME_500_ST">DIP_AME_500_ST</option>
                      <option value="DIP_INT_100_ST">DIP_INT_100_ST</option>
                      <option value="DIP_INT_1000_ST">DIP_INT_1000_ST</option>
                      <option value="DIP_INT_20_ST">DIP_INT_20_ST</option>
                      <option value="DIP_INT_250_ST">DIP_INT_250_ST</option>
                      <option value="DIP_INT_50_ST">DIP_INT_50_ST</option>
                      <option value="DIP_INT_500_ST">DIP_INT_500_ST</option>
                      <option value="DIP_OTH_100_ST">DIP_OTH_100_ST</option>
                      <option value="DIP_OTH_1000_ST">DIP_OTH_1000_ST</option>
                      <option value="DIP_OTH_20_ST">DIP_OTH_20_ST</option>
                      <option value="DIP_OTH_500_ST">DIP_OTH_500_ST</option>
                      <option value="DIP_USA_100_ST">DIP_USA_100_ST</option>
                      <option value="DIP_USA_1000_ST">DIP_USA_1000_ST</option>
                      <option value="DIP_USA_20_ST">DIP_USA_20_ST</option>
                      <option value="DIP_USA_500_ST">DIP_USA_500_ST</option>
                      <option value="HOP_CLA_10_PR">HOP_CLA_10_PR</option>
                      <option value="HOP_MIN_25_PR">HOP_MIN_25_PR</option>
                      <option value="HOP_MIN_50_PR">HOP_MIN_50_PR</option>
                      <option value="HOP_MIN_75_PR">HOP_MIN_75_PR</option>
                      <option value="HOP_TA_150_PR">HOP_TA_150_PR</option>
                      <option value="HOP_TA_300_PR">HOP_TA_300_PR</option>
                      <option value="HOP_TA_60_PR">HOP_TA_60_PR</option>
                      <option value="HOP_ULT_30_PR">HOP_ULT_30_PR</option>
                      <option value="HOP_ULTPL_60_PR">HOP_ULTPL_60_PR</option>
                      <option value="HOP_VIP_100_PR">HOP_VIP_100_PR</option>
                      <option value="HOP_VIP_250_PR">HOP_VIP_250_PR</option>
                      <option value="HOP_WHOP_1000_PR">HOP_WHOP_1000_PR</option>
                      <option value="HOP_WHOP_150_PR">HOP_WHOP_150_PR</option>
                      <option value="HOP_WHOP_250_PR">HOP_WHOP_250_PR</option>
                      <option value="HOP_WHOP_300_PR">HOP_WHOP_300_PR</option>
                      <option value="HOP_WHOP_500_PR">HOP_WHOP_500_PR</option>
                      <option value="INF_ADD_100_ST">INF_ADD_100_ST</option>
                      <option value="INF_ADD_25_ST">INF_ADD_25_ST</option>
                      <option value="INF_ADD_50_ST">INF_ADD_50_ST</option>
                      <option value="INF_ADV_150_ACUTE">
                        INF_ADV_150_ACUTE
                      </option>
                      <option value="INF_ADV_150_ST">INF_ADV_150_ST</option>
                      <option value="INF_ADV_75_ACUTE">INF_ADV_75_ACUTE</option>
                      <option value="INF_ADV_75_ST">INF_ADV_75_ST</option>
                      <option value="INF_CHO_100_ACUTE">
                        INF_CHO_100_ACUTE
                      </option>
                      <option value="INF_CHO_150_ACUTE">
                        INF_CHO_150_ACUTE
                      </option>
                      <option value="INF_CHO_25_ACUTE">INF_CHO_25_ACUTE</option>
                      <option value="INF_CHO_250_ACUTE">
                        INF_CHO_250_ACUTE
                      </option>
                      <option value="INF_CHO_50_ACUTE">INF_CHO_50_ACUTE</option>
                      <option value="INF_CHO_75_ACUTE">INF_CHO_75_ACUTE</option>
                      <option value="INF_ELI_150_PR">INF_ELI_150_PR</option>
                      <option value="INF_ELI_250_PR">INF_ELI_250_PR</option>
                      <option value="INF_ELI_300_PR">INF_ELI_300_PR</option>
                      <option value="INF_ELI_75_PR">INF_ELI_75_PR</option>
                      <option value="INF_ELI_ST_150_PR">
                        INF_ELI_ST_150_PR
                      </option>
                      <option value="INF_ELI_ST_75_PR">INF_ELI_ST_75_PR</option>
                      <option value="INF_ELI90_150_PLUS">
                        INF_ELI90_150_PLUS
                      </option>
                      <option value="INF_ELI90_150_PR">INF_ELI90_150_PR</option>
                      <option value="INF_ELI90_250_PLUS">
                        INF_ELI90_250_PLUS
                      </option>
                      <option value="INF_ELI90_250_PR">INF_ELI90_250_PR</option>
                      <option value="INF_ELI90_300_PLUS">
                        INF_ELI90_300_PLUS
                      </option>
                      <option value="INF_ELI90_300_PR">INF_ELI90_300_PR</option>
                      <option value="INF_ELI90_75_PLUS">
                        INF_ELI90_75_PLUS
                      </option>
                      <option value="INF_PRE_100_PR">INF_PRE_100_PR</option>
                      <option value="INF_PRE_1000_PR">INF_PRE_1000_PR</option>
                      <option value="INF_PRE_150_PR">INF_PRE_150_PR</option>
                      <option value="INF_PRE_300_PLUS">INF_PRE_300_PLUS</option>
                      <option value="INF_PRE_300_PR">INF_PRE_300_PR</option>
                      <option value="INF_PRE_500_PR">INF_PRE_500_PR</option>
                      <option value="INF_PRE_ST_100_PR">
                        INF_PRE_ST_100_PR
                      </option>
                      <option value="INF_PRE_ST_150_PR">
                        INF_PRE_ST_150_PR
                      </option>
                      <option value="INF_SEL_100_ST">INF_SEL_100_ST</option>
                      <option value="INF_SEL_25_ST">INF_SEL_25_ST</option>
                      <option value="INF_SEL_50_ST">INF_SEL_50_ST</option>
                      <option value="INF_SEL_75_ST">INF_SEL_75_ST</option>
                      <option value="INF_STA_100_ST">INF_STA_100_ST</option>
                      <option value="INF_STA_150_ST">INF_STA_150_ST</option>
                      <option value="INF_STA_50_ST">INF_STA_50_ST</option>
                      <option value="INF_TRA_150_ST">INF_TRA_150_ST</option>
                      <option value="INF_TRA_250_ST">INF_TRA_250_ST</option>
                      <option value="INF_TRA_300_ST">INF_TRA_300_ST</option>
                      <option value="INF_TRA_75_ST">INF_TRA_75_ST</option>
                      <option value="INF_TRA90_150_ST">INF_TRA90_150_ST</option>
                      <option value="INF_TRA90_250_ST">INF_TRA90_250_ST</option>
                      <option value="INF_TRA90_300_ST">INF_TRA90_300_ST</option>
                      <option value="INF_TRA90_75_ST">INF_TRA90_75_ST</option>
                      <option value="INF_VISACARE_USA_80_100">
                        INF_VISACARE_USA_80_100
                      </option>
                      <option value="INF_VISACARE_USA_80_150">
                        INF_VISACARE_USA_80_150
                      </option>
                      <option value="INF_VISACARE_USA_80_300">
                        INF_VISACARE_USA_80_300
                      </option>
                      <option value="INF_VISACARE_USA_80_75">
                        INF_VISACARE_USA_80_75
                      </option>
                      <option value="INF_VISACARE_USA_90_100">
                        INF_VISACARE_USA_90_100
                      </option>
                      <option value="INF_VISACARE_USA_90_150">
                        INF_VISACARE_USA_90_150
                      </option>
                      <option value="INF_VISACARE_USA_90_75">
                        INF_VISACARE_USA_90_75
                      </option>
                      <option value="Ultra_30">Ultra_30</option>
                      <option value="UltraPlus_60">UltraPlus_60</option>
                      <option value="USVisit-Pro_90_100">
                        USVisit-Pro_90_100
                      </option>
                      <option value="USVisit-Pro_90_150">
                        USVisit-Pro_90_150
                      </option>
                      <option value="USVisit-Pro_90_300">
                        USVisit-Pro_90_300
                      </option>
                      <option value="USVisit-Pro_90_75">
                        USVisit-Pro_90_75
                      </option>
                      <option value="VIP_100 VIPPlus_250">
                        VIP_100 VIPPlus_250
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="" lg="6" md="6" sm="12">
                  <Label>PreExistingCoverage</Label>
                  <Multiselect
                    options={this.state.options}
                    selectedValues={this.state.preExistingCoverageData}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                    displayValue="name"
                  />
                </Col>
                <Col className="" lg="6" md="6" sm="12">
                  <Label for="data-category">Inacuteonset</Label>
                  <Multiselect
                    options={this.state.InacuteonsetList}
                    selectedValues={this.state.selectedValue}
                    onSelect={this.onSelect1}
                    onRemove={this.onRemove1}
                    displayValue="name"
                  />
                </Col>
                <Col className="" lg="6" md="6" sm="12">
                  <Label for="data-category">PreExMax</Label>
                  <Multiselect
                    options={this.state.preExMaxList}
                    selectedValues={this.state.preExMaxarr}
                    onSelect={this.onSelect2}
                    onRemove={this.onRemove2}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inhospital Room</Label>
                  <Multiselect
                    options={this.state.InhospitalRoomList}
                    selectedValues={this.state.InhospitalRoomarr}
                    onSelect={this.onSelect3}
                    onRemove={this.onRemove3}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inhostpital Intensive</Label>
                  <Multiselect
                    options={this.state.InhostpitalIntensiveList}
                    selectedValues={this.state.InhostpitalIntensiveArr}
                    onSelect={this.onSelect4}
                    onRemove={this.onRemove4}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Insurgeon </Label>
                  <Multiselect
                    options={this.state.InsurgeonList}
                    selectedValues={this.state.InsurgeonArr}
                    onSelect={this.onSelect5}
                    onRemove={this.onRemove5}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inanesthtist </Label>
                  <Multiselect
                    options={this.state.InanesthtList}
                    selectedValues={this.state.InanesthtArr}
                    onSelect={this.onSelect6}
                    onRemove={this.onRemove6}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inassistant surgeon </Label>
                  <Multiselect
                    options={this.state.Inassistant_surgeonList}
                    selectedValues={this.state.Inassistant_surgeonArr}
                    onSelect={this.onSelect7}
                    onRemove={this.onRemove7}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Indoctors Nonsurgical</Label>
                  <Multiselect
                    options={this.state.Indoctors_nonsurgicalList}
                    selectedValues={this.state.Indoctors_nonsurgicalArr}
                    onSelect={this.onSelect8}
                    onRemove={this.onRemove8}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inconsultant Doctor </Label>
                  <Multiselect
                    options={this.state.Inconsultant_doctorList}
                    selectedValues={this.state.Inconsultant_doctorArr}
                    onSelect={this.onSelect9}
                    onRemove={this.onRemove9}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Inpreadmission Tests </Label>
                  <Multiselect
                    options={this.state.Inpreadmission_testsList}
                    selectedValues={this.state.Inpreadmission_testsArr}
                    onSelect={this.onSelect10}
                    onRemove={this.onRemove10}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outsurgical Room </Label>
                  <Multiselect
                    options={this.state.Outsurgical_roomList}
                    selectedValues={this.state.Outsurgical_roomArr}
                    onSelect={this.onSelect11}
                    onRemove={this.onRemove11}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outsurgeon</Label>
                  <Multiselect
                    options={this.state.OutsurgeonList}
                    selectedValues={this.state.OutsurgeonArr}
                    onSelect={this.onSelect12}
                    onRemove={this.onRemove12}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outanesthetist</Label>
                  <Multiselect
                    options={this.state.OutanesthetistList}
                    selectedValues={this.state.OutanesthetistArr}
                    onSelect={this.onSelect13}
                    onRemove={this.onRemove13}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outassistant Surgeon</Label>
                  <Multiselect
                    options={this.state.Outassistant_surgeonList}
                    selectedValues={this.state.Outassistant_surgeonArr}
                    onSelect={this.onSelect14}
                    onRemove={this.onRemove14}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outdoctors Nonsurgical</Label>
                  <Multiselect
                    options={this.state.Outdoctors_nonsurgicalList}
                    selectedValues={this.state.Outdoctors_nonsurgicalArr}
                    onSelect={this.onSelect15}
                    onRemove={this.onRemove15}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outdiagnostic_xray</Label>
                  <Multiselect
                    options={this.state.Outdiagnostic_xrayList}
                    selectedValues={this.state.Outdiagnostic_xrayArr}
                    onSelect={this.onSelect16}
                    onRemove={this.onRemove16}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outcat Scan</Label>
                  <Multiselect
                    options={this.state.Outcat_scanList}
                    selectedValues={this.state.Outcat_scanArr}
                    onSelect={this.onSelect17}
                    onRemove={this.onRemove17}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category">Outhostpital Emergency</Label>
                  <Multiselect
                    options={this.state.Outhostpital_emergencyList}
                    selectedValues={this.state.Outhostpital_emergencyArr}
                    onSelect={this.onSelect18}
                    onRemove={this.onRemove18}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category"> Outprescription Drugs</Label>
                  <Multiselect
                    options={this.state.Outprescription_drugsList}
                    selectedValues={this.state.Outprescription_drugsArr}
                    onSelect={this.onSelect19}
                    onRemove={this.onRemove19}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category"> Outambulance_services</Label>
                  <Multiselect
                    options={this.state.Outambulance_servicesList}
                    selectedValues={this.state.Outambulance_servicesArr}
                    onSelect={this.onSelect20}
                    onRemove={this.onRemove20}
                    displayValue="name"
                  />
                </Col>
                {/* <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category"> Outrehabilation_braces</Label>
                  <Multiselect
                    options={this.state.Outrehabilation_bracesList}
                    selectedValues={this.state.Outrehabilation_bracesArr}
                    onSelect={this.onSelect21}
                    onRemove={this.onRemove21}
                    displayValue="name"
                  />
                </Col>
                <Col className="mt-1" lg="6" md="6" sm="12">
                  <Label for="data-category"> Outdental Treatment</Label>
                  <Multiselect
                    options={this.state.Outdental_treatmentList}
                    selectedValues={this.state.Outdental_treatmentArr}
                    onSelect={this.onSelect22}
                    onRemove={this.onRemove22}
                    displayValue="name"
                  />
                </Col> */}

                {/*
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
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className=" mt-2 mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler(e)}
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
                </Col> */}
                <Col lg="6" md="6" sm="12" className="mt-1">
                  <Label for="data-category">Policy</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      id="data-category"
                      name="policyName"
                      value={this.state.policy}
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
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className=" my-2 mr-1 mb-1"
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

export default AddPlanBenefits;
