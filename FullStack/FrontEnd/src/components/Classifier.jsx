import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import healthy from "../images/healthy.png";
import sick from "../images/sick.png";

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
        <Row className="alert alert-danger" role="alert">
          The tree is sick !
        </Row>
        <Row className="h-75">
          <img className="h-100 rounded" src={sick} alt="sick plant"></img>
        </Row>
      </Container>
    );
  } else if (response === "healthy") {
    result = (
      <Container className="result_container d-flex flex-column">
        <Row className="alert alert-success" role="alert">
          The tree is healthy !
        </Row>
        <Row className="h-75">
          <img
            className="h-100 rounded"
            src={healthy}
            alt="healthy plant"
          ></img>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      <Row className="result_row">
        <Col xs={8} className="h-100 ">
          <Container className="result_container align-middle d-flex flex-row justify-content-start rounded h-100">
            <div className="d-flex flex-column justify-content-strat w-25">
              <input
                className="align-items-center align-self-strat"
                type="file"
                id="file"
                onChange={(e) => fileSelectedHandler(e)}
                title=" "
              />

              <div className="align-items-center align-self-strat">
                <button
                  className="analyze-btn"
                  disabled={uploadBtn}
                  type="submit"
                  onClick={() => fileUploadHandler()}
                >
                  Analyze
                </button>
              </div>
            </div>
            <div className="className align-left pl-3">
              <img className="h-100 pl-3" src={img} />
            </div>
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
