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
class PolicyList extends React.Component {
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
                      history.push(`/app/policy/ViewPolicy/${params.data._id}`)
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
                      history.push(`/app/policy/EditPolicy/${params.data._id}`)
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
      //   {
      //     headerName: "Descriptions",
      //     field: "desc",
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <span className="">{ReactHtmlParser(params.data.desc)}</span>
      //         </div>
      //       );
      //     },
      //   },
      {
        headerName: "PolicyId",
        field: "PolicyId",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?._id}</div>;
        },
      },
      {
        headerName: "PolicyType",
        field: "PolicyType",
        filter: true,
        width: 130,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyType?.pt_type}</div>;
        },
      },
      {
        headerName: "PolicyName",
        field: "PolicyName",
        width: 140,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyName}</div>;
        },
      },
      {
        headerName: "PolicyNumber",
        field: "PolicyNumber",
        width: 180,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyNum}</div>;
        },
      },

      {
        headerName: "Policy UnderWriter",
        field: "policyUnderWriter",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyUnderWriter}</div>;
        },
      },
      {
        headerName: "Proprietary",
        field: "proprietary",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.proproetary}</div>;
        },
      },
      {
        headerName: "PolicyAdditionalFeatures",
        field: "policyAdditionalFeatures",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyAdtional}</div>;
        },
      },
      {
        headerName: "policyDescription",
        field: "policyDescription",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className=" mt-1">
              {ReactHtmlParser(params?.data?.policyDesc)}
            </div>
          );
        },
      },
      {
        headerName: "paraDescription",
        field: "paraDescription",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className=" mt-1">
              {ReactHtmlParser(params?.data?.paraDesc)}
            </div>
          );
        },
      },
      {
        headerName: "Policy Page",
        field: "policy_page",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyPage}</div>;
        },
      },
      {
        headerName: "policy Document",
        field: "policy_document",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyDocument}</div>;
        },
      },
      {
        headerName: "Policy FAQ",
        field: "policy_FAQ",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.policyFAQ}</div>;
        },
      },
      {
        headerName: "Purchase Link",
        field: "purchase_link",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.purchesLink}</div>;
        },
      },
      {
        headerName: "Plan Image",
        field: "plan_image",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="mainDiv">
              <img
                className="imageSet"
                src={params?.data?.planimg[0]}
                alt="IMG not found"
                width={80}
                height={40}
                style={{ borderRadius: "10px" }}
              />
            </div>
          );
        },
      },
      {
        headerName: "Brochure Link",
        field: "brochure_link",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.brochureLink}</div>;
        },
      },
      {
        headerName: "Purchased",
        field: "purchased",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.purched}</div>;
        },
      },
      {
        headerName: "Renewed",
        field: "renewed",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.renewed}</div>;
        },
      },
      {
        headerName: "PolicyActive",
        field: "policyActive",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.renewed}</div>;
        },
      },
    ],
  };
  componentDidMount() {
    this.AllPolicyList();
  }

  AllPolicyList = () => {
    axiosConfig.get("/admin/get_policies").then((response) => {
      const rowData = response.data.data;
      console.log(rowData);
      if (rowData?.length) {
        this.setState({ rowData });
      }
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
          axiosConfig.delete(`/admin/deltPolicy/${id}`).then((response) => {
            this.AllPolicyList();
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
                Policy List
              </h1>
            </Col>
            <Col className="">
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn  float-right"
                    color="primary"
                    onClick={() => history.push("/app/policy/AddPolicy")}
                  >
                    Add Policy
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
export default PolicyList;
