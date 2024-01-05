import "./banner.css"
import Header from "../Header/index.jsx"
import SubscriptionForms from "../../Common/subscriptionsForm/index.jsx"

function Banner(){
    return(
        
        <div className="Hero-banner-wrapper">
            <Header/>
            <div className="banner-content-container">
                <div className="banner-content-wrapper">
                    <h1 className="banner-heading">Laughter. Tears. Thrills. Find it all on Netflix.</h1>  
                    <p className="banner-subheading">Endless entertainment starts at just ₹149. Cancel anytime.</p>
                </div>
                <SubscriptionForms text="Ready to watch? Enter your email to create or restart your membership."/>
            </div>
        </div>
    )
}
export default Banner