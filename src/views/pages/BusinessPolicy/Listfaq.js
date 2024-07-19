import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactHtmlParser from "react-html-parser";
import axiosConfig from "../../../axiosConfig";
import { Col, Row } from "reactstrap";
const Listfaq = () => {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listData, setListData] = useState([]);
  const [listAllData, setListALLData] = useState([]);
  const [id, setID] = useState("");
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setID(item);
    setShow(true);
  };

  useEffect(() => {
    termsList();
  }, []);
  const termsList = () => {
    axiosConfig
      .get("/term/view-faq")
      .then(function (response) {
        setListData(response.data.FAQ);
        setListALLData(response.data.FAQ);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchQuery(value);
    let filteredData;
    if (value?.length > 0) {
      filteredData = listData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    console.log(filteredData);
    if (filteredData?.length > 0) {
      setListData(filteredData);
    } else if (value?.length == 0) {
      setListData(listAllData);
    }
  };

  const handleDelete = () => {
    axiosConfig
      .delete(`/term/delete-faq/${id}`)
      .then(function (response) {
        termsList();
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = () => {
    history.push("/AddFaq");
  };
  const handleEdit = (id) => {
    history.push(`/Editfaq/${id}`);
  };
  return (
    <>
      <div>
        <Modal show={show}>
          <Modal.Header style={{ justifyContent: "right", display: "flex" }}>
            <button
              onClick={handleClose}
              style={{
                textDecoration: "none",
                outline: "none",
                border: "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </Modal.Header>
          <Modal.Body style={{ padding: "2px 2px 2px 2px" }}>
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              Do you want to delete the FAQ?
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleDelete}>
              Yes
            </Button>
            <Button variant="secondary">No</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Row className="my-2">
          <Col>
            <input
              className="borderradiuscssforsearch"
              type="text"
              placeholder="Search.."
              value={searchQuery}
              name="search"
              onChange={handleSearch}
            />
          </Col>
          <Col>
            <Button className="" style={{ float: "right" }} onClick={handleAdd}>
              Add FAQ
            </Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr className="cssforfaqtable">
              <th style={{ width: "40%", textAlign: "center" }}>Title</th>
              <th style={{ width: "40%", textAlign: "center" }}>Descption</th>
              <th style={{ width: "20%", textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listData &&
              listData?.map((ele, index) => (
                <tr className="cssforfaqtable1" key={index}>
                  <td
                    className="cssforfaqtablebody"
                    style={{ color: "black", textAlign: "center" }}
                  >
                    {ele?.title}
                  </td>
                  <td
                    className="cssforfaqtablebody"
                    style={{ color: "black", textAlign: "center" }}
                  >
                    {ReactHtmlParser(ele?.description)}
                  </td>
                  <td
                    className="cssforfaqtablebody"
                    style={{ textAlign: "center" }}
                  >
                    <div>
                      <span style={{ marginLeft: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#2966ac"
                          style={{ cursor: "pointer" }}
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                          onClick={() => handleEdit(ele._id)}
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                        {/* </Link> */}
                      </span>
                      <span style={{ marginLeft: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#2966ac"
                          onClick={() => handleShow(ele._id)}
                          style={{ cursor: "pointer" }}
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Listfaq;
