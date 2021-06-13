import { Col, Container, Row } from "reactstrap";
import person1 from '../media/person_1.jpg';
import person2 from '../media/xperson_2.jpg';
import person3 from '../media/xperson_3.jpg';
import person4 from '../media/xperson_4.jpg';


const Testmonials = () => {
    return (
        <Container>
            <Row className='py-5 my-5'>
               <Col md='12'>
               <p className='p_p text-center'>Testmonials</p>
               </Col>
               
               <Col md='3' className=''>
                   <div  className='test_card_1 justify-content-beetwen p-4'>
                   <div className='test_card'>
                   <div>
                            <p className='test_p_name'>Chad Hawkins</p>
                            <p className='test_p'>Customer</p>
                        </div>
                          
                   <div  className='test_img  p-3'><img src={person1} className='w-75 rounded-circle  align-right'></img></div>
                   </div>
                    

                     <p className='w-100 test_p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!</p>
                   </div>
                  

               </Col>
               <Col md='3'>
                   <div  className='test_card_1 justify-content-beetwen p-4'>
                   <div className='test_card'>
                   <div>
                            <p className='test_p_name'>Ayisha Atherton</p>
                            <p className='test_p'>Customer</p>
                        </div>
                          
                   <div  className='test_img '><img src={person2} className='w-75 rounded-circle  align-right'></img></div>
                   </div>
                    

                     <p className='w-100 test_p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!</p>
                   </div>
                  

               </Col>
               <Col md='3'>
                   <div  className='test_card_1 justify-content-beetwen p-4'>
                   <div className='test_card'>
                   <div>
                            <p className='test_p_name'>Riccardo Gilliam</p>
                            <p className='test_p'>Customer</p>
                        </div>
                          
                   <div  className='test_img '><img src={person3} className='w-75 rounded-circle  align-right'></img></div>
                   </div>
                    

                     <p className='w-100 test_p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!</p>
                   </div>
                  

               </Col>
               <Col md='3'>
                   <div  className='test_card_1 justify-content-beetwen p-4'>
                   <div className='test_card'>
                   <div>
                            <p className='test_p_name'>Jasleen Dunkley</p>
                            <p className='test_p'>Customer</p>
                        </div>
                          
                   <div  className='test_img '><img src={person4} className='w-75 rounded-circle  align-right'></img></div>
                   </div>
                    

                     <p className='w-100 test_p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!</p>
                   </div>
                  

               </Col>
               
            </Row>
        </Container>
    )
}

export default Testmonials;

