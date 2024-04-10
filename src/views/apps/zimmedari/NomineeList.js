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
import { ChevronDown, Edit, Eye, Trash2, ArrowDownRight } from "react-feather";
import { ContextLayout } from "../../../utility/context/Layout";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
class NomineeList extends React.Component {
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
      //                   pathname: `/app/nominee/ViewNominee/${params.data?._id}`,
      //                   state: params,
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
      //                   pathname: `/app/nominee/EditNominee/${params.data?._id}`,
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
      {
        headerName: "User ID ",
        field: "name",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?._id}</div>;
        },
      },
      {
        headerName: "UserName",
        field: "name",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.firstName}</div>;
        },
      },
      {
        headerName: "PhoneNumber",
        field: "PhoneNumber",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.nominee?.map((ele) => ele?.NomineePhoneNumber)}
            </div>
          );
        },
      },
      {
        headerName: "Nominee ID",
        field: "Nominee",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.nominee?.map((ele) => ele?._id)}
            </div>
          );
        },
      },
      {
        headerName: "Nominee Name",
        field: "name",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.nominee?.map((ele) => ele?.nomineeName)}
            </div>
          );
        },
      },
      {
        headerName: "Relation With Nominee",
        field: "relationWithNominee",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="" style={{ width: "100" }}>
              {params?.data?.nominee?.map((ele) => ele?.relationWithNominee)}
            </div>
          );
        },
      },
      {
        headerName: "Nominee PhoneNo",
        field: "relationWithNominee",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="" style={{ width: "100" }}>
              {params?.data?.nominee?.map((ele) => ele?.relationWithNominee)}
            </div>
          );
        },
      },
      {
        headerName: "Nominee PhoneNo.Status",
        field: "relationWithNominee",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="" style={{ width: "100" }}>
              {params?.data?.nominee?.map((ele) => ele?.relationWithNominee)}
            </div>
          );
        },
      },
      {
        headerName: "Nominee Email",
        field: "email",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.nominee?.map((ele) => ele?.nomineeEmailId)}
            </div>
          );
        },
      },

      // {
      //   headerName: "PercentageofShare",
      //   field: "relationWithNominee",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="" style={{ width: "100" }}>
      //         {params?.data?.nominee?.map((ele) => ele?.percentageofShar)}
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "Status",
      //   field: "status",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="" style={{ width: "100" }}>
      //         {params?.data?.status}
      //       </div>
      //     );
      //   },
      // },
    ],
  };
  componentDidMount() {
    let AdminId = localStorage.getItem("AdminId");
    this.NomineeList(AdminId);
  }
  NomineeList = (AdminId) => {
    console.log("adminIDddd", AdminId);
    axiosConfig
      .get(`/asset/nominee-list/${AdminId}`)
      .then((response) => {
        console.log(response.data);
        const rowData = response.data?.Nominee;
        // let list = rowData?.flatMap((element) => {
        //   return element?.nominee?.map((val, i) => {
        //     return { ...element, nominee: val };
        //   });
        // });
        // debugger;
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
          axiosConfig
            .delete(`/nominee/delete-nominee/${id}`)
            .then((response) => {
              this.NomineeList();
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
                Nominee List
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
export default NomineeList;
