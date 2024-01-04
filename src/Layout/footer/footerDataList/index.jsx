
import "./footerData.css"

function FooterData({quesData}){

    return(
        <div className="data-ques-list-container">
            <ul className="data-ques-list">
                <li className="ques-list">
                    <a href="">{quesData}</a>
                </li>
            </ul>
        </div>
    );
};

export default FooterData