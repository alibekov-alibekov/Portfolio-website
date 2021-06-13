import { Col, Container, Row } from "reactstrap"
import brand1 from '../media/brand1.jpg'
import brand2 from '../media/brand2.jpg'
import brand3 from '../media/brand3.jpg'
import brand4 from '../media/brand4.jpg'


const Brands = () => {
    return(
       <>
       <Container className='py-5'>
           <Row className='py-5'>
               <Col className='' md='3'>
                 <img src={brand1}></img>
               </Col>
               <Col className='' md='3'>
                 <img src={brand2}></img>
               </Col>
               <Col className='' md='3'>
                 <img src={brand3}></img>
               </Col>
               <Col className='' md='3'>
                 <img src={brand4}></img>
               </Col>
           </Row>
       </Container>
       </>
    )
}

export default Brands;