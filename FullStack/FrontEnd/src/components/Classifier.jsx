import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import healthy from "../images/healthy.png";
import sick from "../images/sick.png";
import Geolocation from "./Geolocation";
import Spinner from "react-bootstrap/Spinner";
import diseaseInformation from "../lib/diseaseInformation.js";

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBtn, setuploadBtn] = useState(true);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);
  const [location, setLocation] = useState({
    lat: 59.334591,
    lng: 18.06324,
  });
  const [spinner, setSpinner] = useState(false);
  const [plantName, setPlantName] = useState(null);
  const [resultString, setResultString] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setuploadBtn(false);
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const fileUploadHandler = async () => {
    setSpinner(true);
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    try {
      const analyze_response = await axios
        .post("http://127.0.0.1:5000/analyze_leaf", fd)
        .then((data) => {
          setSpinner(false);
          setResponse(data.data.status);
          setPlantName(data.data.plant_name);
          setResultString(data.data.result_string);
          if (data.data.geo_info) {
            setLocation(data.data.geo_info);
          } else {
            setLocation({
              lat: 9.081999,
              lng: 8.675277,
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  let result;
  if (response !== "healthy" && response !== null && spinner == false) {
    result = (
      <Container className="result_container d-flex flex-column">
        <Row className="alert alert-danger" role="alert">
          Your {plantName} has disease {response}
        </Row>
        <Row className="h-75">
          <img className="h-50 m-5 rounded" src={sick} alt="sick plant"></img>
        </Row>
      </Container>
    );
  } else if (response === "healthy" && spinner == false) {
    result = (
      <Container className="result_container d-flex flex-column">
        <Row className="alert alert-success" role="alert">
          Your {plantName} plant is healthy !
        </Row>
        <Row className="h-75">
          <img
            className="h-50 m-5 rounded"
            src={healthy}
            alt="healthy plant"
          ></img>
        </Row>
      </Container>
    );
  } else if (spinner == true) {
    result = null;
  }

  return (
    <Container className="mt-3">
      <Row className="result_row">
        <Col xs={8} className="h-100 ">
          <Container className="result_container align-middle d-flex flex-row justify-content-start rounded h-100 w-100">
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
            <div
              className="className align-center pl-3"
              style={{ textAlign: "center", width: "70%" }}
            >
              <img
                className="h-100 pl-3"
                src={img}
                style={{ margin: "0 auto" }}
              />
            </div>
          </Container>
        </Col>
        <Col xs={3} className="h-100">
          {spinner == true ? (
            <Spinner animation="border" variant="success" />
          ) : null}
          {result}
        </Col>
      </Row>
      {diseaseInformation[resultString] && (
        <div>
          <span className="h3 text-white">Disease Description </span>
          <div className="text-white">{diseaseInformation[resultString]}</div>
        </div>
      )}
      {response && <Geolocation location={location} />}
    </Container>
  );
};

export default Classifier;
