import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js"; // Import ContentState and convertFromHTML
import draftToHtml from "draftjs-to-html";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axiosConfig from "../../../axiosConfig";
const EditPolicy = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const history = useHistory();
  const param = useParams();

  useEffect(() => {
    console.log(param.id);
    axiosConfig
      .get(`/term/view-privacy-policy-by-id/${param.id}`)
      .then(function (response) {
        const { title, description } = response.data.Privacy;
        setTitle(title);
        setDesc(description);

        // Convert HTML string to ContentState
        const blocksFromHTML = convertFromHTML(description);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );

        // Set the editor state with the converted ContentState
        setEditorState(EditorState.createWithContent(contentState));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSubmit = () => {
    const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const payload = {
      title: title,
      description: desc,
    };
    console.log(payload);
    axiosConfig
      .put(`/term/updated-privacy-policy/${param.id}`, payload)
      .then((response) => {
        console.log(response.data.message);
        history.push("/PrivacyPolicyList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Row className="my-2">
        <Col>
          <Button className="pl-2" color="danger" onClick={handleBack}>
            Back
          </Button>
        </Col>
        <Col>
          <h2>Edit TermsConditions</h2>
        </Col>
      </Row>
      <Label>Enter Title</Label>
      <Input
        type="text"
        style={{ width: "100%" }}
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />

      <br />
      <div
        style={{
          border: "1px solid rgb(201, 198, 198)",
          padding: "20px",
          height: "30rem",
          overflow: "auto",
        }}
      >
        <Editor
          toolbarClassName="demo-toolbar-absolute"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
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
      </div>
      <Container>
        <div style={{ position: "absolute", bottom: "0", right: "5px" }}>
          <button className="cssforfaqbuttonsetting" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </Container>
    </div>
  );
};

export default EditPolicy;
