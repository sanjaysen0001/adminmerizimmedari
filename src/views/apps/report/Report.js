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
  Label,
  CustomInput,
} from "reactstrap";

import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import swal from "sweetalert";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import moment from "moment";
class Report extends React.Component {
  state = {
    rowData: [],
    StartDate: "",
    EndDate: "",
    list: [],
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
        headerName: "Plan Name",
        field: "PlanName",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>Plan Name</span>
            </div>
          );
        },
      },

      {
        headerName: "Active Value",
        field: "active_value",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.active_value}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "updatedAt",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{moment(params.data.updatedAt).format("ll")} </span>
            </div>
          );
        },
      },

      {
        headerName: "status ",
        field: "tradeStatus",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params?.data?.FT1_type === "true" ||
            params?.data?.FT2_type === "true" ||
            params?.data?.FT3_type === "true" ||
            params?.data?.t1_type === "true" ||
            params?.data?.t2_type === "true" ||
            params?.data?.t3_type === "true" ||
            params?.data?.t4_type === "true" ||
            params?.data?.trl_type === "true" ||
            params?.data?.t5_type === "true" ? (
            <div className="badge badge-pill badge-success">Completed</div>
          ) : params?.data?.sl_type === "true" ? (
            <div className="badge badge-pill badge-danger">Completed</div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        pinned: window.innerWidth > 992 ? "right" : false,

        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
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
    ],
  };

  // componentDidMount() {
  //   this.alltradeList();
  // }
  changeHandlerStartDate = (e) => {
    const startDate = moment(e.target.value).format("D-MM-YYYY");
    this.setState({ StartDate: startDate });
  };
  changeHandlerEndDate = (e) => {
    const endDate = moment(e.target.value).format("D-MM-YYYY");
    this.setState({ EndDate: endDate });
  };
  // alltradeList = () => {
  //   axiosConfig.get(`/admin/tradelist`).then((response) => {
  //     console.log(response.data.data);
  //     const rowDataList = response.data.data;
  //     const rowData = rowDataList.filter((value) => {
  //       if (
  //         value.FT1_type === "true" ||
  //         value?.FT2_type === "true" ||
  //         value?.FT3_type === "true" ||
  //         value?.t1_type === "true" ||
  //         value?.t2_type === "true" ||
  //         value?.t3_type === "true" ||
  //         value?.t4_type === "true" ||
  //         value?.trl_type === "true" ||
  //         value?.t5_type === "true" ||
  //         value?.sl_type === "true"
  //       ) {
  //         return value;
  //       }
  //     });
  //     console.log("NewList", rowData);
  //     const list = response.data.data;
  //     this.setState({ rowData });
  //     this.setState({ list });
  //   });
  // };
  runthisfunction(id) {
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
          axiosConfig.get(`/admin/dlt_alltrade/${id}`).then(() => {
            this.alltradeList();
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

  handleSelectDate = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    console.log(this.state.StartDate, this.state.EndDate);
    axiosConfig
      .get(
        `/user/tradefilterBydate?start=${this.state.StartDate}&end=${this.state.EndDate}`
      )
      .then((response) => {
        this.setState({ rowData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list ">
        <Col lg="12" md="12" sm="12">
          <Card>
            <h1 col-sm-6 className="p-2">
              Agent Report
            </h1>
            <Row className="p-2">
              <Col lg="4" md="4" sm="4" className="">
                <Label>StartDate:</Label>
                <Input
                  type="date"
                  name="StartDate"
                  value={this.state.StartDate}
                  onChange={this.handleSelectDate}
                />
              </Col>
              <Col lg="4" md="4" sm="4" className="">
                <Label>EndDate:</Label>
                <Input
                  type="date"
                  name="EndDate"
                  value={this.state.EndDate}
                  onChange={this.handleSelectDate}
                />
              </Col>
              <Col lg="4" md="4" sm="4" className="mt-1">
                <Button color="primary" onClick={this.submitHandler}>
                  Submit
                </Button>
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
export default Report;
