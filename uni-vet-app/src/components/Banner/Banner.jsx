import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Banner.css';


export default function AppBanner(){
    return(
        <section id="banner" className='block banner-block'>
            <div class="Container-fluid">
                <div class="row">
                    <div class="col-12">
                    <div className='title-holder'>
                        <h1>WELCOME TO BEST CARE HOSPITAL
                        <br/>Dedicated to Pets and People
                        </h1>

                    <h5>
                        Best Care Animal hospital is dedicated to offer you a quality veterinary service at a reasonable price. 
                        <br/>
                        We are open all 7 days a week between 8.00am to 8.00pm and Poya days (8.00am – 5.00pm) to cater all your pet care needs.
                        <br/>
                        We are capable of vast number of services such as vaccination treatments to surgeries, digital X ray, Pet taxi and Ambulance services. 
                        <br/>
                        We are dedicated to provide the best care for your pet companions throughout their lives.
                        <br/>
                        Please contact us on 011 7 400 800 for all your animal health care needs.
                    </h5>
                    </div>  
                    </div>
                </div>
            
                
            </div>
        </section>
    )
}
