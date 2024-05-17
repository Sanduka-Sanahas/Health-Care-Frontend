import '../style/Doctor.css'
import Cart from "./Cart";
import profilePicture from '../assets/4.jpg'



export default function Doctor() {


    return (

        <div>

            <div className="doctor-section" id="doctors" >

                <div className="dt-title-content">

                    <h3 className="dt-title" data-aos="zoom-out-down" >
                        <span>Meet Our Doctors</span>
                    </h3>
                    <p className="dt-description" data-aos="fade-up">
                        Meet our exceptional team of specialist doctors, dedicated to
                        providing top-notch healthcare services at Health Plus. Trust in their
                        knowledge and experience to lead you towards a healthier and happier
                        life.

                    </p>

                </div>

                <div className="dt-cards-content">

                    <div data-aos="zoom-in-right">
                        <Cart img={profilePicture} name="" title="General Surgeons" stars="5.6" review="1000"></Cart>
                    </div>
                    <div data-aos="zoom-out">
                        <Cart img={profilePicture} name="" title="" stars="" review=""></Cart>
                    </div>
                    <div data-aos="zoom-in-left">
                        <Cart img={profilePicture} name="" title="" stars="" review=""></Cart>
                    </div>
                    <div data-aos="zoom-in-up">
                        <Cart img={profilePicture} name="" title="" stars="" review=""></Cart>
                    </div>


                </div>


            </div>


        </div>
    )
}