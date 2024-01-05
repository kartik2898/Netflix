

import "./reasoncardTr.css"
function ReasonCardTR({headingText,pText,imgSrc}){

    return(

        <div className="reasoncardTR-container-wrapper">
            <div className="ReasoncardTR-Wrapper">
                <div className="reasonR-img-container">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="reason-textR-container">
                    <h2 className="RC-TR-Text-heading">{headingText}</h2>
                    <p className="RC-TR-pText">{pText}</p>
                </div>
            </div>
        </div>
    )
}

export default ReasonCardTR