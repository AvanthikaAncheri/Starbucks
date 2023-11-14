import React from 'react'
import './Starbucks2.css'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

function Starbucks1() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light" className='pt-4'>
        <Container>
        <Navbar.Brand href="#home"><img src="/images/starbuckslogo.png" alt="" width={"50px"} height={"50px"} style={{position:"relative",marginLeft:"-20px"}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-item'>MENU</Nav.Link>
            <Nav.Link href="#features" className='nav-item'>REWARDS</Nav.Link>
            <Nav.Link href="#pricing" className='nav-item'>GIFTCARDS</Nav.Link>
          </Nav>
           <Nav className="me-auto" style={{marginLeft:"30vh"}}>
            <Nav.Link href="#home" className='nav-item1'>
                <img src="/images/location.png" alt="" width={"28px"} height={"24px"} style={{position:"relative"}}/>
                <p className='nav-item2'>Find a store</p>
            </Nav.Link>
            <Nav.Link href="#features" className='nav-item'><Button variant="light" className='signin-btn'>Sign in</Button></Nav.Link>
            <Nav.Link href="#pricing" className='nav-item'><Button variant="dark" className='join-now'>Join now</Button></Nav.Link>
          </Nav> 
        </Container>
      </Navbar>
      
      <Container fluid="md" className='container1'>
      <Row className='row1'>
        <Col className='image1'><img src="/images/image1.webp" alt="" width={"100%"} height={"400px"}/></Col>
        <Col className='text1'>
            <h1 className='heading1'>Festivity at your fingertips</h1>
            <p className='para1'>Make the season even brighter when you join Starbucks® Rewards. You’ll save time with easy mobile ordering and earn free favorites.*</p>
            <Button variant="light" className='joinfree-btn'>Join for free</Button>
        </Col>
      </Row>
    </Container>
    <Container fluid="md" className='container2'>
      <Row className='row2'>
        <Col className='text2'style={{marginTop:"20vh"}}>
        <h1 className='heading2'>Let’s celebrate</h1>
            <p className='para2'>Your holi-yay favorites are here. Pick up a Peppermint Mocha, Iced Sugar Cookie Almondmilk Latte or Caramel Brulée Latte.</p>
            <Button variant="light" className='favourite-btn'>Find your Favourite</Button>
        </Col>
        <Col className='image2'><img src="/images/image2.png" alt="" width={"100%"} height={"600px"}/></Col>
      </Row>
    </Container>
    <Container fluid="md" className='container3'>
      <Row className='row1'>
        <Col className='image1'><img src="/images/image3.png" alt="" width={"100%"} height={"600px"}/></Col>
        <Col className='text1' style={{marginTop:"20vh"}}>
            <h1 className='heading2'>Gingerbread meets chai</h1>
            <p className='para2'>Say hello to the festive new Iced Gingerbread Oatmilk Chai. It's the beloved flavor of gingerbread with a twist. Here for a limited time.</p>
            <Button variant="light" className='favourite-btn'>Order now</Button>
        </Col>
      </Row>
    </Container>
    <Container fluid="md" className='container4'>
      <Row className='row2'>
        <Col className='text2'style={{marginTop:"25vh"}}>
        <h1 className='heading2'>Nicely spiced</h1>
            <p className='para2'>Our Gingerbread Loaf with citrusy icing pairs deliciously with coffee.</p>
            <Button variant="light" className='favourite-btn'>order now</Button>
        </Col>
        <Col className='image2'><img src="/images/image4.jpg" alt="" width={"100%"} height={"600px"}/></Col>
      </Row>
    </Container>
    <Container fluid="md" className='container5'>
      <Row className='row1'>
        <Col className='image1'><img src="/images/image5.jpg" alt="" width={"100%"} height={"600px"}/></Col>
        <Col className='text1' style={{marginTop:"20vh"}}>
            <h1 className='heading2'>Brew a cup of magic</h1>
            <p className='para2'>The blends you love are back, including Starbucks® Christmas Blend 2023 with rare aged Sumatra.</p>
            <Button variant="light" className='favourite-btn'>Order now</Button>
        </Col>
      </Row>
    </Container>
    <div className="para4">At participating stores. Some restrictions apply. See https://www.starbucks.com/rewards for details.</div>
    <div className="container6">
    <Container className='container7'>
      <Row className='row6'>
        <Col className='col6'>About Us</Col>
        <Col className='col7'>Our Company</Col>
        <Col className='col7'>Our Coffee</Col>
        <Col className='col7'>Stories and News</Col>
        <Col className='col7'>Starbucks Archieve</Col>
        <Col className='col7'>Invester Relations</Col>
        <Col className='col7'>Customer Service</Col>
        <Col className='col7'>Contact Us</Col>
      </Row>
      <Row className='row6'>
        <Col className='col6'>Careers</Col>
        <Col className='col7'>Culture and Values</Col>
        <Col className='col7'>Inclusion, Diversity, and Equity</Col>
        <Col className='col7'>College Achievement Plan</Col>
        <Col className='col7'>Alumni Community</Col>
        <Col className='col7'>U.S.Careers</Col>
        <Col className='col7'>International Careers</Col>
      </Row>
      <Row className='row6'>
        <Col className='col6'>Social Impact</Col>
        <Col className='col7'>People</Col>
        <Col className='col7'>Planet</Col>
        <Col className='col7'>Environmental and Social Impact Reporting</Col>
      </Row>
      <Row className='row6'>
        <Col className='col6'>For Business Partners</Col>
        <Col className='col7'>Landlord Support Center</Col>
        <Col className='col7'>Suppliers</Col>
        <Col className='col7'>Corporate Gift Card Sales</Col>
        <Col className='col7'>Office and Foodservice Coffee</Col>
      </Row>
      <Row className='row6'>
        <Col className='col6'>Order and Pick Up</Col>
        <Col className='col7'>Order on the App</Col>
        <Col className='col7'>Order on the Web</Col>
        <Col className='col7'>Delivery</Col>
        <Col className='col7'>Order and Pick Up Options</Col>
        <Col>Explore and Find Coffee for Home</Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Starbucks1