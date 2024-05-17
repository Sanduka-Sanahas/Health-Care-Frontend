import { useState } from 'react';
import { userComments } from '../Scripts/Comment';
import '../style/Review.css'


export default function Review() {
   let userName;
   let userMassage; 
   let userLocation;

   const users = userComments.length-1;
   const [comment,setComment]= useState(0);

   //Back To Previous Comment
   function backBtnClick (){
  
    setComment(comment <= 0 ? users : comment -1);
    handleComments();

   }

   //Next To Comment
   function nextBtnClick(){

    setComment(comment >=  users ? 0 : comment +1);
    handleComments();
   }

   function handleComments(){
    
    const userReview = userComments[comment]
    userName = userReview.name;
    console.log(userReview.name);
    userMassage = userReview.message;
    console.log(userReview.message);
    userLocation = userReview.location;
    console.log(userReview.location);
    

   }

   handleComments()

    return (

        <div>

            <div className="review-section" id='review'>
                <div className="rw-text-content">

                    <p className="rw-text-title" data-aos="fade-left">More Over <span className="rw-text-num">Don't believe us, Check clients word</span></p>
                    <p className="rw-text-format" data-aos="fade-up">
                        <span className="rw-text-quote1">''</span>
                        <span className="rw-review">{userMassage}</span>
                        <span className="rw-text-quote2">''</span>
                    </p>

                    <div className="rw-authors" data-aos="fade-right">
                        <div className="rw-names">
                            <p className="rw-reviewer-name">{userName}</p>
                            <p className="rw-reviewer-place">{userLocation}</p>
                        </div>
                    </div>

                    <div className="rw-btns" data-aos="fade-down">
                        <button className='rw-next-btn' type="button" onClick={backBtnClick}>NN</button>
                        <button className='rw-next-btn' type="button" onClick={nextBtnClick} >BB</button>
                    </div>


                </div>

            </div>

        </div>
    )
}