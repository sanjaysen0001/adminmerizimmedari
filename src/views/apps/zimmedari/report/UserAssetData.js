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
  Spinner,
} from "reactstrap";
import { Route } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import axiosConfig from "../../../../axiosConfig";
import { ChevronDown, Edit, Trash2 } from "react-feather";
import { ContextLayout } from "../../../../utility/context/Layout";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
class UserAssetData extends React.Component {
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
      /* { 
      {
        headerName: "Asset Id",
        field: "assetid",
        width: 200,
        pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push({
                        pathname: `/app/plan/EditPlanType/${params.data._id}`,
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
                  this.runthisfunction(params.data._id);
                }}
              />
            </div>
          );
        },
      },
       },*/

      {
        headerName: "Asset Name",
        field: "assetname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.assetType}</div>;
        },
      },
      {
        headerName: "Field 1 Status (Available / Not Available)",
        field: "field1status",
        filter: true,
        width: 350,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.Field_1}</div>;
        },
      },
      {
        headerName: "Field 2",
        field: "field2status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.Field_2}</div>;
        },
      },
      {
        headerName: "Field 3",
        field: "field3status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.Field_3}</div>;
        },
      },
      {
        headerName: "User ID",
        field: "userid",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.id}</div>;
        },
      },
      {
        headerName: "User Name",
        field: "username",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.userId?.firstName} {params?.data?.userId?.lastName}
            </div>
          );
        },
      },
      {
        headerName: "User Phone Number",
        field: "userphonenumber",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId?.mobileNo} </div>;
        },
      },
      {
        headerName: "Nominee Id",
        field: "nomineeid",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.nominee?._id} </div>;
        },
      },
      {
        headerName: "Nominee Name",
        field: "nomineename",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.nominee?.nomineeName}</div>;
        },
      },
      {
        headerName: "Relation with Nominee",
        field: "relationwithnominee",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.nominee?.relationWithNominee}</div>
          );
        },
      },
      {
        headerName: "Nominee Phone Number",
        field: "nomineephonenumber",
        filter: true,
        width: 240,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.nominee?.NomineePhoneNumber}</div>
          );
        },
      },
      {
        headerName: "Nominee Phone Number Verification Status",
        field: "nomineephonenumberverificationstatus",
        filter: true,
        width: 350,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.nominee?.mobileVerifyStatus}</div>
          );
        },
      },

      {
        headerName: "Nominee email ID",
        field: "nomineeemailid",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.nominee?.nomineeEmailId} </div>
          );
        },
      },
      {
        headerName: "Nominee Email Verification Status",
        field: "nomineeemailverificationstatus",
        filter: true,
        width: 300,
        cellRendererFramework: (params) => {
          return (
            <div className="">{params?.data?.nominee?.mailVerifyStatus}</div>
          );
        },
      },
    ],
  };
  componentDidMount() {
    this.UserAssetData();
  }
  UserAssetData = () => {
    axiosConfig
      .get("/asset/view-asset")
      .then((response) => {
        console.log(response.data.Asset);
        const oldList = response.data.Asset;

        const newList = oldList?.flatMap((item) => {
          return item.nominee.map((element) => {
            return { ...item, nominee: element };
          });
        });

        this.setState({ rowData: newList });
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
    return this.state.rowData.length > 0 ? (
      <Card className="overflow-hidden agGrid-card">
        <Row className="m-1">
          <Col>
            <h1 col-sm-6 className="float-left">
              User Asset Data List
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
    ) : (
      <Spinner className="loader" color="primary">
        Loading...
      </Spinner>
    );
  }
}
export default UserAssetData;
