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
class ViewPalnBenefits extends React.Component {
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
      //   selectedOptions: [],
      //   preExistingCoverageData: [{}],
      //   selectedValue: [],
      //   preExMaxarr: [],
      //   InhospitalRoomarr: [],
      //   InhostpitalIntensiveArr: [],
      //   InsurgeonArr: [],
      //   Inassistant_surgeonArr: [],
      //   InanesthtArr: [],
      //   Indoctors_nonsurgicalArr: [],
      //   Inconsultant_doctorArr: [],
      //   Inpreadmission_testsArr: [],
      //   Outsurgical_roomArr: [],
      //   OutsurgeonArr: [],
      //   OutanesthetistArr: [],
      //   Outassistant_surgeonArr: [],
      //   Outdoctors_nonsurgicalArr: [],
      //   Outdiagnostic_xrayArr: [],
      //   Outcat_scanArr: [],
      //   Outhostpital_emergencyArr: [],
      //   Outprescription_drugsArr: [],
      //   Outrehabilation_bracesArr: [],
      //   Outambulance_servicesArr: [],
    };
    // this.state = {
    //   options: optionsList,
    //   InacuteonsetList: InacuteonsetList,
    //   preExMaxList: preExMaxList,
    //   InhospitalRoomList: Inhospital_roomList,
    //   InhostpitalIntensiveList: Inhostpital_intensiveList,
    //   InsurgeonList: Insurgeon,
    //   InanesthtList: Inanesthtist,
    //   Inassistant_surgeonList: Inassistant_surgeon,
    //   Indoctors_nonsurgicalList: Indoctors_nonsurgical,
    //   Inconsultant_doctorList: Inconsultant_doctor,
    //   Inpreadmission_testsList: Inpreadmission_tests,
    //   Outsurgical_roomList: Outsurgical_room,

    //   OutsurgeonList: Outsurgeon,
    //   OutanesthetistList: Outanesthetist,
    //   Outassistant_surgeonList: Outassistant_surgeon,
    //   Outdoctors_nonsurgicalList: Outdoctors_nonsurgical,
    //   Outdiagnostic_xrayList: Outdiagnostic_xray,
    //   Outcat_scanList: Outcat_scan,
    //   Outhostpital_emergencyList: Outhostpital_emergency,
    //   Outprescription_drugsList: Outprescription_drugs,
    //   Outrehabilation_bracesList: Outrehabilation_braces,
    //   Outambulance_servicesList: Outambulance_services,
    // };
    // this.onSelect = this.onSelect.bind(this);
    // this.onRemove = this.onRemove.bind(this);
    // this.onSelect1 = this.onSelect1.bind(this);
    // this.onRemove1 = this.onRemove1.bind(this);
    // this.onSelect2 = this.onSelect2.bind(this);
    // this.onRemove2 = this.onRemove2.bind(this);
    // this.onSelect3 = this.onSelect3.bind(this);
    // this.onRemove3 = this.onRemove3.bind(this);
    // this.onSelect4 = this.onSelect4.bind(this);
    // this.onRemove4 = this.onRemove4.bind(this);
    // this.onSelect5 = this.onSelect5.bind(this);
    // this.onRemove5 = this.onRemove5.bind(this);
    // this.onSelect6 = this.onSelect6.bind(this);
    // this.onRemove6 = this.onRemove6.bind(this);
    // this.onSelect7 = this.onSelect7.bind(this);
    // this.onRemove7 = this.onRemove7.bind(this);
    // this.onSelect8 = this.onSelect8.bind(this);
    // this.onRemove8 = this.onRemove8.bind(this);
    // this.onSelect9 = this.onSelect9.bind(this);
    // this.onRemove9 = this.onRemove9.bind(this);
    // this.onSelect10 = this.onSelect10.bind(this);
    // this.onRemove10 = this.onRemove10.bind(this);
    // this.onSelect11 = this.onSelect11.bind(this);
    // this.onRemove11 = this.onRemove11.bind(this);
    // this.onSelect12 = this.onSelect12.bind(this);
    // this.onRemove12 = this.onRemove12.bind(this);
    // this.onSelect13 = this.onSelect13.bind(this);
    // this.onRemove13 = this.onRemove13.bind(this);
    // this.onSelect14 = this.onSelect14.bind(this);
    // this.onRemove14 = this.onRemove14.bind(this);
    // this.onSelect15 = this.onSelect15.bind(this);
    // this.onRemove15 = this.onRemove15.bind(this);
    // this.onSelect16 = this.onSelect16.bind(this);
    // this.onRemove16 = this.onRemove16.bind(this);
    // this.onSelect17 = this.onSelect17.bind(this);
    // this.onRemove17 = this.onRemove17.bind(this);
    // this.onSelect18 = this.onSelect18.bind(this);
    // this.onRemove18 = this.onRemove18.bind(this);
    // this.onSelect19 = this.onSelect19.bind(this);
    // this.onRemove19 = this.onRemove19.bind(this);
    // this.onSelect20 = this.onSelect20.bind(this);
    // this.onRemove20 = this.onRemove20.bind(this);
  }

  componentDidMount() {
    this.ViewPlanBenefit();
  }
  ViewPlanBenefit = () => {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/benefite/view-benefite-by-id/${id}`)
      .then((response) => {
        console.log(response.data.Benefite[0]);
        this.setState({ policyTypeList: response.data.Benefite });
        const { planBenefitsCode, Inacuteonset } = response.data.Benefite[0];
        console.log(Inacuteonset[0].name);
        this.setState({
          planBenefitsCode: planBenefitsCode,
          Inacuteonset: Inacuteonset[0].name,
        });
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  };

  //   onSelect(selectedList, selectedItem) {
  //     console.log(selectedList);
  //     this.setState({ preExistingCoverageData: selectedList });
  //   }

  //   onRemove(selectedList, removedItem) {
  //     console.log(removedItem);
  //     this.setState({ preExistingCoverageData: selectedList });
  //   }
  //   onSelect1(selectedList, selectedItem) {
  //     this.setState({ selectedValue: selectedList });
  //   }

  //   onRemove1(selectedList, removedItem) {
  //     this.setState({ selectedValue: selectedList });
  //   }
  //   onSelect2(selectedList, selectedItem) {
  //     this.setState({ preExMaxarr: selectedList });
  //   }

  //   onRemove2(selectedList, removedItem) {
  //     this.setState({ preExMaxarr: selectedList });
  //   }
  //   onSelect3(selectedList, selectedItem) {
  //     this.setState({ InhospitalRoomarr: selectedList });
  //   }

  //   onRemove3(selectedList) {
  //     this.setState({ InhospitalRoomarr: selectedList });
  //   }
  //   onSelect4(selectedList) {
  //     this.setState({ InhostpitalIntensiveArr: selectedList });
  //   }

  //   onRemove4(selectedList) {
  //     this.setState({ InhostpitalIntensiveArr: selectedList });
  //   }
  //   onSelect5(selectedList) {
  //     this.setState({ InsurgeonArr: selectedList });
  //   }

  //   onRemove5(selectedList) {
  //     this.setState({ InsurgeonArr: selectedList });
  //   }
  //   onSelect6(selectedList) {
  //     this.setState({ InanesthtArr: selectedList });
  //   }

  //   onRemove6(selectedList) {
  //     this.setState({ InanesthtArr: selectedList });
  //   }
  //   onSelect7(selectedList) {
  //     this.setState({ Inassistant_surgeonArr: selectedList });
  //     console.log(this.state.Inassistant_surgeonArr);
  //   }

  //   onRemove7(selectedList) {
  //     this.setState({ Inassistant_surgeonArr: selectedList });
  //   }
  //   onSelect8(selectedList) {
  //     this.setState({ Indoctors_nonsurgicalArr: selectedList });
  //     console.log(this.state.Inassistant_surgeonArr);
  //   }

  //   onRemove8(selectedList) {
  //     this.setState({ Indoctors_nonsurgicalArr: selectedList });
  //   }

  //   onSelect9(selectedList) {
  //     this.setState({ Inconsultant_doctorArr: selectedList });
  //   }

  //   onRemove9(selectedList) {
  //     this.setState({ Inconsultant_doctorArr: selectedList });
  //   }
  //   onSelect10(selectedList) {
  //     this.setState({ Inpreadmission_testsArr: selectedList });
  //   }

  //   onRemove10(selectedList) {
  //     this.setState({ Inpreadmission_testsArr: selectedList });
  //   }
  //   onSelect11(selectedList) {
  //     this.setState({ Outsurgical_roomArr: selectedList });
  //   }

  //   onRemove11(selectedList) {
  //     this.setState({ Outsurgical_roomArr: selectedList });
  //   }
  //   onSelect12(selectedList) {
  //     this.setState({ OutsurgeonArr: selectedList });
  //   }

  //   onRemove12(selectedList) {
  //     this.setState({ OutsurgeonArr: selectedList });
  //   }
  //   onSelect13(selectedList) {
  //     this.setState({ OutanesthetistArr: selectedList });
  //   }

  //   onRemove13(selectedList) {
  //     this.setState({ OutanesthetistArr: selectedList });
  //   }
  //   onSelect14(selectedList) {
  //     this.setState({ Outassistant_surgeonArr: selectedList });
  //   }

  //   onRemove14(selectedList) {
  //     this.setState({ Outassistant_surgeonArr: selectedList });
  //   }
  //   onSelect15(selectedList) {
  //     this.setState({ Outdoctors_nonsurgicalArr: selectedList });
  //   }

  //   onRemove15(selectedList) {
  //     this.setState({ Outdoctors_nonsurgicalArr: selectedList });
  //   }
  //   onSelect16(selectedList) {
  //     this.setState({ Outdiagnostic_xrayArr: selectedList });
  //   }

  //   onRemove16(selectedList) {
  //     this.setState({ Outdiagnostic_xrayArr: selectedList });
  //   }
  //   onSelect17(selectedList) {
  //     this.setState({ Outcat_scanArr: selectedList });
  //   }

  //   onRemove17(selectedList) {
  //     this.setState({ Outcat_scanArr: selectedList });
  //   }
  //   onSelect18(selectedList) {
  //     this.setState({ Outhostpital_emergencyArr: selectedList });
  //   }

  //   onRemove18(selectedList) {
  //     this.setState({ Outhostpital_emergencyArr: selectedList });
  //   }
  //   onSelect19(selectedList) {
  //     console.log(selectedList);
  //     this.setState({ Outprescription_drugsArr: selectedList });
  //   }

  //   onRemove19(selectedList) {
  //     console.log(selectedList);
  //     this.setState({ Outprescription_drugsArr: selectedList });
  //   }
  //   onSelect20(selectedList) {
  //     this.setState({ Outrehabilation_bracesArr: selectedList });
  //   }

  //   onRemove20(selectedList) {
  //     this.setState({ Outrehabilation_bracesArr: selectedList });
  //   }
  //   onSelect21(selectedList) {
  //     this.setState({ Outambulance_servicesArr: selectedList });
  //   }

  //   onRemove21(selectedList) {
  //     this.setState({ Outambulance_servicesArr: selectedList });
  //   }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" View PlanBenefits"
          breadCrumbParent="Home"
          breadCrumbActive=" View PlanBenefits "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View PlanBenefits
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
            <Form className="m-1">
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
                      <option value="classico_10">classico_10</option>
                      <option value="DIP_AME_100_ST">DIP_AME_100_ST</option>
                      <option value="DIP_AME_1000_ST">DIP_AME_1000_ST</option>
                      <option value="DIP_AME_20_ST">DIP_AME_20_ST</option>
                      <option value="DIP_AME_250_ST">DIP_AME_250_ST</option>
                      <option value="DIP_AME_50_ST">DIP_AME_50_ST</option>
                      <option value="DIP_AME_500_ST">DIP_AME_500_ST</option>
                      <option value="DIP_INT_100_ST">DIP_INT_100_ST</option>
                      <option value="DIP_INT_1000_ST">DIP_INT_1000_ST</option>
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
                    selectedValues={
                      this.state.Inacuteonset.length > 0
                        ? [this.state.Inacuteonset[0]]
                        : []
                    }
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
                <Col lg="6" md="6" sm="12" className="">
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

export default ViewPalnBenefits;
