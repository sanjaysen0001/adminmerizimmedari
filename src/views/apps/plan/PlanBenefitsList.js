import React from "react";
import {
  Col,
  Row,
  Card,
  Input,
  Button,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Route } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import axiosConfig from "../../../axiosConfig";
import { ChevronDown, Edit, Eye, Trash2 } from "react-feather";
import { ContextLayout } from "../../../utility/context/Layout";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
class PlanBenefitsList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 200,
        // pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(
                        `/app/plan/ViewPalnBenefits/${params?.data?._id}`
                      )
                    }
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/plan/EditPlanBenefit/${params.data._id}`
                      )
                    }
                  />
                )}
              />

              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  this.runthisfunction(params?.data?._id);
                }}
              />
            </div>
          );
        },
      },

      {
        headerName: "planBenefitsCode",
        field: "planBenefitsCode",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.planBenefitsCode}</div>;
        },
      },

      {
        headerName: "Pre-Existing Coverage",
        field: "preExistingCoverage",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inacuteonset",
        field: "Inacuteonset",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "preExMax",
        field: "preExMax",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inhospital_room",
        field: "Inhospital_room",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inhostpital_intensive",
        field: "Inhostpital_intensive",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Insurgeon",
        field: "Insurgeon",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inanesthtist",
        field: "Inanesthtist",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inassistant_surgeon",
        field: "Inassistant_surgeon",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Indoctors_nonsurgical",
        field: "Indoctors_nonsurgical",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inconsultant Doctor",
        field: "Inconsultant_doctor",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Inpreadmission Tests",
        field: "Inpreadmission_tests",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Outsurgical Room",
        field: "Outsurgical_room",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Outsurgeon",
        field: "Outsurgeon",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },
      {
        headerName: "Outanesthetist",
        field: "Outanesthetist",
        filter: true,
        width: 300,
        valueFormatter: (params) => {
          if (params?.value) {
            return params.value?.map((ele) => ele?.name).join(", ");
          }
          return null;
        },
      },

      // {
      //   headerName: "Outassistant_surgeon",
      //   field: "Outassistant_surgeon",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outdoctors_nonsurgical",
      //   field: "Outdoctors_nonsurgical",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outdiagnostic_xray",
      //   field: "Outdiagnostic_xray",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outcat scan",
      //   field: "Outcat_scan",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outhostpital_emergency",
      //   field: "Outhostpital_emergency",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outprescription_drugs",
      //   field: "Outprescription_drugs",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outambulance_services",
      //   field: "Outambulance_services",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outrehabilation_braces",
      //   field: "Outrehabilation_braces",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outdental_treatment",
      //   field: "Outdental_treatment",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outchemotherapy",
      //   field: "Outchemotherapy",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outphysical_occupational",
      //   field: "Outphysical_occupational",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outprivate_duty",
      //   field: "Outprivate_duty",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outpregnancy_childbirth",
      //   field: "Outpregnancy_childbirth",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outchiropractic_care",
      //   field: "Outchiropractic_care",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outmisc_test_procedures",
      //   field: "Outmisc_test_procedures",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outshots_injections",
      //   field: "Outpsychotherapy",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outtelehealth",
      //   field: "Outtelehealth",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "OutMental_Nervous_Disorder",
      //   field: "OutMental_Nervous_Disorder",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outmedical_evacuation",
      //   field: "Outmedical_evacuation",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outrepariation_remains",
      //   field: "Outrepariation_remains",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outintercollegiate",
      //   field: "Outintercollegiate",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Outaccidental_death",
      //   field: "Outaccidental_death",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_HospitalAdmission_Guarantee",
      //   field: "Trip_HospitalAdmission_Guarantee",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_MedicalExpense_Guarantee",
      //   field: "Trip_MedicalExpense_Guarantee",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Baggage_Delay",
      //   field: "Trip_Baggage_Delay",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Burial_Cremation",
      //   field: "Trip_Burial_Cremation",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_CheckedLostStolen_Baggage",
      //   field: "Trip_CheckedLostStolen_Baggage",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_FeloniousAssult_ViolentCrime",
      //   field: "Trip_FeloniousAssult_ViolentCrime",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_HospitalStay_Confinement",
      //   field: "Trip_HospitalStay_Confinement",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_SeatBelt",
      //   field: "Trip_SeatBelt",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Airbag",
      //   field: "Trip_Airbag",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Cancellation",
      //   field: "Trip_Cancellation",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Delay",
      //   field: "Trip_Delay",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "Trip_Interruption",
      //   field: "Trip_Interruption",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policyType?.pt_type}</div>;
      //   },
      // },
      // {
      //   headerName: "policy_ID_fk",
      //   field: "policy_ID_fk",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?._id}</div>;
      //   },
      // },
      {
        headerName: "policyName_fk",
        field: "policyName",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.policy_ID_fk?.policyName}</div>
          );
        },
      },
      {
        headerName: "policyUnderWriter_fk",
        field: "policyUnderWriter_fk",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.policy_ID_fk?.policyUnderWriter}
            </div>
          );
        },
      },
      {
        headerName: "policy_active_fk",
        field: "policy_active_fk",
        width: 180,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policy_ID_fk?._id}</div>;
        },
      },
    ],
  };
  async componentDidMount() {
    await this.PlanBenefitsList();
  }

  PlanBenefitsList = () => {
    axiosConfig.get("/benefite/view-benefite").then((response) => {
      const rowData = response.data.Benefite;
      console.log(rowData);
      this.setState({ rowData });
    });
  };

  runthisfunction(id) {
    console.log(id);
    swal(
      `Do You Want To Delete Permanently`,
      "This item will be deleted immediately",

      {
        buttons: {
          cancel: "Cancel",
          catch: { text: "Delete ", value: "catch" },
        },
      }
    ).then((value) => {
      switch (value) {
        case "cancel":
          break;
        case "catch":
          axiosConfig
            .delete(`/benefite/delete-benefite/${id}`)
            .then((response) => {
              this.PlanBenefitsList();
            });
          break;
        default:
          break;
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <Card className="overflow-hidden agGrid-card">
          <Row className="m-1">
            <Col>
              <h1 col-sm-6 className="float-left">
                PlanBenefits List
              </h1>
            </Col>
            <Col className="">
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn  float-right"
                    color="primary"
                    onClick={() => history.push("/app/plan/AddPlanBenefits")}
                  >
                    Add PlanBenefits
                  </Button>
                )}
              />
            </Col>
          </Row>

          <CardBody className="py-0">
            {this.state.rowData === null ? null : (
              <div className="ag-theme-material w-100 my-2 ag-grid-table">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-1">
                    <UncontrolledDropdown className="p-1 ag-dropdown">
                      <DropdownToggle tag="div">
                        {this.gridApi
                          ? this.state.currenPageSize
                          : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                        {this.state.rowData.length -
                          this.state.currenPageSize * this.state.getPageSize >
                        0
                          ? this.state.currenPageSize * this.state.getPageSize
                          : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(134)}
                        >
                          134
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-1">
                    <div className="table-input mr-1">
                      <Input
                        placeholder="search..."
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                    <div className="export-btn">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export as CSV
                      </Button.Ripple>
                    </div>
                  </div>
                </div>
                <ContextLayout.Consumer>
                  {(context) => (
                    <AgGridReact
                      gridOptions={{}}
                      rowSelection="multiple"
                      defaultColDef={defaultColDef}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={this.onGridReady}
                      colResizeDefault={"shift"}
                      animateRows={true}
                      floatingFilter={false}
                      pagination={true}
                      paginationPageSize={this.state.paginationPageSize}
                      pivotPanelShow="always"
                      enableRtl={context.state.direction === "rtl"}
                    />
                  )}
                </ContextLayout.Consumer>
              </div>
            )}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default PlanBenefitsList;
