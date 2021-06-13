import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import img1 from '../media/work_1.jpg'
import img2 from '../media/work_2.jpg'
import img3 from '../media/work_3.jpg'
import img4 from '../media/work_4.jpg'
import img5 from '../media/work_5.jpg'

const Cards = () => {
    return(
        <>
        <Container className='py-5'> 
            <Row className='py-5'>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img1} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img5} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img4} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img3} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img2} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                <Col md='4'>
                <Card className='border-0 pb-4'>
                    <CardHeader className='p-0 border-0'>
                        <img src={img1} className='w-100 h-100 '></img>
                    </CardHeader>
                    <CardBody>
                    <p className='services_p_title'>Lorem ipsum dolor sit amet</p>
                    <p className='test_p'>July 17, 2019 by <span className='colorr'> Admin</span></p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>

                    </CardBody>
                </Card>
                </Col>
                
                
            </Row>
        </Container>
        </>
    )
}

export default Cards