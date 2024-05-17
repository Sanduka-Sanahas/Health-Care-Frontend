
import '../style/Info.css'
import InformationCard from './InformationCard'

export default function Info() {


    return (


        <div className='info-section ' id="services">


            <div className='info-title-content'>

                <h3 className='info-title' data-aos="flip-up">
                    <span>What We Do</span>
                </h3>
                <p className='info-description' data-aos="zoom-in-up">We bring healthcare to your convenience, offering a comprehensive
                    range of on-demand medical services tailored to your needs. Our
                    platform allows you to connect with experienced online doctors who
                    provide expert medical advice, issue online prescriptions, and offer
                    quick refills whenever you require them.</p>
            </div>

            <div className='info-cards-content'>

                <div data-aos="fade-down-right">

                    <InformationCard title="Emergency Care" description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."></InformationCard>

                </div>
                <div  data-aos="zoom-in-up">

                    <InformationCard title="Emergency Care" description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."></InformationCard>

                </div>
                <div  data-aos="fade-down-left">

                    <InformationCard title="Emergency Care" description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."></InformationCard>

                </div>








            </div>


        </div>

    )
}