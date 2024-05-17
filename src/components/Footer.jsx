import '../style/Footer.css'
import Subscribe from './Subscribe'


export default function Footer(){



    return(

        <div>

          <div className="footer-section">

            <div className="footer-container">

             <div className="ft-info">

                <div className="ft-info-p1">

                        <p className="ft-title" data-aos="fade-right">
                            Medicare <span className="ft-sing">+</span>
                        </p>

                        <p className="ft-description" data-aos="fade-left">
                        Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.

                        </p>

                </div>
                        <Subscribe></Subscribe>
             </div>

                <div className="ft-list">

                    <p className="ft-list-title" data-aos="fade-right">Service</p>
                    <ui className="ft-list-items">

                        <li>
                            <a href="#services">Emergency Care</a>
                        </li>

                        <li>
                            <a href="#services">Heart Disease</a>
                        </li>

                        <li>
                            <a href="#services">Dental Care</a>
                        </li>

                        <li>
                            <a href="#services">Prescription</a>
                        </li>

                        <li>
                            <a href="#services">Insights for Doctors</a>
                        </li>

                        <li>
                            <a href="#services">Emergency Care</a>
                        </li>


                    </ui>
                </div>

                <div className="ft-list">

                    <p className="ft-list-title" data-aos="fade-up">Legal</p>
                    <ui className="ft-list-items">

                        <li>
                           
                        </li>

                        <li>
                           
                        </li>

                        <li>
                           
                        </li>

                        <li>
                            
                        </li>

                        <li>
                           
                        </li>

                        <li>
                            
                        </li>


                    </ui>
                </div>



                <div className="ft-list">

                    <p className="ft-list-title" data-aos="fade-left">Talk To Us</p>
                    <ui className="ft-list-items">

                        <li>
                            <a href="#services">support@healthplus.com</a>
                        </li>

                        <li>
                            <a href="#services">appointment@healthplus.com</a>
                        </li>

                        <li>
                            <a href="#services">+022 5454 5252</a>
                        </li>

                        <li>
                            <a href="#services">+022 2326 6232</a>
                        </li>

                        <li>
                            <a href="#services">Insights for Doctors</a>
                        </li>

                        <li>
                            <a href="#services">Emergency Care</a>
                        </li>


                    </ui>
                </div>



            </div>




          </div>




            
        </div>
    )
}