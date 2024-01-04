
import "./footer.css"
import FooterData from "../footerDataList"
function Footer(){

    const quesdata = ["FAQ","Help Centre","Account","Media Centre","Investor Relations","Jobs","Ways to Watch",
    "Terms of Use","Privacy,Cookie Preferences","Corporate Information","Contact Us","Speed Test",
    "Legal Notices","Only on Netflix"];

    return(
        <div className="data-wrapper">
            <div className="data-ques-container">
                <div className="data-question">
                    <p>Questions? Call 000-800-919-1694</p>
                </div>
            </div>
            <div className="data-ques-list-wrapper">
                {
                    quesdata.map((ques,indx)=>(
                        <FooterData quesData={ques} key={indx} />
                    ))
                }
            </div>
        </div>
    );
};
export default Footer