
import "./reasoncardTl.css"

function ReasonCardTL({headingText,pText,imgSrc}){
    return(
        <div className="reasoncardTL-container-wrapper">
            <div className="ReasoncardTL-Wrapper">
                <div className="reason-textL-container">
                    <h2 className="RC-TL-Text-heading">{headingText}</h2>
                    <p className="RC-TL-pText">{pText}</p>
                </div>
                <div className="reasonL-img-container">
                    <img src={imgSrc} alt="" className="reason-img"/>
                </div>
            </div>
        </div>
    )
}

export default ReasonCardTL