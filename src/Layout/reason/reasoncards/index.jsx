
import ReasonCardTL from "../reasonCardTL"
import ReasonCardTR from "../reasonCardTR"
import Tv from "../../../assets/enjoyTv.jpeg";
import down from "../../../assets/netflixDownl.jpeg";
import  watch from "../../../assets/watchEve.jpeg";
import child from "../../../assets/child.jpeg";

function ReasonCards(){

    return(
        <div className="Reasoncard-Wrapper">
           <ReasonCardTL headingText="Enjoy on your TV"
            pText="Watch on smart TVs, PlayStation, Xbox,
            Chromecast, Apple TV, Blu-ray players and more." 
            imgSrc={Tv}
            />
           <ReasonCardTR headingText="Download your shows to watch offline"
            pText="Save your favourites easily and always have something to watch"
            imgSrc={down}
           />
           <ReasonCardTL headingText="Watch everywhere"
            pText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            imgSrc={watch}
            />
           <ReasonCardTR headingText="Create profiles for kids"
            pText="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            imgSrc={child}
            />
        </div>
    )
}

export default ReasonCards