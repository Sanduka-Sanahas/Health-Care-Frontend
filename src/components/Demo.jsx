
import '../style/Demo.css'


export default function Demo() {

   

    return (

        <div className="section-container">

            <div className="hero-section">

                <div className="text-section">


                    <p className="text-headline" data-aos="fade-up-left" >❤️ Health comes first</p>
                    <h2 className="text-title" data-aos="fade-down-right"> Find your Doctor and make an Appointments </h2>
                    <p className="text-descritpion" data-aos="zoom-in">
                        Talk to online doctors and get medical advice, online prescriptions,
                        refills and medical notes within minutes. On-demand healthcare
                        services at your fingertips.
                    </p>

                    <button className="text-appointment-btn" type="button" data-aos="flip-left" > Book Appointment </button>


                    <div className="text-stats">
                        <div className="text-stats-container"  data-aos="flip-left">
                            <p>145k+</p>
                            <p>Receive Patients</p>
                        </div>

                        <div className="text-stats-container"  data-aos="flip-up">
                            <p>50+</p>
                            <p>Expert Doctors</p>
                        </div>

                        <div className="text-stats-container"  data-aos="flip-right">
                            <p>10+</p>
                            <p>Years of Experience</p>
                        </div>

                    </div>


                </div>

                {/* <div className="hero-image-section">
                    <img src="src/assets/3.jpg" class="d-block w-100" alt="..." />
                </div> */}


                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-aos="fade-down">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="src/assets/1.jpeg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="src/assets/2.jpeg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="src/assets/3.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="src\assets\4.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>



            </div>




        </div>
    )
}