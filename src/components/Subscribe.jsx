


export default function Subscribe(){


    return(

        <div>

                <div className="ft-info-p2">
                    <p className="ft-input-title">Stay Update To Our Newsletter</p>

                    <input type="text" 
                           inputMode="email" 
                           className="ft-input" 
                           placeholder="Enter Your Email Address"
                           name="Email"
                        //    value={userInputEmail}
                           autoComplete="true" />
                    <button className="text-appointment-btn" type="button"  >Subscribe</button>


                </div>

        </div>
    )
}