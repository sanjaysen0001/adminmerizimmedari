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
import axiosConfig from "../../../../axiosConfig";
import { ChevronDown, Edit, Trash2 } from "react-feather";
import { ContextLayout } from "../../../../utility/context/Layout";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
class TransactionReport extends React.Component {
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
        headerName: "User ID",
        field: "userid",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "User Name",
        field: "username",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "User Phone Number",
        field: "userphonenumber",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Transaction Date",
        field: "userphonenumber",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Description",
        field: "description",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Service Period",
        field: "serviceperiod",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Subscription plan",
        field: "subscriptionplan",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Payment method",
        field: "paymentmethod",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Subtotal",
        field: "subtotal",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Total",
        field: "total",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      {
        headerName: "Download Invoice",
        field: "downloadinvoice",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className=""></div>;
        },
      },
      
      
      //   {
      //     headerName: "PlanType Description",
      //     field: "Description",
      //     filter: true,
      //     width: 500,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="">
      //           <span className="">
      //             {ReactHtmlParser(params?.data?.plan_desc)}
      //           </span>
      //         </div>
      //       );
      //     },
      //   },
    ],
  };
  componentDidMount() {
    this.TransactionReport();
  }
  TransactionReport = () => {
    axiosConfig
      .get("/user-list")
      .then((response) => {
        // console.log(response.data.User);
        const rowData = response.data.User;
        this.setState({ rowData });
      })
      .catch((err) => {
        swal("Something Went Wrong");
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
          axiosConfig.delete(`/admin/dlt_plantyp/${id}`).then((response) => {
            this.planTypeList();
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
                Transaction Report List
              </h1>
            </Col>
            <Col className="">
              {/* <Route
                render={({ history }) => (
                  <Button
                    className=" btn  float-right"
                    color="primary"
                    onClick={() => history.push("/app/AddAssets")}
                  >
                    Add Assets
                  </Button>
                )}
              /> */}
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
export default TransactionReport;
