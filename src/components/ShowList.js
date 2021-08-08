import React from 'react';
import {Card,Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const ShowList = ({data,deleteData}) => ( 

    <Card className="bg-dark mt-3 text-white" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Nameeeeeeee: {data.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Last Name: {data.lastName}</Card.Subtitle>
      <Card.Text>
     Date:  {data.date}
      </Card.Text>
    
    </Card.Body>
    <Button onClick={()=>deleteData(data.id)} variant="danger">Delete</Button>
  </Card>

     );

 
     ShowList.propTypes={
        data:PropTypes.object.isRequired,
        deleteData: PropTypes.func.isRequired
      }
export default ShowList;