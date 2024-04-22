// import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { ChevronDown } from 'react-feather';
// import {
//   Col,
//   Row,
//   Card,
//   Input,
 
//   CardBody,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   UncontrolledDropdown,
// } from "reactstrap";

// const ManageDeathCertificate = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//   return (
//     <>
//     <Row className="m-1">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                Manage Death Cirtificate
//               </h1>
//             </Col>
//             <Col className="">
             
//             </Col>
//           </Row>
//           <div>
//           <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                 <div className="d-flex flex-wrap justify-content-between align-items-center">
//                   <div className="mb-1">
//                     <UncontrolledDropdown className="p-1 ag-dropdown">
//                       <DropdownToggle tag="div">
//                        1-10
                    
//                         <ChevronDown className="ml-50" size={15} />
//                       </DropdownToggle>
//                       <DropdownMenu right>
//                         <DropdownItem
//                           tag="div"
                         
//                         >
//                           20
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
                          
//                         >
//                           50
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
                          
//                         >
//                           100
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
                          
//                         >
//                           134
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </div>
//                   <div className="d-flex flex-wrap  mb-1">
//                     <div className="table-input mr-1" >
//                       <Input
//                         className="cssformanageassetinput cssmartopmargin"
//                         placeholder="search..."
                        
//                       />
//                     </div>
                   
                   
//                   </div>
//                 </div>
              
//               </div>
//           </div>
//     <div>
   
//    <Modal show={show} >
//    <Modal.Header style={{justifyContent:'right',display:'flex'}}>
//    <button onClick={handleClose} style={{textDecoration:'none',outline:'none',border:'none'}}>
//    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
// </svg>
//    </button>
//    </Modal.Header>
//    <Modal.Body style={{padding:'2px 2px 2px 2px'}}>
//    <div style={{textAlign:'center',fontSize:'18px'}}>Do you want to delete the Certificate?</div>
//    </Modal.Body>
//    <Modal.Footer>
     
//      <Button variant="success" >
//       Yes
//      </Button>
//      <Button variant="secondary" >
//        No
//      </Button>
//    </Modal.Footer>
//  </Modal>
//    </div>
//    <div >
//   <Table striped bordered hover>
//   <thead>
//     <tr className='cssforfaqtable'>
     
//       <th style={{width:'25%',textAlign:'center'}}>User Name</th>
//       <th style={{width:'25%',textAlign:'center'}}>Phone Number</th>
//       <th style={{width:'25%',textAlign:'center'}}>Action</th>
//       <th style={{width:'25%',textAlign:'center'}}>Phone Number</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr className='cssforfaqtable1'>
     
//       <td className='cssforfaqtablebody' style={{color:'black'}}></td>
//       <td className='cssforfaqtablebody' style={{color:'black'}}></td>
//       <td className='cssforfaqtablebody' style={{textAlign:'center'}}>
//       <div>
     
      
//       <span style={{marginLeft:'10px'}}>
//       <svg xmlns="http://www.w3.org/2000/svg" color='#2966ac' onClick={handleShow} style={{cursor:'pointer'}} width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
// </svg>
//       </span>
//       </div>
//       </td>
//       <td className='cssforfaqtablebody' style={{color:'black'}}></td>
//     </tr>
    
    
//   </tbody>
// </Table>
//   </div>
//     </>
//   )
// }

// export default ManageDeathCertificate


// import React from 'react'
// import Table from 'react-bootstrap/Table';
// import { ChevronDown } from 'react-feather';
// import {
//   Col,
//   Row,
//   Card,
//   Input,
//   Button,
//   CardBody,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   UncontrolledDropdown,
// } from "reactstrap";
// const Duelifedeclaration = () => {
//   return (
//     <>
//     <Row className="m-1">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Due Life Declaration
//               </h1>
//             </Col>
//             <Col className="">
             
//             </Col>
//           </Row>
//           <div>
//           <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                 <div className="d-flex flex-wrap justify-content-between align-items-center">
//                   <div className="mb-1">
//                     <UncontrolledDropdown className="p-1 ag-dropdown">
//                       <DropdownToggle tag="div">
//                        1-10
                    
//                         <ChevronDown className="ml-50" size={15} />
//                       </DropdownToggle>
//                       <DropdownMenu right>
//                         <DropdownItem
//                           tag="div"
                         
//                         >
//                           20
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
                          
//                         >
//                           50
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
                          
//                         >
//                           100
//                         </DropdownItem>
//                         <DropdownItem                                
//                           tag="div"
                          
//                         >
//                           134
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </div>
//                   <div className="d-flex flex-wrap  mb-1">
//                     <div className="table-input mr-1" >
//                       <Input
//                         className="cssformanageassetinput cssmartopmargin"
//                         placeholder="search..."
                        
//                       />
//                     </div>
                   
                   
//                   </div>
//                 </div>
              
//               </div>
//           </div>
//     <div style={{overflow:'auto'}}>
//     <Table striped bordered hover>
//     <thead>
//       <tr className='cssforfaqtable'>
       
//         <th style={{width:"20rem",textAlign:'center',paddingTop:'5rem'}}></th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'5rem'}}></th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'4.5rem'}}></th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'3.7rem'}}>Last life declaration due date offered to Nominee/User</th>
//         <th style={{width:"20rem",textAlign:'center',paddingTop:'3rem'}}>Date of User Status confirmation mail shared with nominee</th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'4rem'}}>Date of Response Received from nominee</th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'4.5rem'}}>Response Received from nominee</th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'3rem'}}>Date of death confirmation received from nominee</th>
//         <th style={{width:"20rem",textAlign:'center'}}>Date of death certificate requesting mail shared with nominee
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'3rem'}}>Date of death certificate received from nominee
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'4.5rem'}}>Death certificate Validation Status  
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'2rem'}}>Date of Validation Status mail shared with nominee
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'2.5rem'}}>Date of asset details shared with nominee
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'2rem'}}>Date of receiving of  asset details receiving confirmation from nominee
//         </th>
//         <th style={{width:'20rem',textAlign:'center',paddingTop:'6rem'}}>Loop Status
//         </th>
//       </tr>
//     </thead>
  
//   </Table>
//     </div>
//     </>
//   )
// }

// export default Duelifedeclaration


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
import { ChevronDown } from "react-feather";
import { ContextLayout } from "../../../utility/context/Layout";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import swal from "sweetalert";
import { BsUpload } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import axios from "axios"
// import ReactHtmlParser from "react-html-parser";
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
        headerName: "S No.",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width:100,
      
        filter: true,
      },
     
      {
        headerName: "Phone Number",
        field: "userId.mobileNo",
        // filter: true,
        width:190,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.mobileNo}</div>;
        },
      },
      {
        headerName: "User Name",
        field: "username",
        
        width:190,
       
        cellRendererFramework: (params) => {
          return <div className="">{params?.data?.userId.firstName}</div>;
        },
      },
      
      {
        headerName: "Death Certificate Validation Status",
        field: "userStatus",
        // filter: true,
        width:350,
       
        cellRendererFramework: (params) => {
          // console.log(params)
          return <div className="">{params?.data?.userStatus}</div>;
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
      {
        headerName: "Policy View",
        field: "PlanType",
        // filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          let url= `https://face-auth.merizimmedari.com/Images/${params?.data?.certificate}`

          debugger
          axios.get(url).then(response => {
    debugger
    const contentType = response.headers.get('Content-Type');

    if (contentType.startsWith('image/')) {
      // Create an image element and append it to the DOM
      const img = document.createElement('img');
      img.src = response.url;
      document.body.appendChild(img);
    } else if (contentType === 'application/pdf') {
      // Display PDF using an embed or iframe
      const embed = document.createElement('embed');
      embed.src = response.url;
      embed.type = 'application/pdf';
      embed.style.width = '100%';
      embed.style.height = '600px';
      document.body.appendChild(embed);
    }
  })
  .catch(error => console.error('Error fetching the file:', error));

          
          // let url= `https://node.rupioo.com/Images/974fb01ea4c1d8aa86d9a9ed45928396`
          return <div className=""><img src={url} alt="image" height={35} width={45}/>
          
          
          
          </div>;
        },
      },
      
      
      {
        headerName: "Actions",
        field: "sortorder",
        width:200,
       
      
        cellRendererFramework: (params) => {
          const downloadImage = () => {
            const imageURL = params?.data?.certificate;
            const link = document.createElement('a');
            link.href =  imageURL;
            link.download = 'image.jpg'; 
            link.click();
        };

        const handleFileUpload = (event) => {
          const file = event.target.files[0];
          if (!file) {
            // swal("Please select a file.");
            return;
          }
        
          const id =params?.data?. _id ;
          const formData = new FormData();
          formData.append('image', file);
          axiosConfig
            .put(`/life-declaration/upload-certificate/${id}`, formData)
            .then((response) => {
            
             console.log(response)
             swal("success","Added Sucessfully","success")
             this.AssetList();
            })
            .catch((error) => {
             swal("error","error Occured","error")

             console.log(error)
            });
        };
    
          return (
            <div className="actions">
            <label className="btn w-25" style={{ cursor: 'pointer' }}>
            <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
            <BsUpload/>
          </label>
            <button type="download" className="btn w-25" onClick={downloadImage}>
            <BsDownload/>
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
                    <div style={{marginRight:'10px'}}>
                    {/*
                    <Route
                    render={({ history }) => (
                      <Button
                        className=" btn  float-right cssmartopmargin"
                        color="primary"
                        onClick={() => history.push("/app/AddAssets")}
                      >
                        Add Assets
                      </Button>
                    )}
                  />
                   */}
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
export default Duelifedeclaration;
