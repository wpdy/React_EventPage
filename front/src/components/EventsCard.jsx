import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';

import eventsService from '../services/EventService';

import NewEvent from './NewEvent';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const EventsCard = () => {
  const [events, setEvents] = useState([]);

  const getData = ()=> {
    eventsService.getEvents().then(res=>{
      setEvents([...res.data]);
    });
  }
  useEffect(()=>{
    getData();
  }, []);

// console.log(events);

  return (
    <div>
      <Container className='mb-5'>
        <h1 className='text-center my-3'>Post Event</h1>
        <NewEvent getData={getData}/>
      </Container>

      <h1 className='text-center my-3'>Events</h1>
      
      <Container className='d-flex flex-wrap gap-5'>
        {events.length > 0 ? (
          events.map((event, index)=> (
            <Card style={{ width: '18rem' }} className='mb-5'>
              <Card.Img variant="top" src={event.img} alt="No picture found"/>
              <Card.Body>
                <Card.Title>Title: {event.title}</Card.Title>
                <Card.Text>Description: {event.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Starting Date: {event.starting_date}</ListGroup.Item>
                <ListGroup.Item>Price: {event.price}$</ListGroup.Item>
              </ListGroup>
            </Card>))
        ) : (<h3 className='text-center my-3'>You have not Events</h3>)}
      </Container>
    </div>
  )
}

export default EventsCard
