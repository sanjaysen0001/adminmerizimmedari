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
class Duelifedeclaration extends React.Component {
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
        headerName: "User Phone Number",
        field: "UserPhoneNumber",
        // filter: true,
        width: 200,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId?.mobileNo}</div>;
        },
      },
      {
        headerName: "Actual Life declaration due date",
        field: "ActualLifedeclarationduedate",
        // filter: true,
        width: 300,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.nextDeclarationDate}</div>;
        },
      },
      {
        headerName: "Revised Life declaration due date",
        field: "RevisedLifedeclarationduedate",
        // filter: true,
        width: 350,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName:
          "Last Life declaration on due date offerted to Nominee/User",
        field: "Lifedeclarationduedate",
        // filter: true,
        width: 350,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Date of User Status Confirmation mail shared with nominee",
        field: "Lifedeclarationduedate",
        // filter: true,
        width: 350,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Date of Response Reveived from nominee",
        field: "DateofResponse",
        // filter: true,
        width: 350,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Response Reveived from nominee",
        field: "DateofResponse",
        // filter: true,
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName:
          "Date of death certificate requesting mail shared with nominee",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Date of death certificate received from nominee",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Death certificate Validation Status",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Date of Validation Status mail shared with nominee",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Date of asset details shared with nominee",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName:
          "Date of receiving of asset details receiving confirmation from nominee",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },
      {
        headerName: "Loop Status",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.lastDeclarationDate}</div>;
        },
      },

      // {
      //   headerName: "Actions",
      //   field: "sortorder",
      //   width: 200,

      //   // pinned: window.innerWidth > 992 ? "right" : false,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Route
      //           render={({ history }) => (
      //             <Eye
      //               className="mr-50"
      //               size="25px"
      //               color="green"
      //               onClick={() =>
      //                 history.push({
      //                   pathname: `/ViewDueLife/${params?.data?._id}`,
      //                 })
      //               }
      //             />
      //           )}
      //         />
      //         <Route
      //           render={({ history }) => (
      //             <Edit
      //               className="mr-50"
      //               size="25px"
      //               color="blue"
      //               onClick={() =>
      //                 history.push({
      //                   pathname: `/app/asset/EditAsset/${params?.data?._id}`,
      //                   state: params.data,
      //                 })
      //               }
      //             />
      //           )}
      //         />

      //         <Trash2
      //           className="mr-50"
      //           size="25px"
      //           color="red"
      //           onClick={() => {
      //             this.runthisfunction(params.data?._id);
      //           }}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };
  componentDidMount() {
    this.AssetList();
  }
  AssetList = () => {
    axiosConfig
      .get("/life-declaration/view-life-declaration")
      .then((response) => {
        console.log(response.data.Life);
        const rowData = response?.data?.Life;
        this.setState({ rowData });
      })
      .catch((err) => {
        swal("Something Went Wrong");
      });
  };

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
          axiosConfig.delete(`/asset/delete-asset/${id}`).then((response) => {
            this.AssetList();
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
                Life Declaration List
              </h1>
            </Col>
            <Col className=""></Col>
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
                  <div className="d-flex flex-wrap  mb-1">
                    <div className="table-input mr-1">
                      <Input
                        className="cssformanageassetinput cssmartopmargin"
                        placeholder="search..."
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                    {/* <div style={{ marginRight: "10px" }}>
                      <Route
                        render={({ history }) => (
                          <Button
                            className=" btn  float-right cssmartopmargin"
                            color="primary"
                            onClick={() => history.push("/app/AddAssets")}
                          >
                            Add DueLifeDecalaration
                          </Button>
                        )}
                      />
                    </div> */}
                    <div>
                      <Button.Ripple
                        className="cssmartopmargin"
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
export default Duelifedeclaration;
