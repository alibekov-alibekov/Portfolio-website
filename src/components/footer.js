import { Col, Container, Row } from "reactstrap"


const Footer = () => {
    return(
       <div className='footer'>
       <Container>
           <Row className='py-5'>
               <Col className='pr-5' md='3'>
               <span className='logo'>monarchy</span>
               <p className='test_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nostrum culpa commodi similique qui, eaque necessitatibus, saepe hic repellat suscipit.</p>
               </Col>
               <Col className='px-5' md='3'>
                   <p className='test_p2'>Contac Us</p>
                   <p className='test_p2'>hello@mydomain.com</p>
                   <p className='test_p2'>+1 829 2293 382</p>
                   <p className='test_p2'>Support</p>
                   
               </Col>
               <Col className='' md='3'>
                   <p className='test_p2'>Home</p>
                   <p className='test_p2'>Blog</p>
                   <p className='test_p2'>Services</p>
                   <p className='test_p2'>About Us</p>
                   
               </Col>
               <Col className='' md='3'>
                   <p className='test_p2'>Home</p>
                   <p className='test_p2'>Blog</p>
                   <p className='test_p2'>Services</p>
                   <p className='test_p2'>About Us</p>
                   
               </Col>
           </Row>
           <Row className='py-5'>
               <Col  className='text-center'>
                   <span className='icons_1'><i className='fab fa-facebook-f'></i></span>
                   <span className='icons_1'><i className='fab fa-twitter'></i></span>
                   <span className='icons_1'><i className='fab fa-linkedin-in'></i></span>
                   <span className='icons_1'><i className='fab fa-instagram'></i></span>
                   <span className='icons_1'><i className='fab fa-skype'></i></span>

               </Col>
           </Row>
           <Row className='py-5'>
               <Col className=' text-center'>
               <p>Copyright ©2021 All rights reserved | This template is made with <span><i className="fas fa-heart text-danger"></i></span>  by <span className='colorr'>Colorlib</span></p>
               </Col>
           </Row>
       </Container>
       </div>
    )
}

export default Footer;