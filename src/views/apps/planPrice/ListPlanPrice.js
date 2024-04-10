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
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import swal from "sweetalert";
class ListPlanPrice extends React.Component {
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
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    color="green"
                    size={20}
                    onClick={() =>
                      history.push(`/app/plan/ViewPlanPrice/${params.data._id}`)
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
                        `/app/plan/EditPlanPrice//${params.data._id}`
                      )
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
        headerName: "PlanPriceID",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 250,
        filter: true,
      },
      {
        headerName: "ageMin",
        field: "EndDate",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.ageMin}</span>
            </div>
          );
        },
      },
      {
        headerName: "ageMax",
        field: "planMinDays",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.ageMax}</span>
            </div>
          );
        },
      },
      {
        headerName: "dependentPrice",
        field: "dependentPrice",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dependentPrice}</span>
            </div>
          );
        },
      },
      {
        headerName: "cansupportCouple",
        field: "cansupportCouple",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.cansupportCouple}</span>
            </div>
          );
        },
      },
      {
        headerName: "cansupportChild",
        field: "cansupportChild",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.cansupportChild}</span>
            </div>
          );
        },
      },
      {
        headerName: "InduvisualFee",
        field: "planMaximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.IndividualFee}</span>
            </div>
          );
        },
      },
      {
        headerName: "Couple_singlechild_fee",
        field: "Couple_singlechild_fee",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Couple_singlechild_fee}</span>
            </div>
          );
        },
      },
      {
        headerName: "Couple_withChildren_fee",
        field: "Couple_withChildren_fee",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.Couple_withChildren_fee}</span>
            </div>
          );
        },
      },
      {
        headerName: "parent_with_child",
        field: "parent_with_child",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.parent_with_child}</span>
            </div>
          );
        },
      },
      {
        headerName: "parent_with_children",
        field: "parent_with_children",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.parent_with_children}</span>
            </div>
          );
        },
      },
      {
        headerName: "policy_ID_fk",
        field: "Maximum",
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
        headerName: "plan_combID_fk",
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
              <span>{params.data?.planType_fk?.planType[0]?.plan_type}</span>
            </div>
          );
        },
      },
      {
        headerName: "planType_fk",
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
        headerName: "planMaximum_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.planType_fk?.planMaximum}</span>
            </div>
          );
        },
      },
      {
        headerName: "plandeductible_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.planType_fk?.preexDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "preexDed_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planType_fk?.planDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "preexCov_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planType_fk?.preexCoverage}</span>
            </div>
          );
        },
      },
      {
        headerName: "policy_active_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.preexDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "comb_active_fk",
        field: "Maximum",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.preexDeductible}</span>
            </div>
          );
        },
      },
      {
        headerName: "ageRange_active",
        field: "ageRange_active",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.preexDeductible}</span>
            </div>
          );
        },
      },
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
    axiosConfig.get(`/plan-price/view-plan-price`).then((response) => {
      console.log(response.data.PlanPrice);
      // const updatedPlanList = response.data.Plan?.filter(
      //   (st) => st.status === "true"
      // );
      this.setState({ rowData: response.data.PlanPrice });
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
                  ListPlanPrice List
                </h1>
              </Col>
              <Col className="pt-4">
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() => history.push("/app/plan/AddplanPrice")}
                    >
                      Add PlanPrice
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
export default ListPlanPrice;
