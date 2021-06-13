import { Col, Container, Row } from "reactstrap";
import img from '../media/about.jpg'


const Who = () => {
    return (
        <div className='py-5'>
        <Container  className='py-5'>
            <Row>
                <Col className='px-5' md='6'>
                    <img src={img} className='w-100'></img>
                    
               
                </Col>  
                <Col className='p-5' md='6'>
                    <p className='logo22'>Who We Are</p>
                    <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia nesciunt quas, laudantium ex rem voluptas quod, distinctio eum tenetur. Placeat, quisquam, consequatur. Quam expedita neque nostrum iusto commodi minima!</p>
                    <p  className='test_p'>Omnis, aspernatur, incidunt cum quo, nisi harum ea earum suscipit delectus explicabo unde saepe commodi modi fugiat nihil sint nam. Ullam, esse totam mollitia molestias ipsum odio aperiam, officiis nesciunt.</p>
                    <div className='my-5'>
                    <span className='icon_22 '><i className='fab fa-facebook-f'></i></span>
                    <span className='icon_2 mx-1'><i className='fab fa-instagram'></i></span>
                    <span className='icon_2 '><i className='fab fa-twitter'></i></span>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Who;