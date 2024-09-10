import React from 'react'
import Card from 'react-bootstrap/Card';

function MainCard() {
  return (
    <>
    <Card style={{ width: '18rem' }} className='shadow text-black'>
      <Card.Img variant="top" style={{height:'180px', objectFit:'cover'}} src="https://imgvisuals.com/cdn/shop/products/animated-add-contact-linear-ui-icon-129350.gif?v=1697532237" />
      <Card.Body>
        <Card.Title>Add Contact.</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='shadow text-black'>
      <Card.Img style={{height:'180px', objectFit:'cover'}} variant="top" src="https://i.pinimg.com/originals/43/bf/27/43bf277e2f8620f3ffa874fbaec55a3c.gif" />
      <Card.Body>
        <Card.Title>Update Contact.</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='shadow text-black'>
      <Card.Img style={{height:'180px', objectFit:'cover'}} variant="top" src="https://cdn.dribbble.com/users/592004/screenshots/2953817/___.gif" />
      <Card.Body>
        <Card.Title>Delete Contact.</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='shadow text-black'>
      <Card.Img style={{height:'180px', objectFit:'cover'}} variant="top" src="https://cdn.pixabay.com/animation/2023/06/30/07/29/07-29-43-532_512.gif" />
      <Card.Body>
        <Card.Title>Drag and Drop.</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default MainCard