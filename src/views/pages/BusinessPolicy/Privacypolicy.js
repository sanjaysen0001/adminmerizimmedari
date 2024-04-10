import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Input, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
const Privacypolicy = () => {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const history = useHistory();

  const handleSubmit = () => {
    const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const payload = {
      title: title,
      description: desc,
    };
    console.log(payload);
    try {
      let response = axiosConfig.post("/term/save-privacy-policy", payload);
      console.log(response.data);
      history.push("/PrivacyPolicyList");
    } catch (error) {
      console.log(error);
    }
  };
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
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
        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
          <button className="cssforfaqbuttonsetting" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Privacypolicy;
