// import picture1 from 'src/assets/1.jpeg'
// import picture2 from 'src/assets/2.jpeg'
// import picture3 from 'src/assets/3.jpg'
// import picture4 from 'src/assets/4.jpg'
import '../style/Hero.css'


export default function Hero() {



    return (

        <div>


            <div className="container background ">

                <div className="row"></div>


                <div className="col-12  d-flex flex-row-reverse ">

                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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



                    <div className="col-6  ">
                        <p className="text-headline">❤️ Health comes first</p>
                        <h1 className="text"> Find your Doctor and make an Appointments</h1>
                        <p className="text-descritpion">
                            Talk to online doctors and get medical advice, online prescriptions,
                            refills and medical notes within minutes. On-demand healthcare
                            services at your fingertips.
                        </p>
                        <button className="btn-hero">See More</button>


                    </div>






                </div>




            </div>





        </div>
    )
}