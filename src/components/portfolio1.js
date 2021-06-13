import { Col, Container, Row } from "reactstrap"
import img1 from '../media/work_1.jpg'
import img2 from '../media/work_2.jpg'
import img3 from '../media/work_3.jpg'
import img4 from '../media/work_4.jpg'
import img5 from '../media/work_5.jpg'

const Portfolio = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md='12'>
                <p className='p_p'>Portfolio</p>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img1} className='w-100 h-100 '></img>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img2} className='w-100 h-100 '></img>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img3} className='w-100 h-100 '></img>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img4} className='w-100 h-100 '></img>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img5} className='w-100 h-100 '></img>
                </Col>
                <Col className='p-3' md='4'>
                <img src={img1} className='w-100 h-100 '></img>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Portfolio