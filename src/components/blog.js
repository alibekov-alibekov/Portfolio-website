import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import img1 from '../media/work_1.jpg'
import img2 from '../media/work_2.jpg'
import img3 from '../media/work_3.jpg'
import person1 from '../media/person_1.jpg';

const Blog = () => {
    return (
        <div className='blog'>
        
        <Container className='py-5'>
            <Row className='py-5'>
               <Col md='6'>
               <p className='blog_p'> Blog Updates</p>
               <p className='test_p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus facere quam eos tempore beatae non eius, provident.</p>
               </Col>
               
               
                  
            </Row>
            <Row>
                <Col md='4'>
                <Card className='border-0'>
                    <CardHeader className='p-0'>
                    <img src={img1} className='w-100'></img>
                    </CardHeader>
                    <CardBody className='card_b p-0'>
                        <span className='card_p'>October 18, 2019</span>
                        <p className='card_p2'>Google saying pseudo-telephoto is more important</p>
                        <div className='d-flex align-items-left'>
                            <div  className='blog_img  p-3 align-start'><img src={person1} className='w-25 rounded-circle  '></img>
                            
                            </div>
                            <div>
                            <span>by John Freeman</span> <br/> 
                            <span>Thinker & Designer</span>
                            </div>
                        </div>
                       

                    </CardBody>
                </Card>
                
                
                </Col>
                <Col md='4'>
                <Card className='border-0 p-0'>
                    <CardHeader className='p-0'>
                    <img src={img2} className='w-100'></img>
                    </CardHeader>
                    <CardBody className='card_b p-0'>
                        <span className='card_p'>October 18, 2019</span>
                        <p className='card_p2'>Google saying pseudo-telephoto is more important</p>
                        <div className='d-flex align-items-left'>
                            <div  className='blog_img  p-3 align-start'><img src={person1} className='w-25 rounded-circle  '></img>
                            
                            </div>
                            <div>
                            <span>by John Freeman</span> <br/> 
                            <span>Thinker & Designer</span>
                            </div>
                        </div>
                       

                    </CardBody>
                </Card>
                
                
                </Col>
                <Col md='4'>
                <Card className='border-0'>
                    <CardHeader  className='p-0'>
                    <img src={img3} className='w-100'></img>
                    </CardHeader>
                    <CardBody className='card_b p-0'>
                        <span className='card_p'>October 18, 2019</span>
                        <p className='card_p2'>Google saying pseudo-telephoto is more important</p>
                        <div className='d-flex align-items-center'>
                            <div  className='blog_img  p-3 align-start'><img src={person1} className='w-25 rounded-circle  '></img>
                            
                            </div>
                            <div>
                            <span>by John Freeman</span> <br/> 
                            <span>Thinker & Designer</span>
                            </div>
                        </div>
                       

                    </CardBody>
                </Card>
                
                
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Blog;