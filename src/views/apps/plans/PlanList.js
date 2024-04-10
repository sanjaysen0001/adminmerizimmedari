import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import swal from "sweetalert";
class PlanList extends React.Component {
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
        headerName: "Actions",
        field: "sortorder",
        width: 200,
        // pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                className="mr-50"
                color="green"
                size={20}
                onClick={() =>
                  history.push(`/app/size/viewSize/${params.data._id}`)
                }
              /> */}
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(`/app/plans/editPlan/${params.data._id}`)
                    }
                  />
                )}
              />

              <Trash2
                size={20}
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              />
            </div>
          );
        },
      },
      {
        headerName: "plan_combination_ID",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 250,
        filter: true,
      },
      {
        headerName: "policy_num",
        field: "EndDate",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.policy_ID_fk?.policyNum}</span>
            </div>
          );
        },
      },
      {
        headerName: "planMinDays",
        field: "planMinDays",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planMinDays}</span>
            </div>
          );
        },
      },

      {
        headerName: "planType",
        field: "planType",
        filter: true,
        width: 200,
        valueFormatter: (params) => {
          if (params?.data?.planType) {
            return params.data.planType
              ?.map((ele) => ele?.plan_type)
              .join(", ");
          }
          return null;
        },
      },
      {
        headerName: "agesupportMin",
        field: "agesupportMin",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.agesupportMin}</span>
            </div>
          );
        },
      },
      {
        headerName: "agesupportMax",
        field: "agesupportMax",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.agesupportMax}</span>
            </div>
          );
        },
      },
      {
        headerName: "planMaximum",
        field: "planMaximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planMaximum}</span>
            </div>
          );
        },
      },
      {
        headerName: "planDeductible",
        field: "Maximum",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "preexCoverage",
        field: "preexCoverage",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.preexCoverage}</span>
            </div>
          );
        },
      },
      {
        headerName: "preexDeductible",
        field: "preexDeductible",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.preexDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "preexMaxCoverage",
        field: "preexMaxCoverage",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.preexMaxCoverage}</span>
            </div>
          );
        },
      },
      {
        headerName: "CoverageCntry",
        field: "Maximum",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.CoverageCntry}</span>
            </div>
          );
        },
      },
      {
        headerName: "policy_ID_fk",
        field: "policy_ID_fk",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.policy_ID_fk?._id}</span>
            </div>
          );
        },
      },
      {
        headerName: "policyName_fk",
        field: "Maximum",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.policy_ID_fk?.policyName}</span>
            </div>
          );
        },
      },
      {
        headerName: "policyActive_fk",
        field: "Maximum",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.policy_ID_fk?.policyName}</span>
            </div>
          );
        },
      },
      {
        headerName: "planBenefitsCode_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.planBenefitsCode_fk?._id}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "policy_combination_active",
      //   field: "Maximum",
      //   width: 250,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.preexDeductible}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
    ],
  };

  componentDidMount() {
    this.getOptionDataList();
  }

  getOptionDataList = () => {
    axiosConfig.get(`/plan/view-plan`).then((response) => {
      // const updatedPlanList = response.data.Plan?.filter(
      //   (st) => st.status === "true"
      // );
      this.setState({ rowData: response.data.Plan });
      console.log(response.data.Plan);
    });
  };
  runthisfunction(id) {
    swal(
      `Do You Want To Delete`,
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
          axiosConfig.delete(`/plan/delete-plan/${id}`).then((response) => {
            this.getOptionDataList();
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
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  Plan List
                </h1>
              </Col>
              <Col className="pt-4">
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() => history.push("/app/plan/addPlan")}
                    >
                      Add Plan
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody>
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
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
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
        </Col>
      </Row>
    );
  }
}
export default PlanList;
