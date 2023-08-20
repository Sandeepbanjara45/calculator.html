import React, { useState } from 'react'
import './Poster.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Poster = ({imgsrc,title,desc}) => {
const [count,setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
}

  return (
    <>
    <Card style={{ width: '18rem' }} className='center m-4 d-inline-block bg-info text-white zoom'>
      <Card.Img variant="top" src={imgsrc} className='cimage'/>
      <Card.Body>
        <Card.Title className='ti'>{title}</Card.Title>
        <Card.Text className='dec'>
        {desc}
        </Card.Text>
        <Button variant="secondary" onClick={increment}>Buy now {count}</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default Poster;
