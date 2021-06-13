import { Col, Container, Row,Form, Input, Button,  } from "reactstrap";


const Inputs = () => {
    return (
        <div className=''>
        <Container  className='py-5'>
            <Row  className='py-5'>
                <Col className='' md='8'>
                  <Form>
                      <Container fluid> 
                      <Row>
                      <Col md='6' className='pb-3'> 
                          <Input type='text' placeholder='First Name' className='w-100 input' size='lg'></Input>
                          </Col>
                          <Col md='6' className='pb-3'> 
                          <Input type='text' placeholder='Last Name' className='w-100 input' size='lg'></Input>
                          </Col>
                          <Col md='12' className='pb-3'> 
                          <Input type='text' placeholder='Email Address' className='w-100 input' size='lg'></Input>
                          </Col>
                          <Col md='12' className='pb-3'>
                          <Input type="textarea" placeholder='Write your message' size='lg' cols='30' rows='10'  />
                          
                          </Col>
                          <Col md='6'>
                              <Button className='btn  button_1 w-100 border-0'> Send Message</Button>
                          </Col>
                      </Row>
                          </Container>
                  </Form>
               
                </Col>  
                <Col md='4' className='p-5'>
                    <p className='contact_p'>Contact Info</p>
                    <p>Address:</p>
                    <p className='test_p'>34 Street Name, City Name Here, United States</p>
                    <p>Phone:</p>
                    <p className='test_p'>+1 242 4942 290</p>
                    <p>Email:</p>
                    <p className='test_p'>info@yourdomain.com</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Inputs;