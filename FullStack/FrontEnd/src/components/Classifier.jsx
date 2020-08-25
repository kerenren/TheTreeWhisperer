import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBtn, setuploadBtn] = useState(true);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setuploadBtn(false);
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    try {
      const analyze_response = await axios
        .post("http://127.0.0.1:5000/analyze_leaf", fd)
        .then((data) => {
          setResponse(data.data.status);
        });
    } catch (error) {
      console.error(error);
    }
  };

  let result;
  if (response === "sick") {
    result = (
      <Container className="result_container d-flex flex-column">
        <Row className="alert alert-danger w-75" role="alert">
          The tree is sick !
        </Row>
        <Row className="h-75">
          <img
            className="h-100 rounded"
            src={"https://media.sciencephoto.com/image/c0419912/800wm"}
          ></img>
        </Row>
      </Container>
    );
  } else if (response === "healthy") {
    result = (
      <Container className="result_container d-flex flex-column">
        <Row className="alert alert-success w-75" role="alert">
          The tree is healthy !
        </Row>
        <Row className="h-75">
          <img
            className="h-100 rounded"
            src={
              "https://webneel.com/daily/sites/default/files/images/daily/06-2016/6-tree-drawing-by-serhii-liakhevych.preview.jpg"
            }
          ></img>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      <Row className="result_row">
        <Col xs={8} className="h-100">
          <Container className="result_container image-div rounded h-100">
            <div className="h-75">
              <img src={img} />
            </div>
            <Row>
              <Col xs={8} className="inputWrapper">
                <input
                  type="file"
                  id="file"
                  onChange={(e) => fileSelectedHandler(e)}
                />
              </Col>
              <Col>
                <button
                  className="btn btn-success"
                  disabled={uploadBtn}
                  type="submit"
                  onClick={() => fileUploadHandler()}
                >
                  Analyze
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={3} className="h-100">
          {result}
        </Col>
      </Row>
    </Container>
  );
};

export default Classifier;
