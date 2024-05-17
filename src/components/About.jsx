import '../style/About.css'
import Doctor from '../assets/4.jpg'
import Solution from './Solution'

export default function About() {


    return (

        <div>


            <div className="about-section" id="about">

                <div className="about-image-content" data-aos="fade-down-right" >
                    <img src={Doctor} alt="" className='about-image1' />
                </div>



                <div className="about-text-contend">

                    <h3 className="about-title" data-aos="flip-up">
                        <span>About Us</span>
                    </h3>

                    <p className="about-description" data-aos="zoom-in-right"> Welcome to Health Plus, your trusted partner for accessible and
                        personalized healthcare. Our expert doctors offer online consultations
                        and specialized services, prioritizing your well-being. Join us on
                        this journey towards a healthier you.</p>



                    <h4 className="about-text-title">Your Solutions</h4>

                    <div data-aos="fade-left">
                    <Solution title="Choose a Specialist" description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."></Solution>
                    </div>
                    
                    <div data-aos="fade-up">
                    <Solution title="Make a Schedule" description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."></Solution>
                    </div>
                   
                    <div data-aos="fade-right">
                    <Solution title="Get Your Solutions" description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."></Solution>
                    </div>

                   
                    
                    


                </div>



            </div>



        </div>
    )
}