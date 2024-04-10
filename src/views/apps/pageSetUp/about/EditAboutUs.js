import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
// import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";

import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
export default class EditAboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealer: "",
      desc: "",
      editorState: EditorState.createEmpty(),
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getone_aboutus/${id}`)
      .then((response) => {
        console.log(response.data.data.desc);
        const description = response.data.data.desc;
        const contentState = ContentState.createFromBlockArray(
          convertFromHTML(description)
        );
        // Create EditorState with ContentState
        const editorState = EditorState.createWithContent(contentState);
        this.setState({
          desc: description,
          editorState: editorState,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_aboutus/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/pageSetUp/about/AllaboutUs`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit About Us</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit AboutUs
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/pageSetUp/about/AllaboutUs")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Descripition</Label>
                <Editor
                  toolbarClassName="demo-toolbar-absolute"
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  editorState={this.state.editorState}
                  onEditorStateChange={this.onEditorStateChange}
                  defaultContentState={ReactHtmlParser(this.state.desc)}
                  toolbar={{
                    options: ["inline", "blockType", "fontSize", "fontFamily"],
                    inline: {
                      options: [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "monospace",
                      ],
                      bold: { className: "bordered-option-classname" },
                      italic: { className: "bordered-option-classname" },
                      underline: { className: "bordered-option-classname" },
                      strikethrough: {
                        className: "bordered-option-classname",
                      },
                      code: { className: "bordered-option-classname" },
                    },
                    blockType: {
                      className: "bordered-option-classname",
                    },
                    fontSize: {
                      className: "bordered-option-classname",
                    },
                    fontFamily: {
                      className: "bordered-option-classname",
                    },
                  }}
                />
              </Col>
              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update AboutUs
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import {
//   EditorState,
//   convertFromHTML,
//   ContentState,
//   convertToRaw,
// } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";

// class EditAboutUs extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/admin/getone_aboutus/${id}`)
//       .then((response) => {
//         const contentBlocks = convertFromHTML(response.data.data.desc);
//         if (contentBlocks.contentBlocks !== null) {
//           const contentState = ContentState.createFromBlockArray(
//             contentBlocks.contentBlocks
//           );
//           const editorState = EditorState.createWithContent(contentState);
//           this.setState({
//             editorState,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }

//   onEditorStateChange = (editorState) => {
//     this.setState({ editorState });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     const desc = draftToHtml(
//       convertToRaw(this.state.editorState.getCurrentContent())
//     );
//     axiosConfig
//       .post(`/admin/edit_aboutus/${id}`, { desc })
//       .then((response) => {
//         console.log(response);
//         swal("Success!", "Submitted Successfully!", "success");
//         this.props.history.push(`/app/pageSetUp/about/AllaboutUs`);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   render() {
//     return (
//       <div>
//         {/* Your existing code remains the same */}
//         <Editor
//           editorState={this.state.editorState}
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         {/* Your remaining form and button elements */}
//       </div>
//     );
//   }
// }

// export default EditAboutUs;
