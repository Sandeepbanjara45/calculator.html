import Card from 'react-bootstrap/Card';
import "./App";
import "./App.css";

function CardComp({imgsrc}) {

  return (
    <>
    
    <Card style={{ width:'20rem' }} className='d-inline-block m-2 ms-3 zoom'>
      <Card.Img variant="top" src={imgsrc} className='imgc'/>
    </Card>
    </>
  );
}

export default CardComp;