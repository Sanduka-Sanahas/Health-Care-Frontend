
import '../style/Appointment.css'
import doctor from "../assets/4.jpg"


export default function Appointment() {


    return (
        <div>

            <div className="ba-section" id='appointment' >


                <div className="ba-image-content" data-aos="zoom-in-right">
                    <img src={doctor} alt="" className="ba-image1" />
                </div>

                <div className="ba-text-content">

                    <h3 className="ba-title"  data-aos="flip-up"><span>Why Choose Health</span></h3>

                    <p className="ba-description" data-aos="fade-down">
                        Discover the reasons to choose Health Plus for your healthcare needs.
                        Experience expert care, convenience, and personalized solutions,
                        making your well-being our top priority. Join us on a journey to
                        better health and a happier life.
                    </p>

                    <p className="ba-checks ba-check-first" data-aos="fade-right"> Best Professional Doctors</p>
                    <p className="ba-checks" data-aos="fade-left">Emergency Care</p>
                    <p className="ba-checks" data-aos="fade-right">24/7 Support Live Chat</p>
                    <p className="ba-checks ba-check-last" data-aos="fade-left">Enrollment Easy and Quick</p>
                    <button className="text-appointment-btn" type="button" data-aos="fade-right">Book Appointment</button>

                </div>


            </div>
        </div>
    )
}