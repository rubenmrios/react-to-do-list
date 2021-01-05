import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import FormComponent from "./components/FormComponent";
import ShowList from "./components/ShowList";

function App() {
  //datas in localStorage
  let datasInitials = localStorage.getItem('citas');
  if (!datasInitials) {
    datasInitials = [];
  }
  //array data
  const [datas, saveDatas] = useState(datasInitials);

  //useEffect change state localstorage: add/delete
  useEffect( () => {
    if (datasInitials) {
      localStorage.setItem("datas", JSON.stringify(datas));
    } else {
      localStorage.setItem("datas", JSON.stringify([]));
    }
  }, [datas,datasInitials]);

  //funciont new data
  const createData = (data) => {
    //data of component formComponent
    // console.log(data);
    saveDatas([...datas, data]);
  };

  //delete data for id
  const deleteData = (id) => {
    // console.log(id)
    const newDatas = datas.filter((data) => data.id !== id);
    saveDatas(newDatas);
  };

  //Message conditional
  const title = datas.length === 0 ? "Create Data" : "Show List";
  return (
    <Container fluid className="bg-todolist">
      <Row>
        <Col md="6">
          <h2>View Form</h2>
          <FormComponent createData={createData} />
        </Col>
        <Col md="6">
          <h2>{title}</h2>
          {datas.map((data) => (
            <ShowList deleteData={deleteData} key={data.id} data={data} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
