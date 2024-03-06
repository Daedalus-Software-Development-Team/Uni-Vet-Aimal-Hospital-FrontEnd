import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css';

export default function AppAbout(){
    return(
    
            <section id="about" className='block about-block'>
                <Container fluid>
                    <div className='title-about'>
                        <h2>About Us</h2>
                        
                    
                            <p>Best care Animal hospital was established in October
                            2010 aiming to provide better and professional service for</p>
                            <p>all the pet owners.We are equipped with modern
                            technology and professional qualified doctors to offer you a good service.</p>
                        
                     
                            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About Us</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Our Service</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pharmacy</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
                            </ul>
                     
                     </div>
                </Container>
            </section>

    )
}