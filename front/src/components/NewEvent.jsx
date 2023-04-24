import React, { useState } from 'react';
import eventsService from '../services/EventService';
import { Form, Button } from 'react-bootstrap';


const NewEvent = ({getData}) => {

    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [starting_date, setStarting_date] = useState("");
    const [price, setPrice] = useState("");


    const onSubmit = e =>{
        e.preventDefault();

        if (title === "" || description === "" || img === "" || price === "" || starting_date === '') {
          alert("please fill all fields");
          return;
        }

        const newEvent = {
          img: img,
          title: title,
          description: description,
          starting_date: starting_date,
          price: price,
        }
        eventsService.postEvents(newEvent);
       
        setImg('')
        setTitle('')
        setDescription('')
        setStarting_date('')
        setPrice('')
        getData();
    }
  return (
    <div>
       <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3 w-100">
                <Form.Label className='h1'>Image Link</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter Image"
                            id='img'
                            name='img'
                            value={img} 
                            onChange={(e)=> setImg(e.target.value)}
                            />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
                <Form.Label className='h1'>Event Title</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter Title"
                            id='title'
                            name='title'
                            value={title} 
                            onChange={(e)=> setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 w-100">
                <Form.Label className='h1'>Description</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter Description"
                            id='description'
                            name='description'
                            value={description} 
                            onChange={(e)=> setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 w-100">
                <Form.Label className='h1'>Starting Date</Form.Label>
                <Form.Control type="number"
                            placeholder="Enter Starting Date"
                            id='starting_date'
                            name='starting_date'
                            value={starting_date} 
                            onChange={(e)=> setStarting_date(e.target.value)}/>
                            
                
            </Form.Group>

            <Form.Group className="mb-3 w-100">
                <Form.Label className='h1'>Price</Form.Label>
                <Form.Control type="number"
                            placeholder="Enter price"
                            id='price'
                            name='price'
                            value={price}
                            onChange={(e)=> setPrice(e.target.value)} />
            </Form.Group>           

            <Button variant="outline-info" type="submit" className='w-25'>
                Post
            </Button>
        </Form>
    </div>
  )
}

export default NewEvent