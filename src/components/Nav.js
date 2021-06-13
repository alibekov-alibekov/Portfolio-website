import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"


const NavigationBar = () => {
    return(
       <>
       <Container>
           <Row className='py-3'>
               <Col className='' md='2'>
                    <span className='logo'>monarchy</span>
               </Col>
               <Col md={{size:6 , offset:4}} className='pt-2'>
                   <ul className='list-inline'>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./'>Home</NavLink></li>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./portfolio'>Portfolio</NavLink></li>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./about'>About</NavLink></li>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./services'>Services</NavLink></li>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./blog'>Blog</NavLink></li>
                       <li className='list-inline-item'><NavLink className='nav_item' to='./contact'>Contact</NavLink></li>
                   </ul>
               </Col>
           </Row>
       </Container>
       </>
    )
}

export default NavigationBar;