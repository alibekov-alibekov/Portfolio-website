import { Col, Container, Row } from "reactstrap";


const WelcomeContent = () => {
    return (
        <div className='header'>
        <Container >
            <Row>
                <Col className='p-5 text-center'>
                    <div className='  header-lorem-div '>
                         <p className='display-2 fw-bolder defaultColor'>Do What You Love</p>
                         <p className='mb-5' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem nulla quos suscipit laborum fugit aspernatur rem pariatur illo. </p>    
                        <span className='playIconSpan mt-5 '><i className='fas fa-play'></i></span>
                      </div>
               
               
                </Col>  
            </Row>
        </Container>
        </div>
    )
}

export default WelcomeContent;