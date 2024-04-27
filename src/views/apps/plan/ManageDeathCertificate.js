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
import { saveAs } from "file-saver";
import { AgGridReact } from "ag-grid-react";
import axiosConfig from "../../../axiosConfig";
import { ChevronDown } from "react-feather";
import { ContextLayout } from "../../../utility/context/Layout";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import { BsUpload } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
class Duelifedeclaration extends React.Component {
  state = {
    rowData: [],
    url: "",
    fileType: null,
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
        headerName: "S No.",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },

      {
        headerName: "Phone Number",
        field: "userId.mobileNo",
        width: 190,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.mobileNo}</div>;
        },
      },
      {
        headerName: "User Name",
        field: "username",
        width: 190,
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.firstName}</div>;
        },
      },

      {
        headerName: "Death Certificate Validation Status",
        field: "userStatus",
        width: 350,

        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userStatus}</div>;
        },
      },

      {
        headerName: "Policy View",
        field: "PolicyView",
        width: 250,
        height: 200,
        cellRendererFramework: (params) => {
          let fileName = params?.data?.certificate;
          let extentionName = fileName?.slice(
            ((fileName?.lastIndexOf(".") - 1) >>> 0) + 2
          );
          if (extentionName === "pdf")
            return (
              <div className="" style={{ width: "100%", textAlign: "center" }}>
                {/* <a href={params.data.certificate} target="_blank">
                  View PDF
                </a> */}
                <embed
                  src={params.data.certificate}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                />
              </div>
            );
          else if (extentionName === "txt") {
            return <pre>{params.data.certificate}</pre>;
          } else if (extentionName === "image") {
            return <img src={params.data.certificate} alt="files" />;
          } else if (extentionName === "" || extentionName === undefined) {
            return <div>No File Attached</div>;
          } else {
            return <>Unknown File</>;
          }
          // let url = `https://face-auth.merizimmedari.com/Images/${params?.data?.certificate}`;
          // let url = params.data.certificate;
          // const file = params.data.certificate;
          // if (file.type === "pdf") {
          //   return (
          //     <a href={file.name} target="_blank">
          //       View PDF
          //     </a>
          //   );
          // } else if (file.type === "txt") {
          //   return (
          //     <a href={file.name} target="_blank">
          //       View Text
          //     </a>
          //   );
          // } else if (file.type.includes("image")) {
          //   return (
          //     <img
          //       src={file.name}
          //       alt="Image"
          //       style={{ width: "100px", height: "100px" }}
          //     />
          //   );
          // } else {
          //   return "Unsupported file type";
          // }
          // fetch(url)
          //   .then((response) => {
          //     const contentType = response.headers.get("content-type");
          //     if (contentType.includes("text/plain")) {
          //       this.setState({ fileType: "text" });
          //     } else if (contentType.includes("image")) {
          //       this.setState({ fileType: "image" });
          //     } else if (contentType.includes("application/pdf")) {
          //       this.setState({ fileType: "pdf" });
          //     } else {
          //       this.setState({ fileType: "unknown" });
          //     }
          //   })
          //   .catch((error) => {
          //     console.error("Error fetching URL:", error);
          //     this.setState({ fileType: "unknown" });
          //   });

          // return (
          //   <div className="">
          //     {this.state.fileType === "text" && (
          //       <p>Render your text component here</p>
          //     )}
          //     {this.state.fileType === "image" && (
          //       <img src={url} alt="Fetched Image" />
          //     )}
          //     {this.state.fileType === "pdf" && (
          //       <embed
          //         src={url}
          //         type="application/pdf"
          //         width="100%"
          //         height="600px"
          //       />
          //     )}
          //     {this.state.fileType === "unknown" && (
          //       <p>File type not supported</p>
          //     )}
          //     {/* <img src={url} alt="image" height={35} width={45} /> */}
          //   </div>
          // );
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        width: 200,
        cellRendererFramework: (params) => {
          const downloadImage = async () => {
            const pdfUrl = params?.data?.certificate;
            // let fileName = params?.data?.certificate;
            // let extentionName = fileName?.slice(
            //   ((fileName?.lastIndexOf(".") - 1) >>> 0) + 2
            // );
            // if (extentionName == "pdf") {
            try {
              const response = await fetch(pdfUrl);

              if (!response.ok) {
                throw new Error("Failed to download PDF");
              }

              const blob = await response.blob();
              saveAs(blob, "downloaded.pdf");
            } catch (error) {
              console.error("Error downloading PDF:", error);
              // Display a user-friendly error message
              alert("Failed to download PDF. Please try again later.");
            }
            // }
            // else if (extentionName == "image") {
            //   if (!pdfUrl) {
            //     console.error("Image URL is not available.");
            //     return;
            //   }
            //   const link = document.createElement("a");
            //   link.href = pdfUrl;
            //   link.download = "image.jpg";
            //   link.click();
            // }
          };

          const handleFileUpload = (event) => {
            const file = event.target.files[0];
            if (!file) {
              return;
            }

            const id = params?.data?._id;
            const formData = new FormData();
            formData.append("image", file);
            axiosConfig
              .put(`/life-declaration/upload-certificate/${id}`, formData)
              .then((response) => {
                console.log(response);
                swal("success", "Added Sucessfully", "success");
                this.AssetList();
              })
              .catch((error) => {
                swal("error", "error Occured", "error");

                console.log(error);
              });
          };

          return (
            <div className="actions">
              <label className="btn w-25" style={{ cursor: "pointer" }}>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
                <BsUpload />
              </label>
              <button
                type="download"
                className="btn w-25"
                onClick={downloadImage}
              >
                <BsDownload />
              </button>
            </div>
          );
        },
      },
    ],
  };
  componentDidMount() {
    this.AssetList();
  }
  AssetList = () => {
    axiosConfig
      .get("/life-declaration/view-user-status")
      .then((response) => {
        const rowData = response.data.User;
        this.setState({ rowData });
        console.log(response.data.User);
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
                Manage Death Cirtificate
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
                    <div style={{ marginRight: "10px" }}></div>
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
