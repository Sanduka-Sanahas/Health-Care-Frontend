import { useNavigate } from 'react-router-dom'
import '../style/Navbar.css'

export default function Navbar() {

const Navigate= useNavigate();

    function gg(){

        console.log("Working");
        // onClick={()=>Navigate("/information")}
    }
   

    return (

        <div >



{/* 
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom col-sm-8 ">

                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                        <span class="fs-4">Simple header</span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                </header>

            </div> */}




            <div className="container  ">
                <div class="row d-flex flex-wrap justify-content-center py-4 mb-4 border-bottom  d-flex flex-row ">

                    <div class="col-4">
                       
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                        <span class="fs-2 main-name">Medicare Center</span>
                    </a>

                    </div>

                    <div class="col-5"> <ul class="nav nav-pills ">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#appointment" class="nav-link" >Appoinment</a></li>
                        <li class="nav-item"><a href="#doctors" class="nav-link">Doctors</a></li>
                        <li class="nav-item"><a href="#services" class="nav-link" >Information</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                       
                    </ul> </div>

                    <div class="col-3 d-flex flex-row-reverse "> <button type="button" class="btn btn-outline-info col-5">Info</button></div>
                    


                   



                </div>

            </div>

        </div>
    )
}