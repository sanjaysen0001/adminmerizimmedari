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
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import { saveAs } from "file-saver";
import { AgGridReact } from "ag-grid-react";
import axiosConfig from "../../../axiosConfig";
import { ChevronDown, ChevronLeft } from "react-feather";
import { ContextLayout } from "../../../utility/context/Layout";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import { BsUpload, BsDownload } from "react-icons/bs";

class Duelifedeclaration extends React.Component {
  state = {
    rowData: [],
    url: "",
    modal: false,
    pdfUrl: null,
    pdfView: false,
    switchState: false,
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
        headerName: "Change Death certificate Status",
        field: "DateofResponse",
        width: 350,
        cellRendererFramework: (params) => {
          return (
            <Button
              color="primary"
              onClick={() => this.toggle(params.data._id)}
            >
              Change Status
            </Button>
          );
        },
      },
      {
        headerName: "Death Certificate Validation Status",
        field: "deadCertificateValidationStatus",
        width: 350,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {params?.data?.deadCertificateValidationStatus}
            </div>
          );
        },
      },
      {
        headerName: "PDF View",
        field: "certificate",
        width: 250,
        height: 200,
        cellRendererFramework: (params) => {
          return (
            // <embed
            //   src={
            //     "https://face-auth.merizimmedari.com/Images/" +
            //     params?.data?.certificate
            //   }
            //   type="application/pdf"
            //   width="100%"
            //   height="600px"
            // />

            <Button
              color="primary"
              onClick={() => this.toggleFile(params?.data?.certificate)}
            >
              View PDF
            </Button>
          );
          let fileName = params?.data?.certificate;
          console.log("test", fileName);
          let extentionName = fileName?.slice(
            ((fileName?.lastIndexOf(".") - 1) >>> 0) + 2
          );
          if (extentionName === "pdf")
            return (
              <div className="" style={{ width: "100%", textAlign: "center" }}>
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
        },
      },
      {
        headerName: "Actions",
        // field: "sortorder",
        width: 200,
        cellRendererFramework: (params) => {
          const downloadImage = async () => {
            let url = `https://face-auth.merizimmedari.com/Images/${params?.data?.certificate}`;

            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const blob = await response.blob();

              // Create a temporary anchor element
              const link = document.createElement("a");
              link.href = window.URL.createObjectURL(blob);
              link.download = "downloadedfile.pdf";

              // Append the anchor element to the body
              document.body.appendChild(link);

              // Click the download link programmatically
              link.click();

              // Clean up: remove the anchor element and revoke the object URL
              document.body.removeChild(link);
              window.URL.revokeObjectURL(link.href);
            } catch (error) {
              console.error("Error downloading the PDF", error);
            }
          };

          const handleFileUpload = (event) => {
            const file = event.target.files[0];
            console.log(file);
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
                swal("Success", "Added Successfully", "success");
                this.AssetList();
              })
              .catch((error) => {
                swal("Error", "PDf Not upload", "error");
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

              <a
                href
                type="download"
                className="btn w-25"
                onClick={downloadImage}
              >
                <BsDownload />
              </a>
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    this.AssetList();
  }
  toggle = (id) => {
    this.setState({ uniqueId: id });
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };
  toggleFile = (url) => {
    console.log(url);
    let pdfURL = "https://face-auth.merizimmedari.com/Images/" + url;

    this.setState({
      pdfUrl: pdfURL,
    });
    this.setState((prevState) => ({ pdfView: !prevState.pdfView }));
  };
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
  toggleSwitch = () => {
    const payload = {
      deadCertificateValidationStatus: this.state.validation,
    };
    axiosConfig
      .put(`/life-declaration/update-status/${this.state.uniqueId}`, payload)
      .then((response) => {
        swal("Validation Successfully");
        this.toggle();
      })
      .catch((err) => {
        swal("Validation did not change");
        console.log(err);
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
                Manage Death Certificate
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
                  <div className="d-flex flex-wrap mb-1">
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Change Death Certificate Status
          </ModalHeader>
          <ModalBody>
            <Col lg="12" md="12" sm="12" className="mb-2">
              <Label>Verify Death Certificate</Label>
              <CustomInput
                type="select"
                name="validation"
                value={this.state.validation}
                onChange={(e) => {
                  this.setState({ validation: e.target.value });
                }}
              >
                <option value="">Select Status </option>
                <option value="Valid">Valid</option>
                <option value="Invalid">Invalid</option>
              </CustomInput>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleSwitch}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.pdfView} toggle={this.toggleFile}>
          <ModalHeader toggle={this.toggleFile}>
            Change Death Certificate Status
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col lg="12" md="12" sm="12" className="mb-2">
                <Label>View Death Certificate</Label>
                {this.state.pdfUrl && (
                  <embed
                    src={this.state.pdfUrl}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  />
                )}
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Duelifedeclaration;
