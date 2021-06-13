import { Col, Container, Row } from "reactstrap";


const Services1 = () => {
    return (
        <Container>
            <Row className='py-5 my-5'>
                <Col className='px-4' md={{size:4}}>
                    <p className='services_icon'><i className='fas fa-briefcase'></i></p>
                    <p className='services_p_title'>Interface Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.</p>
                </Col>
                <Col className='px-3' md={{size:4}}>
                    <p className='services_icon'><i className='fas fa-couch'></i></p>
                    <p className='services_p_title'>Product Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.</p>
                </Col>
                <Col className='px-3' md={{size:4}}>
                    <p className='services_icon'><i className='fas fa-lightbulb'></i></p>
                    <p className='services_p_title'>Quality Results</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Services1;