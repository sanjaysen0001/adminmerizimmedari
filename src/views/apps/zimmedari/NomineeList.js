

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
// import ReactHtmlParser from "react-html-parser";
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
        width:100,
      
        filter: true,
      },
     
      {
        headerName: "User Id",
        field: "userid",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.userId}</div>;
        },
      },
      {
        headerName: "User Name",
        field: "username",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.userName}</div>;
        },
      },
      {
        headerName: "Phone No.",
        field: "phoneno",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.mobileNo}</div>;
        },
      },
      {
        headerName: "Nominee Id",
        field: "nomineeid",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
      {
        headerName: "Relation With Nominee",
        field: "relationwithnominee",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
      {
        headerName: "Nominee Phone No.",
        field: "nomineephoneno",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
      {
        headerName: "Nominee Phone No. Status",
        field: "nomineephonenostatus",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
      {
        headerName: "Nominee Email",
        field: "nomineeemail",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
      {
        headerName: "Nominee Email-id Status",
        field: "nomineeemailidstatus",

        width:200,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.price}</div>;
        },
      },
     
      {
        headerName: "Actions",
        field: "sortorder",
        width:200,
       
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
                      history.push({
                        pathname: `/app/view-subscribtion/${params?.data?._id}`,
                        state: params.data,
                      })
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
                      history.push({
                        pathname: `/app/Edit-subscribtion/${params?.data?._id}`,
                        state: params.data,
                      })
                    }
                  />
                )}
              /> 

              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data?._id);
                }}
              /> 
            </div>
          );
        },
      },

     
      // {
      //   headerName: "Policy Number",
      //   field: "PlanType",
      //   // filter: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.policynumber}</div>;
      //   },
      // },
      // {
      //   headerName: "status",
      //   field: "PlanType",
      //   // filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.status}</div>;
      //   },
      // },
      // {
      //   headerName: "ReEnterPolicyNumber",
      //   field: "reEnterPolicyNumber",
      //   // filter: true,
      //   width: 250,
      //   cellRendererFramework: (params) => {
      //     return <div className="">{params?.data?.ReEnterPolicyNumber}</div>;
      //   },
      // },
    ],
  };
  componentDidMount() {
    this.AssetList();
  }
  AssetList = () => {
    axiosConfig
      .get("/asset/nominee-list")
      .then((response) => {
        const rowData = response.data?.NomineeList;
        console.log(response.data.NomineeList);
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
              Nominee List
              </h1>
            </Col>
            <Col className="">
             
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
                  <div className="d-flex flex-wrap  mb-1">
                    <div className="table-input mr-1" >
                      <Input
                        className="cssformanageassetinput cssmartopmargin"
                        placeholder="search..."
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                   
                    <div>
                      <Button.Ripple
                      className='cssmartopmargin'
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

